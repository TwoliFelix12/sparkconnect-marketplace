export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: '1', name: 'Chandeliers', slug: 'chandeliers', icon: '✨', productCount: 24 },
  { id: '2', name: 'LED Ceiling Lights', slug: 'led-ceiling-lights', icon: '💡', productCount: 36 },
  { id: '3', name: 'Switches', slug: 'switches', icon: '🔘', productCount: 48 },
  { id: '4', name: 'Solar Floodlights', slug: 'solar-floodlights', icon: '☀️', productCount: 18 },
  { id: '5', name: 'Extension Cables', slug: 'extension-cables', icon: '🔌', productCount: 32 },
  { id: '6', name: 'Electrical Cables', slug: 'electrical-cables', icon: '⚡', productCount: 56 },
  { id: '7', name: 'Wall Brackets', slug: 'wall-brackets', icon: '🏠', productCount: 28 },
  { id: '8', name: 'Outdoor Lights', slug: 'outdoor-lights', icon: '🌙', productCount: 22 },
  { id: '9', name: 'Sockets', slug: 'sockets', icon: '🔲', productCount: 40 },
  { id: '10', name: 'String Lights', slug: 'string-lights', icon: '🎄', productCount: 15 },
  { id: '11', name: 'Mirror Lights', slug: 'mirror-lights', icon: '🪞', productCount: 12 },
  { id: '12', name: 'Rechargeable Lamps', slug: 'rechargeable-lamps', icon: '🔋', productCount: 20 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Crystal Chandelier 8-Light',
    sku: 'CH-001',
    category: 'chandeliers',
    price: 45000,
    description: 'Elegant 8-light crystal chandelier perfect for living rooms and dining areas. Features premium K9 crystals with chrome finish.',
    image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=400&h=400&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Modern LED Ceiling Panel 60x60',
    sku: 'LED-002',
    category: 'led-ceiling-lights',
    price: 3500,
    description: '60x60cm LED panel light with 48W power output. Daylight white, energy efficient, perfect for offices and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Smart Touch Switch 3-Gang',
    sku: 'SW-003',
    category: 'switches',
    price: 2800,
    description: 'Modern tempered glass touch switch with 3 gangs. Supports LED indicator and works with standard wiring.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Solar Floodlight 200W',
    sku: 'SF-004',
    category: 'solar-floodlights',
    price: 8500,
    description: 'High-power 200W solar floodlight with remote control. IP66 waterproof, ideal for outdoor security lighting.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop',
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Extension Cable 5M Heavy Duty',
    sku: 'EC-005',
    category: 'extension-cables',
    price: 1200,
    description: '5-meter heavy duty extension cable with 4 outlets and surge protection. 13A rated for heavy appliances.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop',
    inStock: true,
  },
  {
    id: '6',
    name: 'Twin & Earth Cable 2.5mm (100m)',
    sku: 'TC-006',
    category: 'electrical-cables',
    price: 12500,
    description: '100-meter roll of 2.5mm twin and earth cable. Suitable for power circuits and general wiring.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
    inStock: true,
  },
  {
    id: '7',
    name: 'Modern Wall Bracket Light',
    sku: 'WB-007',
    category: 'wall-brackets',
    price: 3200,
    description: 'Contemporary wall bracket light with adjustable head. Perfect for bedrooms and hallways.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    inStock: true,
  },
  {
    id: '8',
    name: 'Garden Bollard Light Solar',
    sku: 'OL-008',
    category: 'outdoor-lights',
    price: 4500,
    description: 'Stainless steel solar bollard light for pathways and gardens. Auto on/off with dusk sensor.',
    image: 'https://images.unsplash.com/photo-1558171013-50b41a2e961a?w=400&h=400&fit=crop',
    inStock: true,
  },
  {
    id: '9',
    name: 'Double Socket 13A',
    sku: 'SK-009',
    category: 'sockets',
    price: 450,
    description: 'Standard double socket 13A with switch. BS1363 compliant with child safety shutters.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    inStock: true,
  },
  {
    id: '10',
    name: 'Fairy String Lights 10M',
    sku: 'SL-010',
    category: 'string-lights',
    price: 850,
    description: '10-meter LED fairy string lights with 100 LEDs. Perfect for decoration and events.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop',
    inStock: true,
  },
  {
    id: '11',
    name: 'LED Mirror Light 60cm',
    sku: 'ML-011',
    category: 'mirror-lights',
    price: 2200,
    description: '60cm LED mirror light with 3 color temperatures. Ideal for bathroom vanities.',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=400&fit=crop',
    inStock: true,
  },
  {
    id: '12',
    name: 'Rechargeable Emergency Lamp',
    sku: 'RL-012',
    category: 'rechargeable-lamps',
    price: 1500,
    description: 'Portable rechargeable LED lamp with 8 hours battery life. Perfect for power outages.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    inStock: true,
  },
];

export const formatPrice = (price: number): string => {
  return `KSh ${price.toLocaleString()}`;
};
