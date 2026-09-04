/**
 * Suspense fallback for lazily-loaded screens. It mirrors the shape most
 * screens actually have — a photographic plate, a headline, then rows — so
 * the wait reads as the page arriving rather than as a spinner.
 */
export default function PageLoader() {
  return (
    <div className="mx-auto max-w-md pb-28" aria-busy="true" aria-live="polite">
      <div className="shimmer aspect-[3/4] w-full" />
      <div className="px-6 pt-7">
        <div className="shimmer h-3 w-24 rounded-full" />
        <div className="shimmer mt-4 h-7 w-4/5 rounded-lg" />
        <div className="shimmer mt-2.5 h-7 w-2/5 rounded-lg" />
        <div className="mt-6 space-y-2.5">
          <div className="shimmer h-3.5 w-full rounded-full" />
          <div className="shimmer h-3.5 w-11/12 rounded-full" />
          <div className="shimmer h-3.5 w-3/4 rounded-full" />
        </div>
      </div>
      <div className="mt-8 space-y-3 px-5">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex gap-4 rounded-2xl border border-atlas-line bg-atlas-surface p-3"
          >
            <div className="shimmer aspect-[4/5] w-[68px] shrink-0 rounded-xl" />
            <div className="flex-1 space-y-2.5 py-2">
              <div className="shimmer h-2.5 w-16 rounded-full" />
              <div className="shimmer h-4 w-2/3 rounded-full" />
              <div className="shimmer h-3 w-1/2 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
