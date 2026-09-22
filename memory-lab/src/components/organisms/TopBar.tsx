import { Button } from '../atoms/Button'

type TopBarProps = {
  onStart: () => void
}

export function TopBar({ onStart }: TopBarProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Memory Lab</p>
        <p className="mt-1 text-sm text-slate-500">Panel ćwiczeń pamięci</p>
      </div>
      <Button onClick={onStart}>Rozpocznij sesję</Button>
    </header>
  )
}