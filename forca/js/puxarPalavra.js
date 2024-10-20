import { puxarPalavras } from "./api";
import { mostrarLetras } from "./mostrarLetras";

const textoDica = document.querySelector(".texto-dica");
export const divInputForca = document.querySelector(".letras-forca");
export let palavraGlobal = "";

async function puxarPalavra() {
  const palavras = await puxarPalavras();
  const palavra = sorteiaPalavra(palavras);
  palavraGlobal = palavra;
  return palavra;
}

function sorteiaPalavra(palavra) {
  const numeroSorteado = Math.floor(Math.random() * palavra.length);
  const dicaSorteada = palavra[numeroSorteado];
  return dicaSorteada;
}

export async function mostraPropriedadesDaPalavra() {
  const palavra = await puxarPalavra();
  if (!palavra) return;
  textoDica.textContent = "Dica: " + palavra.dica;
  divInputForca.innerHTML = "";
  for (let i = 0; i < palavra.palavra.length; i++) {
    divInputForca.innerHTML += `<input class='input-letra-forca' readonly type='text' />`;
  }
  mostrarLetras(palavra);
}
