import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest-800/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/Screenshot_20260120_124323_Canva-1.jpg"
              alt="Nature Nest Holidays"
              className="w-12 h-12 object-contain rounded-full"
            />
            <div>
              <span className="font-display font-bold text-lg text-white leading-tight block">
                Nature Nest
              </span>
              <span className="text-gold-400 text-xs font-body tracking-widest uppercase">
                Holidays
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                data-ocid="nav.link"
                className="px-4 py-2 text-sm font-medium text-white/85 hover:text-gold-400 transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <Button
              type="button"
              onClick={() => scrollTo("#contact")}
              data-ocid="nav.primary_button"
              className="ml-4 bg-gold-500 hover:bg-gold-400 text-earth-900 font-semibold text-sm px-5 h-9"
            >
              Plan My Trip
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-forest-800/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  data-ocid="nav.link"
                  className="text-left px-4 py-3 text-white/85 hover:text-gold-400 hover:bg-white/5 rounded-md transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                type="button"
                onClick={() => scrollTo("#contact")}
                data-ocid="nav.primary_button"
                className="mt-2 bg-gold-500 hover:bg-gold-400 text-earth-900 font-semibold"
              >
                Plan My Trip
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
