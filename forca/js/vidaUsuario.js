export const user = {
  name: "",
  erro: 0,
};

export function identificaUser() {
  const nome = prompt("Insira seu nome:");
  alert("Bem vindo(a) " + nome);
  user.name = nome;
}
