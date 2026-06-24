export function decodedResistorValue(colors: string[]): string {
  const [first, second, third] = colors;
  const index1 = getColorIndex(first);
  const index2 = getColorIndex(second);
  const numZeroes = getColorIndex(third) + (index2 == 0 ? 1 : 0);

  const twoColorsNum = index2 == 0 ? index1 : (index1 * 10 + index2);
  const prefix = getPrefix(numZeroes);

  const rem = numZeroes % 3;
  const numPartString = (twoColorsNum * (10 ** rem)).toString();

  return `${numPartString} ${prefix}ohms`
}

function getColorIndex(color: string){
  return allColors.indexOf(color);
}

function getPrefix(num: number) {
  if(num > 2 && num < 6) return 'kilo';
  else if(num >= 6 && num < 9) return 'mega';
  else if(num === 9) return 'giga';
  return '';
}

const allColors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];