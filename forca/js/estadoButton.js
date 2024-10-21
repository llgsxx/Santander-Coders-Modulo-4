import { teclado } from "./renderizaButtons";

export function estadoButton() {
  teclado.childNodes.forEach((button) =>
    button.addEventListener("click", ({ target }) => {
      target.setAttribute("disabled", "");
    })
  );
}
