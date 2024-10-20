import { divInputForca } from "./puxarPalavra";
import { teclado } from "./renderizaButtons";

export function mostrarLetras(palavra) {
  console.log(palavra);
  const arrPalavra = palavra.palavra.split("");

  function verificaLetra({ target }) {
    const letraExiste = arrPalavra.includes(target.textContent.toLowerCase());
    if (!letraExiste) return;

    arrPalavra.forEach((item) => {
      if (item === target.textContent.toLowerCase()) {
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
