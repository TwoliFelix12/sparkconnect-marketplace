import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { categories } from '@/lib/products';

export default function Categories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-primary py-12">
          <div className="container">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
              All Categories
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              Browse our complete range of electrical product categories
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="group bg-card rounded-xl p-8 border shadow-sm card-hover text-center animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {category.productCount} products
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
