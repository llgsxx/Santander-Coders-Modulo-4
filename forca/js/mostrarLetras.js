import { divInputForca, mostraPropriedadesDaPalavra } from "./puxarPalavra";
import { renderizaButtons, teclado } from "./renderizaButtons";
import { user } from "./vidaUsuario";

export const letrasEscolhidas = document.querySelector(".letras-escolhidas");

export function mostrarLetras(palavra) {
  const arrPalavra = palavra.palavra.split("");
  const arrVazio = (elemento) => elemento === "";

  function verificaLetra({ target }) {
    letrasEscolhidas.textContent += `${target.textContent} `;

    const letraExiste = arrPalavra.includes(target.textContent);
    if (!letraExiste) {
      user.life -= 1;
      return;
    }

    arrPalavra.forEach((item) => {
      if (item === target.textContent) {
        const indexItem = arrPalavra.indexOf(item);
        arrPalavra.splice(indexItem, 1, "");
        divInputForca.childNodes[indexItem].value = item;
      }
    });

    setTimeout(() => {
      if (arrPalavra.every(arrVazio)) {
        alert("você venceu");
        mostraPropriedadesDaPalavra();
        renderizaButtons();
      }
    }, 500);
  }

  teclado.childNodes.forEach((button) =>
    button.addEventListener("click", verificaLetra)
  );
}
