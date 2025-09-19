let tarefas = [];

const campoTarefa = document.querySelector("#nova-tarefa");
const addtarefa = document.querySelector(".botao");
const listaTarefas = document.querySelector("#lista-tarefas");

addtarefa.addEventListener("click", (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();
    if (textoTarefa !== "") {
        tarefas.push({ text: textoTarefa, concluido: false });
        alert("Tarefa adicionada com sucesso!");
        mostrarLista();
        campoTarefa.value = "";

    }
})

function mostrarLista() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.classList.toggle("completo", tarefa.concluido);

        li.innerHTML = `
        <span>${tarefa.text}</span>
        <input type="checkbox" ${tarefa.concluido ? 'checked' : ''} onclick="tarefaConcluida(${index})">
        
        <button class="editar" onclick="editarTarefa(${index})">Editar</button>
        <button class="excluir" onclick="excluirTarefa(${index})">Excluir</button>
        `;
        listaTarefas.appendChild(li);
    });
}

function excluirTarefa(index) {
    if(confirm("Você deseja excluir a tarefa?")) {
        tarefas.splice(index, 1);
        mostrarLista();
    }
}
function editarTarefa(index) {
    const novaTarefa = prompt("Edite a tarefa:", tarefas[index].text);
    if (novaTarefa !== null && novaTarefa.trim() !== "") {
        tarefas[index].text = novaTarefa.trim();
        mostrarLista();
    }   
}
function tarefaConcluida(index) {
    tarefas[index].concluido = !tarefas[index].concluido;
    mostrarLista();
}   