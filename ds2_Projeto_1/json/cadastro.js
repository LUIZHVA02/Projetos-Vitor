'use strict'

async function cadastrarUser() {
    const nomeCadastro = document.getElementById('nomeCadastro').value
    const emailCadastro = document.getElementById('emailCadastro').value
    const senhaCadastro = document.getElementById('senhaCadastro').value

    const newUser = {
        nomeCadastro,
        emailCadastro,
        senhaCadastro
    }

    const url = 'http://localhost:8080/usuario'

    const options = {
        method: 'Post',
        headers: {
            'Content-type' : 'Application/json',
        },
        body: JSON.stringify(newUser)
    }

    fetch(url,options)
    alert('Usuário Cadastrado com sucesso')
    window.location.href = '../pages/home.html'

}

