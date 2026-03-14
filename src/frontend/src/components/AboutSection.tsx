import { Globe, Heart, Leaf } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: <Leaf size={20} />,
    title: "Sustainable Travel",
    desc: "We champion eco-friendly practices and work with local communities to preserve India's natural and cultural heritage.",
  },
  {
    icon: <Heart size={20} />,
    title: "Genuine Hospitality",
    desc: "Indian hospitality runs in our veins. Every guest is treated like family, and every trip is planned with heartfelt care.",
  },
  {
    icon: <Globe size={20} />,
    title: "Deep-Rooted Expertise",
    desc: "With over a decade of experience across India's diverse landscapes, we know the hidden gems that make journeys extraordinary.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Born From a Love
              <span className="block text-primary"> of Incredible India</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nature Nest Holidays was founded with a simple belief: that India
              is one of the world's most extraordinary travel destinations, and
              every visitor deserves to experience its full magic — not just the
              famous landmarks, but the living culture, the street food, the
              monsoon rains, and the warmth of its people.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded in 2013 in the foothills of the Himalayas, we started as a
              small trekking outfit and have grown into a full-service travel
              company covering every corner of India. What hasn't changed is our
              passion — to connect travelers with the soul of this magnificent
              land.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-5 rounded-xl bg-background shadow-card">
                <div className="font-display text-3xl font-bold text-primary">
                  10+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center p-5 rounded-xl bg-background shadow-card">
                <div className="font-display text-3xl font-bold text-primary">
                  28
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Indian States Covered
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden h-64 mb-8 shadow-card-hover">
              <img
                src="/assets/generated/dest-uttarakhand.dim_600x400.jpg"
                alt="Beautiful India"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-display text-white text-xl font-bold italic">
                  "Atithi Devo Bhava"
                </p>
                <p className="text-white/70 text-sm">
                  The guest is like God — our guiding philosophy
                </p>
              </div>
            </div>

            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 shadow-xs hover:shadow-card transition-all duration-300"
              >
                <div className="text-primary bg-primary/10 rounded-lg p-2.5 h-fit shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {v.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
