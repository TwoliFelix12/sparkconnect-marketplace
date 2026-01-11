import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', product });
    dispatch({ type: 'SET_CART_OPEN', isOpen: true });
  };

  return (
    <div
      className={cn(
        'group bg-card rounded-xl overflow-hidden border shadow-sm card-hover',
        className
      )}
    >
      {/* Image */}
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Out of Stock</span>
          </div>
        )}
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            asChild
          >
            <Link to={`/products/${product.id}`}>
              <Eye className="h-4 w-4" />
              View
            </Link>
          </Button>
          <Button
            variant="accent"
            size="sm"
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.category.replace('-', ' ')}
        </p>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="font-display font-bold text-lg text-accent">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-muted-foreground">
            SKU: {product.sku}
          </span>
        </div>
      </div>
    </div>
  );
}
