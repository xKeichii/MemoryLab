
import { StatItem } from '../../molecules/StatItem/StatItem'
import { Heading } from '../../atoms/Heading/Heading'
import type { GameStats } from '../../../types/GameStats'

type MemoryOverviewProps = {
  stats: GameStats
}

export function MemoryOverview({ stats }: MemoryOverviewProps) {
  const winRate = stats.gamesPlayed === 0
    ? 0
    : Math.round((stats.gamesWon / stats.gamesPlayed) * 100)

  return (
    <section className="space-y-6">
      <div>
        <Heading>Statystyki</Heading>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <StatItem label="Ilość gier" value={stats.gamesPlayed.toString()} />
          <StatItem label="Ilość wygranych" value={stats.gamesWon.toString()} />
          <StatItem label="Procent wygranych gier" value={`${winRate}%`} />
        </div>
      </div>
    </section>
  )
}