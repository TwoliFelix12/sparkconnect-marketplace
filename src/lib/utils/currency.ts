import { APP_CONFIG } from '@/constants/config';

/**
 * Format a number as Kenyan Shillings currency
 */
export function formatCurrency(amount: number): string {
  return `${APP_CONFIG.currency.symbol} ${amount.toLocaleString(APP_CONFIG.currency.locale)}`;
}

/**
 * Format currency with KES code
 */
export function formatCurrencyFull(amount: number): string {
  return new Intl.NumberFormat(APP_CONFIG.currency.locale, {
    style: 'currency',
    currency: APP_CONFIG.currency.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(price: number, compareAtPrice: number): number {
  if (compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

/**
 * Format discount as a display string
 */
export function formatDiscount(price: number, compareAtPrice: number): string {
  const discount = calculateDiscount(price, compareAtPrice);
  return discount > 0 ? `Save ${discount}%` : '';
}
