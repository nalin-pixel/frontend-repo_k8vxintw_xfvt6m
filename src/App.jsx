import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Menu, X, Smartphone, Code2, Gauge, ShieldCheck, Rocket, Sparkles, Layers, Infinity, Link as LinkIcon, Star, Quote, ChevronRight } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border border-white/40 shadow/10 shadow-lg rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white font-bold">FB</div>
            <span className="font-semibold text-gray-900">Flames Blue Studio</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
            <a href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">Work</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">Testimonials</a>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors">
              Start a project <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 backdrop-blur bg-white/80 border border-white/40 shadow-lg rounded-2xl p-4 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#services" className="py-2">Services</a>
            <a onClick={() => setOpen(false)} href="#work" className="py-2">Work</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="py-2">Pricing</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="py-2">Testimonials</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 inline-flex items-center gap-2 bg-gray-900 text-white px-4 rounded-xl w-full justify-center">Start a project</a>
          </div>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-36 md:pt-40">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] bg-indigo-200/40 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                <Sparkles className="h-4 w-4" /> Award-winning studio
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
                Web & Mobile apps with a modern, minimalist edge
              </h1>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                We design and build premium digital products for ambitious brands. From concept to launch, we craft experiences that feel fast, secure and delightful.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  Book a strategy call <ChevronRight className="h-4 w-4" />
                </a>
                <a href="#work" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 text-gray-800 bg-white">
                  View portfolio
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-semibold text-gray-900">120+</p>
                  <p className="text-sm text-gray-500 mt-1">Projects delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-gray-900">98%</p>
                  <p className="text-sm text-gray-500 mt-1">Client satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-gray-900">5.0</p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1"><Star className="h-4 w-4 text-amber-500"/> average rating</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/40">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { icon: <Smartphone className="h-5 w-5" />, title: 'iOS & Android Apps', desc: 'Native and cross‑platform apps built for speed, stability and delightful UX.' },
    { icon: <Code2 className="h-5 w-5" />, title: 'Web Applications', desc: 'High‑performance web apps using modern stacks, optimized for conversion.' },
    { icon: <Gauge className="h-5 w-5" />, title: 'MVPs & Prototypes', desc: 'Validate ideas quickly with production‑ready MVPs that scale with you.' },
    { icon: <ShieldCheck className="h-5 w-5" />, title: 'Security & Compliance', desc: 'Best practices built‑in: auth, payments, data privacy and compliance.' },
    { icon: <Layers className="h-5 w-5" />, title: 'Design Systems', desc: 'Consistent, accessible UI libraries and brand‑aligned components.' },
    { icon: <Infinity className="h-5 w-5" />, title: 'Ongoing Support', desc: 'From launch to growth: monitoring, iteration and feature sprints.' },
  ]
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Services tailored to outcomes</h2>
          <p className="mt-4 text-gray-600">Full‑stack product teams that blend strategy, design and engineering to ship quickly and confidently.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-xl hover:border-gray-300 transition-all">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white grid place-items-center">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-indigo-600">
                <LinkIcon className="h-4 w-4" /> Learn more
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const projects = [
    { tag: 'Fintech', title: 'NovaPay Wallet', desc: 'A glass‑morphic, card‑centric wallet with instant P2P and savings vaults.', img: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'SaaS', title: 'Flow Metrics', desc: 'Developer analytics with real‑time dashboards and smart alerts.', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop' },
    { tag: 'Marketplace', title: 'Craftly', desc: 'A curated marketplace with frictionless checkout and escrow.', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop' },
  ]
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Selected work</h2>
          <p className="mt-4 text-gray-600">A few recent builds that showcase our taste for clean, performant products.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={i} href="#contact" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-indigo-700 bg-indigo-100 px-2 py-1 rounded">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-gray-600">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$4,500', period: '2–3 weeks', features: ['Scope workshop', 'UX/UI design', 'MVP build', 'Basic analytics', 'Email support'], highlight: false },
    { name: 'Growth', price: '$12,000', period: '4–6 weeks', features: ['Full product design', 'Web or Mobile app', 'Auth & payments', 'CI/CD & monitoring', 'Priority support'], highlight: true },
    { name: 'Scale', price: 'Custom', period: 'Ongoing', features: ['Dedicated squad', 'Multi‑platform', 'Security & compliance', 'Roadmap ownership', 'SLA & SRE'], highlight: false },
  ]
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Transparent pricing</h2>
          <p className="mt-4 text-gray-600">Engagements designed for velocity, quality and measurable outcomes.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-2xl border ${t.highlight ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white'} p-6 flex flex-col`}>
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-semibold ${t.highlight ? 'text-white' : 'text-gray-900'}`}>{t.name}</h3>
                {t.highlight && <Rocket className="h-5 w-5 text-white" />}
              </div>
              <div className="mt-4">
                <p className="text-3xl font-semibold">{t.price}</p>
                <p className={`mt-1 ${t.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{t.period}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className={`h-5 w-5 ${t.highlight ? 'text-indigo-300' : 'text-indigo-600'}`} />
                    <span className={t.highlight ? 'text-gray-100' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 ${t.highlight ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'} transition-colors`}>
                Choose {t.name} <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Amelia Hart', role: 'VP Product, NovaPay', quote: 'They nailed the balance of beauty and performance. Our activation rate jumped 27% after launch.' },
    { name: 'Victor Chen', role: 'Founder, Flow Metrics', quote: 'A strategic partner who ships fast. From idea to revenue in 6 weeks.' },
    { name: 'Sofia Romero', role: 'CEO, Craftly', quote: 'The team treated our product like their own. Flawless execution and communication.' },
  ]
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-indigo-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Loved by founders and product teams</h2>
          <p className="mt-4 text-gray-600">Real feedback from real partners.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
              <Quote className="h-8 w-8 text-indigo-600" />
              <p className="mt-4 text-gray-800 leading-relaxed">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
          <div className="relative p-10 sm:p-14 md:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">Ready to build something exceptional?</h3>
              <p className="mt-3 text-white/90">Tell us about your goals and we’ll blueprint a path to launch — design, engineering and growth included.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:hello@flamesblue.studio" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors">Email us</a>
                <a href="#top" className="inline-flex items-center gap-2 bg-black/20 text-white px-5 py-3 rounded-xl hover:bg-black/30 transition-colors">See capabilities</a>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/30">
              <form className="grid sm:grid-cols-2 gap-4">
                <input className="sm:col-span-1 w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="Name" />
                <input className="sm:col-span-1 w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="Email" />
                <input className="sm:col-span-2 w-full rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="Company" />
                <textarea className="sm:col-span-2 w-full rounded-xl px-4 py-3 h-28 bg-white text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="Tell us about your project"></textarea>
                <button type="button" className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors">Request proposal</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500">© {new Date().getFullYear()} Flames Blue Studio. All rights reserved.</p>
        <div className="flex items-center gap-6 text-gray-600">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#work" className="hover:text-gray-900">Work</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
