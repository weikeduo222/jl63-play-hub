import { Button } from "@/components/ui/button";
import { Gift, Percent, Trophy, Calendar, Sparkles, Crown, Star } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const promotions = [
  {
    icon: Gift,
    title: "Welcome Bonus Package",
    subtitle: "For New Members",
    description: "Start your JL63 journey with an incredible welcome package designed to boost your initial bankroll. New players receive a generous match bonus on their first deposit, plus free spins on our most popular slot games. This exclusive offer provides exceptional value and gives you more opportunities to explore our extensive game library.",
    highlight: "Up to 100% Match Bonus",
    terms: "Minimum deposit required. Wagering requirements apply.",
  },
  {
    icon: Percent,
    title: "Daily Reload Bonuses",
    subtitle: "Every Day Rewards",
    description: "Every day brings new opportunities at JL63. Our daily reload bonuses reward loyal players with percentage matches on their deposits throughout the week. Different days feature different bonus percentages, encouraging regular play and maximizing your entertainment value with each visit to our platform.",
    highlight: "Daily Deposit Matches",
    terms: "Check promotions page for daily offers.",
  },
  {
    icon: Trophy,
    title: "Weekly Tournaments",
    subtitle: "Compete & Win",
    description: "Put your skills to the test in our weekly tournaments featuring massive prize pools. Compete against other players on selected games for the chance to climb the leaderboard and claim substantial cash prizes. New tournaments launch every week with varying formats and prize structures.",
    highlight: "Massive Prize Pools",
    terms: "Tournament schedules vary. Check calendar for details.",
  },
  {
    icon: Crown,
    title: "VIP Loyalty Program",
    subtitle: "Exclusive Benefits",
    description: "Our multi-tiered VIP program rewards dedicated players with escalating benefits. As you play, you accumulate points that unlock higher VIP levels, each offering improved perks including higher withdrawal limits, personal account managers, exclusive bonuses, and invitations to special events.",
    highlight: "5 VIP Tiers to Unlock",
    terms: "VIP status based on playing activity.",
  },
];

const PromotionsSection = () => {
  return (
    <section id="promotions" className="py-20 md:py-32 bg-dark-elevated relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 inline mr-1" />
            Promotions & Bonuses
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">Exclusive </span>
            <span className="text-gradient-gold">Rewards</span>
            <span className="text-foreground"> Await</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At JL63, we believe in rewarding our players generously. From the moment you join, you'll have access 
            to a comprehensive range of bonuses and promotions designed to enhance your gaming experience and 
            maximize your winning potential.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <promo.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl text-foreground">{promo.title}</h3>
                  </div>
                  <span className="text-sm text-gold">{promo.subtitle}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mt-5 mb-5 leading-relaxed">{promo.description}</p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
                  <Star className="w-4 h-4 text-gold" />
                  <span className="text-sm font-semibold text-gold">{promo.highlight}</span>
                </div>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Button variant="gold" size="sm">
                    Claim Now
                  </Button>
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">* {promo.terms}</p>
            </div>
          ))}
        </div>

        {/* Additional Promotions Info */}
        <div className="bg-gradient-card rounded-3xl border border-gold/20 p-8 md:p-12 text-center">
          <Calendar className="w-12 h-12 text-gold mx-auto mb-6" />
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
            New Promotions Every Week
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Our promotions calendar is constantly updated with fresh offers and exciting campaigns. From seasonal 
            events to exclusive game launches, there's always something new to discover at JL63. Subscribe to our 
            notifications to never miss an opportunity to boost your bankroll.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="cta" size="lg">
                <Gift className="w-5 h-5 mr-2" />
                View All Promotions
              </Button>
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="goldOutline" size="lg">
                Join JL63 Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
