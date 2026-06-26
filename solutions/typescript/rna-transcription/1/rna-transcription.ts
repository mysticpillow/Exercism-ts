type DnaCharacter = "G" | "C" | "T" | "A";
type RnaCharacter = "C" | "G" | "A" | "U";
const dnaToRna = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
} as const satisfies Record<DnaCharacter, RnaCharacter>;

function isDnaCharacter(c: string): c is DnaCharacter {
  return c in dnaToRna;
}

export function toRna(dna: string): string {
  return [...dna].map(c => {
    if (!isDnaCharacter(c)) {
      throw new Error("Invalid input DNA.");
    }

    return dnaToRna[c];
  }).join("");
}
