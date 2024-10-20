import { teclado } from "./renderizaButtons";

export function estadoButton() {
  const arrButtons = Array.from(teclado.children);

  arrButtons.forEach((button) =>
    button.addEventListener("click", ({ target }) => {
      target.setAttribute("disabled", "");
    })
  );
}
