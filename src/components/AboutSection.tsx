import { Button } from "@/components/ui/button";
import { Star, Users, Globe, Award, Sparkles, Heart } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            About JL63
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">Why Choose </span>
            <span className="text-gradient-gold">JL63</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            JL63.org stands as a beacon of excellence in the online gaming industry. Established with a vision to 
            revolutionize digital entertainment, we have consistently delivered unparalleled gaming experiences to 
            players worldwide. Our platform combines cutting-edge technology with a deep understanding of what 
            gamers truly desire.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                At JL63, we believe that every player deserves access to premium entertainment without compromise. 
                Our extensive library features over 500 meticulously curated games from the world's leading software 
                providers. From classic table games that have stood the test of time to innovative slot machines with 
                stunning graphics and immersive storylines, our collection caters to every preference and playing style.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Security is not just a feature at JL63 – it's our foundation. We employ state-of-the-art SSL encryption 
                technology to ensure that every transaction and piece of personal information remains completely protected. 
                Our platform is licensed and regulated by reputable gaming authorities, guaranteeing fair play and 
                transparent operations at all times.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What truly sets JL63 apart is our unwavering commitment to customer satisfaction. Our dedicated support 
                team is available around the clock, ready to assist with any inquiry or concern. Whether you're a 
                seasoned player or just beginning your gaming journey, our team ensures that your experience at 
                JL63.org is nothing short of exceptional.
              </p>
            </div>

            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="gold" size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Join JL63 Today
              </Button>
            </a>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Star className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">4.9/5</h3>
              <p className="text-muted-foreground">Average Player Rating</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Users className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">100K+</h3>
              <p className="text-muted-foreground">Active Players</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Globe className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Award className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">15+</h3>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 md:p-12">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-center mb-10">
            <span className="text-gradient-gold">Our Core Values</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">Player-First Approach</h4>
              <p className="text-muted-foreground">
                Every decision we make at JL63 is guided by the best interests of our players. From game selection to 
                bonus structures, your satisfaction is our top priority. We continuously gather feedback and implement 
                improvements to enhance your gaming experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">Uncompromising Quality</h4>
              <p className="text-muted-foreground">
                Quality is the cornerstone of everything we do at JL63. We partner exclusively with tier-one game 
                developers who share our commitment to excellence. Every game on our platform undergoes rigorous 
                testing to ensure optimal performance and fairness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">Global Accessibility</h4>
              <p className="text-muted-foreground">
                JL63 is designed to be accessible to players worldwide. Our platform supports multiple languages and 
                currencies, with localized payment methods to ensure seamless transactions. No matter where you are, 
                JL63 brings premium gaming to your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
