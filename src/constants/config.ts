export const APP_CONFIG = {
  name: 'Njiani Electricals',
  tagline: 'Quality Electrical Products for Kenya',
  description: 'Your trusted source for quality electrical products in Kenya. Chandeliers, LED lights, switches, cables, and more.',
  
  // Contact Information
  whatsappNumber: '254712345678',
  businessEmail: 'orders@njiani.co.ke',
  businessPhone: '+254 712 345 678',
  businessAddress: 'Nairobi, Kenya',
  
  // Social Links
  social: {
    facebook: 'https://facebook.com/njianielectricals',
    instagram: 'https://instagram.com/njianielectricals',
    twitter: 'https://twitter.com/njianielectricals',
  },
  
  // Business Hours
  businessHours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
  
  // Shipping
  shipping: {
    estimatedDelivery: '2-3 business days',
    freeShippingThreshold: 10000, // KSh
  },
  
  // Currency
  currency: {
    code: 'KES',
    symbol: 'KSh',
    locale: 'en-KE',
  },
  
  // Pagination
  pagination: {
    defaultLimit: 20,
    maxLimit: 100,
  },
  
  // Feature Flags
  features: {
    enablePayments: false,
    enableB2B: false,
    enableReviews: false,
    enableWishlist: false,
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
