export function calculateWinner(squares: (string | null)[], size: number) {
  const lines: number[][] = [];

  for (let r = 0; r < size; r++) {
    const row = [];
    for (let c = 0; c < size; c++) row.push(r * size + c);
    lines.push(row);
  }

  for (let c = 0; c < size; c++) {
    const col = [];
    for (let r = 0; r < size; r++) col.push(r * size + c);
    lines.push(col);
  }

  lines.push([...Array(size)].map((_, i) => i * size + i));

  lines.push([...Array(size)].map((_, i) => i * size + (size - 1 - i)));

  for (const line of lines) {
    const [first, ...rest] = line;
    if (squares[first] && rest.every(i => squares[i] === squares[first])) {
      return { winner: squares[first], line };
    }
  }

  return null;
}
