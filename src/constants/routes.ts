export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:slug',
  CATEGORIES: '/categories',
  CATEGORY: '/category/:slug',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDER_SUCCESS: '/order/success',
  ORDER_TRACKING: '/order/:orderNumber',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '*',
} as const;

export const buildProductUrl = (slug: string): string => `/products/${slug}`;
export const buildCategoryUrl = (slug: string): string => `/category/${slug}`;
export const buildOrderUrl = (orderNumber: string): string => `/order/${orderNumber}`;
