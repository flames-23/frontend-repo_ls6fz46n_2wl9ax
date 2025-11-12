import { useState } from 'react'

const translations = {
  en: {
    nav: {
      home: 'Home',
      properties: 'Properties',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      titleLine1: 'Find your next',
      titleLine2: 'home with IMMOTUCAN',
      subtitle: 'Premium real estate across Austria – tailored search, expert guidance, and seamless transactions.',
      ctaPrimary: 'Browse Listings',
      ctaSecondary: 'Get in Touch',
    },
    highlights: {
      trust: 'Trusted local expertise',
      luxury: 'Handpicked quality',
      service: 'End‑to‑end service',
    },
    properties: {
      heading: 'Featured Properties',
      items: [
        { title: 'Modern Apartment • Vienna 3', info: '2 Bedrooms • 86 m² • Balcony', price: '€ 649,000' },
        { title: 'Family House • Bruck/Leitha', info: '4 Bedrooms • 165 m² • Garden', price: '€ 729,000' },
        { title: 'City Loft • Salzburg', info: '1 Bedroom • 64 m² • City view', price: '€ 489,000' },
      ],
      note: 'Contact us for the full portfolio and off‑market opportunities.'
    },
    services: {
      heading: 'Our Services',
      items: [
        { title: 'Sale & Purchase', text: 'Accurate valuation, bespoke marketing, and negotiation to maximize outcomes.' },
        { title: 'Lettings', text: 'Tenant screening, contracts, and ongoing management with clear reporting.' },
        { title: 'Consulting', text: 'Investment strategy, market insights, and due diligence support.' },
      ]
    },
    contact: {
      heading: 'Contact',
      sub: 'How can we help? Send us a message and we’ll get back to you shortly.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      addressLabel: 'Office',
      address: 'ImmoTucan GmbH\nHöfleiner Straße 29\n2460 Bruck/Leitha',
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  de: {
    nav: {
      home: 'Start',
      properties: 'Immobilien',
      services: 'Leistungen',
      contact: 'Kontakt',
    },
    hero: {
      titleLine1: 'Finden Sie Ihr nächstes',
      titleLine2: 'Zuhause mit IMMOTUCAN',
      subtitle: 'Premium‑Immobilien in ganz Österreich – maßgeschriebene Suche, kompetente Beratung und reibungslose Abwicklung.',
      ctaPrimary: 'Angebote ansehen',
      ctaSecondary: 'Kontakt aufnehmen',
    },
    highlights: {
      trust: 'Vertrauensvolle lokale Expertise',
      luxury: 'Sorgfältig ausgewählte Qualität',
      service: 'Service von A bis Z',
    },
    properties: {
      heading: 'Ausgewählte Immobilien',
      items: [
        { title: 'Modernes Apartment • Wien 3', info: '2 Zimmer • 86 m² • Balkon', price: '€ 649.000' },
        { title: 'Familienhaus • Bruck/Leitha', info: '4 Zimmer • 165 m² • Garten', price: '€ 729.000' },
        { title: 'City Loft • Salzburg', info: '1 Zimmer • 64 m² • Stadtblick', price: '€ 489.000' },
      ],
      note: 'Kontaktieren Sie uns für das vollständige Portfolio und Off‑Market Angebote.'
    },
    services: {
      heading: 'Unsere Leistungen',
      items: [
        { title: 'Verkauf & Ankauf', text: 'Präzise Bewertung, gezieltes Marketing und Verhandlung für beste Ergebnisse.' },
        { title: 'Vermietung', text: 'Mieterauswahl, Verträge und laufende Verwaltung mit klaren Reports.' },
        { title: 'Beratung', text: 'Investmentstrategie, Marktanalysen und Unterstützung bei der Due Diligence.' },
      ]
    },
    contact: {
      heading: 'Kontakt',
      sub: 'Wie können wir helfen? Schreiben Sie uns – wir melden uns umgehend.',
      name: 'Name',
      email: 'E‑Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      addressLabel: 'Büro',
      address: 'ImmoTucan GmbH\nHöfleiner Straße 29\n2460 Bruck/Leitha',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.'
    }
  }
}

const accent = '#FF9500'
const heading = '#1A1A1A'
const background = '#F9F9F9'

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-sm" style={{ backgroundColor: accent }} />
      <span className="text-xl font-semibold tracking-wide" style={{ color: heading }}>IMMOTUCAN</span>
    </div>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight" style={{ color: heading, fontFamily: 'Playfair Display, serif' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-600">{subtitle}</p>
      )}
      <div className="mx-auto mt-5 h-1 w-20 rounded" style={{ backgroundColor: accent }} />
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('de')
  const t = translations[lang]

  return (
    <div className="min-h-screen" style={{ backgroundColor: background }}>
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Brand />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#home" className="hover:text-gray-900">{t.nav.home}</a>
            <a href="#properties" className="hover:text-gray-900">{t.nav.properties}</a>
            <a href="#services" className="hover:text-gray-900">{t.nav.services}</a>
            <a href="#contact" className="hover:text-gray-900">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang('de')} className={`px-3 py-1 rounded text-sm border ${lang==='de' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300'}`}>DE</button>
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded text-sm border ${lang==='en' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300'}`}>EN</button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: accent }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight" style={{ color: heading, fontFamily: 'Playfair Display, serif' }}>
              {t.hero.titleLine1}
              <span className="block">
                {t.hero.titleLine2}
                <span className="block mt-3 w-28 h-1 rounded" style={{ backgroundColor: accent }} />
              </span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-xl" style={{ fontFamily: 'Open Sans, Inter, system-ui, sans-serif' }}>
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#properties" className="px-5 py-3 rounded-md text-white font-medium" style={{ backgroundColor: accent }}> {t.hero.ctaPrimary} </a>
              <a href="#contact" className="px-5 py-3 rounded-md border border-gray-300 text-gray-800 font-medium bg-white">{t.hero.ctaSecondary}</a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[t.highlights.trust, t.highlights.luxury, t.highlights.service].map((h, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                  <p className="text-sm text-gray-700">{h}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white border border-gray-100 shadow overflow-hidden">
              <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" alt="Modern home" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.properties.heading} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.properties.items.map((p, i) => (
              <article key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={`https://images.unsplash.com/${['photo-1494526585095-c41746248156','photo-1505691723518-36a5ac3b2d95','photo-1505691723518-36a5ac3b2d95'][i % 3]}?q=80&w=1200&auto=format&fit=crop`}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold" style={{ color: heading, fontFamily: 'Playfair Display, serif' }}>{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.info}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-base font-semibold" style={{ color: heading }}>{p.price}</span>
                    <button className="text-sm font-medium px-3 py-1.5 rounded border bg-white" style={{ borderColor: accent, color: heading }}>Details</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-600 text-sm">{t.properties.note}</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.services.heading} />
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.items.map((s, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4" style={{ backgroundColor: '#FFF3E6', color: '#A44F00' }}>🏡</div>
                <h3 className="text-xl font-semibold" style={{ color: heading, fontFamily: 'Playfair Display, serif' }}>{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
          <div>
            <SectionHeading title={t.contact.heading} subtitle={t.contact.sub} />
            <div className="rounded-xl border border-gray-100 p-6 bg-white shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.contact.name}</label>
                  <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: '#E5E7EB' }} placeholder="" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.contact.email}</label>
                  <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2" placeholder="" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.contact.message}</label>
                  <textarea rows="4" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2" />
                </div>
                <button className="px-5 py-3 rounded-md text-white font-medium" style={{ backgroundColor: accent }}>{t.contact.send}</button>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-xl border border-gray-100 p-6 bg-white shadow-sm">
              <h4 className="text-lg font-semibold" style={{ color: heading, fontFamily: 'Playfair Display, serif' }}>{t.contact.addressLabel}</h4>
              <p className="mt-2 whitespace-pre-line text-gray-700">{t.contact.address}</p>
              <div className="mt-4 h-40 rounded-md overflow-hidden bg-gray-100">
                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Brand />
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} IMMOTUCAN. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
