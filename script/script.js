var container = document.querySelector(".container");
var span = document.querySelector(".span");

function adicionar() {
  var tarefaValue = document.querySelector(".addTarefa").value;
  var tarefa = document.querySelector(".addTarefa");

  verificar(tarefaValue);

  if (tarefaValue) {
    criar(tarefaValue);
  }
  tarefa.value = "";
}

function verificar(tarefaValue) {
  if (tarefaValue != "") {
    return tarefaValue;
  }
}

function criar(tarefaValue) {
  var lista = document.createElement("div");
  lista.classList = "lista";

  lista.innerHTML = `
    <p>${tarefaValue}</p>
    <span class="acao">
        <img src="./img/concluido.png" alt="" class="concluido">
        <img src="./img/deletar.png" alt="" class="deletar">
    </span>`;

  container.appendChild(lista);
  span.style.height = "60px";
}

document.addEventListener("click", (e) => {
  var targetE = e.target;
  var divLista = targetE.closest("div");

  if (targetE.classList.contains("deletar")) {
    divLista.remove();
  }
  if (targetE.classList.contains("concluido")) {
    divLista.style.background = "gray";
  }
});

document.addEventListener("keydown", (e) => {
  var tecla = e.key;
  if (tecla == "Enter") {
    adicionar();
  }
});
