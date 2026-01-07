import { Button } from "@/components/ui/button";
import { Gamepad2, Dice5, PlayCircle, Spade, Target, Gem, Crown, Flame, Star } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const gameCategories = [
  {
    icon: Gamepad2,
    title: "Slot Games",
    description: "Explore our vast collection of slot games featuring stunning graphics, innovative bonus features, and massive jackpot opportunities. From classic fruit machines to modern video slots with cinematic experiences, JL63 offers over 300 slot titles that cater to every taste and budget.",
    games: ["Fortune Tiger", "Sweet Bonanza", "Gates of Olympus", "Starlight Princess"],
    featured: true,
  },
  {
    icon: Spade,
    title: "Live Casino",
    description: "Experience the thrill of real casino action from the comfort of your home. Our live casino section features professional dealers, HD streaming quality, and interactive gameplay. Enjoy classic games like Blackjack, Roulette, Baccarat, and exclusive game shows in real-time.",
    games: ["Live Blackjack", "Speed Roulette", "Dragon Tiger", "Dream Catcher"],
    featured: true,
  },
  {
    icon: Dice5,
    title: "Table Games",
    description: "Master the classics with our comprehensive table games collection. Whether you prefer strategic card games or the excitement of dice, JL63 provides authentic casino experiences with fair odds and smooth gameplay. Perfect for both beginners and seasoned veterans.",
    games: ["European Roulette", "Casino Hold'em", "Craps", "Punto Banco"],
    featured: false,
  },
  {
    icon: Target,
    title: "Sports Betting",
    description: "Place your bets on the world's biggest sporting events. From football and basketball to tennis and esports, our sportsbook covers every major league and competition. Enjoy competitive odds, live betting options, and quick payouts on all your winning wagers.",
    games: ["Football", "Basketball", "Tennis", "Esports"],
    featured: false,
  },
  {
    icon: Gem,
    title: "Jackpot Games",
    description: "Chase life-changing wins with our progressive jackpot games. These specially selected titles feature prize pools that grow with every spin until one lucky player hits the ultimate payday. Multiple millionaires have been created on JL63's jackpot network.",
    games: ["Mega Moolah", "Divine Fortune", "Major Millions", "Treasure Nile"],
    featured: true,
  },
  {
    icon: Crown,
    title: "VIP Games",
    description: "Exclusive high-stakes games reserved for our VIP members. Enjoy higher betting limits, personalized service, and premium game variants designed for the discerning player. VIP members receive special invitations to exclusive tournaments and events.",
    games: ["High Limit Baccarat", "Premium Blackjack", "Elite Roulette", "Private Tables"],
    featured: false,
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-20 md:py-32 bg-dark-elevated relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Game Library
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">Explore Our </span>
            <span className="text-gradient-gold">Premium Games</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover an unparalleled selection of games at JL63.com. Our library is carefully curated to offer 
            the best gaming experiences from industry-leading providers. Every game is optimized for both desktop 
            and mobile play, ensuring seamless entertainment wherever you are.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gameCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                category.featured ? 'ring-1 ring-gold/20' : ''
              }`}
            >
              {category.featured && (
                <div className="flex items-center gap-1 mb-4">
                  <Flame className="w-4 h-4 text-gold" />
                  <span className="text-xs text-gold font-medium uppercase tracking-wide">Popular</span>
                </div>
              )}
              
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <category.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{category.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{category.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {category.games.map((game, gameIndex) => (
                  <span
                    key={gameIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {game}
                  </span>
                ))}
              </div>

              <a
                href={CTA_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Button variant="goldOutline" size="sm" className="w-full group-hover:bg-gold/10">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Play {category.title}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            With new games added weekly, there's always something fresh to explore at JL63.
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Button variant="cta" size="lg">
              <Star className="w-5 h-5 mr-2" />
              View All 500+ Games
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
