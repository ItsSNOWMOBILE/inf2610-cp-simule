(() => {
  'use strict';
  const quiz = window.QUIZ;
  const KEY = 'inf2610-cp-simule-v1';
  const pages = [[1,8],[9,14],[15,19],[20,20]];
  const $ = id => document.getElementById(id);
  const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fresh = () => ({answers:{},flags:[],checked:[],page:0,graded:false,deadline:null,expired:false});
  let state = fresh(), storageWorks = true, all = false;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY)||'null');
    if(saved && saved.answers && typeof saved.answers==='object' && !Array.isArray(saved.answers)) {
      state = {...fresh(),...saved};
      state.flags = Array.isArray(saved.flags)?saved.flags.filter(n=>Number.isInteger(n)&&n>=1&&n<=20):[];
      state.checked = Array.isArray(saved.checked)?saved.checked.filter(n=>Number.isInteger(n)&&n>=1&&n<=20):[];
      state.page = Number.isInteger(saved.page)&&saved.page>=0&&saved.page<4?saved.page:0;
      state.deadline = typeof saved.deadline==='number'&&Number.isFinite(saved.deadline)?saved.deadline:null;
    }
  } catch { storageWorks = false; }
  const notes = {
    8:'La réponse du corrigé suppose que les octets encore présents dans le pipe ont déjà été lus : EOF arrive lorsque le pipe est vide et que tous les écrivains sont fermés.',
    9:'Les menus Moodle affichent « ¬_full » et « ¬_empty », à cause du rendu HTML de &not. Ici, ces fragments sont affichés &not_full et &not_empty. Le sens des choix et le corrigé sont conservés.',
    11:'Corrigé Moodle conservé. La proposition « count > N » n’y figure pas, alors que le if peut permettre un dépassement après un réveil spurieux ou une concurrence entre producteurs.',
    12:'Corrigé Moodle conservé. Le code proposé ne constitue pas une barrière réutilisable correcte : le dernier thread remet arrived à zéro avant que les autres ne revalident leur boucle. Il faut notamment distinguer les générations de la barrière.',
    15:'Le corrigé Moodle attend 14 tokens (2 + 4 + 8 appels de printf). Avec stdout tamponné, les caractères non vidés avant fork peuvent être dupliqués : le nombre de tokens effectivement affichés dépend de cette hypothèse.',
    20:'Corrigé Moodle conservé. Certains choix du code source omettent un point-virgule. Pour un arrêt général correct, q_close doit aussi réveiller les producteurs sur not_full, et q_push doit revérifier closed après son attente avant d’insérer.'
  };
  const controlsFor = q => q.fields.flatMap(f=>f.type==='checkboxes'?f.options.map((_,i)=>`q${q.number}-c${i}`):[f.id]);
  const answered = (q,f) => f.type==='checkboxes'?controlsFor(q).some(id=>state.answers[id]===true):typeof state.answers[f.id]==='string'&&state.answers[f.id].trim()!=='';
  const correct = (q,f) => f.type==='checkboxes'?controlsFor(q).every(id=>(state.answers[id]===true)===f.correct.includes(id)):String(state.answers[f.id]??'').trim().toLocaleLowerCase('fr')===String(f.correct).trim().toLocaleLowerCase('fr');
  const score = q => q.fields.reduce((sum,f)=>sum+(correct(q,f)?q.points/q.fields.length:0),0);
  const total = () => quiz.reduce((sum,q)=>sum+score(q),0);
  const fmt = n => n.toLocaleString('fr-CA',{maximumFractionDigits:2});
  const isComplete = q => q.fields.every(f=>answered(q,f));
  function save(){
    try{localStorage.setItem(KEY,JSON.stringify(state));}
    catch{storageWorks=false;}
    $('save-status').textContent = storageWorks?'Votre progression est enregistrée sur cet appareil.':'Enregistrement indisponible : gardez cette page ouverte pour conserver votre tentative.';
  }
  function updateProgress(){
    const count = quiz.reduce((sum,q)=>sum+q.fields.filter(f=>answered(q,f)).length,0);
    $('progress-text').textContent = `${count} / 54 réponses`;
    $('progress').value = count;
    const nav = $('question-nav');
    nav.innerHTML=quiz.map(q=>{
      const classes=[isComplete(q)?'answered':'',state.flags.includes(q.number)?'flagged':'',state.checked.includes(q.number)?(score(q)===q.points?'correct':'incorrect'):'',!all&&q.number>=pages[state.page][0]&&q.number<=pages[state.page][1]?'current':''].filter(Boolean).join(' ');
      return `<a href="#question-${q.number}" data-q="${q.number}" class="${classes}" aria-label="Question ${q.number}${isComplete(q)?', répondue':''}${state.flags.includes(q.number)?', à revoir':''}"${!all&&q.number>=pages[state.page][0]&&q.number<=pages[state.page][1]?' aria-current="page"':''}>${q.number}</a>`;
    }).join('');
    for(const q of quiz){
      const status=$(`status-${q.number}`);
      if(status) status.textContent=state.checked.includes(q.number)?`${fmt(score(q))} / ${fmt(q.points)} point${q.points>1?'s':''}`:isComplete(q)?'Répondue':q.fields.some(f=>answered(q,f))?'En cours':'Pas encore répondu';
    }
    $('review-flags').textContent=`Voir les questions marquées (${state.flags.length})`;
  }
  function feedback(q){
    const box=$(`feedback-${q.number}`), checked=state.checked.includes(q.number);
    box.hidden=!checked;
    if(!checked)return;
    box.className='outcome clearfix practice-feedback'+(score(q)<q.points?' partial':'');
    const answers=q.fields.map((f,i)=>`<li>${q.fields.length>1?`Réponse ${i+1} : `:''}${f.type==='checkboxes'?f.answer.map(esc).join(' ; '):esc(f.answer)}</li>`).join('');
    box.innerHTML=`<h3>${score(q)===q.points?'✓ Correct':'À revoir'} · ${fmt(score(q))} / ${fmt(q.points)} point${q.points>1?'s':''}</h3><details${score(q)<q.points?' open':''}><summary>Corrigé Moodle</summary><ul>${answers}</ul>${q.feedback?`<p>${esc(q.feedback)}</p>`:''}</details>${notes[q.number]?`<details><summary>Note sur la question source</summary><p>${esc(notes[q.number])}</p></details>`:''}`;
  }
  function decorate(q){
    const article=$(`question-${q.number}`);
    article.querySelectorAll('.field-mark').forEach(e=>e.remove());
    article.querySelectorAll('.field-ok,.field-wrong').forEach(e=>e.classList.remove('field-ok','field-wrong'));
    if(state.checked.includes(q.number))for(const f of q.fields){
      if(f.type==='checkboxes')continue;
      const input=$(f.id), ok=correct(q,f);
      input.classList.add(ok?'field-ok':'field-wrong');
      const marker=document.createElement('span'); marker.className='field-mark'+(ok?'':' wrong');
      marker.textContent=ok?'✓ Correct':'✕ À revoir'; input.after(marker);
    }
    feedback(q);
  }
  function render(){
    const [from,to]=all?[1,20]:pages[state.page];
    $('page-heading').textContent=all?'Toutes les questions':`Page ${state.page+1} sur 4 · Questions ${from}${to===from?'':` à ${to}`}`;
    $('questions').innerHTML=quiz.filter(q=>q.number>=from&&q.number<=to).map(q=>`<article id="question-${q.number}" class="que multianswer deferredfeedback question" aria-labelledby="title-${q.number}"><div class="info question-info"><h3 class="no" id="title-${q.number}">Question <span class="qno">${q.number}</span></h3><span class="question-state" id="status-${q.number}"></span><span>Noté sur ${fmt(q.points)}</span><button class="flag" data-flag="${q.number}" aria-pressed="${state.flags.includes(q.number)}" aria-label="Marquer la question ${q.number} pour référence"><span class="flag-symbol" aria-hidden="true">⚑</span> Marquer la question</button></div><div class="content"><div class="formulation clearfix question-body">${q.html}<button class="btn btn-secondary verify" data-check="${q.number}">Vérifier cette question</button></div><div class="outcome clearfix practice-feedback" id="feedback-${q.number}" hidden></div></div></article>`).join('');
    for(const q of quiz.filter(q=>q.number>=from&&q.number<=to)){
      for(const id of controlsFor(q)){
        const control=$(id);
        if(control.type==='checkbox')control.checked=state.answers[id]===true;
        else control.value=typeof state.answers[id]==='string'?state.answers[id]:'';
      }
      decorate(q);
    }
    $('prev').disabled=state.page===0||all;
    $('next').hidden=state.page===3||all;
    $('page-count').textContent=all?'20 questions':`${state.page+1} / 4`;
    $('show-all').textContent=all?'Revenir aux 4 pages':'Afficher toutes les questions';
    $('timed').checked=!!state.deadline;
    $('timed').disabled=state.graded;
    updateProgress(); renderResult(); tick(); save();
  }
  function renderResult(){
    $('result').hidden=!state.graded;
    if(!state.graded)return;
    const got=total(), complete=quiz.filter(isComplete).length;
    $('result').innerHTML=`<h2>${state.expired?'Temps écoulé · ':''}Résultat : <span class="score">${fmt(got)} / 54</span></h2><p>${fmt(100*got/54)} % · ${complete} / 20 questions complètes.</p><p>Le corrigé est maintenant disponible sous chaque question. Modifiez une réponse pour poursuivre l’entraînement.</p><a href="#question-1" data-q="1">Revoir mes réponses →</a>`;
  }
  function navigate(n){
    if(!all)state.page=pages.findIndex(([a,b])=>n>=a&&n<=b);
    render();
    const dest=$(`question-${n}`); dest.scrollIntoView({block:'start'});dest.querySelector('.no').tabIndex=-1;dest.querySelector('.no').focus({preventScroll:true});
  }
  function grade(expired=false){
    state.graded=true;state.expired=expired;state.checked=quiz.map(q=>q.number);render();$('result').focus();$('result').scrollIntoView({block:'start'});
  }
  function tick(){
    $('timer').hidden=!state.deadline;
    if(!state.deadline)return;
    const seconds=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));
    $('timer').textContent=`${Math.floor(seconds/3600)}:${String(Math.floor(seconds/60)%60).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
    $('timer').classList.toggle('urgent',seconds<600);
    if(seconds===0&&!state.graded&&!state.expired)grade(true);
  }
  $('questions').addEventListener('input',e=>{
    const control=e.target;if(!control.matches('input,select'))return;
    state.answers[control.id]=control.type==='checkbox'?control.checked:control.value;
    const number=Number(control.closest('.question').id.split('-')[1]);
    state.checked=state.checked.filter(n=>n!==number);state.graded=false;
    $('timed').disabled=false;
    decorate(quiz[number-1]);renderResult();updateProgress();save();
  });
  $('questions').addEventListener('click',e=>{
    const flag=e.target.closest('[data-flag]'),check=e.target.closest('[data-check]');
    if(flag){const n=Number(flag.dataset.flag);state.flags=state.flags.includes(n)?state.flags.filter(x=>x!==n):[...state.flags,n];flag.setAttribute('aria-pressed',String(state.flags.includes(n)));updateProgress();save();}
    if(check){const n=Number(check.dataset.check);if(!state.checked.includes(n))state.checked.push(n);decorate(quiz[n-1]);updateProgress();save();}
  });
  document.addEventListener('click',e=>{const link=e.target.closest('a[data-q]');if(link){e.preventDefault();navigate(Number(link.dataset.q));}});
  $('prev').onclick=()=>{state.page--;render();$('page-heading').focus();};
  $('next').onclick=()=>{state.page++;render();$('page-heading').focus();};
  $('show-all').onclick=()=>{all=!all;render();$('page-heading').focus();};
  $('review-flags').onclick=()=>{if(state.flags.length)navigate([...state.flags].sort((a,b)=>a-b)[0]);else $('nav-status').textContent='Aucune question marquée. Utilisez le drapeau « À revoir » dans une question.';};
  $('grade').onclick=()=>grade(false);
  $('timed').onchange=()=>{state.deadline=$('timed').checked?Date.now()+7200000:null;state.expired=false;tick();save();};
  $('restart').onclick=()=>$('reset-dialog').showModal();
  $('cancel-reset').onclick=()=>$('reset-dialog').close();
  $('confirm-reset').onclick=()=>{state=fresh();all=false;$('reset-dialog').close();render();$('page-heading').focus();};
  $('toggle-navigation').onclick=()=>{const nav=$('quiz-navigation');nav.hidden=!nav.hidden;document.querySelector('.layout').classList.toggle('navigation-hidden',nav.hidden);$('toggle-navigation').setAttribute('aria-expanded',String(!nav.hidden));};
  render();setInterval(tick,1000);
})();
