export function arrsum(ar: number[]): number {
  return ar.reduce((acc, val) => acc + val, 0);
}
