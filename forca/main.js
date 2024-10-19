const teclado = document.querySelector(".teclado");
const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function renderizaButtons() {
  alfabeto.forEach(
    (letra) => (teclado.innerHTML += `<button>${letra}</button>`)
  );
}

renderizaButtons();
