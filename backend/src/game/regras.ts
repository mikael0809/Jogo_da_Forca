export type Dificuldade = "facil" | "medio" | "dificil";
export type StatusPartida = "em_andamento" | "vitoria" | "derrota";
/** Cria a máscara da palavra, mantendo espaços e hífens visíveis. */
export function gerarMascara(palavra: string, letras: string[]): string {
  return [...palavra].map(c => c === " " || c === "-" ? c : letras.includes(normalizar(c)) ? c : "_").join(" ");
}
/** Converte o texto para maiúsculas e remove acentos. */
export function normalizar(valor: string): string {
  return valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}
/** Verifica se o palpite é exatamente uma letra de A até Z. */
export function validarLetra(letra: string): boolean { return /^[A-Za-z]$/.test(letra); }
/** Confere se todas as letras da palavra já foram descobertas. */
export function verificarVitoria(palavra: string, letras: string[]): boolean {
  return [...normalizar(palavra)].filter(c => /[A-Z]/.test(c)).every(l => letras.includes(l));
}
/** Calcula os pontos de uma vitória. Derrotas recebem zero pontos. */
export function calcularPontos(palavra: string, vidas: number, status: StatusPartida): number {
  if (status !== "vitoria") return 0;
  return vidas * 10 + new Set([...normalizar(palavra)].filter(c => /[A-Z]/.test(c))).size * 5;
}
