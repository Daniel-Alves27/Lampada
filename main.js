let imgLampada = [
    "img/ligada.jpg",
    "img/desligada.jpg",
    "img/quebrada.jpg"
];

const ligar = document.getElementById("ligar");
ligar.addEventListener("click", () => {
    let lampada = document.getElementById("img__lampada");
    lampada.src = imgLampada[0];
})

const desligar = document.getElementById("desligar");
desligar.addEventListener("click", () => {
    let lampada = document.getElementById("img__lampada");
    lampada.src = imgLampada[1];
})

let lampadaQuebrada = document.getElementById("img__lampada");

lampadaQuebrada.addEventListener("click", () => {
    let lampada = document.getElementById("img__lampada");
    lampada.src = imgLampada[2];
});

