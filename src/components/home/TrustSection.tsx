import { Truck, Shield, Headphones, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast and reliable delivery across Kenya',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Only genuine products from trusted brands',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: '24/7 customer support via WhatsApp',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'M-Pesa, bank transfer & more coming soon',
  },
];

export function TrustSection() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
