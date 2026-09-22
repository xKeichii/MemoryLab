type HeadingProps = {
  children: string
  level?: 1 | 2 | 3
}

export function Heading({ children, level = 2 }: HeadingProps) {
  const classes = level === 1
    ? 'text-3xl font-bold tracking-tight text-slate-900'
    : level === 2
      ? 'text-xl font-bold text-slate-900'
      : 'text-base font-semibold text-slate-900'

  if (level === 1) return <h1 className={classes}>{children}</h1>
  if (level === 2) return <h2 className={classes}>{children}</h2>
  return <h3 className={classes}>{children}</h3>
}