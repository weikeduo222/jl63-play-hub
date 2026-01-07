import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Zap, 
  Smartphone, 
  Gift, 
  CreditCard, 
  HeadphonesIcon, 
  Lock, 
  RefreshCw,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your safety is our priority. JL63 employs 256-bit SSL encryption, the same technology used by leading financial institutions worldwide. All personal data and transactions are protected by multiple layers of security protocols, ensuring complete peace of mind.",
    highlights: ["256-bit SSL Encryption", "Two-Factor Authentication", "Regular Security Audits"],
  },
  {
    icon: Zap,
    title: "Lightning-Fast Payouts",
    description: "Experience the fastest withdrawal processing in the industry. JL63 processes payout requests within hours, not days. Our streamlined verification system means you can access your winnings quickly through your preferred payment method.",
    highlights: ["24-Hour Processing", "Multiple Payment Options", "No Hidden Fees"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Play your favorite games anywhere, anytime. Our platform is fully optimized for mobile devices, providing a seamless gaming experience whether you're using a smartphone or tablet. No downloads required – just open your browser and play.",
    highlights: ["Responsive Design", "Touch-Optimized Interface", "Cross-Device Sync"],
  },
  {
    icon: Gift,
    title: "Generous Bonuses",
    description: "Start your JL63 journey with exceptional value. New players receive a substantial welcome package, while our loyalty program rewards regular players with ongoing promotions, cashback offers, and exclusive VIP perks that enhance your gaming experience.",
    highlights: ["Welcome Bonus", "Weekly Promotions", "VIP Rewards"],
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "JL63 supports a comprehensive range of payment methods to suit your preferences. From traditional credit cards and bank transfers to modern e-wallets and cryptocurrency options, depositing and withdrawing funds has never been easier or more convenient.",
    highlights: ["Credit/Debit Cards", "E-Wallets", "Cryptocurrency"],
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to assist with any questions or concerns. Whether you need help with account issues, game inquiries, or payment assistance, our knowledgeable staff is just a click away via live chat, email, or phone.",
    highlights: ["Live Chat Support", "Email Assistance", "Phone Support"],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">The JL63 </span>
            <span className="text-gradient-gold">Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover why thousands of players choose JL63 as their preferred gaming destination. Our platform 
            is built on pillars of security, speed, and superior service, ensuring an exceptional experience 
            with every visit.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                Trusted by <span className="text-gradient-gold">100,000+ Players</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                JL63 has earned the trust of players worldwide through our commitment to transparency, fairness, 
                and exceptional service. Our platform operates under strict regulatory oversight, with all games 
                independently tested and certified for fairness by leading testing laboratories.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Lock className="w-4 h-4 text-gold" />
                  <span className="text-sm text-foreground">Licensed & Regulated</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <RefreshCw className="w-4 h-4 text-gold" />
                  <span className="text-sm text-foreground">RNG Certified</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a
                href={CTA_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Button variant="cta" size="xl" className="group">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Join today and claim your welcome bonus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
