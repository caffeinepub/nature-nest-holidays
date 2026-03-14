import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-india.dim_1400x700.jpg')",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/70 via-forest-900/55 to-forest-900/80" />
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10">
            <MapPin size={14} />
            India's Trusted Travel Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          Discover
          <span className="block text-gold-400">Incredible India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Your trusted travel partner for unforgettable journeys across India.
          From serene backwaters to majestic Himalayas, we craft memories that
          last a lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#packages")}
            data-ocid="hero.primary_button"
            className="bg-gold-500 hover:bg-gold-400 text-earth-900 font-bold text-base px-8 h-13 shadow-lg hover:shadow-gold-500/20 hover:shadow-2xl transition-all duration-300"
          >
            Explore Packages
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            data-ocid="hero.secondary_button"
            className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white font-semibold text-base px-8 h-13 backdrop-blur-sm"
          >
            Plan My Trip
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            {
              icon: <Users size={18} />,
              value: "5000+",
              label: "Happy Travelers",
            },
            { icon: <MapPin size={18} />, value: "50+", label: "Destinations" },
            {
              icon: <Star size={18} />,
              value: "4.9★",
              label: "Average Rating",
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-gold-400 flex justify-center mb-1">
                {stat.icon}
              </div>
              <div className="text-white font-bold text-xl font-display">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
        }}
        onClick={() => scrollTo("#destinations")}
        data-ocid="hero.button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
