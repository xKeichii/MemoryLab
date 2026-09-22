import { FeatureCard } from '../molecules/FeatureCard'
import { StatItem } from '../molecules/StatItem'
import { Heading } from '../atoms/Heading'

export function MemoryOverview() {
  return (
    <section className="space-y-6">
      <div>
        <Heading>Twój postęp</Heading>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <StatItem label="Ukończone sesje" value="12" />
          <StatItem label="Najlepsza seria" value="8 dni" />
          <StatItem label="Średnia dokładność" value="86%" />
        </div>
      </div>
      <div>
        <Heading>Tryby nauki</Heading>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <FeatureCard title="Klasyczny" description="Ćwicz spokojnie i zapamiętuj kolejne pary." status="Dostępny" tone="green" />
          <FeatureCard title="Na czas" description="Sprawdź, ile kart rozpoznasz w jednej minucie." status="Dostępny" tone="blue" />
          <FeatureCard title="Statystyki" description="Porównuj wyniki i obserwuj swój postęp." status="Wkrótce" />
        </div>
      </div>
    </section>
  )
}