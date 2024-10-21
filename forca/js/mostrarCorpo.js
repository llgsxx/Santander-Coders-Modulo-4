import { mostraPropriedadesDaPalavra } from "./puxarPalavra";
import { renderizaButtons } from "./renderizaButtons";
import { user } from "./vidaUsuario";

const divForca = document.querySelector(".container-header-forca");
const imgDivForca = divForca.querySelectorAll(".d-none");

export function mostrarCorpo(erro) {
  if (erro === 0) {
    imgDivForca.forEach((img) => img.classList.add("d-none"));
    return;
  }
  for (let i = 0; i < erro; i++) {
    imgDivForca[i].classList.remove("d-none");
  }
  if (erro > 5) {
    setTimeout(() => {
      alert("Você perdeu");
      mostraPropriedadesDaPalavra();
      renderizaButtons();
      imgDivForca.forEach((img) => img.classList.add("d-none"));
      user.erro = 0;
      return;
    }, 500);
  }
}
