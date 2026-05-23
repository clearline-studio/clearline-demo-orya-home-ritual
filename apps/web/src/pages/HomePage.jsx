import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, Gift, Package, ArrowRight, Check, HeartHandshake } from 'lucide-react';
import CollectionCard from '@/components/CollectionCard.jsx';
import BlogCard from '@/components/BlogCard.jsx';
import ProductsList from '@/components/ProductsList.jsx';
import TrustBadge from '@/components/TrustBadge.jsx';

const HERO_VIDEO_URL = 'https://pub-f76299bbf2a240ec9a072b0dba762442.r2.dev/ClearLine%20Studio/Website/Templates/Orya%20Home%20and%20Ritual/Hero.mp4';

const sectionIntro = 'mx-auto mb-14 max-w-3xl text-center lg:mb-16';
const eyebrow = 'mb-4 inline-flex rounded-full border border-[#d7c38d] bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9d7b33] shadow-sm';
const titleClass = 'text-[2.5rem] font-bold leading-[0.98] tracking-[-0.055em] text-[#2f281f] sm:text-[3.2rem] lg:text-[4.1rem]';
const copyClass = 'mt-5 text-lg leading-8 text-[#6c6256] lg:text-xl';

const HomePage = () => {
  const collections = [
    { image: 'https://images.unsplash.com/photo-1572379760403-530fb30b9044', title: 'Signature Candles', price: 'From $39', description: 'Hand-poured candles for slow evenings, quiet mornings, and calm everyday rituals.' },
    { image: 'https://images.unsplash.com/photo-1592400374339-ecb4c15724c5', title: 'Room + Linen Sprays', price: 'From $29', description: 'Soft aromatic sprays designed to refresh spaces with a gentle ritual finish.' },
    { image: 'https://images.unsplash.com/photo-1638986362449-eb8a867ae77d', title: 'Bath Rituals', price: 'From $34', description: 'Bath soaks, salts, and ritual pieces for slow restoration at home.' },
    { image: 'https://images.unsplash.com/photo-1629890876366-0fa3bc95020c', title: 'Gift Boxes', price: 'From $89', description: 'Curated boxes wrapped beautifully and ready to give for meaningful moments.' },
    { image: 'https://images.unsplash.com/photo-1677414129280-2a0545a774f2', title: 'Seasonal Kits', price: 'From $119', description: 'Limited-edition ritual bundles for launches, holidays, and special occasions.' },
    { image: 'https://images.unsplash.com/photo-1629890876366-0fa3bc95020c', title: 'Corporate Gifting', price: 'Custom quote', description: 'Custom branded boxes for clients, events, teams, and settlement gifts.' }
  ];

  const blogPosts = [
    { title: 'How to create a candle-focused evening ritual', excerpt: 'Build a gentle wind-down routine with fragrance, light, and small details that make home feel calmer.', image: 'https://images.unsplash.com/photo-1572379760403-530fb30b9044' },
    { title: 'Gift box ideas for clients and events', excerpt: 'Thoughtful gifting strategies for corporate clients, wedding favours, launches, and special occasions.', image: 'https://images.unsplash.com/photo-1629890876366-0fa3bc95020c' },
    { title: 'Creating a calming wind-down ritual', excerpt: 'Simple ways to transition from a busy day into a softer, more restorative evening at home.', image: 'https://images.unsplash.com/photo-1638986362449-eb8a867ae77d' }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-70px' },
    transition: { duration: 0.65, ease: 'easeOut' }
  };

  return (
    <div id="home" className="w-full bg-[#f8f5ef]">
      <section className="relative min-h-[680px] overflow-hidden bg-[#1f1a14] lg:min-h-[760px]">
        <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-85">
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,16,12,0.25),rgba(20,16,12,0.55)_52%,rgba(20,16,12,0.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(255,255,255,0.08),transparent_36%)]" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[112rem] items-center px-6 py-20 sm:px-8 lg:min-h-[760px] lg:px-14">
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="ml-auto max-w-[40rem] rounded-[2.3rem] border border-white/35 bg-[#241d16]/58 p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-sm sm:p-10 lg:p-12"
          >
            <span className="mb-6 inline-flex rounded-full border border-[#e6c96b]/45 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f0d486]">Orya Home & Ritual</span>
            <h1 className="text-[3.4rem] font-bold leading-[0.93] tracking-[-0.065em] sm:text-[4.7rem] lg:text-[5.7rem]">
              Rituals for a calmer home.
            </h1>
            <p className="mt-7 max-w-[34rem] text-lg leading-8 text-white/86 sm:text-xl">
              Premium hand-poured candles, bath rituals, and custom gift boxes designed to bring intention and calm into daily life.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-[#c9a84f] px-8 text-base font-bold text-[#21180f] hover:bg-[#d8b963]">
                <a href="#collections">Shop the Collection</a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/35 bg-white/10 px-8 text-base font-bold text-white hover:bg-white hover:text-[#21180f]">
                <a href="#custom-gifting">Explore Gifting</a>
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { icon: Sparkles, text: 'Hand-poured small batches' },
                { icon: Gift, text: 'Gift-ready packaging' },
                { icon: Package, text: 'Custom boxes for events + clients' }
              ].map((badge) => <TrustBadge key={badge.text} icon={badge.icon} text={badge.text} />)}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="story" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-14">
          <motion.div {...fadeUp}>
            <span className={eyebrow}>Our story</span>
            <h2 className={titleClass}>Rituals for intention and calm</h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-[#5f574e]">
              <p>Orya began with a simple belief: small rituals can turn a house into a calmer home. A candle lit in the evening. A bath drawn after a long day. A gift given with intention.</p>
              <p>Each candle, bath ritual, and gift box is created to feel considered, beautiful, and easy to give — a quiet moment of calm made tangible.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={ {'duration': 0.65, 'delay': 0.15} } className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#d8bd67]/18 blur-2xl" />
            <div className="overflow-hidden rounded-[2.6rem] border border-[#e9dfce] bg-[#f4efe5] p-4 shadow-[0_30px_90px_rgba(55,43,30,0.12)]">
              <img src="https://images.unsplash.com/photo-1686190696154-98ef6d630c68" alt="Minimalist candle setup" className="h-[34rem] w-full rounded-[2rem] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="collections" className="bg-[#f4efe7] py-24 lg:py-32">
        <div className="mx-auto max-w-[112rem] px-6 sm:px-8 lg:px-14">
          <motion.div {...fadeUp} className={sectionIntro}>
            <span className={eyebrow}>Shop collections</span>
            <h2 className={titleClass}>Beautiful rituals, ready to give.</h2>
            <p className={copyClass}>Large image-led collections with compact text, soft movement, and a premium ClearLine demo feel.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
            {collections.map((item, idx) => (
              <motion.a key={item.title} href="#gift-boxes" {...fadeUp} transition={ {'duration': 0.55, 'delay': idx * 0.06} }>
                <CollectionCard {...item} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[112rem] px-6 sm:px-8 lg:px-14">
          <motion.div {...fadeUp} className={sectionIntro}>
            <span className={eyebrow}>Featured products</span>
            <h2 className={titleClass}>Current favourites.</h2>
            <p className={copyClass}>A calmer ecommerce section with larger product cards and less tiny template styling.</p>
          </motion.div>
          <ProductsList />
        </div>
      </section>

      <section id="gift-boxes" className="bg-[#1f1a14] py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-[104rem] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-14">
          <motion.div {...fadeUp} className="overflow-hidden rounded-[2.7rem] border border-white/15 bg-white/5 p-4 shadow-[0_34px_100px_rgba(0,0,0,0.28)]">
            <img src="https://images.unsplash.com/photo-1629890876366-0fa3bc95020c" alt="The Evening Ritual Box" className="h-[32rem] w-full rounded-[2.1rem] object-cover lg:h-[42rem]" />
          </motion.div>
          <motion.div {...fadeUp} transition={ {'duration': 0.65, 'delay': 0.12} }>
            <span className="mb-5 inline-flex rounded-full border border-[#e6c96b]/35 bg-white/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f0d486]">Featured gift box</span>
            <h2 className="text-[3rem] font-bold leading-[0.98] tracking-[-0.055em] sm:text-[4rem] lg:text-[5rem]">The Evening Ritual Box</h2>
            <p className="mt-4 text-2xl font-bold text-[#e7c968]">From $119</p>
            <p className="mt-6 max-w-xl text-lg leading-9 text-white/78">Our signature gift box brings together everything needed for a calm evening ritual, beautifully packed and ready to give.</p>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-base text-white/84 sm:grid-cols-2">
              {['Signature candle', 'Room spray', 'Bath ritual', 'Personal note card', 'Premium gift box'].map((item) => (
                <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-[#e7c968]" /> {item}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button className="h-12 rounded-full bg-[#c9a84f] px-8 font-bold text-[#21180f] hover:bg-[#d8b963]">View Gift Box</Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/25 bg-white/8 px-8 font-bold text-white hover:bg-white hover:text-[#21180f]"><a href="#custom-gifting">Ask Custom Question</a></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="custom-gifting" className="bg-[#8a6a4c] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[104rem] px-6 sm:px-8 lg:px-14">
          <motion.div {...fadeUp} className="mb-14 max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/86">Custom gifting</span>
            <h2 className="text-[2.8rem] font-bold leading-[0.98] tracking-[-0.055em] sm:text-[3.8rem] lg:text-[4.8rem]">Custom gifting for every occasion</h2>
            <p className="mt-6 text-lg leading-8 text-white/82">Create memorable boxes for clients, events, staff appreciation, launches, and special moments at home.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: 'Choose quantity', text: 'Tell us how many boxes you need.' },
              { num: '02', title: 'Choose products', text: 'Select candles, sprays, bath pieces, and notes.' },
              { num: '03', title: 'Add branding', text: 'Include colours, cards, ribbons, and message details.' },
              { num: '04', title: 'Receive quote', text: 'Get a clear custom recommendation.' }
            ].map((step, idx) => (
              <motion.div key={step.num} {...fadeUp} transition={ {'duration': 0.55, 'delay': idx * 0.07} } className="rounded-[1.8rem] border border-white/18 bg-white/12 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                <span className="block text-5xl font-bold text-white/32">{step.num}</span>
                <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/78">{step.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12"><Button className="h-12 rounded-full bg-white px-8 font-bold text-[#6f5134] hover:bg-white/90">Start a Custom Enquiry</Button></motion.div>
        </div>
      </section>

      <section id="journal" className="bg-[#f8f5ef] py-24 lg:py-32">
        <div className="mx-auto max-w-[104rem] px-6 sm:px-8 lg:px-14">
          <motion.div {...fadeUp} className={sectionIntro}>
            <span className={eyebrow}>Journal</span>
            <h2 className={titleClass}>Ideas for intentional living.</h2>
            <p className={copyClass}>Simple guides for creating calm, thoughtful gifting, and everyday home rituals.</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <motion.div key={post.title} {...fadeUp} transition={ {'duration': 0.55, 'delay': idx * 0.08} } className="h-full"><BlogCard {...post} /></motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <motion.div {...fadeUp} className="rounded-[2.4rem] border border-[#e9dfce] bg-[#f8f5ef] px-8 py-14 shadow-[0_22px_80px_rgba(55,43,30,0.08)] lg:px-16">
            <HeartHandshake className="mx-auto mb-7 h-10 w-10 text-[#c9a84f]" />
            <h2 className="text-[2.5rem] font-bold leading-none tracking-[-0.055em] text-[#2f281f] sm:text-[3.2rem]">Example customer feedback layout</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6c6256]">This section can showcase product reviews, client gifting feedback, event responses, or testimonials once the store begins collecting customer stories.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4efe7] py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <motion.div {...fadeUp}>
            <span className={eyebrow}>Begin your ritual</span>
            <h2 className={titleClass}>Build a calmer home ritual.</h2>
            <p className={copyClass}>Explore hand-poured candles and bath rituals, or start a custom gifting enquiry for your next moment, event, or client gift.</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-[#c9a84f] px-8 font-bold text-[#21180f] hover:bg-[#d8b963]"><a href="#collections">Shop the Collection</a></Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-[#d8c696] bg-white px-8 font-bold text-[#3a2c1c] hover:bg-[#f1eadc]"><a href="#custom-gifting">Start Custom Gifting Enquiry</a></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
