import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ChevronLeft, Sparkles, RotateCcw } from 'lucide-react'
import { quizQuestions, styleProfiles } from '@/data/quiz'
import { countries } from '@/data/countries'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'
import PremiumGate from '@/components/PremiumGate'
import ProBadge from '@/components/ProBadge'

export default function QuizPage() {
  const { lang } = useApp()
  const [step, setStep] = useState(-1) // -1 = intro
  const [scores, setScores] = useState<Record<string, number>>({})

  const result = useMemo(() => {
    if (step < quizQuestions.length) return null
    let best = styleProfiles[0]
    let bestScore = -1
    for (const p of styleProfiles) {
      const s = scores[p.key] ?? 0
      if (s > bestScore) {
        bestScore = s
        best = p
      }
    }
    return best
  }, [step, scores])

  const answer = (profiles: string[]) => {
    setScores((prev) => {
      const next = { ...prev }
      for (const p of profiles) next[p] = (next[p] ?? 0) + 1
      return next
    })
    setStep((s) => s + 1)
  }

  const restart = () => {
    setStep(-1)
    setScores({})
  }

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-6">
      <Link
        to="/tools"
        className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm"
      >
        <ChevronLeft size={16} />
        {t('back', lang)}
      </Link>

      <PremiumGate>
      {/* Intro */}
      {step === -1 && (
        <div className="mt-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c2603a]/10 text-[#c2603a]">
            <Sparkles size={28} />
          </div>
          <h1 className="mt-5 font-serif text-4xl font-semibold text-stone-900">
            {t('quizCard', lang)}
          </h1>
          <div className="mt-2 flex justify-center">
            <ProBadge />
          </div>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-stone-500">
            {t('quizCardDesc', lang)}
          </p>
          <button
            onClick={() => setStep(0)}
            className="mt-8 rounded-full bg-[#c2603a] px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#a9512f]"
          >
            {t('quizStart', lang)}
          </button>
        </div>
      )}

      {/* Questions */}
      {step >= 0 && step < quizQuestions.length && (
        <div className="mt-8">
          <div className="mb-6">
            <div className="flex justify-between text-xs text-stone-400">
              <span>
                {step + 1} / {quizQuestions.length}
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-[#c2603a] transition-all duration-300"
                style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>
          <h2 className="font-serif text-2xl font-semibold leading-snug text-stone-900">
            {pick(quizQuestions[step].text, lang)}
          </h2>
          <div className="mt-6 space-y-3">
            {quizQuestions[step].options.map((opt) => (
              <button
                key={opt.label.en}
                onClick={() => answer(opt.profiles)}
                className="w-full rounded-2xl border border-stone-200 bg-white p-4 text-left text-sm text-stone-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#c2603a]/40 hover:shadow-md"
              >
                {pick(opt.label, lang)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-10">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-400">
            {t('quizYourStyle', lang)}
          </p>
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm">
            <div className="text-5xl">{result.emoji}</div>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900">
              {pick(result.name, lang)}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {pick(result.description, lang)}
            </p>
          </div>

          <h3 className="mb-3 mt-8 font-serif text-lg font-semibold text-stone-900">
            {t('quizMatchCountries', lang)}
          </h3>
          <div className="space-y-3">
            {result.countries.map((slug) => {
              const c = countries.find((x) => x.slug === slug)
              if (!c) return null
              return (
                <Link
                  key={slug}
                  to={`/country/${slug}`}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                    <img
                      src={`/images/${slug}-1.jpg`}
                      alt={c.name.en}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-stone-900">
                      {c.flag} {pick(c.name, lang)}
                    </h4>
                    <p className="truncate text-sm text-stone-500">{pick(c.tagline, lang)}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <button
            onClick={restart}
            className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-2.5 text-sm font-medium text-stone-600 shadow-sm transition-colors hover:border-[#c2603a]/40"
          >
            <RotateCcw size={15} />
            {t('quizRestart', lang)}
          </button>
        </div>
      )}
      </PremiumGate>
    </div>
  )
}
