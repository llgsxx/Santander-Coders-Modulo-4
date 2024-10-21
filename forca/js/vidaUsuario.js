export const user = {
  name: "",
  erro: 0,
};

export function identificaUser() {
  if (sessionStorage.getItem("nameUser")) return;
  setTimeout(() => {
    const nome = prompt("Insira seu nome:");
    if (!nome) return identificaUser();
    alert("Bem vindo(a) " + nome);
    user.name = nome;
    sessionStorage.setItem("nameUser", user.name);
  }, 200);
}
