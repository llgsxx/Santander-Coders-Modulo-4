import { puxarPalavras } from "./api";

const textoDica = document.querySelector(".texto-dica");
const divInputForca = document.querySelector(".letras-forca");

async function puxarPalavra() {
  const palavras = await puxarPalavras();
  const palavra = sorteiaPalavra(palavras);
  return palavra;
}

function sorteiaPalavra(palavra) {
  const numeroSorteado = Math.floor(Math.random() * palavra.length);
  const dicaSorteada = palavra[numeroSorteado];
  return dicaSorteada;
}

export async function mostraPropriedadesDaPalavra() {
  const palavra = await puxarPalavra();
  textoDica.textContent = "Dica: " + palavra.dica;
  divInputForca.innerHTML = "";
  for (let i = 0; i < palavra.palavra.length; i++) {
    divInputForca.innerHTML += `<input class='input-letra-forca' type='text'/>`;
  }
}
