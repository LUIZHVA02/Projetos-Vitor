'use strict'

const button = document.getElementById('entrar')

async function validarLogin() {
    const nome = document.getElementById('entrada_email').value
    const senha = document.getElementById('entrada_senha').value

    if (nome === "" || senha === "") {

    } else {
        const users = await fetch('http://localhost:8080/usuario')
        const listusers = await users.json()

        const statusLogin = new Boolean(false)

        listusers.forEach((user) => {
            if (nome === user.nome && senha === user.senha) {
                alert('Usuário Logado com sucesso !!!')
                statusLogin = true
                window.location.href = '../pages/home.html'
            }
        })

        if (!statusLogin) {
            alert('Usuário não encontrado!!')
        }
    }

}

window.onload = () => {
    button.addEventListener('click', validarLogin)
}