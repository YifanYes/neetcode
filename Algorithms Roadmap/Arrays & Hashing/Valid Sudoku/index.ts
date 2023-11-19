function isValidSudoku(board: string[][]): boolean {
  const set = new Set()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j]
      if (cell === '.') continue

      const row = `row: ${i}, value: ${cell}`
      const column = `column: ${j}, value: ${cell}`
      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
      const box = `box: ${boxIndex}, value: ${cell}`

      if (set.has(row) || set.has(column) || set.has(box)) return false
      set.add(row).add(column).add(box)
    }
  }
  return true
}
