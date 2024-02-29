'use strict'

const idUser = localStorage.getItem('idUserX')

async function pegarInfo() {

    const url = 'http://localhost:8080/tarefas'
    const response = await fetch(url)
    const infoTarefa = await response.json()
    return infoTarefa
}

async function mostrarTarefas(){
    const holderInfo = document.getElementById('holderInfo').value
    const nomeDataTarefa = document.getElementById('labelDataTarefa').value
    const nomeTarefa = document.createElement('h2')
    const dataTarefa = document.getElementById('diaTarefa').value
    const descricaoTarefa = document.getElementById('descTarefa').value

    nomeTarefa.textContent = pegarInfo()
    
    
    nomeDataTarefa.append(nomeTarefa, dataTarefa)
    holderInfo.append(nomeDataTarefa,descricaoTarefa)
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
        idUsuario:idUser
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

