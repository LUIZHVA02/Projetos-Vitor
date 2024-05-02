




















const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
}

await fetch (url, requestOptions)
.then (response => response.json())
.then (data => {
    const respostaTextIA = data.candidates[0].content.parts[0].text
    respostaIA(respostaIA)
})

const respostaIA = (respostaTextIA) => {
    const textAreaPt = document.getElementById('answer-pt')
    textAreaPt.value = respostaTextIA
}

const button = document.getElementById('perguntar')

button.addEventListener('click', ()=>{
    const question = document.getElementById('ask--user').value
    consultaGemini(question)
})