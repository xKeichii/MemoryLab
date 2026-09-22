import { describe, expect, it, vi } from 'vitest'
import {
  generateActiveCells,
  getCellKey,
  isAnswerCorrect,
  updateStatsAfterSession,
} from './gameLogic'

describe('generateActiveCells', () => {
  it('generates the requested number of unique cells inside the board', () => {
    vi.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.7)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.2)

    const cells = generateActiveCells(3, 3)

    expect(cells).toEqual([
      { row: 0, column: 0 },
      { row: 1, column: 2 },
      { row: 2, column: 0 },
    ])
    expect(new Set(cells.map(getCellKey)).size).toBe(3)
    vi.restoreAllMocks()
  })

  it('rejects a cell count larger than the board', () => {
    expect(() => generateActiveCells(2, 5)).toThrow(
      'Cell count cannot be larger than the board.',
    )
  })
})

describe('isAnswerCorrect', () => {
  const activeCells = [
    { row: 0, column: 1 },
    { row: 2, column: 2 },
  ]

  it('returns true when the selected cells match the active cells', () => {
    const selectedCells = new Set(['0-1', '2-2'])

    expect(isAnswerCorrect(activeCells, selectedCells)).toBe(true)
  })

  it('returns false when a cell is missing or extra', () => {
    expect(isAnswerCorrect(activeCells, new Set(['0-1']))).toBe(false)
    expect(isAnswerCorrect(activeCells, new Set(['0-1', '1-1']))).toBe(false)
  })
})

describe('updateStatsAfterSession', () => {
  it('increments games played and games won for a correct answer', () => {
    expect(updateStatsAfterSession({ gamesPlayed: 2, gamesWon: 1 }, true)).toEqual({
      gamesPlayed: 3,
      gamesWon: 2,
    })
  })

  it('increments only games played for an incorrect answer', () => {
    expect(updateStatsAfterSession({ gamesPlayed: 2, gamesWon: 1 }, false)).toEqual({
      gamesPlayed: 3,
      gamesWon: 1,
    })
  })
})
