import type { ReactNode } from "react";
import { Link } from "react-router";
import { UserRoundPlus } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/hooks/useAuth";
import { t } from "@/i18n";
import { Button } from "@/components/ui/button";

export default function PremiumGate({ children }: { children: ReactNode }) {
  const { lang } = useApp();
  const { isAuthenticated, isLoading } = useAuth();

  if (isAuthenticated || isLoading) return <>{children}</>;

  return (
    <div className="relative">
      {/* Bulanık önizleme sabit yükseklikte: uzun bir bölümde kart sayfanın
          ortasına kaçıp üstte yarım kalmış içerik bırakmasın. */}
      <div
        className="pointer-events-none max-h-[320px] select-none overflow-hidden opacity-50 blur-[6px]"
        style={{
          maskImage: "linear-gradient(to bottom, #000 55%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent)",
        }}
        aria-hidden
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="animate-fade-up w-full max-w-xs rounded-3xl border border-atlas-clay/25 bg-atlas-surface/95 p-6 text-center shadow-lift backdrop-blur-md">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-atlas-clay text-white shadow-card">
            <UserRoundPlus size={22} />
          </div>
          <h3 className="mt-3.5 font-serif text-[20px] font-semibold text-atlas-ink">
            {t("premiumFeature", lang)}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-atlas-muted">
            {t("premiumFeatureDesc", lang)}
          </p>
          <Button asChild variant="atlas" size="pill-sm" className="mt-5">
            <Link to="/login">{t("goPremium", lang)}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
