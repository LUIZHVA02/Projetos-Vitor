'use strict'

const idUser = localStorage.getItem('idUserX')

async function pegarInfo() {

    const url = 'http://localhost:8080/tarefas'
    const response = await fetch(url)
    const infoTarefa = await response.json()
    return infoTarefa
}

async function mostrarTarefas(tarefas) {

    tarefas.forEach(tarefa => {

        if (idUser == tarefa.idUsuario) {

            const itemTarefa = document.createElement('div')
            itemTarefa.classList.add('itemTarefa')
            itemTarefa.id = ('itemTarefa')

            const holderInfo = document.createElement('div')
            holderInfo.classList.add('holderInfo')
            holderInfo.id = ('holderInfo')

            const nomeDataTarefa = document.createElement('div')
            nomeDataTarefa.classList.add('nomeDataTarefa')
            nomeDataTarefa.id = ('nomeDataTarefa')

            const nomeTarefa = document.createElement('h2')
            nomeTarefa.classList.add('nomeTarefa')
            nomeTarefa.id = ('nomeTarefa')
            nomeTarefa.textContent = tarefa.nomeTarefa

            const dataTarefa = document.createElement('div')
            dataTarefa.classList.add('dataTarefa')
            dataTarefa.id = ('dataTarefa')
            dataTarefa.textContent = tarefa.dataTarefa

            const descricaoTarefa = document.createElement('p')
            descricaoTarefa.classList.add('descricaoTarefa')
            descricaoTarefa.id = ('descricaoTarefa')
            descricaoTarefa.textContent = tarefa.descricao

            nomeTarefa.titulo = tarefa.nomeTarefa
            dataTarefa.data = tarefa.dataTarefa
            descricaoTarefa.descricao = tarefa.descricao

            nomeDataTarefa.append(nomeTarefa, dataTarefa)
            holderInfo.append(nomeDataTarefa, descricaoTarefa)
            itemTarefa.appendChild(holderInfo)
            
            const tarefas = document.getElementById('tarefas')
            tarefas.appendChild(itemTarefa);
        }
    });

}

async function cadastrarTarefas() {
    const nomeTarefa = document.getElementById('nomeTarefa').value
    const descricao = document.getElementById('descricao').value
    const dataTarefa = document.getElementById('dataTarefa').value


    // para o ID usar o local storage

    const newTarefa = {
        nomeTarefa,
        descricao,
        dataTarefa,
        idUsuario: idUser
    }

    const url = 'http://localhost:8080/tarefas'

    const options = {
        method: 'Post',
        headers: {
            'Content-type': 'Application/json',
        },
        body: JSON.stringify(newTarefa)

    }

    fetch(url, options)
    alert('Tarefa Cadastrada')

}


window.onload = async () => {

    const tarefas = await pegarInfo()
    mostrarTarefas(tarefas)
}