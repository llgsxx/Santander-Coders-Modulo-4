import { mostrarCorpo } from "./mostrarCorpo";
import { mostraPropriedadesDaPalavra, palavraGlobal } from "./puxarPalavra";
import { renderizaButtons } from "./renderizaButtons";
import { user } from "./vidaUsuario";

const inputAcerto = document.querySelector("#palavra");
const buttonAcerto = document.querySelector(".button-acerto");

export function verificarAcerto() {
  buttonAcerto.addEventListener("click", (event) => {
    event.preventDefault();

    if (!inputAcerto.value)
      return alert("Escreva algo para não perder suas vidas");

    if (inputAcerto.value.toLowerCase() === palavraGlobal.palavra) {
      alert("Parabéns! Você acertou a palavra!");
      inputAcerto.value = "";
      mostraPropriedadesDaPalavra();
      renderizaButtons();
      user.life = 5;
    } else {
      alert("Você errou, portanto, perdeu duas vidas!");
      inputAcerto.value = "";
      user.life -= 2;
      mostrarCorpo();
    }
  });
}
