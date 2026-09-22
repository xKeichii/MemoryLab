import { useState } from 'react'
import Cell from '../../atoms/Cell/Cell'

export type CellPosition = {
  row: number
  column: number
}

type GameBoardProps = {
  size: number
  activeCells: readonly CellPosition[]
  onCellClick?: (position: CellPosition) => void
}

export function GameBoard({ size, activeCells, onCellClick }: GameBoardProps) {
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set())

  const handleCellClick = (position: CellPosition) => {
    const cellKey = `${position.row}-${position.column}`

    setSelectedCells((currentSelectedCells) => {
      const nextSelectedCells = new Set(currentSelectedCells)

      if (nextSelectedCells.has(cellKey)) {
        nextSelectedCells.delete(cellKey)
      } else {
        nextSelectedCells.add(cellKey)
      }

      return nextSelectedCells
    })

    onCellClick?.(position)
  }

  const cells = Array.from({ length: size * size }, (_, index) => {
    const row = Math.floor(index / size)
    const column = index % size
    const position = { row, column }
    const isActive = activeCells.some(
      (activeCell) => activeCell.row === row && activeCell.column === column,
    )

    return (
      <Cell
        key={`${row}-${column}`}
        isActive={isActive}
        isSelected={selectedCells.has(`${row}-${column}`)}
        onClick={() => handleCellClick(position)}
      />
    )
  })

  return (
    <div
      role="grid"
      aria-label="Plansza gry"
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {cells}
    </div>
  )
}
