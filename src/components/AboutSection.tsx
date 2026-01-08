import { Button } from "@/components/ui/button";
import { Star, Users, Globe, Award, Sparkles, Heart } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const content = {
  en: {
    badge: "About JL63",
    title1: "Why Choose ",
    title2: "JL63",
    title3: "?",
    intro: "JL63.org stands as a beacon of excellence in the online gaming industry. Established with a vision to revolutionize digital entertainment, we have consistently delivered unparalleled gaming experiences to players worldwide. Our platform combines cutting-edge technology with a deep understanding of what gamers truly desire.",
    p1: "At JL63, we believe that every player deserves access to premium entertainment without compromise. Our extensive library features over 500 meticulously curated games from the world's leading software providers. From classic table games that have stood the test of time to innovative slot machines with stunning graphics and immersive storylines, our collection caters to every preference and playing style. Each game undergoes rigorous quality testing to ensure optimal performance and fair outcomes.",
    p2: "Security is not just a feature at JL63 – it's our foundation. We employ state-of-the-art SSL encryption technology to ensure that every transaction and piece of personal information remains completely protected. Our platform is licensed and regulated by reputable gaming authorities, guaranteeing fair play and transparent operations at all times. We undergo regular third-party audits to maintain the highest standards of security and integrity.",
    p3: "What truly sets JL63 apart is our unwavering commitment to customer satisfaction. Our dedicated support team is available around the clock, ready to assist with any inquiry or concern. Whether you're a seasoned player or just beginning your gaming journey, our team ensures that your experience at JL63.org is nothing short of exceptional. We pride ourselves on resolving issues quickly and maintaining open communication with our valued players.",
    joinBtn: "Join JL63 Today",
    rating: "4.9/5",
    ratingLabel: "Average Player Rating",
    players: "100K+",
    playersLabel: "Active Players",
    countries: "50+",
    countriesLabel: "Countries Served",
    awards: "15+",
    awardsLabel: "Industry Awards",
    valuesTitle: "Our Core Values",
    value1Title: "Player-First Approach",
    value1Desc: "Every decision we make at JL63 is guided by the best interests of our players. From game selection to bonus structures, your satisfaction is our top priority. We continuously gather feedback and implement improvements to enhance your gaming experience.",
    value2Title: "Uncompromising Quality",
    value2Desc: "Quality is the cornerstone of everything we do at JL63. We partner exclusively with tier-one game developers who share our commitment to excellence. Every game on our platform undergoes rigorous testing to ensure optimal performance and fairness.",
    value3Title: "Global Accessibility",
    value3Desc: "JL63 is designed to be accessible to players worldwide. Our platform supports multiple languages and currencies, with localized payment methods to ensure seamless transactions. No matter where you are, JL63 brings premium gaming to your fingertips.",
  },
  ph: {
    badge: "Tungkol sa JL63",
    title1: "Bakit Piliin ang ",
    title2: "JL63",
    title3: "?",
    intro: "Ang JL63.org ay tumayo bilang isang beacon ng kahusayan sa industriya ng online gaming. Itinatag na may bisyon na baguhin ang digital entertainment, patuloy kaming naghatid ng walang kapantay na gaming experiences sa mga manlalaro sa buong mundo. Pinagsasama ng aming platform ang pinakabagong teknolohiya sa malalim na pag-unawa kung ano ang talagang gusto ng mga gamer.",
    p1: "Sa JL63, naniniwala kami na ang bawat manlalaro ay may karapatang mag-access ng premium entertainment nang walang kompromiso. Ang aming malawak na library ay nagtatampok ng higit sa 500 maingat na piniling mga laro mula sa mga nangungunang software provider sa buong mundo. Mula sa mga klasikong table games na napatunayan na sa panahon hanggang sa mga makabagong slot machine na may nakamamanghang graphics at immersive storylines, ang aming koleksyon ay tumutugon sa bawat kagustuhan at estilo ng paglalaro. Ang bawat laro ay sumasailalim sa mahigpit na quality testing upang matiyak ang optimal na performance at patas na resulta.",
    p2: "Ang seguridad ay hindi lamang isang feature sa JL63 – ito ang aming pundasyon. Gumagamit kami ng pinakabagong SSL encryption technology upang matiyak na ang bawat transaksyon at personal na impormasyon ay ganap na protektado. Ang aming platform ay licensed at regulated ng mga mapagkakatiwalaang gaming authority, na ginagarantiyahan ang patas na paglalaro at transparent na operasyon sa lahat ng oras. Sumasailalim kami sa regular na third-party audits upang mapanatili ang pinakamataas na pamantayan ng seguridad at integridad.",
    p3: "Ang tunay na nagpapasiyado sa JL63 ay ang aming walang alinlangang dedikasyon sa kasiyahan ng customer. Ang aming dedicated support team ay available sa buong araw, handang tumulong sa anumang katanungan o alalahanin. Maging isa kang beteranong manlalaro o nagsisimula pa lang sa iyong gaming journey, tinitiyak ng aming team na ang iyong karanasan sa JL63.org ay walang kapintasan. Ipinagmamalaki namin ang mabilis na paglutas ng mga isyu at pagpapanatili ng bukas na komunikasyon sa aming mga mahahalagang manlalaro.",
    joinBtn: "Sumali sa JL63 Ngayon",
    rating: "4.9/5",
    ratingLabel: "Average na Rating ng Manlalaro",
    players: "100K+",
    playersLabel: "Aktibong Manlalaro",
    countries: "50+",
    countriesLabel: "Mga Bansang Sineserbisyuhan",
    awards: "15+",
    awardsLabel: "Industry Awards",
    valuesTitle: "Ang Aming mga Core Values",
    value1Title: "Player-First na Pananaw",
    value1Desc: "Bawat desisyon na ginagawa namin sa JL63 ay ginagabayan ng pinakamahusay na interes ng aming mga manlalaro. Mula sa pagpili ng laro hanggang sa mga bonus structure, ang iyong kasiyahan ang aming pangunahing priyoridad. Patuloy kaming nangongolekta ng feedback at nagpapatupad ng mga pagpapabuti upang mapahusay ang iyong gaming experience.",
    value2Title: "Walang Kompromisong Kalidad",
    value2Desc: "Ang kalidad ang pundasyon ng lahat ng ginagawa namin sa JL63. Nakikipagsosyo lang kami sa mga tier-one game developer na kasama namin sa dedikasyon sa kahusayan. Ang bawat laro sa aming platform ay sumasailalim sa mahigpit na testing upang matiyak ang optimal na performance at pagiging patas.",
    value3Title: "Pandaigdigang Accessibility",
    value3Desc: "Ang JL63 ay dinisenyo upang maging accessible sa mga manlalaro sa buong mundo. Ang aming platform ay sumusuporta sa maraming wika at pera, na may mga localized payment method upang matiyak ang maayos na transaksyon. Saanman ka naroroon, dinadala ng JL63 ang premium gaming sa iyong mga daliri.",
  },
};

interface AboutSectionProps {
  lang?: "en" | "ph";
}

const AboutSection = ({ lang = "en" }: AboutSectionProps) => {
  const t = content[lang];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">{t.title1}</span>
            <span className="text-gradient-gold">{t.title2}</span>
            <span className="text-foreground">{t.title3}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                {t.p1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.p2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.p3}
              </p>
            </div>

            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="gold" size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                {t.joinBtn}
              </Button>
            </a>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Star className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">{t.rating}</h3>
              <p className="text-muted-foreground">{t.ratingLabel}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Users className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">{t.players}</h3>
              <p className="text-muted-foreground">{t.playersLabel}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Globe className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">{t.countries}</h3>
              <p className="text-muted-foreground">{t.countriesLabel}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-colors">
              <Award className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display font-bold text-3xl text-foreground mb-2">{t.awards}</h3>
              <p className="text-muted-foreground">{t.awardsLabel}</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 md:p-12">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-center mb-10">
            <span className="text-gradient-gold">{t.valuesTitle}</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">{t.value1Title}</h4>
              <p className="text-muted-foreground">
                {t.value1Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">{t.value2Title}</h4>
              <p className="text-muted-foreground">
                {t.value2Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-display font-semibold text-xl text-foreground mb-3">{t.value3Title}</h4>
              <p className="text-muted-foreground">
                {t.value3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
