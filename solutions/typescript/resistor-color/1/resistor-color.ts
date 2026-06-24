export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

type SignificantColor = typeof COLORS[number];

type SignificantNumeral = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const significantNumeralByColor = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const satisfies Record<SignificantColor, SignificantNumeral>;

export const colorCode = (name: SignificantColor): SignificantNumeral => {
  return significantNumeralByColor[name];
}