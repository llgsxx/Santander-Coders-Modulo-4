export async function puxarPalavras() {
  try {
    const response = await fetch("data.json");
    const { palavras } = await response.json();
    return palavras;
  } catch (error) {
    console.log(error);
  }
}
