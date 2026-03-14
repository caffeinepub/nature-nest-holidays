import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";

interface DestinationData {
  name: string;
  region: string;
  description: string;
  priceINR: number;
  isOffBeat: boolean;
  photos: string[];
}

const DESTINATIONS: DestinationData[] = [
  {
    name: "Gangtok",
    region: "East Sikkim",
    description:
      "Capital of Sikkim, vibrant city with ancient monasteries, bustling MG Marg, and sweeping Himalayan views.",
    priceINR: 10000,
    isOffBeat: false,
    photos: [
      "/assets/generated/gangtok.dim_600x400.jpg",
      "/assets/generated/gangtok-2.dim_600x400.jpg",
      "/assets/generated/gangtok-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Lachung",
    region: "North Sikkim",
    description:
      "Serene mountain village nestled near Yumthang Valley — the Valley of Flowers — with pristine alpine scenery.",
    priceINR: 10000,
    isOffBeat: false,
    photos: [
      "/assets/generated/lachung.dim_600x400.jpg",
      "/assets/generated/lachung-2.dim_600x400.jpg",
      "/assets/generated/lachung-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Lachen",
    region: "North Sikkim",
    description:
      "Remote gateway to the sacred Gurudongmar Lake at 17,800 ft — one of India's highest and holiest lakes.",
    priceINR: 10000,
    isOffBeat: false,
    photos: [
      "/assets/generated/lachen.dim_600x400.jpg",
      "/assets/generated/lachen-2.dim_600x400.jpg",
      "/assets/generated/lachen-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Pelling",
    region: "West Sikkim",
    description:
      "West Sikkim gem offering panoramic Kanchenjunga views, ancient monasteries, and the iconic skywalk bridge.",
    priceINR: 10000,
    isOffBeat: false,
    photos: [
      "/assets/generated/pelling.dim_600x400.jpg",
      "/assets/generated/pelling-2.dim_600x400.jpg",
      "/assets/generated/pelling-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Ravangla",
    region: "South Sikkim",
    description:
      "Peaceful South Sikkim hill town known for its magnificent Buddha Park, Temi Tea Garden, and forest trails.",
    priceINR: 5000,
    isOffBeat: true,
    photos: [
      "/assets/generated/ravangla.dim_600x400.jpg",
      "/assets/generated/ravangla-2.dim_600x400.jpg",
      "/assets/generated/ravangla-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Kaluk",
    region: "West Sikkim",
    description:
      "Hidden village in West Sikkim with lush forest walks, orange orchards, and untouched traditional life.",
    priceINR: 5000,
    isOffBeat: true,
    photos: [
      "/assets/generated/kaluk.dim_600x400.jpg",
      "/assets/generated/kaluk-2.dim_600x400.jpg",
      "/assets/generated/kaluk-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Darjeeling",
    region: "North Bengal",
    description:
      "Iconic tea gardens, the legendary Tiger Hill sunrise, and the UNESCO-listed Darjeeling Himalayan Railway.",
    priceINR: 5000,
    isOffBeat: false,
    photos: [
      "/assets/generated/darjeeling.dim_600x400.jpg",
      "/assets/generated/darjeeling-2.dim_600x400.jpg",
      "/assets/generated/darjeeling-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Takda",
    region: "North Bengal",
    description:
      "Quiet off-beat hamlet near Darjeeling with misty mornings, rhododendron forests, and complete tranquility.",
    priceINR: 5000,
    isOffBeat: true,
    photos: [
      "/assets/generated/takda.dim_600x400.jpg",
      "/assets/generated/takda-2.dim_600x400.jpg",
      "/assets/generated/takda-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Sittong",
    region: "North Bengal",
    description:
      "Orange orchards and world-class bird watching in a charming village untouched by mass tourism.",
    priceINR: 5000,
    isOffBeat: true,
    photos: [
      "/assets/generated/sittong.dim_600x400.jpg",
      "/assets/generated/sittong-2.dim_600x400.jpg",
      "/assets/generated/sittong-3.dim_600x400.jpg",
    ],
  },
  {
    name: "Dawaipani",
    region: "North Bengal",
    description:
      "Serene off-beat retreat near Kurseong surrounded by tea gardens, birds, and mist-wrapped valleys.",
    priceINR: 5000,
    isOffBeat: true,
    photos: [
      "/assets/generated/dawaipani.dim_600x400.jpg",
      "/assets/generated/dawaipani-2.dim_600x400.jpg",
      "/assets/generated/dawaipani-3.dim_600x400.jpg",
    ],
  },
];

function PhotoSlideshow({ photos, name }: { photos: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c - 1 + photos.length) % photos.length);
    },
    [photos.length],
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c + 1) % photos.length);
    },
    [photos.length],
  );

  return (
    <div className="relative h-52 overflow-hidden group/slide">
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${name} scene ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-200 z-10"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-200 z-10"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {photos.map((_, i) => (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: stable index
            key={i}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            aria-label={`View scene ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function DestinationCard({
  dest,
  index,
}: { dest: DestinationData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      data-ocid={`destinations.item.${index + 1}`}
      className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer bg-card"
    >
      {/* Photo slideshow */}
      <div className="relative">
        <PhotoSlideshow photos={dest.photos} name={dest.name} />
        {/* Badges row */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
          <Badge className="bg-forest-700/90 text-white font-semibold text-xs border-0 backdrop-blur-sm">
            {dest.region}
          </Badge>
          {dest.isOffBeat && (
            <Badge className="bg-gold-500/95 text-earth-900 font-bold text-xs border-0 flex items-center gap-1">
              <Sparkles size={10} /> Off-Beat
            </Badge>
          )}
        </div>
        {/* Price badge bottom-right */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white font-bold text-sm px-3 py-1 rounded-full">
            ₹{dest.priceINR.toLocaleString("en-IN")}/person
          </span>
        </div>
        {/* Destination name overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">
            {dest.name}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {dest.description}
        </p>
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin size={11} /> {dest.region}
          </span>
          <span className="text-primary font-bold text-sm">
            ₹{dest.priceINR.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-forest-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

export default function DestinationsSection() {
  return (
    <section id="destinations" className="section-pad bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-3">
            <MapPin size={14} /> Eastern Himalayas
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            North Bengal &amp; Sikkim Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert-curated destinations in the Eastern Himalayas. From bustling
            Gangtok to hidden off-beat villages.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-forest-600 inline-block" />{" "}
              Sikkim Highlights ₹10,000/person
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-gold-500 inline-block" />{" "}
              Off-Beat Gems ₹5,000/person
            </span>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          data-ocid="destinations.list"
        >
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.name} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
