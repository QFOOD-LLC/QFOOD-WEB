import { useTranslations } from 'next-intl';
import Logo from './Logo';

export default function Footer() {
  const tNav = useTranslations('nav');
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t('navTitle')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#how" className="text-white/55 transition hover:text-lime">
                  {tNav('howItWorks')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/55 transition hover:text-lime">
                  {tNav('features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/55 transition hover:text-lime">
                  {tNav('pricing')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t('contactTitle')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:contact@qfood.com"
                  className="inline-flex items-center gap-2 text-white/55 transition hover:text-lime"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                  {t('email')}
                </a>
              </li>
              <li>
                <a
                  href="tel:+995551775675"
                  className="inline-flex items-center gap-2 text-white/55 transition hover:text-lime"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                  {t('phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} QFooD. {t('rights')}
          </p>
          <p className="text-xs text-white/40">Tbilisi, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
