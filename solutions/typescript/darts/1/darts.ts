interface Point {
  x: number,
  y: number
};

const CircleCenter: Point = {
  x: 0,
  y: 0
};

export function score(x: number, y: number): number {
  const point: Point = { x: x, y: y };
  if (isIncideWithBorder(point, 1)) {
    return 10;
  }

  if (isIncideWithBorder(point, 5)) {
    return 5;
  }

  if (isIncideWithBorder(point, 10)) {
    return 1;
  }

  return 0;
}

function isIncideWithBorder(point: Point, radius: number): boolean {
  return ((point.x - CircleCenter.x) ** 2 + (point.y - CircleCenter.y) ** 2) <= radius ** 2;
}
