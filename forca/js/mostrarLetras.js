import { divInputForca } from "./puxarPalavra";
import { teclado } from "./renderizaButtons";

export const letrasEscolhidas = document.querySelector(".letras-escolhidas");

export function mostrarLetras(palavra) {
  const arrPalavra = palavra.palavra.split("");
  const arrVazio = (elemento) => elemento === "";

  function verificaLetra({ target }) {
    letrasEscolhidas.textContent += `${target.textContent} `;

    const letraExiste = arrPalavra.includes(target.textContent);
    if (!letraExiste) return;

    arrPalavra.forEach((item) => {
      if (item === target.textContent) {
        const indexItem = arrPalavra.indexOf(item);
        arrPalavra.splice(indexItem, 1, "");
        divInputForca.childNodes[indexItem].value = item;
      }
    });

    setTimeout(() => {
      if (arrPalavra.every(arrVazio)) alert("você venceu");
    }, 500);
  }

  teclado.childNodes.forEach((button) =>
    button.addEventListener("click", verificaLetra)
  );
}
