import { Link, useParams, Navigate } from "react-router";
import { ChevronLeft, MapPin, Thermometer } from "lucide-react";
import { getCity } from "@/data/cities";
import { countries } from "@/data/countries";
import { pick } from "@/types/country";
import { useApp } from "@/context/AppContext";
import { t } from "@/i18n";
import PremiumGate from "@/components/PremiumGate";
import SmartImage from "@/components/SmartImage";
import { Button } from "@/components/ui/button";

export default function CityDetailPage() {
  const { slug } = useParams();
  const { lang } = useApp();
  const city = getCity(slug ?? "");
  const country = city
    ? countries.find(c => c.slug === city.countrySlug)
    : undefined;

  if (!city || !country) return <Navigate to="/" replace />;

  return (
    <div className="mx-auto max-w-md pb-[calc(7rem+var(--safe-bottom))]">
      {/* ---- Hero plate -------------------------------------------------- */}
      <div className="relative">
        <SmartImage
          src={`/images/city-${city.slug}.jpg`}
          alt={`${city.name.en} everyday street style`}
          ratio="portrait"
          priority
        >
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25"
            aria-hidden
          />
        </SmartImage>

        <div className="absolute inset-x-5 top-[calc(1.25rem+var(--safe-top))] flex items-center justify-between">
          <Link
            to={`/country/${country.slug}`}
            className="tap flex items-center gap-1 rounded-full bg-atlas-surface/85 px-3 py-1.5 text-xs font-semibold text-atlas-body shadow-card backdrop-blur-md"
          >
            <ChevronLeft size={16} className="rtl:rotate-180" />
            {t("backToCountry", lang)}
          </Link>
        </div>

        {/* Ülke detayıyla aynı başlık dili: kil çizgi + ülke adı üstte,
            şehir adı altta, fotoğraftan gölgeyle ayrılmış. */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
            <span className="inline-block h-[2px] w-5 shrink-0 rounded-full bg-atlas-clay" />
            {pick(country.name, lang)}
          </p>
          <h1
            className="mt-2 flex items-start gap-2.5 font-serif text-[38px] font-semibold leading-[1.02]"
            style={{
              textShadow: "0 2px 18px rgba(0,0,0,.6), 0 0 48px rgba(0,0,0,.45)",
            }}
          >
            <span className="mt-1 shrink-0 text-2xl leading-none">
              {country.flag}
            </span>
            <span className="min-w-0">{pick(city.name, lang)}</span>
          </h1>
        </div>
      </div>

      <PremiumGate>
        {/* ---- Standfirst ---------------------------------------------- */}
        <div className="px-6 pt-7">
          <h2 className="font-serif text-[23px] font-semibold leading-snug text-atlas-ink">
            {pick(city.tagline, lang)}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-atlas-body">
            {pick(city.description, lang)}
          </p>
        </div>

        {/* ---- Climate wall label -------------------------------------- */}
        <div className="mt-7 px-5">
          <div className="flex items-start gap-3.5 rounded-2xl border border-atlas-line bg-atlas-surface p-5 shadow-card">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-atlas-clay/[0.09] text-atlas-clay">
              <Thermometer size={18} />
            </span>
            <div>
              <p className="kicker">{t("climateLabel", lang)}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-atlas-body">
                {pick(city.climate, lang)}
              </p>
            </div>
          </div>
        </div>

        {/* ---- Next steps ---------------------------------------------- */}
        <div className="mt-5 space-y-3 px-5">
          <Button asChild variant="atlasSoft" size="pill" className="w-full">
            <Link to={`/packing/${country.slug}`}>
              🧳 {t("whatToWear", lang)}
            </Link>
          </Button>
          <Button asChild variant="atlasOutline" size="pill" className="w-full">
            <Link to={`/country/${country.slug}`}>
              <MapPin size={15} />
              {country.flag} {pick(country.name, lang)}
            </Link>
          </Button>
        </div>
      </PremiumGate>
    </div>
  );
}
