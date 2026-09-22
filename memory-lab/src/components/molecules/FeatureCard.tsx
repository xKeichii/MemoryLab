import { Badge } from '../atoms/Badge'
import { Heading } from '../atoms/Heading'

type FeatureCardProps = {
  title: string
  description: string
  status: string
  tone?: 'blue' | 'green' | 'slate'
}

export function FeatureCard({ title, description, status, tone }: FeatureCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <Heading level={3}>{title}</Heading>
        <Badge tone={tone}>{status}</Badge>
      </div>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </article>
  )
}