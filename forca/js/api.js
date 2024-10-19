export async function puxarPalavras() {
  try {
    const response = await fetch("data.json");
    const { palavras } = await response.json();
    console.log(palavras);
  } catch (error) {
    console.log(error);
  }
}
