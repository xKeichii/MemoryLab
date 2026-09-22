type StatItemProps = {
  label: string
  value: string
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="border-l-2 border-blue-500 pl-3">
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  )
}