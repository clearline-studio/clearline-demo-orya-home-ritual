
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Package, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TrustBadge from '@/components/TrustBadge.jsx';
import CollectionCard from '@/components/CollectionCard.jsx';
import BlogCard from '@/components/BlogCard.jsx';

function App() {
  const collections = [
    {
      image: 'https://images.unsplash.com/photo-1572379760403-530fb30b9044',
      title: 'Signature Candles',
      description: 'Hand-poured soy candles with premium fragrance blends for every room in your home.',
      price: 'From $39',
      buttonText: 'View collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1592400374339-ecb4c15724c5',
      title: 'Room + Linen Sprays',
      description: 'Refresh your space instantly with our botanical room and linen mists.',
      price: 'From $29',
      buttonText: 'View collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1638986362449-eb8a867ae77d',
      title: 'Bath Rituals',
      description: 'Luxurious bath soaks and oils to transform your evening routine.',
      price: 'From $34',
      buttonText: 'View collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1629890876366-0fa3bc95020c',
      title: 'Gift Boxes',
      description: 'Curated gift sets beautifully packaged and ready to give.',
      price: 'From $89',
      buttonText: 'View collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1677414129280-2a0545a774f2',
      title: 'Seasonal Kits',
      description: 'Limited edition collections celebrating the changing seasons.',
      price: 'From $119',
      buttonText: 'View collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1629890876366-0fa3bc95020c',
      title: 'Corporate Gifting',
      description: 'Custom branded gift boxes for clients, events, and employee appreciation.',
      price: 'Custom quote',
      buttonText: 'View collection'
    }
  ];
  
  const blogPosts = [
    {
      title: 'How to choose a candle for each room',
      excerpt: 'Discover which fragrances work best in different spaces and how to create the perfect ambiance throughout your home.',
      image: 'https://images.unsplash.com/photo-1572379760403-530fb30b9044',
      readMoreLink: '#journal'
    },
    {
      title: 'Gift box ideas for clients and events',
      excerpt: 'Thoughtful gifting strategies for corporate clients, wedding favours, and special occasions that leave a lasting impression.',
      image: 'https://images.unsplash.com/photo-1629890876366-0fa3bc95020c',
      readMoreLink: '#journal'
    },
    {
      title: 'Creating an evening wind-down ritual',
      excerpt: 'Simple practices to help you transition from the busy day into a calm, restorative evening at home.',
      image: 'https://images.unsplash.com/photo-1638986362449-eb8a867ae77d',
      readMoreLink: '#journal'
    }
  ];
  
  const ecommerceFeatures = [
    'Product collections',
    'Product detail pages',
    'Gift box bundles',
    'Custom enquiry form',
    'Stock-aware catalogue',
    'Email capture',
    'Blog/journal content',
    'Future Shopify integration ready'
  ];
  
  return (
    <>
      <Helmet>
        <title>{`Orya Home & Ritual - Premium Candles and Home Rituals`}</title>
        <meta name="description" content="Hand-poured candles, bath rituals, and custom gift boxes for a calmer home. Premium small-batch products with gift-ready packaging." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#17100c]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(214,154,92,0.32),transparent_34%),radial-gradient(circle_at_28%_68%,rgba(255,226,185,0.12),transparent_30%),linear-gradient(135deg,#17100c_0%,#2a1b14_46%,#0f0d0b_100%)]" />
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            style={{ backgroundColor: '#17100c' }}
          >
            <source src={`${import.meta.env.BASE_URL}Candles_bath.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Rituals for a calmer home.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Premium hand-poured candles, bath rituals, and custom gift boxes designed to bring intention and calm into your daily life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]">
                <a href="#shop">Shop the Collection</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 active:scale-[0.98]">
                <a href="#custom-gifting">Explore Custom Gifting</a>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <TrustBadge icon={Sparkles} text="Hand-poured small batches" />
              <TrustBadge icon={Gift} text="Gift-ready packaging" />
              <TrustBadge icon={Package} text="Custom boxes for events + clients" />
            </motion.div>
          </div>
        </section>
        
        {/* Brand Story Section */}
        <section id="story" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Rituals for intention and calm
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Orya began with a simple belief: the small rituals we create at home shape how we move through the world. A candle lit in the evening. A bath drawn after a long day. A gift given with intention.
                  </p>
                  <p>
                    We craft premium candles, bath rituals, and gift boxes designed to bring moments of calm into your daily life. Each product is hand-poured in small batches, using natural ingredients and thoughtful fragrance blends.
                  </p>
                  <p>
                    Whether you're building your own evening ritual or creating a meaningful gift for someone special, Orya is here to help you slow down, breathe deeper, and find calm in the everyday.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1686190696154-98ef6d630c68" 
                  alt="Orya candles and home ritual products in a serene setting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Collections Grid Section */}
        <section id="shop" className="py-20 md:py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop Collections</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our curated collections of candles, bath rituals, and gift boxes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CollectionCard {...collection} onClick={() => {}} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Product Section */}
        <section id="gift-boxes" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-soft-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1629890876366-0fa3bc95020c" 
                  alt="The Evening Ritual Box - curated gift set with candle, room spray, and bath soak"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Evening Ritual Box</h2>
                <p className="text-2xl text-primary font-medium mb-6">From $119</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our signature gift box brings together everything you need for a calming evening ritual. Beautifully packaged and ready to give.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Signature candle</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Room spray</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Bath soak</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Gift note card</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Premium gift box</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]">
                    View Gift Box
                  </Button>
                  <Button asChild variant="outline" className="active:scale-[0.98]">
                    <a href="#custom-gifting">Enquire About Custom Orders</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Custom Gifting Section */}
        <section id="custom-gifting" className="py-20 md:py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Gifting</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Create custom gift boxes for your clients, events, or special occasions. Perfect for wedding favours, client gifts, real estate closing gifts, event boxes, and staff appreciation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { step: '01', title: 'Choose quantity', description: 'Tell us how many gift boxes you need' },
                { step: '02', title: 'Choose products', description: 'Select from our curated collections' },
                { step: '03', title: 'Add branding/message', description: 'Personalize with your logo or note' },
                { step: '04', title: 'Receive quote', description: 'Get a custom quote within 48 hours' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]">
                Start a Custom Gift Enquiry
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Ecommerce Features Section */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ecommerce Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This demo showcases the following ecommerce capabilities
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {ecommerceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Journal Section */}
        <section id="journal" className="py-20 md:py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Journal</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Insights on creating rituals, choosing the right products, and thoughtful gifting
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Customer Feedback Layout Section */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Example customer feedback layout</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This section shows where verified customer feedback would appear once the store starts collecting reviews.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Build a calmer home ritual.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore our collection of hand-poured candles and bath rituals, or start a custom gifting enquiry for your next event or client gift.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]">
                  <a href="#shop">Shop the Collection</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="active:scale-[0.98]">
                  <a href="#custom-gifting">Start Custom Gifting Enquiry</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
