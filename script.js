const botaoPlayPause = document.getElementById("play-pause");
const botaoProxFaixa = document.getElementById("proximo");
const botaoAntFaixa = document.getElementById("anterior");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let pp = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    pp = 1;
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    botaoPlayPause.classList.remove("bi-play-circle-fill");
} function pausarFaixa(){
    audioCapitulo.pause();
    pp = 0;
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    
} function tocarOuPausar(){
    if (pp === 0) {
        tocarFaixa();
    } else {
        pausarFaixa(); }
}

//opcional

function resetIcon() {
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
    pp = 0;
}

////////////////////////////////


function proximaFaixa() {
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else {
        capituloAtual = capituloAtual + 1; }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    resetIcon();
    nomeiaCap();
}

function antFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    }else {
        capituloAtual = capituloAtual - 1; }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    resetIcon();
    nomeiaCap();
}

function nomeiaCap() {
    nomeCapitulo.innerText = "Capitulo "+ capituloAtual;
}

botaoAntFaixa.addEventListener("click", antFaixa);
botaoProxFaixa.addEventListener("click", proximaFaixa);
botaoPlayPause.addEventListener("click", tocarOuPausar);
//ou botaoPlayPause.onclick(tocarFaixa);

audioCapitulo.addEventListener("ended", proximaFaixa);
nomeCapitulo.innerText = ("Capitulo " + capituloAtual);
