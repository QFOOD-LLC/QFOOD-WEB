import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import type { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  split: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 8l-3 4 3 4M18 8l3 4-3 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pay: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  noapp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="6" y="2.5" width="12" height="19" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 5.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  kitchen: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 9h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  owner: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 19V9l8-5 8 5v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 19v-5h8v5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  multi: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
};

export default function Features() {
  const t = useTranslations('features');

  const items = [
    { key: 'split', title: t('splitBillTitle'), desc: t('splitBillDesc') },
    { key: 'pay', title: t('payTitle'), desc: t('payDesc') },
    { key: 'noapp', title: t('noAppTitle'), desc: t('noAppDesc') },
    { key: 'kitchen', title: t('kitchenTitle'), desc: t('kitchenDesc') },
    { key: 'owner', title: t('ownerTitle'), desc: t('ownerDesc') },
    { key: 'multi', title: t('multiTitle'), desc: t('multiDesc') },
  ];

  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-lime/5 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-white/65 sm:text-lg">{t('subtitle')}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="article" key={item.key} delay={(i % 3) * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime/30 hover:bg-white/[0.04]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime/12 text-lime transition group-hover:bg-lime group-hover:text-ink-900">
                  {icons[item.key]}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
