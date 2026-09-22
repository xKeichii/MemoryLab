import type { ReactNode } from 'react'

type DashboardTemplateProps = {
  header: ReactNode
  children: ReactNode
}

export function DashboardTemplate({ header, children }: DashboardTemplateProps) {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 text-slate-700 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {header}
        {children}
      </div>
    </main>
  )
}