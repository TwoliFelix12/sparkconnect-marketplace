import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import { cn } from '@/lib/utils';

function CartItemRow({ item }: { item: CartItem }) {
  const { dispatch } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b last:border-0">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm line-clamp-2">{item.product.name}</h4>
        <p className="text-accent font-semibold mt-1">{formatPrice(item.product.price)}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() =>
              dispatch({
                type: 'UPDATE_QUANTITY',
                productId: item.product.id,
                quantity: item.quantity - 1,
              })
            }
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() =>
              dispatch({
                type: 'UPDATE_QUANTITY',
                productId: item.product.id,
                quantity: item.quantity + 1,
              })
            }
          >
            <Plus className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive ml-auto"
            onClick={() =>
              dispatch({ type: 'REMOVE_ITEM', productId: item.product.id })
            }
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { state, dispatch, totalItems, totalPrice } = useCart();

  const generateOrderMessage = () => {
    const items = state.items
      .map(
        (item) =>
          `• ${item.product.name} (${item.product.sku}) x${item.quantity} - ${formatPrice(
            item.product.price * item.quantity
          )}`
      )
      .join('\n');
    
    return `Hello Njiani Electricals! I would like to place an order:\n\n${items}\n\nTotal: ${formatPrice(totalPrice)}\n\nPlease confirm availability and delivery options.`;
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(generateOrderMessage());
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  const handleEmailOrder = () => {
    const subject = encodeURIComponent('Order Inquiry - Njiani Electricals');
    const body = encodeURIComponent(generateOrderMessage());
    window.location.href = `mailto:orders@njiani.co.ke?subject=${subject}&body=${body}`;
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => dispatch({ type: 'SET_CART_OPEN', isOpen: false })}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-accent" />
            <h2 className="font-display font-semibold text-lg">Your Cart</h2>
            <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch({ type: 'SET_CART_OPEN', isOpen: false })}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground font-medium">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add some products to get started
              </p>
              <Button
                variant="accent"
                className="mt-4"
                onClick={() => dispatch({ type: 'SET_CART_OPEN', isOpen: false })}
              >
                Browse Products
              </Button>
            </div>
          ) : (
            state.items.map((item) => (
              <CartItemRow key={item.product.id} item={item} />
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-accent">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            {/* Order Buttons */}
            <div className="space-y-2">
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="h-5 w-5" />
                Order via WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleEmailOrder}
              >
                <Mail className="h-5 w-5" />
                Order via Email
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Your order will be confirmed by our team
            </p>
          </div>
        )}
      </div>
    </>
  );
}
