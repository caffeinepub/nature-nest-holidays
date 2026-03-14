import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckCircle, Clock, IndianRupee, Package } from "lucide-react";
import { motion } from "motion/react";

interface TourPackage {
  name: string;
  destination: string;
  durationDays: number;
  priceINR: number;
  category: string;
  highlights: string[];
}

const CATEGORY_COLORS: Record<string, string> = {
  sikkim: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "north-bengal": "bg-amber-100 text-amber-800 border-amber-200",
  "off-beat": "bg-purple-100 text-purple-800 border-purple-200",
  weekend: "bg-sky-100 text-sky-800 border-sky-200",
};

const FALLBACK_PACKAGES: TourPackage[] = [
  {
    name: "Sikkim Complete Tour",
    destination: "Gangtok + Lachung + Lachen",
    durationDays: 7,
    priceINR: 28000,
    category: "sikkim",
    highlights: [
      "Tsomgo Lake",
      "Yumthang Valley",
      "Gurudongmar Lake",
      "Rumtek Monastery",
    ],
  },
  {
    name: "North Bengal Explorer",
    destination: "Darjeeling + Sittong + Takda",
    durationDays: 5,
    priceINR: 18000,
    category: "north-bengal",
    highlights: [
      "Tiger Hill Sunrise",
      "Tea Garden Tour",
      "Orange Village Walk",
      "Toy Train Ride",
    ],
  },
  {
    name: "West Sikkim Escape",
    destination: "Pelling + Kaluk + Ravangla",
    durationDays: 6,
    priceINR: 22000,
    category: "sikkim",
    highlights: [
      "Rabdentse Ruins",
      "Kanchenjunga Views",
      "Buddha Park",
      "Forest Trails",
    ],
  },
  {
    name: "Off-Beat North Bengal",
    destination: "Sittong + Takda + Dawaipani",
    durationDays: 4,
    priceINR: 15000,
    category: "off-beat",
    highlights: [
      "Bird Watching",
      "Orange Orchards",
      "Misty Valleys",
      "Village Homestay",
    ],
  },
  {
    name: "Darjeeling Weekend",
    destination: "Darjeeling",
    durationDays: 3,
    priceINR: 12000,
    category: "weekend",
    highlights: ["Tiger Hill", "Mall Road", "Batasia Loop", "Tea Tasting"],
  },
  {
    name: "Sikkim Off-Beat",
    destination: "Ravangla + Kaluk + Dawaipani",
    durationDays: 5,
    priceINR: 16000,
    category: "off-beat",
    highlights: [
      "Temi Tea Garden",
      "Hidden Monasteries",
      "Village Life",
      "Buddha Park",
    ],
  },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function PackageCard({ pkg, index }: { pkg: TourPackage; index: number }) {
  const categoryLabel = pkg.category
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const categoryStyle =
    CATEGORY_COLORS[pkg.category] || "bg-gray-100 text-gray-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-ocid={`packages.item.${index + 1}`}
    >
      <Card className="h-full flex flex-col border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-400 rounded-2xl overflow-hidden group">
        <CardHeader className="pb-3 pt-5 px-5 gradient-forest">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-white leading-tight">
              {pkg.name}
            </h3>
            <Badge className={`shrink-0 text-xs border ${categoryStyle}`}>
              {categoryLabel}
            </Badge>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-white/70 text-sm">
              <Clock size={13} /> {pkg.durationDays} Days
            </span>
            <span className="text-white/70 text-sm">📍 {pkg.destination}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 px-5 py-4">
          <div className="mb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Tour Highlights
            </p>
            <ul className="space-y-1.5">
              {pkg.highlights.slice(0, 4).map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <CheckCircle
                    size={14}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="px-5 pb-5 pt-3 border-t border-border flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <div className="flex items-center gap-1 text-primary font-bold text-2xl font-display">
              <IndianRupee size={18} className="mt-0.5" />
              {pkg.priceINR.toLocaleString("en-IN")}
            </div>
          </div>
          <Button
            type="button"
            onClick={() => scrollTo("#contact")}
            data-ocid={`packages.primary_button.${index + 1}`}
            className="bg-primary hover:bg-forest-500 text-primary-foreground font-semibold"
          >
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function PackagesSection() {
  return (
    <section id="packages" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-3">
            <Package size={14} /> Our Offerings
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tour Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handcrafted itineraries for the Eastern Himalayas — from cultural
            Sikkim circuits to hidden North Bengal gems.
          </p>
        </motion.div>

        {/* Featured Posters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Featured Tour Posters
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <img
                src="/assets/uploads/Green-and-White-Scenic-Sikkim-Tour-Poster_20260127_141637_0000-1.jpg"
                alt="Sikkim Tour Poster"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <img
                src="/assets/uploads/Green-and-Yellow-Modern-Darjeeling-India-Travel-Poster_20260127_142636_0000-2.jpg"
                alt="Darjeeling Tour Poster"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FALLBACK_PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
