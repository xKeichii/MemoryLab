type ButtonProps = {
  children: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const classes = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </button>
  )
}