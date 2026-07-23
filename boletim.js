
const STORAGE_PROGRESS = "trilhaBackend.progress.v1";
const STORAGE_GRADES = "trilhaBackend.grades.v1";

function lerProgresso() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PROGRESS)) || {};
  } catch (e) {
    return {};
  }
}

function lerNotas() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_GRADES)) || {};
  } catch (e) {
    return {};
  }
}

const progresso = lerProgresso();
const notas = lerNotas();

function totalDeAulas() {
  return ROADMAP.reduce((acc, s) => acc + s.lessons.length, 0);
}

function concluidasDoSecao(secao) {
  return secao.lessons.filter((l) => progresso[l.id]).length;
}

function concluidasTotal() {
  return ROADMAP.reduce((acc, s) => acc + concluidasDoSecao(s), 0);
}

function formatarData(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function classeNota(nota) {
  if (nota >= 7) return "high";
  if (nota >= 5) return "mid";
  return "low";
}

function atualizarBarraTopo() {
  const total = totalDeAulas();
  const feitas = concluidasTotal();
  const pct = total ? Math.round((feitas / total) * 100) : 0;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressLabel").textContent = `${feitas} / ${total}`;
}

function montarBoletim() {
  const corpo = document.getElementById("boletimBody");
  corpo.innerHTML = "";

  let somaNotas = 0;
  let qtdNotas = 0;

  ROADMAP.forEach((secao) => {
    const feitas = concluidasDoSecao(secao);
    const registro = notas[secao.id];

    const tr = document.createElement("tr");

    let notaHtml = `<span class="grade-badge pending mono">pendente</span>`;
    let dataTexto = "—";
    let acaoHtml = "";

    if (registro) {
      somaNotas += registro.nota;
      qtdNotas++;
      const cls = classeNota(registro.nota);
      notaHtml = `<span class="grade-badge ${cls} mono">${registro.nota.toFixed(1)}</span> <span class="mono" style="color:var(--fog-300); font-size:12px;">(${registro.acertos}/${registro.total})</span>`;
      dataTexto = formatarData(registro.data);
      acaoHtml = `<a class="retry-link" href="index.html#${secao.id}">refazer</a>`;
    } else {
      acaoHtml = `<a class="retry-link" href="index.html#${secao.id}">fazer prova</a>`;
    }

    tr.innerHTML = `
      <td class="section-name">${secao.numero} · ${secao.titulo}</td>
      <td class="mono">${feitas}/${secao.lessons.length}</td>
      <td>${notaHtml}</td>
      <td class="mono" style="color:var(--fog-300);">${dataTexto}</td>
      <td>${acaoHtml}</td>
    `;
    corpo.appendChild(tr);
  });

  document.getElementById("mediaGeral").textContent = qtdNotas
    ? (somaNotas / qtdNotas).toFixed(1)
    : "—";
  document.getElementById("provasFeitas").textContent = `${qtdNotas}/${ROADMAP.length}`;

  const totalAulas = totalDeAulas();
  const feitasTotal = concluidasTotal();
  document.getElementById("trilhaPct").textContent =
    (totalAulas ? Math.round((feitasTotal / totalAulas) * 100) : 0) + "%";

  document.getElementById("emptyNote").hidden = qtdNotas > 0;
}

atualizarBarraTopo();
montarBoletim();
