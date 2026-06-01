import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // All supported locales
  locales: ['ka', 'en', 'ru'],
  // Georgian is the default
  defaultLocale: 'ka',
});

export type Locale = (typeof routing.locales)[number];
