import { Globe, Check } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { allLangs, langNames } from '@/types/country'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function LanguageSwitcher() {
  const { lang, setLang } = useApp()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Language"
          className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm transition-colors hover:border-[#c2603a]/40"
        >
          <Globe size={14} />
          {lang.toUpperCase()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40 rounded-xl">
        {allLangs.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => setLang(l)}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span>{langNames[l]}</span>
            {l === lang && <Check size={14} className="text-[#c2603a]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
