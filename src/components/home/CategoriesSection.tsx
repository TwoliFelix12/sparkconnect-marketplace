import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/products';
import { Button } from '@/components/ui/button';

export function CategoriesSection() {
  const displayCategories = categories.slice(0, 8);

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Shop by Category
            </h2>
            <p className="text-muted-foreground mt-2">
              Find exactly what you need from our wide selection
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/categories">
              View All Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayCategories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className="group bg-card rounded-xl p-6 border shadow-sm card-hover text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {category.productCount} products
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
