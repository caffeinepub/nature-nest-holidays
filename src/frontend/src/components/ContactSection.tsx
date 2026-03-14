import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAddInquiry } from "../hooks/useQueries";

const DESTINATIONS = [
  "Gangtok",
  "Lachung",
  "Lachen",
  "Pelling",
  "Ravangla",
  "Kaluk",
  "Darjeeling",
  "Takda",
  "Sittong",
  "Dawaipani",
  "Custom Package",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelers: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travelDates: "",
  travelers: "2",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: addInquiry, isPending } = useAddInquiry();

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry(
      {
        id: BigInt(Date.now()),
        name: form.name,
        email: form.email,
        phone: form.phone,
        destinationOfInterest: form.destination,
        travelDates: form.travelDates,
        numberOfTravelers: BigInt(Number.parseInt(form.travelers) || 1),
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(EMPTY_FORM);
          toast.success("Inquiry sent! We'll reach out within 24 hours.");
        },
        onError: () => toast.error("Something went wrong. Please try again."),
      },
    );
  };

  return (
    <section
      id="contact"
      className="section-pad gradient-forest relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/3 -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/3 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3 block">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Plan Your Dream Journey
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Tell us your dream and we'll craft the perfect Eastern Himalayan
            adventure for you. Our travel experts respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-white">
              <h3 className="font-display text-2xl font-bold mb-6">
                Get In Touch
              </h3>
              {[
                {
                  icon: <Phone size={18} />,
                  label: "Phone",
                  value: "+91 9832468096 / +91 8389036196",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "neturenest100489@gmail.com",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Address",
                  value: "Ma Apartment, Dakhinayan, Sodepur, Kolkata 700110",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 mb-6">
                  <div className="text-gold-400 bg-white/10 rounded-lg p-2.5 h-fit shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="text-gold-400 font-semibold">
                  Office Hours:
                </span>
                <br />
                Monday – Saturday: 9:00 AM – 7:00 PM IST
                <br />
                Sunday: 10:00 AM – 4:00 PM IST
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white/5 border border-white/10 rounded-2xl h-full"
              >
                <CheckCircle2 size={56} className="text-green-400 mb-5" />
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Inquiry Received!
                </h3>
                <p className="text-white/70 mb-6">
                  Thank you for reaching out. Our travel expert will contact you
                  within 24 hours to start crafting your perfect Eastern
                  Himalayan journey.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  data-ocid="contact.secondary_button"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
                data-ocid="contact.panel"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">Full Name *</Label>
                    <Input
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      data-ocid="contact.input"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">
                      Email Address *
                    </Label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="your@email.com"
                      data-ocid="contact.input"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 XXXXX XXXXX"
                      data-ocid="contact.input"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">
                      Destination of Interest *
                    </Label>
                    <Select
                      required
                      value={form.destination}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, destination: v }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="contact.select"
                        className="bg-white/10 border-white/20 text-white focus:border-gold-400 [&>span]:text-white/40"
                      >
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {DESTINATIONS.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">
                      Preferred Travel Dates
                    </Label>
                    <Input
                      value={form.travelDates}
                      onChange={set("travelDates")}
                      placeholder="e.g. Dec 15 – Dec 25, 2025"
                      data-ocid="contact.input"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-white/80 text-sm">
                      Number of Travelers
                    </Label>
                    <Input
                      type="number"
                      min="1"
                      value={form.travelers}
                      onChange={set("travelers")}
                      placeholder="2"
                      data-ocid="contact.input"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-white/80 text-sm">Message</Label>
                  <Textarea
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your dream trip, special requirements, or any questions..."
                    rows={4}
                    data-ocid="contact.textarea"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-400 focus:ring-gold-400/20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-earth-900 font-bold h-12 text-base"
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin w-4 h-4 border-2 border-earth-900/30 border-t-earth-900 rounded-full" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} /> Send Inquiry
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
