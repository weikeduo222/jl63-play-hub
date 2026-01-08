import { Button } from "@/components/ui/button";
import { Shield, Zap, Smartphone, Gift, CreditCard, HeadphonesIcon, Lock, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const content = {
  en: {
    badge: "Platform Features",
    title1: "The JL63 ",
    title2: "Advantage",
    description: "Discover why thousands of players choose JL63 as their preferred gaming destination. Our platform is built on pillars of security, speed, and superior service.",
    cta: "Get Started Now",
    ctaNote: "Join today and claim your welcome bonus",
    trustedBy: "Trusted by",
    players: "100,000+ Players",
    trustedDesc: "JL63 has earned the trust of players worldwide through our commitment to transparency, fairness, and exceptional service.",
    licensed: "Licensed & Regulated",
    rng: "RNG Certified",
    features: [
      { icon: Shield, title: "Bank-Level Security", description: "Your safety is our priority. JL63 employs 256-bit SSL encryption, the same technology used by leading financial institutions worldwide.", highlights: ["256-bit SSL Encryption", "Two-Factor Authentication", "Regular Security Audits"] },
      { icon: Zap, title: "Lightning-Fast Payouts", description: "Experience the fastest withdrawal processing in the industry. JL63 processes payout requests within hours, not days.", highlights: ["24-Hour Processing", "Multiple Payment Options", "No Hidden Fees"] },
      { icon: Smartphone, title: "Mobile-First Experience", description: "Play your favorite games anywhere, anytime. Our platform is fully optimized for mobile devices.", highlights: ["Responsive Design", "Touch-Optimized Interface", "Cross-Device Sync"] },
      { icon: Gift, title: "Generous Bonuses", description: "Start your JL63 journey with exceptional value. New players receive a substantial welcome package.", highlights: ["Welcome Bonus", "Weekly Promotions", "VIP Rewards"] },
      { icon: CreditCard, title: "Flexible Payments", description: "JL63 supports a comprehensive range of payment methods to suit your preferences.", highlights: ["Credit/Debit Cards", "E-Wallets", "Cryptocurrency"] },
      { icon: HeadphonesIcon, title: "24/7 Customer Support", description: "Our dedicated support team is available around the clock to assist with any questions.", highlights: ["Live Chat Support", "Email Assistance", "Phone Support"] },
    ],
  },
  ph: {
    badge: "Platform Features",
    title1: "Ang JL63 ",
    title2: "Advantage",
    description: "Tuklasin kung bakit libu-libong manlalaro ang pumipili sa JL63 bilang kanilang paboritong gaming destination. Ang aming platform ay binuo sa seguridad, bilis, at superior service.",
    cta: "Magsimula Na",
    ctaNote: "Sumali ngayon at kunin ang iyong welcome bonus",
    trustedBy: "Pinagkakatiwalaan ng",
    players: "100,000+ Manlalaro",
    trustedDesc: "Nakuha ng JL63 ang tiwala ng mga manlalaro sa buong mundo sa pamamagitan ng aming commitment sa transparency, fairness, at exceptional service.",
    licensed: "Licensed at Regulated",
    rng: "RNG Certified",
    features: [
      { icon: Shield, title: "Bank-Level Security", description: "Ang iyong kaligtasan ang aming priority. Gumagamit ang JL63 ng 256-bit SSL encryption.", highlights: ["256-bit SSL Encryption", "Two-Factor Authentication", "Regular Security Audits"] },
      { icon: Zap, title: "Mabilis na Payouts", description: "Maranasan ang pinakamabilis na withdrawal processing sa industriya.", highlights: ["24-Hour Processing", "Multiple Payment Options", "No Hidden Fees"] },
      { icon: Smartphone, title: "Mobile-First Experience", description: "Laruin ang iyong mga paboritong laro kahit saan, kahit kailan.", highlights: ["Responsive Design", "Touch-Optimized Interface", "Cross-Device Sync"] },
      { icon: Gift, title: "Mapagbigay na Bonuses", description: "Simulan ang iyong JL63 journey na may exceptional value.", highlights: ["Welcome Bonus", "Weekly Promotions", "VIP Rewards"] },
      { icon: CreditCard, title: "Flexible Payments", description: "Sumusuporta ang JL63 sa komprehensibong hanay ng payment methods.", highlights: ["Credit/Debit Cards", "E-Wallets", "Cryptocurrency"] },
      { icon: HeadphonesIcon, title: "24/7 Customer Support", description: "Ang aming dedicated support team ay available sa buong araw.", highlights: ["Live Chat Support", "Email Assistance", "Phone Support"] },
    ],
  },
};

interface FeaturesSectionProps {
  lang?: "en" | "ph";
}

const FeaturesSection = ({ lang = "en" }: FeaturesSectionProps) => {
  const t = content[lang];
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">{t.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6"><span className="text-foreground">{t.title1}</span><span className="text-gradient-gold">{t.title2}</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300"><feature.icon className="w-8 h-8 text-gold" /></div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">{feature.highlights.map((highlight, i) => (<li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-gold shrink-0" />{highlight}</li>))}</ul>
            </div>
          ))}
        </div>
        <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">{t.trustedBy} <span className="text-gradient-gold">{t.players}</span></h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t.trustedDesc}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary"><Lock className="w-4 h-4 text-gold" /><span className="text-sm text-foreground">{t.licensed}</span></div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary"><RefreshCw className="w-4 h-4 text-gold" /><span className="text-sm text-foreground">{t.rng}</span></div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a href={CTA_URL} target="_blank" rel="nofollow noopener noreferrer"><Button variant="cta" size="xl" className="group">{t.cta}<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button></a>
              <p className="text-sm text-muted-foreground mt-4">{t.ctaNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
