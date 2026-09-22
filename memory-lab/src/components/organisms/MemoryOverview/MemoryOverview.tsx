
import { StatItem } from '../../molecules/StatItem/StatItem'
import { Heading } from '../../atoms/Heading/Heading'

export function MemoryOverview() {
  return (
    <section className="space-y-6">
      <div>
        <Heading>Statystyki</Heading>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <StatItem label="Ukończone sesje" value="12" />
          <StatItem label="Najlepsza seria" value="8 dni" />
          <StatItem label="Średnia dokładność" value="86%" />
        </div>
      </div>
    </section>
  )
}