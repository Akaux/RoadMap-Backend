
const STORAGE_PROGRESS = "trilhaBackend.progress.v1";
const STORAGE_GRADES = "trilhaBackend.grades.v1";

function lerProgresso() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PROGRESS)) || {};
  } catch (e) {
    return {};
  }
}

function salvarProgresso(progresso) {
  localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progresso));
}

function lerNotas() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_GRADES)) || {};
  } catch (e) {
    return {};
  }
}

function salvarNotas(notas) {
  localStorage.setItem(STORAGE_GRADES, JSON.stringify(notas));
}

let progresso = lerProgresso();
let notas = lerNotas();

/* ---------- helpers de contagem ---------- */

function totalDeAulas() {
  return ROADMAP.reduce((acc, s) => acc + s.lessons.length, 0);
}

function concluidasDoSecao(secao) {
  return secao.lessons.filter((l) => progresso[l.id]).length;
}

function concluidasTotal() {
  return ROADMAP.reduce((acc, s) => acc + concluidasDoSecao(s), 0);
}

function estadoDaSecao(secao) {
  const feitas = concluidasDoSecao(secao);
  if (feitas === 0) return "todo";
  if (feitas === secao.lessons.length) return "done";
  return "partial";
}

/* ---------- render: barra de progresso ---------- */

function atualizarBarraTopo() {
  const total = totalDeAulas();
  const feitas = concluidasTotal();
  const pct = total ? Math.round((feitas / total) * 100) : 0;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressLabel").textContent = `${feitas} / ${total}`;

  const statLessons = document.getElementById("statLessons");
  if (statLessons) statLessons.textContent = total;
}

/* ---------- render: pipeline de seções ---------- */

const iconCheck = `<svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const iconChevron = `<svg class="chevron" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function montarPipeline() {
  const wrap = document.getElementById("pipeline");
  // remove estações antigas, mantém o trilho (rail)
  wrap.querySelectorAll(".stage").forEach((el) => el.remove());

  ROADMAP.forEach((secao) => {
    const feitas = concluidasDoSecao(secao);
    const estado = estadoDaSecao(secao);
    const nota = notas[secao.id];

    const stage = document.createElement("article");
    stage.className = "stage";
    stage.dataset.state = estado;
    stage.dataset.sectionId = secao.id;

    stage.innerHTML = `
      <div class="stage-node mono">${estado === "done" ? iconCheck : secao.numero}</div>
      <div class="stage-card">
        <button class="stage-header" aria-expanded="false">
          <div class="stage-titles">
            <h2>${secao.titulo}</h2>
            <p>${secao.resumo}</p>
          </div>
          <div class="stage-meta">
            <span class="stage-count mono">${feitas}/${secao.lessons.length}</span>
            ${iconChevron}
          </div>
        </button>
        <div class="stage-body">
          <ul class="lesson-list"></ul>
          <div class="stage-footer">
            <button class="quiz-btn ${nota ? "graded" : ""}" data-quiz="${secao.id}">
              ${nota ? `✓ prova concluída — nota ${nota.nota.toFixed(1)}` : "fazer prova da seção →"}
            </button>
          </div>
        </div>
      </div>
    `;

    const ul = stage.querySelector(".lesson-list");
    secao.lessons.forEach((aula) => {
      const feita = !!progresso[aula.id];
      const li = document.createElement("li");
      li.className = "lesson-item" + (feita ? " done" : "");
      li.innerHTML = `
        <button class="lesson-check ${feita ? "checked" : ""}" data-toggle="${aula.id}" aria-label="Marcar aula concluída">${iconCheck}</button>
        <button class="lesson-open" data-open="${aula.id}">${aula.titulo}</button>
        <span class="lesson-arrow mono">→</span>
      `;
      ul.appendChild(li);
    });

    wrap.appendChild(stage);
  });

  ligarEventosPipeline();
}

function ligarEventosPipeline() {
  document.querySelectorAll(".stage-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const stage = btn.closest(".stage");
      const abrindo = !stage.classList.contains("open");
      stage.classList.toggle("open", abrindo);
      btn.setAttribute("aria-expanded", String(abrindo));
    });
  });

  document.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      alternarConclusao(btn.dataset.toggle);
    });
  });

  document.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      abrirModalAula(btn.dataset.open);
    });
  });

  document.querySelectorAll("[data-quiz]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      abrirModalProva(btn.dataset.quiz);
    });
  });
}

function alternarConclusao(lessonId) {
  progresso[lessonId] = !progresso[lessonId];
  if (!progresso[lessonId]) delete progresso[lessonId];
  salvarProgresso(progresso);
  montarPipeline();
  atualizarBarraTopo();
  // mantém o modal de aula sincronizado, se estiver aberto para essa aula
  if (aulaAtualId === lessonId) sincronizarBotaoModalAula();
}

/* ---------- modal de aula ---------- */

let aulaAtualId = null;

function encontrarAula(lessonId) {
  for (const secao of ROADMAP) {
    const aula = secao.lessons.find((l) => l.id === lessonId);
    if (aula) return { secao, aula };
  }
  return null;
}

function abrirModalAula(lessonId) {
  const achado = encontrarAula(lessonId);
  if (!achado) return;
  const { secao, aula } = achado;
  aulaAtualId = lessonId;

  document.getElementById("lessonModalSection").textContent = `${secao.numero} · ${secao.titulo}`;
  document.getElementById("lessonModalTitle").textContent = aula.titulo;
  document.getElementById("lessonModalDesc").textContent = aula.desc;

  const lista = document.getElementById("lessonModalResources");
  lista.innerHTML = "";
  aula.recursos.forEach((r) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${r.url}" target="_blank" rel="noopener noreferrer"><span>${r.nome}</span><span class="go mono">abrir ↗</span></a>`;
    lista.appendChild(li);
  });

  sincronizarBotaoModalAula();
  document.getElementById("lessonModal").hidden = false;
}

function sincronizarBotaoModalAula() {
  const btn = document.getElementById("lessonModalMarkBtn");
  const feita = !!progresso[aulaAtualId];
  btn.textContent = feita ? "✓ aula concluída" : "Marcar como concluída";
  btn.classList.toggle("is-done", feita);
}

function fecharModalAula() {
  document.getElementById("lessonModal").hidden = true;
  aulaAtualId = null;
}

document.getElementById("lessonModalClose").addEventListener("click", fecharModalAula);
document.getElementById("lessonModal").addEventListener("click", (e) => {
  if (e.target.id === "lessonModal") fecharModalAula();
});
document.getElementById("lessonModalMarkBtn").addEventListener("click", () => {
  if (aulaAtualId) alternarConclusao(aulaAtualId);
});

/* ---------- modal de prova ---------- */

let provaSecaoAtual = null;
let provaIndice = 0;
let provaAcertos = 0;
let provaRespondida = false;

function abrirModalProva(sectionId) {
  const secao = ROADMAP.find((s) => s.id === sectionId);
  if (!secao) return;
  provaSecaoAtual = secao;
  provaIndice = 0;
  provaAcertos = 0;
  provaRespondida = false;

  document.getElementById("quizModalEyebrow").textContent = `${secao.numero} · prova`;
  document.getElementById("quizModalTitle").textContent = `Prova — ${secao.titulo}`;
  document.getElementById("quizIntroDesc").textContent =
    `Esta prova tem ${secao.quiz.length} perguntas sobre "${secao.titulo}". Sua nota será calculada com base nos acertos e salva no boletim.`;

  document.getElementById("quizIntro").hidden = false;
  document.getElementById("quizPlay").hidden = true;
  document.getElementById("quizDone").hidden = true;

  document.getElementById("quizModal").hidden = false;
}

function fecharModalProva() {
  document.getElementById("quizModal").hidden = true;
  provaSecaoAtual = null;
}

document.getElementById("quizModalClose").addEventListener("click", fecharModalProva);
document.getElementById("quizModal").addEventListener("click", (e) => {
  if (e.target.id === "quizModal") fecharModalProva();
});

document.getElementById("quizStartBtn").addEventListener("click", () => {
  document.getElementById("quizIntro").hidden = true;
  document.getElementById("quizPlay").hidden = false;
  renderizarPerguntaAtual();
});

document.getElementById("quizCloseBtn").addEventListener("click", fecharModalProva);

function renderizarPerguntaAtual() {
  const pergunta = provaSecaoAtual.quiz[provaIndice];
  provaRespondida = false;

  document.getElementById("quizProgress").textContent =
    `Pergunta ${provaIndice + 1} de ${provaSecaoAtual.quiz.length}`;
  document.getElementById("quizQuestion").textContent = pergunta.q;

  const opcoesEl = document.getElementById("quizOptions");
  opcoesEl.innerHTML = "";
  pergunta.opcoes.forEach((opcao, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opcao;
    btn.addEventListener("click", () => responderPergunta(i));
    li.appendChild(btn);
    opcoesEl.appendChild(li);
  });

  const proxBtn = document.getElementById("quizNextBtn");
  proxBtn.disabled = true;
  proxBtn.textContent =
    provaIndice === provaSecaoAtual.quiz.length - 1 ? "Ver resultado" : "Próxima";
}

function responderPergunta(indiceEscolhido) {
  if (provaRespondida) return;
  provaRespondida = true;

  const pergunta = provaSecaoAtual.quiz[provaIndice];
  const botoes = document.querySelectorAll("#quizOptions .quiz-option");

  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === pergunta.correta) b.classList.add("correct");
    else if (i === indiceEscolhido) b.classList.add("wrong");
  });

  if (indiceEscolhido === pergunta.correta) provaAcertos++;

  document.getElementById("quizNextBtn").disabled = false;
}

document.getElementById("quizNextBtn").addEventListener("click", () => {
  if (provaIndice < provaSecaoAtual.quiz.length - 1) {
    provaIndice++;
    renderizarPerguntaAtual();
  } else {
    finalizarProva();
  }
});

function finalizarProva() {
  const total = provaSecaoAtual.quiz.length;
  const nota = Math.round((provaAcertos / total) * 10 * 10) / 10;

  notas[provaSecaoAtual.id] = {
    acertos: provaAcertos,
    total: total,
    nota: nota,
    data: new Date().toISOString(),
  };
  salvarNotas(notas);

  document.getElementById("quizPlay").hidden = true;
  document.getElementById("quizDone").hidden = false;

  const gradeEl = document.getElementById("quizGrade");
  gradeEl.textContent = nota.toFixed(1);
  gradeEl.classList.remove("low", "mid");
  if (nota < 5) gradeEl.classList.add("low");
  else if (nota < 7) gradeEl.classList.add("mid");

  document.getElementById("quizResultText").textContent =
    `Você acertou ${provaAcertos} de ${total} perguntas. A nota foi salva no seu boletim.`;

  montarPipeline();
  atualizarBarraTopo();
}

/* ---------- inicialização ---------- */

function iniciar() {
  document.getElementById("statSections").textContent = ROADMAP.length;
  document.getElementById("statQuizzes").textContent = ROADMAP.length;
  montarPipeline();
  atualizarBarraTopo();
}

iniciar();
