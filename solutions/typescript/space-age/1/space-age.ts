const SECONDS_IN_EARTH_YEAR = 31_557_600;

const planets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
} as const satisfies Record<string, number>;

function isPlanet(planet: string): planet is keyof typeof planets {
  return planet in planets;
}

function calcYearsFromSeconds(seconds: number, coeff: number): number {
  return seconds / coeff / SECONDS_IN_EARTH_YEAR;
}

export function age(planet: string, seconds: number): number {
  if (!isPlanet(planet)) {
    throw new Error("Error: string is not a planet.");
  }

  return +calcYearsFromSeconds(seconds, planets[planet]).toFixed(2);
}
