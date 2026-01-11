import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, MessageCircle, Mail, Check, Minus, Plus } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { products, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
    dispatch({ type: 'SET_CART_OPEN', isOpen: true });
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello Njiani Electricals! I'm interested in:\n\n${product.name} (${product.sku})\nPrice: ${formatPrice(product.price)}\n\nPlease provide more information.`
    );
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-accent">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Back Button */}
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </Button>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {product.category.replace('-', ' ')}
                </p>
                <h1 className="font-display text-3xl lg:text-4xl font-bold mt-2">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-3xl font-bold text-accent">
                  {formatPrice(product.price)}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.inStock
                      ? 'bg-success/10 text-success'
                      : 'bg-destructive/10 text-destructive'
                  }`}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="border-t border-b py-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">SKU</span>
                  <span className="font-medium">{product.sku}</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                  onClick={handleWhatsAppInquiry}
                >
                  <MessageCircle className="h-5 w-5" />
                  Inquire on WhatsApp
                </Button>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-success" />
                  <span>Quality guaranteed products</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-success" />
                  <span>Nationwide delivery available</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-success" />
                  <span>Expert support via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
