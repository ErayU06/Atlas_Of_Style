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
import SectionHeading from '@/components/SectionHeading'
import FashionCard from '@/components/FashionCard'
import { Button } from '@/components/ui/button'

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
        className="tap inline-flex items-center gap-1 rounded-full border border-atlas-line bg-atlas-surface px-3 py-1.5 text-xs font-semibold text-atlas-body shadow-card"
      >
        <ChevronLeft size={16} className="rtl:rotate-180" />
        {t('back', lang)}
      </Link>

      <PremiumGate>
        {/* ---- Intro ---------------------------------------------------- */}
        {step === -1 && (
          <div className="animate-fade-up mt-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-atlas-clay/[0.09] text-atlas-clay">
              <Sparkles size={28} />
            </div>
            <h1 className="mt-6 font-serif text-[34px] font-semibold leading-[1.08] text-atlas-ink">
              {t('quizCard', lang)}
            </h1>
            <div className="mt-3 flex justify-center">
              <ProBadge />
            </div>
            <p className="mx-auto mt-3.5 max-w-[30ch] text-[13px] leading-relaxed text-atlas-muted">
              {t('quizCardDesc', lang)}
            </p>
            <Button variant="atlas" size="pill" className="mt-8" onClick={() => setStep(0)}>
              {t('quizStart', lang)}
            </Button>
          </div>
        )}

        {/* ---- Questions ------------------------------------------------ */}
        {step >= 0 && step < quizQuestions.length && (
          <div className="mt-9">
            <div className="mb-7">
              <div className="flex justify-between text-[11px] font-semibold tabular-nums text-atlas-muted">
                <span>
                  {step + 1} / {quizQuestions.length}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-atlas-line">
                <div
                  className="h-full rounded-full bg-atlas-clay transition-[width] duration-500 ease-out"
                  style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Keyed on the step so each question arrives with its own fade. */}
            <div key={step} className="animate-fade-up">
              <h2 className="font-serif text-[26px] font-semibold leading-snug text-atlas-ink">
                {pick(quizQuestions[step].text, lang)}
              </h2>
              <div className="mt-6 space-y-3">
                {quizQuestions[step].options.map((opt, i) => (
                  <button
                    key={opt.label.en}
                    onClick={() => answer(opt.profiles)}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="tap animate-fade-up w-full rounded-2xl border border-atlas-line bg-atlas-surface p-4 text-start text-sm leading-relaxed text-atlas-body shadow-card transition-colors duration-200 hover:border-atlas-clay/40 hover:text-atlas-ink"
                  >
                    {pick(opt.label, lang)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---- Result --------------------------------------------------- */}
        {result && (
          <div className="mt-11">
            <p className="kicker text-center">{t('quizYourStyle', lang)}</p>
            <div className="animate-fade-up mt-4 rounded-3xl border border-atlas-line bg-atlas-surface p-7 text-center shadow-card">
              {/* The result lands like a stamp — one celebration, then still. */}
              <div className="animate-stamp-in mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-atlas-clay/45 bg-atlas-clay/[0.07] text-[34px]">
                {result.emoji}
              </div>
              <h1 className="mt-5 font-serif text-[30px] font-semibold leading-tight text-atlas-ink">
                {pick(result.name, lang)}
              </h1>
              <p className="mt-3.5 text-[14px] leading-relaxed text-atlas-body">
                {pick(result.description, lang)}
              </p>
            </div>

            <div className="mt-10">
              <SectionHeading
                kicker={t('quizYourStyle', lang)}
                title={t('quizMatchCountries', lang)}
              />
              <div className="space-y-2.5">
                {result.countries.map((slug, i) => {
                  const c = countries.find((x) => x.slug === slug)
                  if (!c) return null
                  return (
                    <FashionCard
                      key={slug}
                      variant="row"
                      to={`/country/${slug}`}
                      image={`/images/${slug}-1.jpg`}
                      imageAlt={`${c.name.en} everyday street style`}
                      emblem={c.flag}
                      title={pick(c.name, lang)}
                      description={pick(c.tagline, lang)}
                      index={i}
                    />
                  )
                })}
              </div>
            </div>

            <Button
              variant="atlasOutline"
              size="pill"
              className="mx-auto mt-9 flex"
              onClick={restart}
            >
              <RotateCcw size={15} />
              {t('quizRestart', lang)}
            </Button>
          </div>
        )}
      </PremiumGate>
    </div>
  )
}
