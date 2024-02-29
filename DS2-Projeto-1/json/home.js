'use strict'

const idUser = localStorage.getItem('idUserX')

async function pegarInfo() {

    const url = 'http://localhost:8080/tarefas'
    const response = await fetch(url)
    const infoTarefa = await response.json()
    return infoTarefa
}

async function mostrarTarefas(tarefas) {

    const itemTarefa1 = document.getElementById('itemTarefa1')
    const holderInfo1 = document.getElementById('holderInfo1')
    const nomeDataTarefa1 = document.getElementById('nomeDataTarefa1')

    const nomeTarefa1 = document.getElementById('nomeTarefa1')
    nomeTarefa1.textContent = tarefas.título

    const dataTarefa1 = document.getElementById('dataTarefa1')
    dataTarefa1.textContent = tarefas.dataConclusão

    const descricaoTarefa1 = document.getElementById('descricaoTarefa1')
    descricaoTarefa1.

    nomeDataTarefa1.append(nomeTarefa1, dataTarefa1)
    holderInfo1.append(nomeDataTarefa1, descricaoTarefa1)

    tarefas.forEach(tarefa => {

        if (idUser == tarefa.idUsuario) {

            const itemTarefa = document.createElement('div')
            itemTarefa.classList.add('itemTarefa', 'carousel-item')
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
            nomeTarefa.textContent = tarefa.título

            const dataTarefa = document.createElement('div')
            dataTarefa.classList.add('dataTarefa')
            dataTarefa.id = ('dataTarefa')
            dataTarefa.textContent = tarefa.dataConclusão

            const descricaoTarefa = document.createElement('textarea')
            descricaoTarefa.classList.add('descricaoTarefa')
            descricaoTarefa.id = ('descricaoTarefa')
            descricaoTarefa.textContent = tarefa.descrição

            nomeTarefa.titulo = tarefa.título
            dataTarefa.data = tarefa.dataConclusão
            descricaoTarefa.descricao = tarefa.descrição

            nomeDataTarefa.append(nomeTarefa, dataTarefa)
            holderInfo.append(nomeDataTarefa, descricaoTarefa)

            const containerTarefas = document.getElementById('containerTarefas')
            containerTarefas.appendChild(holderInfo);
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