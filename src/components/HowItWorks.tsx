import { useTranslations } from 'next-intl';
import Reveal from './Reveal';

function ScanIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function PayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2.5" y="6" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 10h19" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HowItWorks() {
  const t = useTranslations('how');

  const steps = [
    { icon: <ScanIcon />, title: t('step1Title'), desc: t('step1Desc') },
    { icon: <MenuIcon />, title: t('step2Title'), desc: t('step2Desc') },
    { icon: <PayIcon />, title: t('step3Title'), desc: t('step3Desc') },
  ];

  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-white/65 sm:text-lg">{t('subtitle')}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="article" key={step.title} delay={i * 120}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-lime/30 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime/12 text-lime transition group-hover:bg-lime group-hover:text-ink-900">
                    {step.icon}
                  </span>
                  <span className="text-5xl font-black leading-none text-white/[0.06]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
