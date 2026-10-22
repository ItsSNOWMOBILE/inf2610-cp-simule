window.QUIZ = [
  {
    "number": 1,
    "points": 1.0,
    "html": "<p><strong>Cochez uniquement les appels système (POSIX) :</strong></p>\n<p>\n</p><div class=\"answer\"><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q1-c0\" name=\"q1-c0\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q1-c0\">printf</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q1-c1\" name=\"q1-c1\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q1-c1\">fork</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q1-c2\" name=\"q1-c2\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q1-c2\">malloc</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q1-c3\" name=\"q1-c3\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q1-c3\">execve</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q1-c4\" name=\"q1-c4\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q1-c4\">waitpid</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q1-c5\" name=\"q1-c5\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q1-c5\">pthread_create</label></div></div>\n<p></p>",
    "fields": [
      {
        "type": "checkboxes",
        "correct": [
          "q1-c1",
          "q1-c3",
          "q1-c4"
        ],
        "options": [
          "printf",
          "fork",
          "malloc",
          "execve",
          "waitpid",
          "pthread_create"
        ],
        "answer": [
          "fork",
          "execve",
          "waitpid"
        ]
      }
    ],
    "feedback": "Rappel : fork/execve/waitpid sont des appels système (ou enveloppes directes). printf/malloc/pthread_create sont des fonctions de bibliothèque."
  },
  {
    "number": 2,
    "points": 1.0,
    "html": "<p><strong>Dans le modèle à 5 états (Nouveau, Prêt, Exécution, Bloqué, Terminé), combien d’états correspondent à un processus <em>non exécutable immédiatement sur CPU</em> ?</strong></p>\n<p>Réponse : <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q2-a1\">Réponse 1 Question 2</label><input autocomplete=\"off\" class=\"form-control d-inline mb-1\" id=\"q2-a1\" name=\"q2-a1\" size=\"1\" type=\"text\"/></span></p>",
    "fields": [
      {
        "id": "q2-a1",
        "type": "text",
        "correct": "3",
        "answer": "3",
        "options": []
      }
    ],
    "feedback": ""
  },
  {
    "number": 3,
    "points": 1.0,
    "html": "<p><strong>Un processus <em>zombie</em> est :</strong></p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q3-a1\">Réponse 1 Question 3</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q3-a1\" name=\"q3-a1\"><option value=\"\">Choisir…</option><option value=\"0\">un processus sans père, adopté par init/systemd</option><option value=\"1\">un processus terminé dont l’entrée reste dans la table des processus car le père n’a pas fait wait</option><option value=\"2\">un processus bloqué sur une E/S</option><option value=\"3\">un processus qui tourne en arrière-plan</option></select></span></p>",
    "fields": [
      {
        "id": "q3-a1",
        "type": "select",
        "correct": "1",
        "answer": "un processus terminé dont l’entrée reste dans la table des processus car le père n’a pas fait wait",
        "options": [
          "un processus sans père, adopté par init/systemd",
          "un processus terminé dont l’entrée reste dans la table des processus car le père n’a pas fait wait",
          "un processus bloqué sur une E/S",
          "un processus qui tourne en arrière-plan"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 4,
    "points": 3.0,
    "html": "<p><strong>Associez chaque appel à son rôle principal :</strong></p>\n<ul>\n<li><code>fork()</code> : <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q4-a1\">Réponse 1 Question 4</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q4-a1\" name=\"q4-a1\"><option value=\"\">Choisir…</option><option value=\"0\">termine le processus</option><option value=\"1\">duplique le processus appelant</option><option value=\"2\">remplace l’image mémoire du processus</option><option value=\"3\">crée un thread</option></select></span></li>\n<li><code>exec*()</code> : <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q4-a2\">Réponse 2 Question 4</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q4-a2\" name=\"q4-a2\"><option value=\"\">Choisir…</option><option value=\"0\">duplique le processus appelant</option><option value=\"1\">remplace l’image mémoire du processus par un autre programme</option><option value=\"2\">attend un fils</option><option value=\"3\">alloue de la mémoire</option></select></span></li>\n<li><code>waitpid()</code> : <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q4-a3\">Réponse 3 Question 4</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q4-a3\" name=\"q4-a3\"><option value=\"\">Choisir…</option><option value=\"0\">remplace le programme</option><option value=\"1\">duplique le processus</option><option value=\"2\">récupère le code retour d’un fils et libère son entrée</option><option value=\"3\">réveille un thread</option></select></span></li>\n</ul>",
    "fields": [
      {
        "id": "q4-a1",
        "type": "select",
        "correct": "1",
        "answer": "duplique le processus appelant",
        "options": [
          "termine le processus",
          "duplique le processus appelant",
          "remplace l’image mémoire du processus",
          "crée un thread"
        ]
      },
      {
        "id": "q4-a2",
        "type": "select",
        "correct": "1",
        "answer": "remplace l’image mémoire du processus par un autre programme",
        "options": [
          "duplique le processus appelant",
          "remplace l’image mémoire du processus par un autre programme",
          "attend un fils",
          "alloue de la mémoire"
        ]
      },
      {
        "id": "q4-a3",
        "type": "select",
        "correct": "2",
        "answer": "récupère le code retour d’un fils et libère son entrée",
        "options": [
          "remplace le programme",
          "duplique le processus",
          "récupère le code retour d’un fils et libère son entrée",
          "réveille un thread"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 5,
    "points": 1.0,
    "html": "<p><strong>Entre deux threads d’un même processus, cochez ce qui est partagé :</strong></p>\n<p>\n</p><div class=\"answer\"><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q5-c0\" name=\"q5-c0\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q5-c0\">registres</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q5-c1\" name=\"q5-c1\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q5-c1\">heap</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q5-c2\" name=\"q5-c2\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q5-c2\">segment code</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q5-c3\" name=\"q5-c3\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q5-c3\">pile (stack)</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q5-c4\" name=\"q5-c4\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q5-c4\">descripteurs de fichiers</label></div></div>\n<p></p>",
    "fields": [
      {
        "type": "checkboxes",
        "correct": [
          "q5-c1",
          "q5-c2",
          "q5-c4"
        ],
        "options": [
          "registres",
          "heap",
          "segment code",
          "pile (stack)",
          "descripteurs de fichiers"
        ],
        "answer": [
          "heap",
          "segment code",
          "descripteurs de fichiers"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 6,
    "points": 1.0,
    "html": "<p><strong>Quel énoncé est le plus juste ?</strong></p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q6-a1\">Réponse 1 Question 6</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q6-a1\" name=\"q6-a1\"><option value=\"\">Choisir…</option><option value=\"0\">un sémaphore ne peut pas bloquer</option><option value=\"1\">un mutex permet typiquement de compter des ressources (N unités)</option><option value=\"2\">un mutex est correct même si un autre thread l’unlock</option><option value=\"3\">un sémaphore binaire peut servir d’exclusion mutuelle</option></select></span></p>",
    "fields": [
      {
        "id": "q6-a1",
        "type": "select",
        "correct": "3",
        "answer": "un sémaphore binaire peut servir d’exclusion mutuelle",
        "options": [
          "un sémaphore ne peut pas bloquer",
          "un mutex permet typiquement de compter des ressources (N unités)",
          "un mutex est correct même si un autre thread l’unlock",
          "un sémaphore binaire peut servir d’exclusion mutuelle"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 7,
    "points": 1.0,
    "html": "<p><strong>Pourquoi met-on <code>pthread_cond_wait</code> dans une boucle <code>while</code> ?</strong></p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q7-a1\">Réponse 1 Question 7</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q7-a1\" name=\"q7-a1\"><option value=\"\">Choisir…</option><option value=\"0\">pour accélérer l’exécution</option><option value=\"1\">pour gérer les réveils spurieux et revalider la condition</option><option value=\"2\">parce que if est interdit en C</option><option value=\"3\">pour éviter une division par zéro</option></select></span></p>",
    "fields": [
      {
        "id": "q7-a1",
        "type": "select",
        "correct": "1",
        "answer": "pour gérer les réveils spurieux et revalider la condition",
        "options": [
          "pour accélérer l’exécution",
          "pour gérer les réveils spurieux et revalider la condition",
          "parce que if est interdit en C",
          "pour éviter une division par zéro"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 8,
    "points": 1.0,
    "html": "<p><strong>Si tous les écrivains d’un pipe ferment l’extrémité écriture, un <code>read</code> côté lecture :</strong></p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q8-a1\">Réponse 1 Question 8</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q8-a1\" name=\"q8-a1\"><option value=\"\">Choisir…</option><option value=\"0\">retourne -1 systématiquement</option><option value=\"1\">retourne 0 (EOF)</option><option value=\"2\">crash</option><option value=\"3\">bloque éternellement</option></select></span></p>",
    "fields": [
      {
        "id": "q8-a1",
        "type": "select",
        "correct": "1",
        "answer": "retourne 0 (EOF)",
        "options": [
          "retourne -1 systématiquement",
          "retourne 0 (EOF)",
          "crash",
          "bloque éternellement"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 9,
    "points": 7.0,
    "html": "<p><strong>Contexte :</strong> tampon circulaire borné (capacité N), protégé par mutex + 2 conditions.<br/>\nVariables globales : <code>int buf[N], in=0,out=0,count=0;</code>, <code>pthread_mutex_t m;</code>, <code>pthread_cond_t not_full, not_empty;</code></p>\n<p><strong>Complétez <code>put(int v)</code> :</strong></p>\n<pre><code>void put(int v) {\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q9-a1\">Réponse 1 Question 9</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q9-a1\" name=\"q9-a1\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_mutex_unlock(&amp;m);</option><option value=\"1\">pthread_mutex_lock(&amp;m);</option><option value=\"2\">pthread_cond_wait(&amp;not_full,&amp;m);</option><option value=\"3\">pthread_cond_signal(&amp;not_empty);</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q9-a2\">Réponse 2 Question 9</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q9-a2\" name=\"q9-a2\"><option value=\"\">Choisir…</option><option value=\"0\">if (count == N) pthread_cond_wait(&amp;not_full, &amp;m);</option><option value=\"1\">while (count == 0) pthread_cond_wait(&amp;not_empty, &amp;m);</option><option value=\"2\">while (count == N) pthread_cond_wait(&amp;not_full, &amp;m);</option><option value=\"3\">if (count == 0) pthread_cond_wait(&amp;not_empty, &amp;m);</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q9-a3\">Réponse 3 Question 9</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q9-a3\" name=\"q9-a3\"><option value=\"\">Choisir…</option><option value=\"0\">buf[out] = v;</option><option value=\"1\">buf[in] += v;</option><option value=\"2\">buf[in] = v;</option><option value=\"3\">buf[count] = v;</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q9-a4\">Réponse 4 Question 9</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q9-a4\" name=\"q9-a4\"><option value=\"\">Choisir…</option><option value=\"0\">in = in + N;</option><option value=\"1\">in = (in - 1) % N;</option><option value=\"2\">in = (in + 1) % N;</option><option value=\"3\">out = (out + 1) % N;</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q9-a5\">Réponse 5 Question 9</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q9-a5\" name=\"q9-a5\"><option value=\"\">Choisir…</option><option value=\"0\">count = 0;</option><option value=\"1\">count++;</option><option value=\"2\">count--;</option><option value=\"3\">count = N;</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q9-a6\">Réponse 6 Question 9</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q9-a6\" name=\"q9-a6\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_wait(&amp;not_empty,&amp;m);</option><option value=\"1\">pthread_cond_broadcast(&amp;not_full);</option><option value=\"2\">pthread_cond_signal(&amp;not_full);</option><option value=\"3\">pthread_cond_signal(&amp;not_empty);</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q9-a7\">Réponse 7 Question 9</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q9-a7\" name=\"q9-a7\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_signal(&amp;not_empty);</option><option value=\"1\">pthread_mutex_lock(&amp;m);</option><option value=\"2\">pthread_mutex_unlock(&amp;m);</option><option value=\"3\">pthread_cond_wait(&amp;not_full,&amp;m);</option></select></span>\n}</code></pre>",
    "fields": [
      {
        "id": "q9-a1",
        "type": "select",
        "correct": "1",
        "answer": "pthread_mutex_lock(&m);",
        "options": [
          "pthread_mutex_unlock(&m);",
          "pthread_mutex_lock(&m);",
          "pthread_cond_wait(&not_full,&m);",
          "pthread_cond_signal(&not_empty);"
        ]
      },
      {
        "id": "q9-a2",
        "type": "select",
        "correct": "2",
        "answer": "while (count == N) pthread_cond_wait(&not_full, &m);",
        "options": [
          "if (count == N) pthread_cond_wait(&not_full, &m);",
          "while (count == 0) pthread_cond_wait(&not_empty, &m);",
          "while (count == N) pthread_cond_wait(&not_full, &m);",
          "if (count == 0) pthread_cond_wait(&not_empty, &m);"
        ]
      },
      {
        "id": "q9-a3",
        "type": "select",
        "correct": "2",
        "answer": "buf[in] = v;",
        "options": [
          "buf[out] = v;",
          "buf[in] += v;",
          "buf[in] = v;",
          "buf[count] = v;"
        ]
      },
      {
        "id": "q9-a4",
        "type": "select",
        "correct": "2",
        "answer": "in = (in + 1) % N;",
        "options": [
          "in = in + N;",
          "in = (in - 1) % N;",
          "in = (in + 1) % N;",
          "out = (out + 1) % N;"
        ]
      },
      {
        "id": "q9-a5",
        "type": "select",
        "correct": "1",
        "answer": "count++;",
        "options": [
          "count = 0;",
          "count++;",
          "count--;",
          "count = N;"
        ]
      },
      {
        "id": "q9-a6",
        "type": "select",
        "correct": "3",
        "answer": "pthread_cond_signal(&not_empty);",
        "options": [
          "pthread_cond_wait(&not_empty,&m);",
          "pthread_cond_broadcast(&not_full);",
          "pthread_cond_signal(&not_full);",
          "pthread_cond_signal(&not_empty);"
        ]
      },
      {
        "id": "q9-a7",
        "type": "select",
        "correct": "2",
        "answer": "pthread_mutex_unlock(&m);",
        "options": [
          "pthread_cond_signal(&not_empty);",
          "pthread_mutex_lock(&m);",
          "pthread_mutex_unlock(&m);",
          "pthread_cond_wait(&not_full,&m);"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 10,
    "points": 1.0,
    "html": "<p>Même contexte. On veut <code>get()</code> correct. Choisissez l’ordre correct :</p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q10-a1\">Réponse 1 Question 10</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q10-a1\" name=\"q10-a1\"><option value=\"\">Choisir…</option><option value=\"0\">lock → if(empty) wait(not_empty) → lire → maj index → count-- → signal(not_full) → unlock</option><option value=\"1\">lock → while(empty) wait(not_empty) → lire → maj index → count-- → signal(not_full) → unlock</option><option value=\"2\">while(empty) wait(not_empty) → lock → lire → count-- → unlock → signal(not_full)</option><option value=\"3\">lock → while(empty) wait(not_full) → lire → count++ → signal(not_empty) → unlock</option></select></span></p>",
    "fields": [
      {
        "id": "q10-a1",
        "type": "select",
        "correct": "1",
        "answer": "lock → while(empty) wait(not_empty) → lire → maj index → count-- → signal(not_full) → unlock",
        "options": [
          "lock → if(empty) wait(not_empty) → lire → maj index → count-- → signal(not_full) → unlock",
          "lock → while(empty) wait(not_empty) → lire → maj index → count-- → signal(not_full) → unlock",
          "while(empty) wait(not_empty) → lock → lire → count-- → unlock → signal(not_full)",
          "lock → while(empty) wait(not_full) → lire → count++ → signal(not_empty) → unlock"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 11,
    "points": 1.0,
    "html": "<p>On vous donne :</p>\n<pre><code>void put(int v){\n  pthread_mutex_lock(&amp;m);\n  if (count == N) pthread_cond_wait(&amp;not_full, &amp;m);\n  buf[in] = v;\n  in = (in+1)%N;\n  count++;\n  pthread_mutex_unlock(&amp;m);\n  pthread_cond_signal(&amp;not_empty);\n}</code></pre>\n<p><strong>Cochez toutes les affirmations vraies :</strong></p>\n<p>\n</p><div class=\"answer\"><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q11-c0\" name=\"q11-c0\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q11-c0\">Le if devrait être un while (réveils spurieux / revalidation).</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q11-c1\" name=\"q11-c1\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q11-c1\">pthread_cond_signal doit être appelé mutex verrouillé sinon c’est incorrect POSIX.</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q11-c2\" name=\"q11-c2\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q11-c2\">Le signal après unlock peut fonctionner ; beaucoup de styles le font avant unlock pour réduire certains interleavings.</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q11-c3\" name=\"q11-c3\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q11-c3\">Cette version peut conduire à count &gt; N même si on ne ferme jamais la file.</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q11-c4\" name=\"q11-c4\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q11-c4\">Cette version est sûre dans tous les cas multi-producers/multi-consumers sans précautions supplémentaires.</label></div></div>\n<p></p>",
    "fields": [
      {
        "type": "checkboxes",
        "correct": [
          "q11-c0",
          "q11-c2"
        ],
        "options": [
          "Le if devrait être un while (réveils spurieux / revalidation).",
          "pthread_cond_signal doit être appelé mutex verrouillé sinon c’est incorrect POSIX.",
          "Le signal après unlock peut fonctionner ; beaucoup de styles le font avant unlock pour réduire certains interleavings.",
          "Cette version peut conduire à count > N même si on ne ferme jamais la file.",
          "Cette version est sûre dans tous les cas multi-producers/multi-consumers sans précautions supplémentaires."
        ],
        "answer": [
          "Le if devrait être un while (réveils spurieux / revalidation).",
          "Le signal après unlock peut fonctionner ; beaucoup de styles le font avant unlock pour réduire certains interleavings."
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 12,
    "points": 6.0,
    "html": "<p><strong>Objectif :</strong> barrière réutilisable pour T threads. Variables globales :</p>\n<ul>\n<li><code>int arrived = 0; const int T = ...;</code></li>\n<li><code>pthread_mutex_t bm; pthread_cond_t bc;</code></li>\n</ul>\n<pre><code>void barrier_wait(void){\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q12-a1\">Réponse 1 Question 12</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q12-a1\" name=\"q12-a1\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_signal(&amp;bc);</option><option value=\"1\">pthread_mutex_lock(&amp;bm);</option><option value=\"2\">pthread_mutex_unlock(&amp;bm);</option><option value=\"3\">pthread_cond_wait(&amp;bc,&amp;bm);</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q12-a2\">Réponse 2 Question 12</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q12-a2\" name=\"q12-a2\"><option value=\"\">Choisir…</option><option value=\"0\">arrived = 0;</option><option value=\"1\">arrived++;</option><option value=\"2\">arrived--;</option><option value=\"3\">arrived = T;</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q12-a3\">Réponse 3 Question 12</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q12-a3\" name=\"q12-a3\"><option value=\"\">Choisir…</option><option value=\"0\">if (arrived &lt; T) pthread_cond_wait(&amp;bc, &amp;bm);</option><option value=\"1\">while (arrived == T) pthread_cond_wait(&amp;bc, &amp;bm);</option><option value=\"2\">while (arrived &lt; T) pthread_cond_wait(&amp;bc, &amp;bm);</option><option value=\"3\">if (arrived == T) pthread_cond_wait(&amp;bc, &amp;bm);</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q12-a4\">Réponse 4 Question 12</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q12-a4\" name=\"q12-a4\"><option value=\"\">Choisir…</option><option value=\"0\">if (arrived == T) pthread_cond_signal(&amp;bc);</option><option value=\"1\">if (arrived == T) pthread_cond_wait(&amp;bc,&amp;bm);</option><option value=\"2\">if (arrived == T) pthread_cond_broadcast(&amp;bc);</option><option value=\"3\">if (arrived == 0) pthread_cond_broadcast(&amp;bc);</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q12-a5\">Réponse 5 Question 12</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q12-a5\" name=\"q12-a5\"><option value=\"\">Choisir…</option><option value=\"0\">arrived = arrived % T;</option><option value=\"1\">arrived--;</option><option value=\"2\">if (arrived == T) arrived = 0;</option><option value=\"3\">if (arrived == 0) arrived = T;</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q12-a6\">Réponse 6 Question 12</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q12-a6\" name=\"q12-a6\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_broadcast(&amp;bc);</option><option value=\"1\">pthread_mutex_lock(&amp;bm);</option><option value=\"2\">pthread_cond_wait(&amp;bc,&amp;bm);</option><option value=\"3\">pthread_mutex_unlock(&amp;bm);</option></select></span>\n}</code></pre>",
    "fields": [
      {
        "id": "q12-a1",
        "type": "select",
        "correct": "1",
        "answer": "pthread_mutex_lock(&bm);",
        "options": [
          "pthread_cond_signal(&bc);",
          "pthread_mutex_lock(&bm);",
          "pthread_mutex_unlock(&bm);",
          "pthread_cond_wait(&bc,&bm);"
        ]
      },
      {
        "id": "q12-a2",
        "type": "select",
        "correct": "1",
        "answer": "arrived++;",
        "options": [
          "arrived = 0;",
          "arrived++;",
          "arrived--;",
          "arrived = T;"
        ]
      },
      {
        "id": "q12-a3",
        "type": "select",
        "correct": "2",
        "answer": "while (arrived < T) pthread_cond_wait(&bc, &bm);",
        "options": [
          "if (arrived < T) pthread_cond_wait(&bc, &bm);",
          "while (arrived == T) pthread_cond_wait(&bc, &bm);",
          "while (arrived < T) pthread_cond_wait(&bc, &bm);",
          "if (arrived == T) pthread_cond_wait(&bc, &bm);"
        ]
      },
      {
        "id": "q12-a4",
        "type": "select",
        "correct": "2",
        "answer": "if (arrived == T) pthread_cond_broadcast(&bc);",
        "options": [
          "if (arrived == T) pthread_cond_signal(&bc);",
          "if (arrived == T) pthread_cond_wait(&bc,&bm);",
          "if (arrived == T) pthread_cond_broadcast(&bc);",
          "if (arrived == 0) pthread_cond_broadcast(&bc);"
        ]
      },
      {
        "id": "q12-a5",
        "type": "select",
        "correct": "2",
        "answer": "if (arrived == T) arrived = 0;",
        "options": [
          "arrived = arrived % T;",
          "arrived--;",
          "if (arrived == T) arrived = 0;",
          "if (arrived == 0) arrived = T;"
        ]
      },
      {
        "id": "q12-a6",
        "type": "select",
        "correct": "3",
        "answer": "pthread_mutex_unlock(&bm);",
        "options": [
          "pthread_cond_broadcast(&bc);",
          "pthread_mutex_lock(&bm);",
          "pthread_cond_wait(&bc,&bm);",
          "pthread_mutex_unlock(&bm);"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 13,
    "points": 1.0,
    "html": "<p><strong>Lequel peut deadlocker ?</strong></p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q13-a1\">Réponse 1 Question 13</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q13-a1\" name=\"q13-a1\"><option value=\"\">Choisir…</option><option value=\"0\">T1: lock(m1)→lock(m2)…unlock(m2)→unlock(m1) ; T2: lock(m1)→lock(m2)…unlock(m2)→unlock(m1)</option><option value=\"1\">T1: lock(m1)…unlock(m1)…lock(m2)…unlock(m2) ; T2: lock(m2)…unlock(m2)…lock(m1)…unlock(m1)</option><option value=\"2\">T1: lock(m1)→lock(m2)… ; T2: lock(m2)→lock(m1)…</option><option value=\"3\">T1: trylock(m1) en boucle ; T2: trylock(m2) en boucle</option></select></span></p>",
    "fields": [
      {
        "id": "q13-a1",
        "type": "select",
        "correct": "2",
        "answer": "T1: lock(m1)→lock(m2)… ; T2: lock(m2)→lock(m1)…",
        "options": [
          "T1: lock(m1)→lock(m2)…unlock(m2)→unlock(m1) ; T2: lock(m1)→lock(m2)…unlock(m2)→unlock(m1)",
          "T1: lock(m1)…unlock(m1)…lock(m2)…unlock(m2) ; T2: lock(m2)…unlock(m2)…lock(m1)…unlock(m1)",
          "T1: lock(m1)→lock(m2)… ; T2: lock(m2)→lock(m1)…",
          "T1: trylock(m1) en boucle ; T2: trylock(m2) en boucle"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 14,
    "points": 1.0,
    "html": "<p>Vous voulez qu’un producteur envoie des jobs (structures) à plusieurs consommateurs <strong>dans le même processus</strong>, avec file bornée, réveils, et <strong>sans busy-wait</strong>.</p>\n<p>Quelle combinaison est la plus adaptée ?</p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q14-a1\">Réponse 1 Question 14</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q14-a1\" name=\"q14-a1\"><option value=\"\">Choisir…</option><option value=\"0\">fork() + pipe</option><option value=\"1\">pthread_mutex + pthread_cond autour d’un buffer circulaire</option><option value=\"2\">spinlock uniquement + boucle active</option><option value=\"3\">sleep() en boucle + variable globale non protégée</option></select></span></p>",
    "fields": [
      {
        "id": "q14-a1",
        "type": "select",
        "correct": "1",
        "answer": "pthread_mutex + pthread_cond autour d’un buffer circulaire",
        "options": [
          "fork() + pipe",
          "pthread_mutex + pthread_cond autour d’un buffer circulaire",
          "spinlock uniquement + boucle active",
          "sleep() en boucle + variable globale non protégée"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 15,
    "points": 2.0,
    "html": "<p><strong>Considérez le code :</strong></p>\n<pre><code>int i;\nfor (i = 0; i &lt; 3; i++) {\n  fork();\n  printf(\"%d \", i);\n}\nprintf(\"X\\n\");</code></pre>\n<p>1) Combien de fois la lettre <code>X</code> est affichée ? <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q15-a1\">Réponse 1 Question 15</label><input autocomplete=\"off\" class=\"form-control d-inline mb-1\" id=\"q15-a1\" name=\"q15-a1\" size=\"1\" type=\"text\"/></span></p>\n<p>2) Combien de nombres (tokens) sont affichés au total ? <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q15-a2\">Réponse 2 Question 15</label><input autocomplete=\"off\" class=\"form-control d-inline mb-1\" id=\"q15-a2\" name=\"q15-a2\" size=\"2\" type=\"text\"/></span></p>",
    "fields": [
      {
        "id": "q15-a1",
        "type": "text",
        "correct": "8",
        "answer": "8",
        "options": []
      },
      {
        "id": "q15-a2",
        "type": "text",
        "correct": "14",
        "answer": "14",
        "options": []
      }
    ],
    "feedback": "Après 3 forks : 2^3 = 8 processus → 8 fois \"X\". Tokens : 2 + 4 + 8 = 14."
  },
  {
    "number": 16,
    "points": 1.0,
    "html": "<p><strong>Sur un terminal (stdout vers TTY), quelles sorties sont possibles ?</strong></p>\n<pre><code>printf(\"A\");         \npid_t p = fork();\nprintf(\"B\\n\");</code></pre>\n<p>Cochez les sorties possibles :</p>\n<p>\n</p><div class=\"answer\"><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q16-c0\" name=\"q16-c0\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q16-c0\">AB puis B (sur deux lignes)</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q16-c1\" name=\"q16-c1\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q16-c1\">AB sur une ligne, puis AB sur une autre (ordre indéterminé)</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q16-c2\" name=\"q16-c2\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q16-c2\">AAB</label></div><div class=\"form-check text-wrap text-break\"><input class=\"form-check-input\" id=\"q16-c3\" name=\"q16-c3\" type=\"checkbox\" value=\"1\"/><label class=\"form-check-label text-body\" for=\"q16-c3\">ABB</label></div></div>\n<p></p>",
    "fields": [
      {
        "type": "checkboxes",
        "correct": [
          "q16-c1"
        ],
        "options": [
          "AB puis B (sur deux lignes)",
          "AB sur une ligne, puis AB sur une autre (ordre indéterminé)",
          "AAB",
          "ABB"
        ],
        "answer": [
          "AB sur une ligne, puis AB sur une autre (ordre indéterminé)"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 17,
    "points": 1.0,
    "html": "<pre><code>printf(\"1\\n\");\nexeclp(\"echo\", \"echo\", \"2\", NULL);\nprintf(\"3\\n\");</code></pre>\n<p>Si <code>execlp</code> réussit, que voit-on typiquement ?</p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q17-a1\">Réponse 1 Question 17</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q17-a1\" name=\"q17-a1\"><option value=\"\">Choisir…</option><option value=\"0\">affiche 1, 2, 3</option><option value=\"1\">affiche seulement 2</option><option value=\"2\">affiche 1 puis 2</option><option value=\"3\">affiche 1 puis 3</option></select></span></p>",
    "fields": [
      {
        "id": "q17-a1",
        "type": "select",
        "correct": "2",
        "answer": "affiche 1 puis 2",
        "options": [
          "affiche 1, 2, 3",
          "affiche seulement 2",
          "affiche 1 puis 2",
          "affiche 1 puis 3"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 18,
    "points": 2.0,
    "html": "<p>On écrit successivement dans un pipe : <code>\"ABC\"</code> puis <code>\"DEF\"</code> (6 octets).<br/>\nOn fait <code>read(..., buf, 4)</code> puis un second <code>read(..., buf2, 4)</code>.</p>\n<p>1) Quelles 4 lettres sont lues dans <code>buf</code> ? <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q18-a1\">Réponse 1 Question 18</label><input autocomplete=\"off\" class=\"form-control d-inline mb-1\" id=\"q18-a1\" name=\"q18-a1\" size=\"4\" type=\"text\"/></span></p>\n<p>2) Combien d’octets le second <code>read</code> retourne-t-il ? <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q18-a2\">Réponse 2 Question 18</label><input autocomplete=\"off\" class=\"form-control d-inline mb-1\" id=\"q18-a2\" name=\"q18-a2\" size=\"1\" type=\"text\"/></span></p>",
    "fields": [
      {
        "id": "q18-a1",
        "type": "text",
        "correct": "ABCD",
        "answer": "ABCD",
        "options": []
      },
      {
        "id": "q18-a2",
        "type": "text",
        "correct": "2",
        "answer": "2",
        "options": []
      }
    ],
    "feedback": ""
  },
  {
    "number": 19,
    "points": 1.0,
    "html": "<p>Deux threads prennent deux mutex <code>m1</code> et <code>m2</code> :</p>\n<ul>\n<li>T1 : lock(m1) puis lock(m2)</li>\n<li>T2 : lock(m2) puis lock(m1)</li>\n</ul>\n<p>Le problème potentiel est :</p>\n<p><span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q19-a1\">Réponse 1 Question 19</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q19-a1\" name=\"q19-a1\"><option value=\"\">Choisir…</option><option value=\"0\">aucun problème</option><option value=\"1\">deadlock possible</option><option value=\"2\">data race uniquement</option><option value=\"3\">starvation uniquement</option></select></span></p>",
    "fields": [
      {
        "id": "q19-a1",
        "type": "select",
        "correct": "1",
        "answer": "deadlock possible",
        "options": [
          "aucun problème",
          "deadlock possible",
          "data race uniquement",
          "starvation uniquement"
        ]
      }
    ],
    "feedback": ""
  },
  {
    "number": 20,
    "points": 20.0,
    "html": "<p><strong>Objectif :</strong> implémenter une file de jobs bornée (tampon circulaire) partagée entre threads (pthreads), avec mutex + conditions, et un arrêt propre via <code>q_close()</code>.</p>\n<p><strong>Consignes :</strong> Complétez chaque trou (1 seul choix correct à chaque fois).</p>\n<pre><code>#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n#include &lt;unistd.h&gt;\n#include &lt;errno.h&gt;\n#include &lt;<span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a1\">Réponse 1 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a1\" name=\"q20-a1\"><option value=\"\">Choisir…</option><option value=\"0\">threads.h</option><option value=\"1\">pthread.h</option><option value=\"2\">pthreads.h</option><option value=\"3\">sys/pthread.h</option></select></span>&gt;\n\n#define NWORKERS 4\n#define NJOBS    100\n#define <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a2\">Réponse 2 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a2\" name=\"q20-a2\"><option value=\"\">Choisir…</option><option value=\"0\">CAPACITY</option><option value=\"1\">QCAP</option><option value=\"2\">BUFSIZE</option><option value=\"3\">QSIZE</option></select></span> 16\n\ntypedef struct {\n  int *buf;\n  int cap;\n  int head;\n  int tail;\n  int count;\n  int closed;\n\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a3\">Réponse 3 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a3\" name=\"q20-a3\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_t</option><option value=\"1\">sem_t</option><option value=\"2\">pthread_mutex_t</option><option value=\"3\">int</option></select></span> m;\n\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a4\">Réponse 4 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a4\" name=\"q20-a4\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_mutex_t</option><option value=\"1\">pthread_cond_t</option><option value=\"2\">sem_t</option><option value=\"3\">int</option></select></span> not_empty;\n\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a5\">Réponse 5 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a5\" name=\"q20-a5\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_mutex_t</option><option value=\"1\">sem_t</option><option value=\"2\">int</option><option value=\"3\">pthread_cond_t</option></select></span> not_full;\n\n} queue_t;\n\nstatic void die(const char *msg) {\n  perror(msg);\n  exit(1);\n}\n\nstatic void q_init(queue_t *q, int cap) {\n  q-&gt;buf = malloc(sizeof(int) * cap);\n  if (!q-&gt;buf) die(\"malloc\");\n  q-&gt;cap = cap;\n  q-&gt;head = 0;\n  q-&gt;tail = 0;\n  q-&gt;count = 0;\n  q-&gt;closed = 0;\n\n  if (<span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a6\">Réponse 6 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a6\" name=\"q20-a6\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_mutex_lock(&amp;q-&gt;m)</option><option value=\"1\">pthread_mutex_create(&amp;q-&gt;m)</option><option value=\"2\">pthread_mutex_init(&amp;q-&gt;m, NULL)</option><option value=\"3\">pthread_init_mutex(&amp;q-&gt;m)</option></select></span> != 0)\n    die(\"pthread_mutex_init\");\n\n  if (<span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a7\">Réponse 7 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a7\" name=\"q20-a7\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_wait(&amp;q-&gt;not_empty, &amp;q-&gt;m)</option><option value=\"1\">pthread_mutex_init(&amp;q-&gt;not_empty, NULL)</option><option value=\"2\">pthread_cond_init(&amp;q-&gt;not_empty, NULL)</option><option value=\"3\">pthread_cond_signal(&amp;q-&gt;not_empty)</option></select></span> != 0)\n    die(\"pthread_cond_init not_empty\");\n\n  if (<span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a8\">Réponse 8 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a8\" name=\"q20-a8\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_init(&amp;q-&gt;not_full, NULL)</option><option value=\"1\">pthread_cond_wait(&amp;q-&gt;not_full, &amp;q-&gt;m)</option><option value=\"2\">pthread_mutex_init(&amp;q-&gt;not_full, NULL)</option><option value=\"3\">pthread_cond_signal(&amp;q-&gt;not_full)</option></select></span> != 0)\n    die(\"pthread_cond_init not_full\");\n}\n\nstatic void q_destroy(queue_t *q) {\n  free(q-&gt;buf);\n  pthread_cond_destroy(&amp;q-&gt;not_empty);\n  pthread_cond_destroy(&amp;q-&gt;not_full);\n  pthread_mutex_destroy(&amp;q-&gt;m);\n}\n\n\nstatic int q_push(queue_t *q, int job) {\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a9\">Réponse 9 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a9\" name=\"q20-a9\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_mutex_unlock(&amp;q-&gt;m)</option><option value=\"1\">pthread_cond_wait(&amp;q-&gt;not_full, &amp;q-&gt;m)</option><option value=\"2\">pthread_cond_signal(&amp;q-&gt;not_empty)</option><option value=\"3\">pthread_mutex_lock(&amp;q-&gt;m)</option></select></span>\n\n  if (q-&gt;closed) {\n    pthread_mutex_unlock(&amp;q-&gt;m);\n    return -1;\n  }\n\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a10\">Réponse 10 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a10\" name=\"q20-a10\"><option value=\"\">Choisir…</option><option value=\"0\">if (q-&gt;count == q-&gt;cap)</option><option value=\"1\">while (q-&gt;count == 0)</option><option value=\"2\">while (q-&gt;count == q-&gt;cap)</option><option value=\"3\">if (q-&gt;count == 0)</option></select></span> {\n    if (q-&gt;closed) {\n      pthread_mutex_unlock(&amp;q-&gt;m);\n      return -1;\n    }\n    <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a11\">Réponse 11 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a11\" name=\"q20-a11\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_signal(&amp;q-&gt;not_full)</option><option value=\"1\">pthread_cond_wait(&amp;q-&gt;not_full, &amp;q-&gt;m)</option><option value=\"2\">pthread_mutex_lock(&amp;q-&gt;m)</option><option value=\"3\">pthread_cond_wait(&amp;q-&gt;not_empty, &amp;q-&gt;m)</option></select></span>\n  }\n\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a12\">Réponse 12 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a12\" name=\"q20-a12\"><option value=\"\">Choisir…</option><option value=\"0\">q-&gt;buf[q-&gt;head] = job;</option><option value=\"1\">q-&gt;buf[q-&gt;tail] = job;</option><option value=\"2\">q-&gt;buf[job] = q-&gt;tail;</option><option value=\"3\">q-&gt;tail = job;</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a13\">Réponse 13 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a13\" name=\"q20-a13\"><option value=\"\">Choisir…</option><option value=\"0\">q-&gt;tail = (q-&gt;tail - 1) % q-&gt;cap;</option><option value=\"1\">q-&gt;tail++;</option><option value=\"2\">q-&gt;tail = (q-&gt;tail + 1) % q-&gt;cap;</option><option value=\"3\">q-&gt;tail = q-&gt;tail * q-&gt;cap;</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a14\">Réponse 14 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a14\" name=\"q20-a14\"><option value=\"\">Choisir…</option><option value=\"0\">q-&gt;count--;</option><option value=\"1\">q-&gt;count = 0;</option><option value=\"2\">q-&gt;count = q-&gt;cap;</option><option value=\"3\">q-&gt;count++;</option></select></span>\n\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a15\">Réponse 15 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a15\" name=\"q20-a15\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_signal(&amp;q-&gt;not_full)</option><option value=\"1\">pthread_cond_signal(&amp;q-&gt;not_empty)</option><option value=\"2\">pthread_cond_wait(&amp;q-&gt;not_empty, &amp;q-&gt;m)</option><option value=\"3\">pthread_cond_broadcast(&amp;q-&gt;not_full)</option></select></span>\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a16\">Réponse 16 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a16\" name=\"q20-a16\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_mutex_lock(&amp;q-&gt;m)</option><option value=\"1\">pthread_cond_wait(&amp;q-&gt;not_full, &amp;q-&gt;m)</option><option value=\"2\">pthread_cond_signal(&amp;q-&gt;not_empty)</option><option value=\"3\">pthread_mutex_unlock(&amp;q-&gt;m)</option></select></span>\n\n  return 0;\n}\n\n\nstatic int q_pop(queue_t *q, int *out) {\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a17\">Réponse 17 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a17\" name=\"q20-a17\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_wait(&amp;q-&gt;not_empty, &amp;q-&gt;m)</option><option value=\"1\">pthread_mutex_unlock(&amp;q-&gt;m)</option><option value=\"2\">pthread_mutex_lock(&amp;q-&gt;m)</option><option value=\"3\">pthread_cond_signal(&amp;q-&gt;not_empty)</option></select></span>\n\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a18\">Réponse 18 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a18\" name=\"q20-a18\"><option value=\"\">Choisir…</option><option value=\"0\">if (q-&gt;count == 0 &amp;&amp; !q-&gt;closed)</option><option value=\"1\">while (q-&gt;count == q-&gt;cap &amp;&amp; !q-&gt;closed)</option><option value=\"2\">while (q-&gt;count == 0 &amp;&amp; !q-&gt;closed)</option><option value=\"3\">if (q-&gt;count == q-&gt;cap &amp;&amp; !q-&gt;closed)</option></select></span> {\n    pthread_cond_wait(&amp;q-&gt;not_empty, &amp;q-&gt;m);\n  }\n\n  if (<span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a19\">Réponse 19 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a19\" name=\"q20-a19\"><option value=\"\">Choisir…</option><option value=\"0\">q-&gt;count == q-&gt;cap &amp;&amp; q-&gt;closed</option><option value=\"1\">q-&gt;count == 0 &amp;&amp; !q-&gt;closed</option><option value=\"2\">q-&gt;count &lt; 0</option><option value=\"3\">q-&gt;count == 0 &amp;&amp; q-&gt;closed</option></select></span>) {\n    pthread_mutex_unlock(&amp;q-&gt;m);\n    return -1;\n  }\n\n  *out = q-&gt;buf[q-&gt;head];\n  q-&gt;head = (q-&gt;head + 1) % q-&gt;cap;\n  q-&gt;count--;\n\n  pthread_cond_signal(&amp;q-&gt;not_full);\n  pthread_mutex_unlock(&amp;q-&gt;m);\n  return 0;\n}\n\n\nstatic void q_close(queue_t *q) {\n  pthread_mutex_lock(&amp;q-&gt;m);\n  q-&gt;closed = 1;\n  <span class=\"subquestion\"><label class=\"subq accesshide\" for=\"q20-a20\">Réponse 20 Question 20</label><select autocomplete=\"off\" class=\"select form-select form-select d-inline-block mb-1\" id=\"q20-a20\" name=\"q20-a20\"><option value=\"\">Choisir…</option><option value=\"0\">pthread_cond_signal(&amp;q-&gt;not_empty)</option><option value=\"1\">pthread_cond_wait(&amp;q-&gt;not_empty, &amp;q-&gt;m)</option><option value=\"2\">pthread_cond_broadcast(&amp;q-&gt;not_full)</option><option value=\"3\">pthread_cond_broadcast(&amp;q-&gt;not_empty)</option></select></span>\n  pthread_mutex_unlock(&amp;q-&gt;m);\n}\n\n\n\ntypedef struct {\n  queue_t *q;\n  long long *sum;\n  pthread_mutex_t *sum_m;\n} worker_arg_t;\n\nstatic void *worker_main(void *p) {\n  worker_arg_t *a = (worker_arg_t*)p;\n  int job;\n  while (q_pop(a-&gt;q, &amp;job) == 0) {\n    usleep(1000);\n    pthread_mutex_lock(a-&gt;sum_m);\n    *(a-&gt;sum) += job;\n    pthread_mutex_unlock(a-&gt;sum_m);\n  }\n  return NULL;\n}\n\nint main(void) {\n  queue_t q;\n  pthread_t th[NWORKERS];\n\n  long long sum = 0;\n  pthread_mutex_t sum_m = PTHREAD_MUTEX_INITIALIZER;\n\n  q_init(&amp;q, QCAP);\n\n  worker_arg_t arg = { .q = &amp;q, .sum = &amp;sum, .sum_m = &amp;sum_m };\n  for (int i = 0; i &lt; NWORKERS; i++) {\n    if (pthread_create(&amp;th[i], NULL, worker_main, &amp;arg) != 0)\n      die(\"pthread_create\");\n  }\n\n  for (int j = 1; j &lt;= NJOBS; j++) {\n    if (q_push(&amp;q, j) != 0) {\n      fprintf(stderr, \"push refused (closed)\\n\");\n      break;\n    }\n  }\n\n  q_close(&amp;q);\n\n  for (int i = 0; i &lt; NWORKERS; i++) {\n    pthread_join(th[i], NULL);\n  }\n\n  printf(\"Somme = %lld (attendu %lld)\\n\", sum, (long long)NJOBS * (NJOBS + 1) / 2);\n\n  q_destroy(&amp;q);\n  return 0;\n}</code></pre>",
    "fields": [
      {
        "id": "q20-a1",
        "type": "select",
        "correct": "1",
        "answer": "pthread.h",
        "options": [
          "threads.h",
          "pthread.h",
          "pthreads.h",
          "sys/pthread.h"
        ]
      },
      {
        "id": "q20-a2",
        "type": "select",
        "correct": "1",
        "answer": "QCAP",
        "options": [
          "CAPACITY",
          "QCAP",
          "BUFSIZE",
          "QSIZE"
        ]
      },
      {
        "id": "q20-a3",
        "type": "select",
        "correct": "2",
        "answer": "pthread_mutex_t",
        "options": [
          "pthread_cond_t",
          "sem_t",
          "pthread_mutex_t",
          "int"
        ]
      },
      {
        "id": "q20-a4",
        "type": "select",
        "correct": "1",
        "answer": "pthread_cond_t",
        "options": [
          "pthread_mutex_t",
          "pthread_cond_t",
          "sem_t",
          "int"
        ]
      },
      {
        "id": "q20-a5",
        "type": "select",
        "correct": "3",
        "answer": "pthread_cond_t",
        "options": [
          "pthread_mutex_t",
          "sem_t",
          "int",
          "pthread_cond_t"
        ]
      },
      {
        "id": "q20-a6",
        "type": "select",
        "correct": "2",
        "answer": "pthread_mutex_init(&q->m, NULL)",
        "options": [
          "pthread_mutex_lock(&q->m)",
          "pthread_mutex_create(&q->m)",
          "pthread_mutex_init(&q->m, NULL)",
          "pthread_init_mutex(&q->m)"
        ]
      },
      {
        "id": "q20-a7",
        "type": "select",
        "correct": "2",
        "answer": "pthread_cond_init(&q->not_empty, NULL)",
        "options": [
          "pthread_cond_wait(&q->not_empty, &q->m)",
          "pthread_mutex_init(&q->not_empty, NULL)",
          "pthread_cond_init(&q->not_empty, NULL)",
          "pthread_cond_signal(&q->not_empty)"
        ]
      },
      {
        "id": "q20-a8",
        "type": "select",
        "correct": "0",
        "answer": "pthread_cond_init(&q->not_full, NULL)",
        "options": [
          "pthread_cond_init(&q->not_full, NULL)",
          "pthread_cond_wait(&q->not_full, &q->m)",
          "pthread_mutex_init(&q->not_full, NULL)",
          "pthread_cond_signal(&q->not_full)"
        ]
      },
      {
        "id": "q20-a9",
        "type": "select",
        "correct": "3",
        "answer": "pthread_mutex_lock(&q->m)",
        "options": [
          "pthread_mutex_unlock(&q->m)",
          "pthread_cond_wait(&q->not_full, &q->m)",
          "pthread_cond_signal(&q->not_empty)",
          "pthread_mutex_lock(&q->m)"
        ]
      },
      {
        "id": "q20-a10",
        "type": "select",
        "correct": "2",
        "answer": "while (q->count == q->cap)",
        "options": [
          "if (q->count == q->cap)",
          "while (q->count == 0)",
          "while (q->count == q->cap)",
          "if (q->count == 0)"
        ]
      },
      {
        "id": "q20-a11",
        "type": "select",
        "correct": "1",
        "answer": "pthread_cond_wait(&q->not_full, &q->m)",
        "options": [
          "pthread_cond_signal(&q->not_full)",
          "pthread_cond_wait(&q->not_full, &q->m)",
          "pthread_mutex_lock(&q->m)",
          "pthread_cond_wait(&q->not_empty, &q->m)"
        ]
      },
      {
        "id": "q20-a12",
        "type": "select",
        "correct": "1",
        "answer": "q->buf[q->tail] = job;",
        "options": [
          "q->buf[q->head] = job;",
          "q->buf[q->tail] = job;",
          "q->buf[job] = q->tail;",
          "q->tail = job;"
        ]
      },
      {
        "id": "q20-a13",
        "type": "select",
        "correct": "2",
        "answer": "q->tail = (q->tail + 1) % q->cap;",
        "options": [
          "q->tail = (q->tail - 1) % q->cap;",
          "q->tail++;",
          "q->tail = (q->tail + 1) % q->cap;",
          "q->tail = q->tail * q->cap;"
        ]
      },
      {
        "id": "q20-a14",
        "type": "select",
        "correct": "3",
        "answer": "q->count++;",
        "options": [
          "q->count--;",
          "q->count = 0;",
          "q->count = q->cap;",
          "q->count++;"
        ]
      },
      {
        "id": "q20-a15",
        "type": "select",
        "correct": "1",
        "answer": "pthread_cond_signal(&q->not_empty)",
        "options": [
          "pthread_cond_signal(&q->not_full)",
          "pthread_cond_signal(&q->not_empty)",
          "pthread_cond_wait(&q->not_empty, &q->m)",
          "pthread_cond_broadcast(&q->not_full)"
        ]
      },
      {
        "id": "q20-a16",
        "type": "select",
        "correct": "3",
        "answer": "pthread_mutex_unlock(&q->m)",
        "options": [
          "pthread_mutex_lock(&q->m)",
          "pthread_cond_wait(&q->not_full, &q->m)",
          "pthread_cond_signal(&q->not_empty)",
          "pthread_mutex_unlock(&q->m)"
        ]
      },
      {
        "id": "q20-a17",
        "type": "select",
        "correct": "2",
        "answer": "pthread_mutex_lock(&q->m)",
        "options": [
          "pthread_cond_wait(&q->not_empty, &q->m)",
          "pthread_mutex_unlock(&q->m)",
          "pthread_mutex_lock(&q->m)",
          "pthread_cond_signal(&q->not_empty)"
        ]
      },
      {
        "id": "q20-a18",
        "type": "select",
        "correct": "2",
        "answer": "while (q->count == 0 && !q->closed)",
        "options": [
          "if (q->count == 0 && !q->closed)",
          "while (q->count == q->cap && !q->closed)",
          "while (q->count == 0 && !q->closed)",
          "if (q->count == q->cap && !q->closed)"
        ]
      },
      {
        "id": "q20-a19",
        "type": "select",
        "correct": "3",
        "answer": "q->count == 0 && q->closed",
        "options": [
          "q->count == q->cap && q->closed",
          "q->count == 0 && !q->closed",
          "q->count < 0",
          "q->count == 0 && q->closed"
        ]
      },
      {
        "id": "q20-a20",
        "type": "select",
        "correct": "3",
        "answer": "pthread_cond_broadcast(&q->not_empty)",
        "options": [
          "pthread_cond_signal(&q->not_empty)",
          "pthread_cond_wait(&q->not_empty, &q->m)",
          "pthread_cond_broadcast(&q->not_full)",
          "pthread_cond_broadcast(&q->not_empty)"
        ]
      }
    ],
    "feedback": ""
  }
];
