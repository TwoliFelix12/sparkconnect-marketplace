import { APP_CONFIG } from '@/constants/config';
import { formatCurrency } from './currency';
import type { Order, CartItem } from '@/types';

/**
 * Format an order for WhatsApp message
 */
export function formatOrderForWhatsApp(
  order: Pick<Order, 'orderNumber' | 'customerName' | 'customerPhone' | 'customerEmail' | 'customerAddress' | 'total' | 'notes'>,
  items: CartItem[]
): string {
  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} (${item.product.sku}) x${item.quantity} - ${formatCurrency(item.priceSnapshot * item.quantity)}`
    )
    .join('\n');

  const subtotal = items.reduce((sum, item) => sum + item.priceSnapshot * item.quantity, 0);

  return `
🛒 *New Order from Njiani Electricals*

*Order Details:*
Order #: ${order.orderNumber}

*Customer:*
Name: ${order.customerName}
Phone: ${order.customerPhone}
Email: ${order.customerEmail}
Address: ${order.customerAddress}

*Items:*
${itemsList}

*Subtotal: ${formatCurrency(subtotal)}*
*Total: ${formatCurrency(order.total)}*

${order.notes ? `\n📝 Notes: ${order.notes}` : ''}

---
Thank you for shopping with Njiani Electricals!
  `.trim();
}

/**
 * Format a product inquiry for WhatsApp
 */
export function formatProductInquiry(
  productName: string,
  productSku: string,
  price: number,
  quantity?: number
): string {
  return `
Hello Njiani Electricals! 👋

I'm interested in:

*${productName}*
SKU: ${productSku}
Price: ${formatCurrency(price)}${quantity ? `\nQuantity: ${quantity}` : ''}

Please provide more information about this product.
  `.trim();
}

/**
 * Generate WhatsApp URL
 */
export function generateWhatsAppURL(message: string, phoneNumber?: string): string {
  const encodedMessage = encodeURIComponent(message);
  const cleanNumber = (phoneNumber || APP_CONFIG.whatsappNumber).replace(/\+/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp with order details
 */
export function openWhatsAppOrder(
  order: Pick<Order, 'orderNumber' | 'customerName' | 'customerPhone' | 'customerEmail' | 'customerAddress' | 'total' | 'notes'>,
  items: CartItem[]
): void {
  const message = formatOrderForWhatsApp(order, items);
  const url = generateWhatsAppURL(message);
  window.open(url, '_blank');
}

/**
 * Open WhatsApp with product inquiry
 */
export function openWhatsAppInquiry(
  productName: string,
  productSku: string,
  price: number,
  quantity?: number
): void {
  const message = formatProductInquiry(productName, productSku, price, quantity);
  const url = generateWhatsAppURL(message);
  window.open(url, '_blank');
}
