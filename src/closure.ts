export function range(start: number, end?: number | undefined, step = 1) {
  const getRange = (start: number, end: number) =>
    Array.from(
      { length: (end - start) / step + 1 },
      (_, i) => start + i * step
    );
  const toNum = (num: any) => Number(num) || 0;
  start = toNum(start);

  return end === undefined
    ? (end: any) => getRange(start, end)
    : getRange(start, toNum(end));
}

export const start3 = range(3);
export const start4 = range(4);