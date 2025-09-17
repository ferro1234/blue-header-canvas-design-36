# Migrácia do Next.js - Návod

## Úvod
Tento React projekt je teraz optimalizovaný pre SEO s potrebnými meta tagmi, semantic HTML a structured data. Pre plnú migráciu do Next.js postupujte podľa tohto návodu.

## Kroky migrácie

### 1. Vytvorenie Next.js projektu
```bash
npx create-next-app@latest printbe-nextjs --typescript --tailwind --eslint --app
cd printbe-nextjs
```

### 2. Inštalácia závislostí
```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip class-variance-authority clsx cmdk date-fns lucide-react sonner tailwind-merge tailwindcss-animate vaul
```

### 3. Štruktúra súborov v Next.js

```
app/
├── layout.tsx          # Root layout s meta tagmi
├── page.tsx           # Hlavná stránka (Index.tsx)
├── globals.css        # Skopírovaný z src/index.css
└── components/        # Všetky komponenty
    ├── ui/           # Radix UI komponenty
    ├── Header.tsx
    ├── HeroSection.tsx
    └── Footer.tsx
```

### 4. Úprava komponentov pre Next.js

#### app/layout.tsx
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PrintBe - DTF tlač | Digitálne termotransfery na textil',
  description: 'Profesionálna DTF tlač na textil. Vysoká kvalita, rýchla výroba, lákavé ceny. Denná kapacita až 110 bežných metrov.',
  keywords: 'DTF tlač, termotransfery, tlač na textil, potlač tričiek, digitálna tlač, PrintBe',
  authors: [{ name: 'PrintBe - Jaroslav Kušnirer' }],
  robots: 'index, follow',
  openGraph: {
    title: 'PrintBe - DTF tlač | Digitálne termotransfery na textil',
    description: 'Profesionálna DTF tlač na textil. Vysoká kvalita, rýchla výroba, lákavé ceny.',
    type: 'website',
    url: 'https://printbe.sk',
    images: ['https://printbe.sk/og-image.jpg'],
    locale: 'sk_SK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrintBe - DTF tlač | Digitálne termotransfery na textil',
    description: 'Profesionálna DTF tlač na textil. Vysoká kvalita, rýchla výroba, lákavé ceny.',
    images: ['https://printbe.sk/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://printbe.sk',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PrintBe',
  description: 'Profesionálna DTF tlač na textil a digitálne termotransfery',
  url: 'https://printbe.sk',
  telephone: '+0012345678',
  email: 'printbe@infor.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Košice',
    addressCountry: 'SK'
  },
  openingHours: 'Mo-Su 08:00-17:00',
  priceRange: '€€',
  service: {
    '@type': 'Service',
    name: 'DTF tlač na textil',
    description: 'Digitálne termotransfery pre potlač textilu'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

#### app/page.tsx
```tsx
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import { Footer } from '@/components/Footer'
// Import všetkých ostatných komponentov...

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      {/* Ostatné sekcie... */}
      <Footer />
    </div>
  )
}
```

### 5. Úpravy komponentov

1. **Odstráňte React Router**: Zmeňte `Link` z `react-router-dom` na `next/link`
2. **Image optimalizácia**: Použite `next/image` namiesto `<img>`
3. **Navigácia**: Upravte scroll funkcionalitu pre Next.js

### 6. Výhody Next.js migrácie

- **Server-side rendering (SSR)**: Lepšie SEO a načítanie
- **Static generation**: Rýchlejšie načítanie stránok
- **Image optimization**: Automatická optimalizácia obrázkov
- **Code splitting**: Automatické delenie kódu
- **Better SEO**: Metadata API pre lepšie SEO

### 7. Deployment

```bash
npm run build
npm start
```

Pre produkciu odporúčame Vercel (vytvorené tým istým tímom ako Next.js).

## Záver

Aktuálny React projekt je už SEO optimalizovaný. Migrácia do Next.js prinesie ďalšie výhody pre performance a SEO.