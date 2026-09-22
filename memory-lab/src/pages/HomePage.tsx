import { useEffect, useState } from 'react'
import { Button } from '../components/atoms/Button/Button'
import { GameBoard, type CellPosition } from '../components/organisms/GameBoard/GameBoard'
import { MemoryOverview } from '../components/organisms/MemoryOverview/MemoryOverview'
import { TopBar } from '../components/organisms/TopBar/TopBar'
import { DashboardTemplate } from '../components/templates/DashboardTemplate/DashboardTemplate'
import type { GameStats } from '../types/GameStats'
import { getStats, saveStats } from '../utils/storage'

const BOARD_SIZE = 5
const ACTIVE_CELL_COUNT = 6

function generateActiveCells(size: number, count: number): CellPosition[] {
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

export function HomePage() {
  const [clickedCells, setClickedCells] = useState<Set<string>>(new Set())
  const [activeCells, setActiveCells] = useState(() =>
    generateActiveCells(BOARD_SIZE, ACTIVE_CELL_COUNT),
  )
  const [boardKey, setBoardKey] = useState(0)
  const [isShowingActiveCells, setIsShowingActiveCells] = useState(true)
  const [isAnswerChecked, setIsAnswerChecked] = useState(false)
  const [resultMessage, setResultMessage] = useState('Zapamiętaj podświetlone pola.')

  const [stats, setStats] = useState<GameStats>(getStats)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsShowingActiveCells(false)
    }, 1500)

    return () => window.clearTimeout(timer)
  }, [boardKey])

  const handleCellClick = ({ row, column }: CellPosition) => {
    const cellKey = `${row}-${column}`

    setClickedCells((currentClickedCells) => {
      const nextClickedCells = new Set(currentClickedCells)

      if (nextClickedCells.has(cellKey)) {
        nextClickedCells.delete(cellKey)
      } else {
        nextClickedCells.add(cellKey)
      }

      return nextClickedCells
    })
  }

  const handleStart = () => {
    setActiveCells(generateActiveCells(BOARD_SIZE, ACTIVE_CELL_COUNT))
    setClickedCells(new Set())
    setIsShowingActiveCells(true)
    setIsAnswerChecked(false)
    setResultMessage('Zapamiętaj podświetlone pola.')
    setBoardKey((currentBoardKey) => currentBoardKey + 1)
  }

  const handleCheckAnswer = () => {
    const activeCellKeys = new Set(
      activeCells.map(({ row, column }) => `${row}-${column}`),
    )
    const isCorrect =
      clickedCells.size === activeCellKeys.size &&
      [...clickedCells].every((cellKey) => activeCellKeys.has(cellKey))
    
    const updatedStats: GameStats = {
      gamesPlayed: stats.gamesPlayed + 1,
      gamesWon: isCorrect ? stats.gamesWon + 1 : stats.gamesWon + 0 
    }

    setIsAnswerChecked(true)
    setResultMessage(isCorrect ? 'Poprawna odpowiedź!' : 'Nie tym razem. Spróbuj ponownie.')
    setStats(updatedStats)
  }

  useEffect(() => {
    saveStats(stats);
  }, [stats])

  return (
    <DashboardTemplate
      header={<TopBar onStart={handleStart} />}
    >
      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Ćwiczenie pamięci</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold text-slate-600">Wybrane: {clickedCells.size}</p>
            <Button
              onClick={handleCheckAnswer}
              variant="secondary"
              disabled={isShowingActiveCells || isAnswerChecked}
            >
              Sprawdź odpowiedź
            </Button>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">{resultMessage}</p>
        <div className="mx-auto mt-6 max-w-md rounded-xl bg-slate-50 p-4 sm:p-6">
          <GameBoard
            key={boardKey}
            size={BOARD_SIZE}
            activeCells={isShowingActiveCells ? activeCells : []}
            onCellClick={handleCellClick}
            disabled={isShowingActiveCells || isAnswerChecked}
          />
        </div>
      </section>
      <MemoryOverview stats={stats} />
    </DashboardTemplate>
  )
}