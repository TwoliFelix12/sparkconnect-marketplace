import { MessageCircle, Phone, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppCTA() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Njiani Electricals! I'm interested in your products. Can you help me?"
    );
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-whatsapp/20 text-whatsapp px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            Quick Response Guaranteed
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Need Help Choosing?
            <br />
            <span className="text-accent">Chat with Us on WhatsApp!</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Our electrical experts are ready to help you find the perfect products 
            for your project. Get instant quotes and personalized recommendations.
          </p>

          <Button
            variant="whatsapp"
            size="xl"
            onClick={handleWhatsAppClick}
            className="mb-8"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-sm">Response in Minutes</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm">Expert Advice</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-sm">No Obligations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
