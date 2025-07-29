const planetas = [
  { nome: "Mercúrio", fator: 0.24 },
  { nome: "Vênus", fator: 0.62 },
  { nome: "Terra", fator: 1.0 },
  { nome: "Marte", fator: 1.88 },
  { nome: "Júpiter", fator: 11.86 },
  { nome: "Saturno", fator: 29.46 },
  { nome: "Urano", fator: 84.01 },
  { nome: "Netuno", fator: 164.8 }
];

function calcularIdade() {
  const idade = document.getElementById("idade").value;
  if (!idade || idade <= 0) {
    alert("Por favor, insira uma idade válida!");
    return;
  }

  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  planetas.forEach(planeta => {
    const idadePlanetaria = (idade / planeta.fator).toFixed(2);
    const card = document.createElement("div");
    card.className = "planeta-card";
    card.innerHTML = `<strong>${planeta.nome}</strong><br>${idadePlanetaria} anos`;
    resultadosDiv.appendChild(card);
  });

  document.getElementById("telaInicial").style.display = "none";
  document.getElementById("telaResultado").style.display = "block";
}

function abrirExplicacao() {
  document.getElementById("explicacao").style.display = "block";
}

function fecharExplicacao() {
  document.getElementById("explicacao").style.display = "none";
}

document.getElementById("idade").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calcularIdade();
    function voltarInicio() {
  document.getElementById("telaResultado").style.display = "none";
  document.getElementById("telaInicial").style.display = "block";
  document.getElementById("idade").value = ""; // limpa o campo
}

  }
});
