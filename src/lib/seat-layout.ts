export function buildSeatRows(capacity: number): number[] {
  const rows: number[] = [];
  let remaining = capacity;

  if (remaining > 0) {
    rows.push(1);
    remaining -= 1;
  }
  while (remaining > 0) {
    const take = Math.min(3, remaining);
    rows.push(take);
    remaining -= take;
  }
  return rows;
}
