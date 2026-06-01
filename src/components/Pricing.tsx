import { useTranslations } from 'next-intl';
import Reveal from './Reveal';

export default function Pricing() {
  const t = useTranslations('pricing');

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
    t('feature4'),
    t('feature5'),
    t('feature6'),
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-white/65 sm:text-lg">{t('subtitle')}</p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-14 max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-gradient-to-b from-lime/[0.08] to-white/[0.02] p-8 shadow-[0_0_60px_rgba(199,253,62,0.12)]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime/15 blur-3xl" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">{t('planName')}</span>
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink-900">
                {t('badge')}
              </span>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1.5 text-xs font-semibold text-lime">
              {t('trial')}
            </div>

            <div className="mt-5 flex items-end gap-1.5">
              <span className="text-5xl font-extrabold tracking-tight text-white">
                {t('currency')}{t('price')}
              </span>
              <span className="mb-1.5 text-sm text-white/55">{t('per')}</span>
            </div>
            <p className="mt-1 text-xs text-white/50">{t('afterTrial')}</p>

            <ul className="mt-7 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={`mailto:contact@qfood.com`}
              className="mt-8 block rounded-full bg-lime py-3.5 text-center text-sm font-bold text-ink-900 transition hover:bg-lime-400 hover:shadow-[0_0_32px_rgba(199,253,62,0.4)]"
            >
              {t('cta')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
