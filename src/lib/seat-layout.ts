export interface SeatInfo {
  index: number;
  label: string;
  accessible: boolean;
}

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

export function buildSeats(capacity: number): SeatInfo[] {
  const rows = buildSeatRows(capacity);
  const seats: SeatInfo[] = [];
  let index = 0;

  rows.forEach((count, rowIdx) => {
    for (let col = 0; col < count; col++) {
      seats.push({
        index,
        label: `${rowIdx + 1}${String.fromCharCode(65 + col)}`,
        accessible: false,
      });
      index += 1;
    }
  });

  const accessibleIndex = Math.max(0, seats.length - 2);
  if (seats[accessibleIndex]) seats[accessibleIndex].accessible = true;

  return seats;
}
