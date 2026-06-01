import { useTranslations } from 'next-intl';
import Reveal from './Reveal';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-lime/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {t('badge')}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {t('titleLine1')}
              <br />
              <span className="text-lime">{t('titleHighlight')}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {t('subtitle')}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-lime-400 hover:shadow-[0_0_32px_rgba(199,253,62,0.4)]"
              >
                {t('ctaPrimary')}
              </a>
              <a
                href="#how"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {t('ctaSecondary')}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                [t('stat1Value'), t('stat1Label')],
                [t('stat2Value'), t('stat2Label')],
                [t('stat3Value'), t('stat3Label')],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-extrabold text-lime sm:text-3xl">
                    {value}
                  </dt>
                  <dd className="mt-1 text-xs text-white/55 sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* phone mockup */}
        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <PhoneMockup
            tableLabel={t('phoneTitle')}
            items={[t('phoneItem1'), t('phoneItem2'), t('phoneItem3')]}
            totalLabel={t('phoneTotal')}
            payLabel={t('phonePay')}
          />
        </Reveal>
      </div>
    </section>
  );
}

function PhoneMockup({
  tableLabel,
  items,
  totalLabel,
  payLabel,
}: {
  tableLabel: string;
  items: string[];
  totalLabel: string;
  payLabel: string;
}) {
  const prices = ['18.00', '14.50', '6.00'];
  const total = '38.50';

  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-full bg-lime/10 blur-3xl" />
      <div className="animate-float relative w-[280px] rounded-[2.5rem] border border-white/10 bg-ink-800 p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[2rem] bg-ink-900">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-4 text-[10px] text-white/50">
            <span>9:41</span>
            <span className="h-1.5 w-16 rounded-full bg-white/15" />
          </div>

          {/* header */}
          <div className="px-5 pb-4 pt-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-lime text-[11px] font-bold text-ink-900">
                Q
              </span>
              <span className="text-xs font-semibold text-white/60">
                {tableLabel}
              </span>
            </div>
          </div>

          {/* items */}
          <div className="space-y-2.5 px-5">
            {items.map((item, i) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-lime/30 to-lime/5" />
                  <span className="text-[13px] font-medium text-white/85">
                    {item}
                  </span>
                </div>
                <span className="text-[12px] font-semibold text-white/55">
                  {prices[i]} ₾
                </span>
              </div>
            ))}
          </div>

          {/* total + pay */}
          <div className="mt-4 border-t border-white/10 px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50">{totalLabel}</span>
              <span className="text-lg font-extrabold text-white">{total} ₾</span>
            </div>
            <button className="mt-3 w-full rounded-xl bg-lime py-3 text-sm font-bold text-ink-900">
              {payLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
