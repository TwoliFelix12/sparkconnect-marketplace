import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { WhatsAppCTA } from '@/components/home/WhatsAppCTA';
import { CartDrawer } from '@/components/cart/CartDrawer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <CategoriesSection />
        <FeaturedProducts />
        <WhatsAppCTA />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
