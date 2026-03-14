import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tour Packages", href: "#packages" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/logo-transparent.dim_200x200.png"
                alt="Nature Nest Holidays"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-display font-bold text-xl text-white block leading-tight">
                  Nature Nest
                </span>
                <span className="text-gold-400 text-xs tracking-widest uppercase">
                  Holidays
                </span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Your trusted travel experts in North Bengal &amp; Sikkim. Crafting
              unforgettable Eastern Himalayan journeys since 2013.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <SiFacebook size={16} />, label: "Facebook" },
                { icon: <SiInstagram size={16} />, label: "Instagram" },
                { icon: <SiX size={16} />, label: "X" },
                { icon: <SiYoutube size={16} />, label: "YouTube" },
              ].map((s) => (
                <button
                  type="button"
                  key={s.label}
                  aria-label={s.label}
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-earth-900 flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(l.href)}
                    data-ocid="footer.link"
                    className="text-white/55 hover:text-gold-400 transition-colors text-sm"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-lg">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">
                  +91 9832468096
                  <br />
                  +91 8389036196
                </span>
              </div>
              <div className="flex gap-3">
                <Mail size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">
                  neturenest100489@gmail.com
                </span>
              </div>
              <div className="flex gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">
                  Ma Apartment, Dakhinayan,
                  <br />
                  Sodepur, Kolkata 700110
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {year} Nature Nest Holidays. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
              data-ocid="footer.link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
