import { mostraPropriedadesDaPalavra, palavraGlobal } from "./puxarPalavra";

const inputAcerto = document.querySelector("#palavra");
const buttonAcerto = document.querySelector(".button-acerto");

export function verificarAcerto() {
  buttonAcerto.addEventListener("click", (event) => {
    event.preventDefault();
    if (!inputAcerto.value)
      return alert("Escreva algo para não perder suas vidas");

    if (inputAcerto.value === palavraGlobal.palavra) {
      alert("Parabéns! Você acertou a palavra!");
      inputAcerto.value = "";
      mostraPropriedadesDaPalavra();
    } else {
      alert("Você errou, portanto, perdeu duas vidas!");
      inputAcerto.value = "";
    }
  });
}
