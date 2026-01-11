import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Trusted Electrical Solutions in Kenya
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Power Your World With{' '}
              <span className="text-accent">Quality</span>{' '}
              Electrical Products
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              From stunning chandeliers to reliable solar solutions, discover Kenya's 
              premier destination for electrical products. Order via WhatsApp for instant support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-sm">Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm">Expert Support</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=700&fit=crop"
                alt="Electrical lighting products"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card animate-float">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-foreground">500+</p>
                    <p className="text-muted-foreground text-sm">Products Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 border-4 border-accent/30 rounded-full" />
            <div className="absolute bottom-20 right-0 w-32 h-32 border-4 border-accent/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
