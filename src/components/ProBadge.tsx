import { Crown } from 'lucide-react'

export default function ProBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white shadow-sm">
      <Crown size={10} strokeWidth={2.5} />
      PRO
    </span>
  )
}
