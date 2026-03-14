import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DestinationsSection from "./components/DestinationsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PackagesSection from "./components/PackagesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUs from "./components/WhyChooseUs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-body">
        <Navbar />
        <main>
          <HeroSection />
          <DestinationsSection />
          <PackagesSection />
          <WhyChooseUs />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
