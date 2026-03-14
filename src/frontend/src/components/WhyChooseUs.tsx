import { BadgeCheck, Headphones, Route, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Users size={28} />,
    title: "Expert Local Guides",
    description:
      "Our team of passionate, certified guides with deep local knowledge ensure you experience the real India — its hidden gems, stories, and flavors.",
  },
  {
    icon: <Route size={28} />,
    title: "Customized Itineraries",
    description:
      "No two journeys are alike. We tailor every trip to your interests, travel style, and budget — crafting a unique adventure just for you.",
  },
  {
    icon: <Headphones size={28} />,
    title: "24/7 Support",
    description:
      "From the moment you book until your return home, our dedicated team is available around the clock to assist with any need or concern.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Best Price Guarantee",
    description:
      "We work directly with local partners to offer you the most competitive prices without compromising on quality or experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-forest-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-700/40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-forest-900/60 translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3 block">
            Why Travel With Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            The Nature Nest Difference
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            We don't just plan trips — we craft transformative experiences
            rooted in genuine hospitality and expert knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="text-gold-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {feat.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feat.description}
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
