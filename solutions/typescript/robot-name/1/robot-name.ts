const MAX_DIGITS: number = 10;
const MAX_LETTERS: number = 26;
const LETTER_A_CHAR_CODE: number = 65;

export class Robot {
  private static readonly usedNames: Set<string> = new Set();
  private static readonly MAX_ROBOTS = (MAX_DIGITS ** 3) * (MAX_LETTERS ** 2);

  private _name: string = Robot.generateUniqueName();

  constructor() {
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.generateUniqueName();
  }

  private static generateUniqueName(): string {
    if (Robot.usedNames.size >= Robot.MAX_ROBOTS) {
      throw new Error("No robot names available.");
    }

    let newName: string;
    do {
      newName = Robot.generateName();
    }
    while (Robot.usedNames.has(newName))

    Robot.usedNames.add(newName);
    return newName;
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private static getRandomCapitalLetter(): string {
    return String.fromCharCode(LETTER_A_CHAR_CODE + Math.floor(Math.random() * MAX_LETTERS));
  }

  private static getRandomDigit() {
    return Math.floor(Math.random() * MAX_DIGITS);
  }

  private static generateName(): string {
    const l1 = Robot.getRandomCapitalLetter();
    const l2 = Robot.getRandomCapitalLetter();
    const d1 = Robot.getRandomDigit();
    const d2 = Robot.getRandomDigit();
    const d3 = Robot.getRandomDigit();

    return `${l1}${l2}${d1}${d2}${d3}`;
  }
}
