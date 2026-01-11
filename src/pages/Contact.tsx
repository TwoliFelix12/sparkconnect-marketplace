import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Njiani Electricals! I have a question about your products."
    );
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-primary py-12">
          <div className="container">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              Get in touch with our team for any inquiries
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our products? Need a quote? Our team is here to help.
                Reach out via WhatsApp for the fastest response!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-muted-foreground mt-1">
                      123 Electric Avenue, Industrial Area<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <a
                      href="tel:+254712345678"
                      className="text-muted-foreground hover:text-accent transition-colors mt-1 block"
                    >
                      +254 712 345 678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a
                      href="mailto:info@njiani.co.ke"
                      className="text-muted-foreground hover:text-accent transition-colors mt-1 block"
                    >
                      info@njiani.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground mt-1">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-whatsapp/10 rounded-xl border border-whatsapp/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-whatsapp" />
                  Quick Response via WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For the fastest response, reach out to us on WhatsApp. 
                  We typically respond within minutes!
                </p>
                <Button variant="whatsapp" onClick={handleWhatsAppClick}>
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input placeholder="+254 712 345 678" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="Product Inquiry" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                  />
                </div>
                <Button variant="accent" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
