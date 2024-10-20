import { divInputForca } from "./puxarPalavra";
import { teclado } from "./renderizaButtons";

export const letrasEscolhidas = document.querySelector(".letras-escolhidas");

export function mostrarLetras(palavra) {
  const arrPalavra = palavra.palavra.split("");
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
  }

  teclado.childNodes.forEach((button) =>
    button.addEventListener("click", verificaLetra)
  );
}
