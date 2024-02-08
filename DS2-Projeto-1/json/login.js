'use strict'

async function validarLogin() {
    const nome = document.getElementById('entrada_email').value
    const senha = document.getElementById('entrada_senha').value

    if (nome === "" || senha === "") {
        alert('Preencha os campos corretamente!!!')
    } else {
        const users = await fetch('http://localhost:8080/usuario')
        const listusers = await users.json()

        let statusLogin = false

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
    const button = document.getElementById('entrar')
    button.addEventListener('click', validarLogin)
}