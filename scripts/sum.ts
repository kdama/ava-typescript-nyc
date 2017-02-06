export function sum(...numbers: number[]) {
  return numbers.reduce((x, y) => x + y);
}

export async function asyncSum(...numbers: number[]) {
  return new Promise(resolve => resolve(numbers.reduce((x, y) => x + y)));
}
