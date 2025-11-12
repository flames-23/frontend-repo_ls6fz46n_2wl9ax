import React, { useMemo, useState } from 'react'

const HERO_URL = 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bruck_an_der_Leitha_-_Hauptplatz.JPG'

const translations = {
  en: {
    nav: { home: 'Home', properties: 'Properties', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'Real Estate in Bruck an der Leitha',
      subtitle: 'Buying, selling, and renting with local expertise.'
    },
    highlights: {
      title: 'Why choose IMMOTUCAN',
      items: ['Local market knowledge', 'Transparent process', 'Full-service support']
    },
    featured: { title: 'Featured Properties' },
    services: { title: 'Our Services', items: ['Sales & Valuations', 'Lettings & Management', 'Buyer Representation'] },
    contact: {
      title: 'Contact IMMOTUCAN',
      description: 'Send us a message and we will get back to you shortly.',
      name: 'Name', email: 'Email', phone: 'Phone', message: 'Message', submit: 'Send message',
      addressTitle: 'Office',
      address: 'ImmoTucan GmbH, Höfleiner Straße 29, 2460 Bruck/Leitha',
      success: 'Thanks! Your inquiry has been sent.',
      error: 'Sorry, something went wrong. Please try again.'
    },
    footer: { copyright: '© ' }
  },
  de: {
    nav: { home: 'Start', properties: 'Immobilien', services: 'Leistungen', contact: 'Kontakt' },
    hero: {
      title: 'Immobilien in Bruck an der Leitha',
      subtitle: 'Kaufen, verkaufen und mieten mit lokaler Expertise.'
    },
    highlights: {
      title: 'Warum IMMOTUCAN',
      items: ['Lokale Marktkenntnis', 'Transparenter Ablauf', 'Rundum‑Service']
    },
    featured: { title: 'Ausgewählte Objekte' },
    services: { title: 'Unsere Leistungen', items: ['Verkauf & Bewertung', 'Vermietung & Verwaltung', 'Käufervertretung'] },
    contact: {
      title: 'Kontakt IMMOTUCAN',
      description: 'Schreiben Sie uns – wir melden uns in Kürze.',
      name: 'Name', email: 'E‑Mail', phone: 'Telefon', message: 'Nachricht', submit: 'Nachricht senden',
      addressTitle: 'Büro',
      address: 'ImmoTucan GmbH, Höfleiner Straße 29, 2460 Bruck/Leitha',
      success: 'Danke! Ihre Anfrage wurde gesendet.',
      error: 'Entschuldigung, da ist etwas schiefgelaufen. Bitte erneut versuchen.'
    },
    footer: { copyright: '© ' }
  }
}

function useI18n(initial = 'de') {
  const [lang, setLang] = useState(initial)
  const t = useMemo(() => translations[lang], [lang])
  return { lang, setLang, t }
}

const Section = ({ id, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 py-16">{children}</section>
)

function Navbar({ lang, setLang, t }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl tracking-tight text-brand-black">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-orange mr-2 align-middle"></span>
          IMMOTUCAN
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-brand-black/80">
          <a href="#home" className="hover:text-brand-black">{t.nav.home}</a>
          <a href="#properties" className="hover:text-brand-black">{t.nav.properties}</a>
          <a href="#services" className="hover:text-brand-black">{t.nav.services}</a>
          <a href="#contact" className="hover:text-brand-black">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Deutsch" onClick={() => setLang('de')} className={`px-2 py-1 rounded text-sm ${lang==='de'?'bg-brand-orange text-white':'hover:bg-black/5'}`}>DE</button>
          <button aria-label="English" onClick={() => setLang('en')} className={`px-2 py-1 rounded text-sm ${lang==='en'?'bg-brand-orange text-white':'hover:bg-black/5'}`}>EN</button>
        </div>
      </div>
    </header>
  )
}

function Hero({ t }) {
  return (
    <div id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
      <img src={HERO_URL} alt="Bruck an der Leitha Hauptplatz" className="w-full h-[60vh] object-cover" />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg">{t.hero.title}</h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl">{t.hero.subtitle}</p>
          <a href="#contact" className="inline-block mt-8 bg-brand-orange text-white px-6 py-3 rounded shadow hover:opacity-90">{t.nav.contact}</a>
        </div>
      </div>
    </div>
  )
}

function Highlights({ t }) {
  return (
    <Section>
      <h2 className="font-display text-3xl mb-8">{t.highlights.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {t.highlights.items.map((item, idx) => (
          <div key={idx} className="p-6 bg-white rounded shadow-sm border">
            <div className="w-10 h-1 bg-brand-orange mb-4"></div>
            <p className="text-brand-black/90">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Featured({ t }) {
  return (
    <Section id="properties">
      <h2 className="font-display text-3xl mb-8">{t.featured.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-white rounded border overflow-hidden">
            <div className="aspect-video bg-black/10"></div>
            <div className="p-4">
              <h3 className="font-semibold">{`Listing ${i}`}</h3>
              <p className="text-sm text-black/60">Bruck an der Leitha</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Services({ t }) {
  return (
    <Section id="services">
      <h2 className="font-display text-3xl mb-8">{t.services.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {t.services.items.map((item, idx) => (
          <div key={idx} className="p-6 bg-white rounded shadow-sm border">
            <h3 className="font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setForm({ name: '', email: '', phone: '', message: '' })
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <h2 className="font-display text-3xl mb-4">{t.contact.title}</h2>
      <p className="text-black/70 mb-8">{t.contact.description}</p>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white p-6 rounded border shadow-sm space-y-4">
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder={t.contact.name} className="w-full border rounded px-3 py-2" />
          <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder={t.contact.email} className="w-full border rounded px-3 py-2" />
          <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder={t.contact.phone} className="w-full border rounded px-3 py-2" />
          <textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder={t.contact.message} className="w-full border rounded px-3 py-2" />
          <button disabled={status==='loading'} className="bg-brand-orange text-white px-4 py-2 rounded disabled:opacity-50">{t.contact.submit}</button>
          {status==='success' && <p className="text-green-600 text-sm">{t.contact.success}</p>}
          {status==='error' && <p className="text-red-600 text-sm">{t.contact.error}</p>}
        </form>
        <div className="bg-white p-6 rounded border shadow-sm">
          <h3 className="font-semibold mb-2">{t.contact.addressTitle}</h3>
          <p className="text-black/70">{t.contact.address}</p>
          <div className="h-48 mt-4 rounded overflow-hidden">
            <img src={HERO_URL} alt="Bruck an der Leitha" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function App() {
  const { lang, setLang, t } = useI18n('de')
  return (
    <div className="font-sans bg-brand-bg min-h-screen">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Highlights t={t} />
      <Featured t={t} />
      <Services t={t} />
      <Contact t={t} />
      <footer className="border-t py-8 text-center text-sm text-black/60">
        <div className="max-w-6xl mx-auto px-6">IMMOTUCAN · {new Date().getFullYear()}</div>
      </footer>
    </div>
  )
}
