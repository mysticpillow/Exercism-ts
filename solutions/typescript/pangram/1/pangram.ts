const allLetters: string = "abcdefghijklmnopqrstuvwxyz";

export function isPangram(s: string): boolean {
  const normalized = s.toLowerCase();
  for (let c of allLetters) {
    if (!normalized.includes(c)) {
      return false;
    }
  }

  return true;
}
