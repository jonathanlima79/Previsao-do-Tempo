

const key = "bdc1f01560a5cb0a2d359357459907ad"

function colocardadosnatela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto-previsão").innerHTML = dados.weather[0].description
    document.querySelector("umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsão").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}


async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocardadosnatela(dados)

    

}


function cliqueinobotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)

}