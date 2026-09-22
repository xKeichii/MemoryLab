import { useState } from 'react'
import { Heading } from '../components/atoms/Heading'
import { MemoryOverview } from '../components/organisms/MemoryOverview'
import { TopBar } from '../components/organisms/TopBar'
import { DashboardTemplate } from '../components/templates/DashboardTemplate'

export function HomePage() {
  const [message, setMessage] = useState('Wybierz tryb, aby rozpocząć naukę.')

  return (
    <DashboardTemplate
      header={<TopBar onStart={() => setMessage('Sesja została rozpoczęta. Powodzenia!')} />}
    >
      <section className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">Dzisiejszy cel</p>
        <Heading level={1}>Trenuj pamięć małymi krokami.</Heading>
        <p className="mt-3 max-w-xl text-blue-100">{message}</p>
      </section>
      <MemoryOverview />
    </DashboardTemplate>
  )
}