type BadgeProps = {
  children: string
  tone?: 'blue' | 'green' | 'slate'
}

const toneClasses = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  slate: 'bg-slate-100 text-slate-600',
}

export function Badge({ children, tone = 'slate' }: BadgeProps) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}>
      {children}
    </span>
  )
}