/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Atlas of Style brand scale. Every screen composes from these so the
        // whole app reads as one brand in both light and dark mode.
        atlas: {
          paper: "hsl(var(--atlas-paper) / <alpha-value>)",
          surface: "hsl(var(--atlas-surface) / <alpha-value>)",
          soft: "hsl(var(--atlas-surface-soft) / <alpha-value>)",
          ink: "hsl(var(--atlas-ink) / <alpha-value>)",
          body: "hsl(var(--atlas-ink-soft) / <alpha-value>)",
          muted: "hsl(var(--atlas-ink-muted) / <alpha-value>)",
          line: "hsl(var(--atlas-line) / <alpha-value>)",
          clay: "hsl(var(--atlas-clay) / <alpha-value>)",
          deep: "hsl(var(--atlas-clay-deep) / <alpha-value>)",
          gold: "hsl(var(--atlas-gold) / <alpha-value>)",
        },
        // Driven by the Time Travel screen, which swaps the era atmosphere.
        era: {
          tint: "hsl(var(--era-tint) / <alpha-value>)",
          wash: "hsl(var(--era-wash) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        // Soft, warm-tinted elevation instead of neutral black blur.
        card: "0 1px 2px hsl(28 20% 20% / 0.04), 0 8px 24px -12px hsl(28 20% 20% / 0.14)",
        lift: "0 2px 6px hsl(28 20% 20% / 0.06), 0 20px 40px -20px hsl(28 20% 20% / 0.22)",
      },
      // Consistent editorial crops used across cards and heroes.
      aspectRatio: {
        editorial: "4 / 5",
        portrait: "3 / 4",
        story: "16 / 10",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        // --- Atlas micro-interactions (transform/opacity only: GPU friendly) --
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0, 12px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "era-in": {
          from: { opacity: "0", transform: "scale(1.04)", filter: "blur(6px)" },
          to: { opacity: "1", transform: "scale(1)", filter: "blur(0)" },
        },
        // Era portal: scale + blur only, so the image's own opacity fade is
        // free to crossfade over the outgoing decade underneath it.
        "portal-in": {
          from: { transform: "scale(1.05)", filter: "blur(5px)" },
          to: { transform: "scale(1)", filter: "blur(0)" },
        },
        "portal-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.985)" },
        },
        "heart-pop": {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.35)" },
          "70%": { transform: "scale(0.92)" },
          "100%": { transform: "scale(1)" },
        },
        "stamp-in": {
          "0%": { opacity: "0", transform: "scale(1.6) rotate(-14deg)" },
          "55%": { opacity: "1", transform: "scale(0.94) rotate(-4deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-6deg)" },
        },
        "sheen": {
          "0%": { transform: "translate3d(-120%, 0, 0)" },
          "100%": { transform: "translate3d(220%, 0, 0)" },
        },
        "float-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 8px, 0) scale(0.96)" },
          "12%": { opacity: "1", transform: "translate3d(0, 0, 0) scale(1)" },
          "88%": { opacity: "1", transform: "translate3d(0, 0, 0) scale(1)" },
          "100%": { opacity: "0", transform: "translate3d(0, -6px, 0) scale(0.98)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.4s ease-out both",
        "era-in": "era-in 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        "portal-in": "portal-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "portal-out": "portal-out 0.6s ease-in both",
        "heart-pop": "heart-pop 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "stamp-in": "stamp-in 0.55s cubic-bezier(0.34, 1.4, 0.64, 1) both",
        "sheen": "sheen 1.6s ease-in-out",
        "float-up": "float-up 2.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
