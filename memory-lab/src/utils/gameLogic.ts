import type { CellPosition } from '../components/organisms/GameBoard/GameBoard'
import type { GameStats } from '../types/GameStats'

export function getCellKey({ row, column }: CellPosition): string {
  return `${row}-${column}`
}

export function generateActiveCells(size: number, count: number): CellPosition[] {
  if (count > size * size) {
    throw new Error('Cell count cannot be larger than the board.')
  }

  const positions = new Set<string>()

  while (positions.size < count) {
    const row = Math.floor(Math.random() * size)
    const column = Math.floor(Math.random() * size)
    positions.add(`${row}-${column}`)
  }

  return [...positions].map((position) => {
    const [row, column] = position.split('-').map(Number)
    return { row, column }
  })
}

export function isAnswerCorrect(
  activeCells: readonly CellPosition[],
  selectedCells: ReadonlySet<string>,
): boolean {
  const activeCellKeys = new Set(activeCells.map(getCellKey))

  return (
    selectedCells.size === activeCellKeys.size &&
    [...selectedCells].every((cellKey) => activeCellKeys.has(cellKey))
  )
}

export function updateStatsAfterSession(
  stats: GameStats,
  isCorrect: boolean,
): GameStats {
  return {
    gamesPlayed: stats.gamesPlayed + 1,
    gamesWon: stats.gamesWon + (isCorrect ? 1 : 0),
  }
}
