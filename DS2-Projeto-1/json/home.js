'use strict'

const idUser = localStorage.getItem('idUserX')

async function mostrarTarefas(){
    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
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

