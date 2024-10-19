import { puxarPalavras } from "./api";

const textoDica = document.querySelector(".texto-dica");

function sorteiaPalavra(dica) {
  try {
    const numeroSorteado = Math.floor(Math.random() * dica.length);
    const dicaSorteada = dica[numeroSorteado];
    return dicaSorteada;
  } catch (error) {
    console.log(error);
    return "Dica";
  }
}

async function puxarDica() {
  const palavras = await puxarPalavras();
  const dica = sorteiaPalavra(palavras);
  return dica;
}

export async function mostrarDica() {
  textoDica.textContent = "Dica: " + (await puxarDica()).dica;
}
