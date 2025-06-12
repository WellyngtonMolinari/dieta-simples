const refeicoes = [
  { horario: "🕔 5h30", descricao: "2 ovos inteiros + 4 claras, 1 copo de leite desnatado, 1 fatia de pão integral ou 3 colheres de aveia", proteina: 34 },
  { horario: "🕖 9h", descricao: "Sanduíche com 2 fatias de pão integral + 80g de frango desfiado, 1 colher de sopa de pasta de amendoim", proteina: 29 },
  { horario: "🕛 12h", descricao: "150g de peito de frango, arroz integral + feijão ou legumes, 1 ovo", proteina: 51 },
  { horario: "🕔 16h", descricao: "4 claras + 1 ovo inteiro (omelete), 1 fruta, 1 colher de pasta de amendoim", proteina: 26 },
  { horario: "🕖 19h30", descricao: "120g de frango grelhado/cozido, vegetais + arroz ou batata-doce", proteina: 36 },
  { horario: "🕘 21h", descricao: "1 copo de leite desnatado, 1 colher de pasta de amendoim", proteina: 12 },
];

function carregarRefeicoes() {
  const container = document.getElementById("refeicoes");
  container.innerHTML = "";
  refeicoes.forEach(r => {
    const div = document.createElement("div");
    div.classList.add("refeicao");
    div.innerHTML = `<h3>${r.horario}</h3><p>${r.descricao}</p><strong>≈ ${r.proteina}g proteína</strong>`;
    container.appendChild(div);
  });
}

let grafico;

function criarGrafico() {
  const ctx = document.getElementById('graficoProteinas');
  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: refeicoes.map(r => r.horario),
      datasets: [{
        label: 'Proteína por refeição (g)',
        data: refeicoes.map(r => r.proteina),
        backgroundColor: '#4caf50'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Distribuição de Proteína por Refeição' }
      }
    }
  });
}

function atualizarGrafico() {
  const alvo = parseInt(document.getElementById('proteinaAlvo').value);
  const totalAtual = refeicoes.reduce((acc, r) => acc + r.proteina, 0);
  const fator = alvo / totalAtual;
  refeicoes.forEach(r => r.proteina = Math.round(r.proteina * fator));
  carregarRefeicoes();
  grafico.data.datasets[0].data = refeicoes.map(r => r.proteina);
  grafico.update();
}

carregarRefeicoes();
criarGrafico();
