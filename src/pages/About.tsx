import { Zap, Users, Award, Target } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the highest quality electrical products from trusted manufacturers.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We go above and beyond to meet your needs.',
    },
    {
      icon: Target,
      title: 'Expert Guidance',
      description: 'Our experienced team provides professional advice for all your electrical projects.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay updated with the latest electrical technologies and solutions.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-primary py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Powering Kenya's Electrical Needs Since Day One
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Njiani Electricals Limited is your trusted partner for quality electrical 
                products. From stunning chandeliers to reliable solar solutions, we bring 
                light and power to homes and businesses across Kenya.
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="container py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Njiani Electricals was founded with a simple mission: to provide 
                  Kenyans with access to quality electrical products at fair prices. 
                  What started as a small shop has grown into a trusted name in the 
                  electrical supply industry.
                </p>
                <p>
                  Today, we serve homeowners, electricians, contractors, and businesses 
                  across Kenya. Our extensive product range includes everything from 
                  decorative lighting to industrial-grade electrical equipment.
                </p>
                <p>
                  We believe in building lasting relationships with our customers through 
                  exceptional service, expert advice, and unwavering commitment to quality.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=500&fit=crop"
                alt="Electrical products"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <p className="font-display text-3xl font-bold">500+</p>
                <p className="text-sm">Products Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-secondary py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold">Our Values</h2>
              <p className="text-muted-foreground mt-2">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card p-6 rounded-xl border text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Why Choose Njiani?</h2>
            <div className="grid sm:grid-cols-3 gap-8 mt-10">
              <div>
                <p className="font-display text-4xl font-bold text-accent mb-2">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-accent mb-2">5000+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-accent mb-2">47</p>
                <p className="text-muted-foreground">Counties Served</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
