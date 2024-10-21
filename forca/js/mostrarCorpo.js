import { user } from "./vidaUsuario";

const divForca = document.querySelector(".container-header-forca");
const imgDivForca = divForca.querySelectorAll(".d-none");

export function mostrarCorpo() {
  for (let i = user.life; i < user.life; i++) {
    imgDivForca[i].classList.remove("d-none");
  }
}

function switchMostrarCorpo() {
  switch (user.life.toString()) {
    case "5":
      console.log("5");
      break;
    case "4":
      imgDivForca[0].classList.remove("d-none");
      break;
    case "3":
      imgDivForca[1].classList.remove("d-none");

      break;
    case "2":
      console.log("2");
      break;
    case "1":
      console.log("1");
      break;
    default:
      break;
  }
}
