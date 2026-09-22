import type { GameStats } from '../types/GameStats'

const STORAGE_KEY = 'memory-matrix-stats'

const defaultStats: GameStats = {
  gamesPlayed: 0,
  gamesWon: 0,
}

export function getStats(): GameStats {
  const savedStats = localStorage.getItem(STORAGE_KEY)

  if (!savedStats) {
    return defaultStats
  }

  return JSON.parse(savedStats)
}

export function saveStats(stats: GameStats): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(stats)
  )
}