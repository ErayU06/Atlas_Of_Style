import type { Country } from '@/types/country'
import { pick } from '@/types/country'
import { useApp } from '@/context/AppContext'
import { regionLabel } from '@/i18n'
import FashionCard from '@/components/FashionCard'
import FavoriteButton from '@/components/FavoriteButton'

/**
 * A country as a list row. Kept as its own component because it is the
 * app's country-shaped entry point, but the visuals now come from the shared
 * `FashionCard` so there is only one card system to maintain.
 */
export default function CountryCard({
  country,
  index = 0,
}: {
  country: Country
  index?: number
}) {
  const { lang } = useApp()

  return (
    <FashionCard
      variant="row"
      to={`/country/${country.slug}`}
      image={`/images/${country.slug}-1.jpg`}
      imageAlt={`${country.name.en} everyday street style`}
      kicker={regionLabel(country.region, lang)}
      emblem={country.flag}
      title={pick(country.name, lang)}
      description={pick(country.tagline, lang)}
      index={index}
      action={<FavoriteButton slug={country.slug} />}
    />
  )
}
