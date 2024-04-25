'use strict'

const containerLogin = document.getElementById('iDcontainerLogin')
containerLogin.style.height = "100vh"
containerLogin.style.width = "100vw"
containerLogin.style.display = "flex"
containerLogin.style.flexDirection = "column"
containerLogin.style.alignItems = "center"
containerLogin.style.justifyContent = "center"
containerLogin.style.background = "linear-gradient(0deg, #72adf0 0%, #2767b1 80%)"

function criarLogin() {
    const holderAll = document.createElement('div')
    holderAll.classList.add('holderAll')
    holderAll.style.height = "800px"
    holderAll.style.width = "600px"
    holderAll.style.display = "flex"
    holderAll.style.flexDirection = "column"
    holderAll.style.alignItems = "center"
    holderAll.style.justifyContent = "space-evenly"
    holderAll.style.borderRadius = "25px"
    holderAll.style.background = "linear-gradient(0deg, #2767b1 0%, #72adf0 80%)"
    holderAll.style.boxShadow = "8px -8px 8px white"

    const holderTitulo = document.createElement('div')
    holderTitulo.classList.add('holderTitulo')
    holderTitulo.style.height = "160px"
    holderTitulo.style.display = "flex"
    holderTitulo.style.flexDirection = "column"
    holderTitulo.style.alignItems = "center"
    holderTitulo.style.justifyContent = "space-between"

    const tituloLogin = document.createElement('h1')
    tituloLogin.classList.add('tituloLogin')
    tituloLogin.textContent = "O Poliglota I.A."
    tituloLogin.style.color = "#ffffff"
    tituloLogin.style.fontSize = "72px"
    tituloLogin.style.textAlign = "center"

    const legenda = document.createElement('h2')
    legenda.classList.add('legenda')
    legenda.textContent = "Para uma melhor experiência entre em sua conta"
    legenda.style.width = "480px"
    legenda.style.color = "#ffffff"
    legenda.style.fontSize = "32px"
    legenda.style.textAlign = "center"



    const holderInputEmailSenha = document.createElement('div')
    holderInputEmailSenha.classList.add('holderInputEmailSenha')

    const holderInputEmail = document.createElement('div')
    holderInputEmail.classList.add('holderInputEmail')
    holderInputEmail.style.width = "500px"
    holderInputEmail.style.color = "#ffffff"
    holderInputEmail.style.textAlign = "start"
    holderInputEmail.style.display = "flex"
    holderInputEmail.style.flexDirection = "column"

    const emailH1 = document.createElement('h1')
    emailH1.classList.add('emailH1')
    emailH1.style.color = "#ffffff"
    emailH1.textContent = "Email:"
    emailH1.style.fontSize = "48px"
    emailH1.style.fontFamily = "Rubik, sans-serif"
    emailH1.style.fontWeight = "500"
    emailH1.style.textAlign = "start"

    const inputEmail = document.createElement('input')
    inputEmail.classList.add('inputEmail')
    inputEmail.style.width = "500px"
    inputEmail.style.height = "100px"
    inputEmail.style.border = "none"
    inputEmail.style.outline = "none"
    inputEmail.style.padding = "16px"
    inputEmail.style.borderRadius = "25px"
    inputEmail.style.fontSize = "36px"
    inputEmail.style.fontFamily = "Rubik, sans-serif"
    inputEmail.style.fontWeight = "500"


    const holderInputSenha = document.createElement('div')
    holderInputSenha.classList.add('holderInputSenha')
    holderInputSenha.style.width = "500px"
    holderInputSenha.style.color = "#ffffff"
    holderInputSenha.style.textAlign = "start"
    holderInputSenha.style.display = "flex"
    holderInputSenha.style.flexDirection = "column"

    const senhaH1 = document.createElement('h1')
    senhaH1.classList.add('senhaH1')
    senhaH1.textContent = "Senha:"
    senhaH1.style.color = "#ffffff"
    senhaH1.style.fontSize = "48px"
    senhaH1.style.fontFamily = "Rubik, sans-serif"
    senhaH1.style.fontWeight = "500"
    senhaH1.style.textAlign = "start"

    const inputSenha = document.createElement('input')
    inputSenha.classList.add('inputSenha')
    inputSenha.style.width = "500px"
    inputSenha.style.height = "100px"
    inputSenha.style.border = "none"
    inputSenha.style.outline = "none"
    inputSenha.style.padding = "16px"
    inputSenha.style.borderRadius = "25px"
    inputSenha.style.fontSize = "36px"
    inputSenha.style.fontFamily = "Rubik, sans-serif"
    inputSenha.style.fontWeight = "500"



    const btnEntrar = document.createElement('button')
    btnEntrar.classList.add("btnEntrar")
    btnEntrar.textContent = "Entrar"
    btnEntrar.style.width = "500px"
    btnEntrar.style.height = "120px"
    btnEntrar.style.borderRadius = "25px"
    btnEntrar.style.border = "none"
    btnEntrar.style.outline = "none"
    btnEntrar.style.fontSize = "48px"
    btnEntrar.style.fontFamily = "Rubik, sans-serif"
    btnEntrar.style.fontWeight = "500"
    btnEntrar.style.color = "#2767b1"
    btnEntrar.onclick = () => {
        window.location = "./pages/home.html"
    }


    containerLogin.append(holderAll)
    holderAll.append(holderTitulo, holderInputEmail, holderInputSenha, btnEntrar)
    holderTitulo.append(tituloLogin, legenda)
    holderInputEmail.append(emailH1, inputEmail)
    holderInputSenha.append(senhaH1, inputSenha)

    return holderAll
}

window.onload = async () => {
    criarLogin()
}