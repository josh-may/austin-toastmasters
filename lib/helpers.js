export function getBaseURL() {
  const url = process?.env?.NEXT_PUBLIC_SITE_URL || process?.env?.VERCEL_URL || 'http://localhost:3000';
  return url.includes('http') ? url : `https://${url}`;
}

export function formatPrice({ locale, currency, amount }) {
  return new Intl.NumberFormat(locale ?? 'en-US', {
    style: 'currency',
    currency: currency ?? 'USD',
    minimumFractionDigits: 0,
  }).format((amount ?? 0) / 100);
}

/**
 * This helper invalidates the router cache so that the next navigation will run the middleware again
 * See https://github.com/clerkinc/javascript/blob/712c8ea792693a335d9bf39c28e550216cb71bcb/packages/nextjs/src/client/invalidateNextRouterCache.ts for more details
 */
export const invalidateNextRouterCache = () => {
  if (typeof window === 'undefined') return;

  const invalidate = (cache) => {
    Object.keys(cache).forEach((key) => {
      delete cache[key];
    });
  };

  try {
    invalidate(window.next.router.sdc);
    invalidate(window.next.router.sbc);
  } catch (e) {
    return;
  }
};
