import { Skeleton } from "@/components/ui/skeleton";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import type { Testimonial } from "../backend.d";
import { useGetTestimonials } from "../hooks/useQueries";

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5n,
    reviewText:
      "Our Kerala backwaters trip was absolutely magical. The houseboat experience was like a dream. Nature Nest took care of every detail and our guide Rajan was incredibly knowledgeable. Will definitely book again!",
    tourPackageName: "Kerala Backwaters & Beaches",
  },
  {
    name: "Aditya & Meera Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5n,
    reviewText:
      "We celebrated our anniversary on the Royal Rajasthan tour. The camel safari at sunset in the Thar Desert was breathtaking. Excellent service throughout and perfect hotel selections!",
    tourPackageName: "Royal Rajasthan Explorer",
  },
  {
    name: "Sanjay Mehta",
    location: "Bangalore, Karnataka",
    rating: 5n,
    reviewText:
      "The Char Dham Yatra was a deeply spiritual and well-organized journey. Despite the challenging terrain, everything went smoothly. The team's attention to the needs of elderly travelers was commendable.",
    tourPackageName: "Char Dham Yatra",
  },
  {
    name: "Ananya Krishnan",
    location: "Chennai, Tamil Nadu",
    rating: 5n,
    reviewText:
      "The Andaman Island trip exceeded all expectations! Crystal clear water, incredible snorkeling and an amazing local guide who knew all the best spots. Nature Nest is in a class of their own.",
    tourPackageName: "Andaman Island Escape",
  },
  {
    name: "Rohit & Pooja Joshi",
    location: "Pune, Maharashtra",
    rating: 4n,
    reviewText:
      "First-time trekkers and we chose the Himalayan Adventure — the best decision ever! Our guide was patient, encouraging and deeply knowledgeable. The views from Triund at sunrise were unforgettable.",
    tourPackageName: "Himalayan Adventure Trek",
  },
  {
    name: "Kavitha Nair",
    location: "Kochi, Kerala",
    rating: 5n,
    reviewText:
      "Even though I'm from Kerala, Nature Nest showed me sides of my home state I had never seen. The Munnar tea garden sunrise walk was something I will cherish forever. Truly exceptional service.",
    tourPackageName: "Kerala Backwaters & Beaches",
  },
];

const SKELETON_KEYS = ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"];
const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating({ rating }: { rating: bigint }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.map((k, i) => (
        <Star
          key={k}
          size={14}
          className={
            i < Number(rating)
              ? "text-gold-500 fill-gold-500"
              : "text-earth-200 fill-earth-200"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-ocid={`testimonials.item.${index + 1}`}
      className="relative p-6 rounded-2xl bg-background border border-border shadow-card hover:shadow-card-hover transition-all duration-400 flex flex-col"
    >
      <Quote size={28} className="text-primary/20 mb-3" />
      <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-5 italic">
        &ldquo;{t.reviewText}&rdquo;
      </p>
      <div className="border-t border-border pt-4">
        <StarRating rating={t.rating} />
        <div className="mt-2">
          <p className="font-semibold text-foreground text-sm">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.location}</p>
          <p className="text-xs text-primary/80 font-medium mt-1">
            📦 {t.tourPackageName}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useGetTestimonials();
  const items =
    testimonials && testimonials.length > 0
      ? testimonials
      : FALLBACK_TESTIMONIALS;

  return (
    <section className="section-pad bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-3">
            <Star size={14} /> Traveler Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear from the thousands of happy
            travelers who have explored India with us.
          </p>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="testimonials.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <div key={k} className="rounded-2xl border p-6 space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-10 w-1/2 mt-4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
