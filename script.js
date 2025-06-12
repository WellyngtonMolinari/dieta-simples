const meals = [ { time: "5h30", title: "Ao acordar", ingredients: [ { name: "Ovo inteiro", quantity: 2, protein: 6 }, { name: "Clara de ovo", quantity: 4, protein: 3.5 }, { name: "Leite desnatado (200ml)", quantity: 1, protein: 8 }, { name: "Pão integral / Aveia", quantity: 1, protein: 0 } ] }, { time: "9h", title: "Lanche no trabalho", ingredients: [ { name: "Pão integral (2 fatias)", quantity: 1, protein: 5 }, { name: "Frango desfiado (80g)", quantity: 1, protein: 25 }, { name: "Pasta de amendoim (1 colher)", quantity: 1, protein: 4 } ] }, { time: "12h", title: "Almoço", ingredients: [ { name: "Peito de frango grelhado (150g)", quantity: 1, protein: 45 }, { name: "Arroz + Feijão / Legumes", quantity: 1, protein: 0 }, { name: "Ovo (1 unidade)", quantity: 1, protein: 6 } ] }, { time: "16h", title: "Lanche da tarde", ingredients: [ { name: "Clara de ovo (4)", quantity: 4, protein: 3.5 }, { name: "Ovo inteiro", quantity: 1, protein: 6 }, { name: "Fruta", quantity: 1, protein: 0 }, { name: "Pasta de amendoim (1 colher)", quantity: 1, protein: 4 } ] }, { time: "19h30", title: "Jantar (pós-treino)", ingredients: [ { name: "Frango (120g)", quantity: 1, protein: 36 }, { name: "Vegetais + arroz / batata-doce", quantity: 1, protein: 0 } ] }, { time: "21h", title: "Ceia", ingredients: [ { name: "Leite desnatado (200ml)", quantity: 1, protein: 8 }, { name: "Pasta de amendoim (1 colher)", quantity: 1, protein: 4 } ] } ];

function renderMeals() { const container = document.getElementById("meals"); container.innerHTML = ""; let totalProtein = 0; let itemCounts = {};

meals.forEach((meal) => { const mealDiv = document.createElement("div"); mealDiv.className = "meal";

const title = document.createElement("h3");
title.textContent = `🕒 ${meal.time} — ${meal.title}`;

const ul = document.createElement("ul");
ul.className = "ingredient-list";

let proteinPerMeal = 0;
meal.ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = `${ingredient.name} — ${ingredient.quantity}x`; // Don't show protein in list

  proteinPerMeal += ingredient.protein * ingredient.quantity;
  itemCounts[ingredient.name] = (itemCounts[ingredient.name] || 0) + ingredient.quantity;

  ul.appendChild(li);
});

totalProtein += proteinPerMeal;

const proteinInfo = document.createElement("p");
proteinInfo.textContent = `Total por refeição: ${proteinPerMeal.toFixed(1)}g de proteína`;

mealDiv.appendChild(title);
mealDiv.appendChild(ul);
mealDiv.appendChild(proteinInfo);
container.appendChild(mealDiv);

});

document.getElementById("totalProtein").textContent = 🔚 Proteína total estimada: ${totalProtein.toFixed(1)}g;

const monthlyList = document.getElementById("monthlyList"); monthlyList.innerHTML = ""; Object.keys(itemCounts).forEach((item) => { const li = document.createElement("li"); li.textContent = ${item}: ${itemCounts[item] * 30} unidades/mês; monthlyList.appendChild(li); }); }

document.addEventListener("DOMContentLoaded", renderMeals);

