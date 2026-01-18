// Product Types
export type Availability = 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK' | 'PREORDER';

export interface ProductSpecifications {
  [key: string]: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  icon?: string;
  productCount: number;
  sortOrder: number;
  isActive: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  categoryId: string;
  category: Pick<Category, 'id' | 'name' | 'slug'>;
  images: string[];
  specifications: ProductSpecifications;
  stock: number;
  lowStockThreshold: number;
  availability: Availability;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  priceSnapshot: number;
  addedAt: string;
}

export interface Cart {
  id: string;
  sessionId: string;
  items: CartItem[];
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}

// Order Types
export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled';

export interface OrderItem {
  productId: string;
  productName: string;
  productSku: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  items: OrderItem[];
  subtotal: number;
  total: number;
  status: OrderStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// API Types
export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ProductFilters {
  categoryId?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  availability?: Availability[];
  isFeatured?: boolean;
  sortBy?: 'name' | 'price-asc' | 'price-desc' | 'newest';
  page?: number;
  limit?: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}

// Checkout Types
export interface CheckoutFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  notes?: string;
}

// UI State Types
export interface UIState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
}
