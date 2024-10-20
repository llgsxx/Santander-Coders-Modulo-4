export const user = {
  name: "",
  life: 5,
};

export function identificaUser() {
  const nome = prompt("Insira seu nome:");
  alert("Bem vindo(a) " + nome);
  user.name = nome;
}
