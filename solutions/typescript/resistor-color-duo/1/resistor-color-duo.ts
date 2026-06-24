export function decodedValue(colors: string[]) : number {
  const index1 = allColors.indexOf(colors[0]);
  const index2 = allColors.indexOf(colors[1]);

  return index1 * 10 + index2;
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