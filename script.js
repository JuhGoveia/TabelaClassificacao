var dinamarca = {
  nome: "Dinamarca",
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/225px-Flag_of_Denmark.svg.png",
  ouro: 0,
  prata: 0,
  bronze: 0,
  total: 0
};
var brasil = {
  nome: "Brasil",
  url:
    "https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg",
  ouro: 0,
  prata: 0,
  bronze: 0,
  total: 0
};
var japao = {
  nome: "Japão",
  url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
  ouro: 0,
  prata: 0,
  bronze: 0,
  total: 0
};

dinamarca.total = calculatotal(dinamarca);
brasil.total = calculatotal(brasil);
japao.total = calculatotal(japao);

function calculatotal(pais) {
  var total = pais.ouro + pais.prata + pais.bronze;
  return total;
}

var paises = [dinamarca, brasil, japao];

function exibirNaTela(paises) {
  var elemento = "";

  for (var i = 0; i < paises.length; i++) {
    elemento +=
      "<tr><td>" + paises[i].nome + "<img src=" + paises[i].url + ">" + "</td>";
    elemento += "<td>" + paises[i].ouro + "</td>";
    elemento += "<td>" + paises[i].prata + "</td>";
    elemento += "<td>" + paises[i].bronze + "</td>";
    elemento += "<td>" + paises[i].total + "</td>";
    elemento +=
      "<td><button onClick='adicionarOuro(" + i + ")'>Ouro</button></td>";
    elemento +=
      "<td><button onClick='adicionarPrata(" + i + ")'>Prata</button></td>";
    elemento +=
      "<td><button onClick='adicionarBronze(" + i + ")'>Bronze</button></td>";

    elemento += "</tr> ";
  }

  var tabelaPaises = document.getElementById("tabelaPaises");
  tabelaPaises.innerHTML = elemento;
}
exibirNaTela(paises);

function Limpar() {
  var inputNome = document.getElementById("nomePais");
  nomePais.value = "";

  var inputUrl = document.getElementById("urlImagem");
  inputUrl.value = "";
}

function adicionarOuro(i) {
  var pais = paises[i]; // recebe a lista com a posiao em um jogador
  pais.ouro++;
  pais.total = calculatotal(pais); // chama funçao
  exibirNaTela(paises); // chama funçao
}

function adicionarPrata(i) {
  var pais = paises[i];
  pais.prata++;
  pais.total = calculatotal(pais);
  exibirNaTela(paises);
}

function adicionarBronze(i) {
  var pais = paises[i];
  pais.bronze++;
  pais.total = calculatotal(pais);
  exibirNaTela(paises);
}

function adicionarPais() {
  var nomePais = document.getElementById("nomePais").value;
  var bandeiraPais = document.getElementById("urlImagem").value;

  if (nomePais == "" || bandeiraPais == "") {
    alert("Nome ou url não inserido!");
  } else if (bandeiraPais.endsWith(".png") || bandeiraPais.endsWith(".jpg")) {
    var paisNovo = {
      nome: nomePais,
      url: bandeiraPais,
      ouro: 0,
      prata: 0,
      bronze: 0,
      total: 0
    };
    paises.push(paisNovo);
    exibirNaTela(paises);
    console.log(paises);
  } else {
    alert("Imagem inválida!!");
  }
  Limpar();
}

function zerarPlacar() {
  for (var i = 0; i < paises.length; i++) {
    var pais = paises[i];
    pais.ouro = 0;
    pais.prata = 0;
    pais.bronze = 0;
    pais.total = 0;

    exibirNaTela(paises);
  }
}