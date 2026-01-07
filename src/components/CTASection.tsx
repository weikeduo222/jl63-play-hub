import { Button } from "@/components/ui/button";
import { Rocket, Gift, ArrowRight } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(38 92% 50% / 0.1) 0%, transparent 70%)' }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gold/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-8 animate-pulse-glow">
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">Ready to Start Your </span>
            <span className="text-gradient-gold">Winning Journey</span>
            <span className="text-foreground">?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of players who have discovered the JL63 difference. Create your free account today 
            and unlock access to over 500 premium games, exclusive bonuses, and world-class entertainment. 
            Your next big win is just a click away.
          </p>

          {/* Bonus Highlight */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 border border-gold/30 mb-10">
            <Gift className="w-6 h-6 text-gold" />
            <span className="text-lg font-display font-semibold text-gold">
              Claim Your Welcome Bonus Now
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="cta" size="xl" className="group text-lg">
                Create Free Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="goldOutline" size="xl" className="text-lg">
                Login to Play
              </Button>
            </a>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground mt-8">
            🔒 Secure registration • ⚡ Instant account activation • 🎁 Bonus credited automatically
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
