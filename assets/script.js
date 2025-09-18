let tarefas = [];

const campoTarefa = document.querySelector("#campoTarefa");
const addtarefa = document.querySelector("#addTarefa");
const listaTarefas = document.querySelector("#listaTarefas");

addtarefa.addEventListener("click", (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();
    if (textoTarefa !== "") {
        tarefas.push({ text: textoTarefa, concluido: false });
        alert("Tarefa adicionada com sucesso!");

        campoTarefa.value = "";

    }
})

function mostrarLista() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
       
