// script.js

$(document).ready(function () { const alimentos = [ { nome: 'Ovo inteiro', unidade: 'unidade', proteina: 6, qtdDiaria: 4 }, { nome: 'Clara de ovo', unidade: 'unidade', proteina: 3.5, qtdDiaria: 8 }, { nome: 'Leite desnatado', unidade: 'ml', proteina: 4, qtdDiaria: 400 }, { nome: 'Pão integral', unidade: 'fatia', proteina: 3, qtdDiaria: 3 }, { nome: 'Aveia', unidade: 'colher de sopa', proteina: 1.5, qtdDiaria: 3 }, { nome: 'Frango', unidade: 'g', proteina: 0.3, qtdDiaria: 350 }, { nome: 'Pasta de amendoim', unidade: 'colher de sopa', proteina: 4, qtdDiaria: 3 }, { nome: 'Banana', unidade: 'unidade', proteina: 1, qtdDiaria: 1 }, { nome: 'Vegetais', unidade: 'porção', proteina: 2, qtdDiaria: 1 }, { nome: 'Arroz integral', unidade: 'porção', proteina: 4, qtdDiaria: 2 }, { nome: 'Feijão', unidade: 'porção', proteina: 5, qtdDiaria: 1 }, { nome: 'Batata-doce', unidade: 'porção', proteina: 2, qtdDiaria: 1 } ];

function gerarFormularioPersonalizado() { let html = '<form id="custom-protein-form" class="space-y-4">';

alimentos.forEach((item, index) => {
  html += `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
      <label class="font-semibold">${item.nome} (${item.unidade}):</label>
      <input type="number" min="0" step="any" data-index="${index}" value="${item.qtdDiaria}" class="qtd-input border rounded p-1 w-full" />
    </div>`;
});

html += '<button type="submit" class="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Calcular Proteínas</button>';
html += '</form><div id="resultado-personalizado" class="mt-6"></div>';

$('#resumo-alimentos').html(html);

$('#custom-protein-form').on('submit', function (e) {
  e.preventDefault();
  calcularProteinasPersonalizadas();
});

}

function calcularProteinasPersonalizadas() { let totalProteina = 0; let lista = '<ul class="list-disc pl-5">';

$('.qtd-input').each(function () {
  const index = $(this).data('index');
  const qtd = parseFloat($(this).val());
  const alimento = alimentos[index];
  const proteina = qtd * alimento.proteina;
  totalProteina += proteina;

  lista += `<li><strong>${alimento.nome}</strong>: ${qtd} ${alimento.unidade} → <span class="text-blue-700">${proteina.toFixed(1)}g proteína</span></li>`;
});

lista += `</ul><p class="mt-4 text-lg font-bold">Total diário de proteína: <span class="text-green-700">${totalProteina.toFixed(1)}g</span></p>`;
$('#resultado-personalizado').html(lista);

}

gerarFormularioPersonalizado(); });

