const INITIAL_HITPOINTS = 10;
const DIE_SIDES = 6;

export class DnDCharacter {
  readonly strength: number = DnDCharacter.generateAbilityScore();
  readonly dexterity: number = DnDCharacter.generateAbilityScore();
  readonly constitution: number = DnDCharacter.generateAbilityScore();
  readonly intelligence: number = DnDCharacter.generateAbilityScore();
  readonly wisdom: number = DnDCharacter.generateAbilityScore();
  readonly charisma: number = DnDCharacter.generateAbilityScore();

  public get hitpoints(): number {
    return INITIAL_HITPOINTS + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    const one = this.rollDie();
    const two = this.rollDie();
    const three = this.rollDie();
    const four = this.rollDie();
    const rolls = [one, two, three, four];
    return rolls.reduce((sum, value) => sum + value, 0) - Math.min(...rolls);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - INITIAL_HITPOINTS) / 2);
  }

  private static rollDie(): number {
    return Math.floor(Math.random() * DIE_SIDES) + 1;
  }
}
