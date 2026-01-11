import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, categories } from '@/lib/products';
import { cn } from '@/lib/utils';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
      default:
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-primary py-12">
          <div className="container">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
              Our Products
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              Explore our complete range of quality electrical products
            </p>
          </div>
        </div>

        <div className="container py-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products by name, SKU, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 px-4 rounded-lg border bg-card text-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside
              className={cn(
                'lg:w-64 shrink-0',
                'fixed lg:relative inset-0 z-40 lg:z-0',
                'bg-background lg:bg-transparent',
                'p-6 lg:p-0',
                'transform lg:transform-none transition-transform',
                showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
              )}
            >
              {/* Mobile Close */}
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-xl p-4 border">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      handleCategoryChange('all');
                      setShowFilters(false);
                    }}
                    className={cn(
                      'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                      selectedCategory === 'all'
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'hover:bg-muted text-muted-foreground'
                    )}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        handleCategoryChange(category.slug);
                        setShowFilters(false);
                      }}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex justify-between items-center',
                        selectedCategory === category.slug
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'hover:bg-muted text-muted-foreground'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span>{category.icon}</span>
                        {category.name}
                      </span>
                      <span className="text-xs opacity-60">
                        {category.productCount}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Backdrop */}
            {showFilters && (
              <div
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={() => setShowFilters(false)}
              />
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No products found matching your criteria
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      handleCategoryChange('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
