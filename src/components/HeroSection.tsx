import { Button } from "@/components/ui/button";
import { Play, Shield, Zap, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-gold/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-gold/70 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-elevated border border-gold/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gold font-medium">Welcome to the Premier Gaming Destination</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Experience </span>
            <span className="text-gradient-gold">JL63</span>
          </h1>
          
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your Ultimate Online Gaming Platform
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Discover a world-class entertainment experience at JL63.org. We offer an extensive collection of premium games, 
            unmatched security, lightning-fast transactions, and exceptional customer service. Join thousands of satisfied 
            players who have made JL63 their preferred gaming destination. Your journey to extraordinary wins begins here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="cta" size="xl" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Play Now
              </Button>
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="goldOutline" size="xl">
                Create Free Account
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center p-4 rounded-xl bg-dark-elevated/50 border border-border/50 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-gold mb-2" />
              <span className="font-display font-semibold text-foreground">100% Secure</span>
              <span className="text-sm text-muted-foreground">SSL Encrypted</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-dark-elevated/50 border border-border/50 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-gold mb-2" />
              <span className="font-display font-semibold text-foreground">Instant</span>
              <span className="text-sm text-muted-foreground">Fast Withdrawals</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-dark-elevated/50 border border-border/50 backdrop-blur-sm">
              <Trophy className="w-8 h-8 text-gold mb-2" />
              <span className="font-display font-semibold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">Premium Games</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-dark-elevated/50 border border-border/50 backdrop-blur-sm">
              <div className="w-8 h-8 text-gold mb-2 flex items-center justify-center font-display font-bold text-lg">24/7</div>
              <span className="font-display font-semibold text-foreground">Support</span>
              <span className="text-sm text-muted-foreground">Always Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
