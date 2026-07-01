const allLetters: string = "abcdefghijklmnopqrstuvwxyz";

export function isPangram(sentence: string): boolean {
  const normalized = sentence.toLowerCase();
  return allLetters.split('').every(letter => normalized.includes(letter));
}
