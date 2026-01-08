import { Shield, Lock, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const content = {
  en: {
    tagline: "Premium Gaming",
    description: "JL63.org is a premier online gaming platform dedicated to providing exceptional entertainment experiences. With over 500 premium games, industry-leading security, and unparalleled customer service, we are committed to being your preferred gaming destination.",
    ssl: "SSL Secured",
    licensed: "Licensed Platform",
    fairPlay: "Fair Play Certified",
    quickLinks: "Quick Links",
    about: "About JL63",
    games: "Games",
    promotions: "Promotions",
    features: "Features",
    faq: "FAQ",
    support: "Support",
    liveChat: "24/7 Live Chat",
    email: "Email: support@jl63.org",
    helpCenter: "Help Center",
    responsibleGaming: "Responsible Gaming",
    terms: "Terms & Conditions",
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    termsService: "Terms of Service",
    cookie: "Cookie Policy",
    responsibleNote: "Gaming should be entertaining, not a source of income. Please play within your means and set personal limits. If you feel you may have a gambling problem, seek help from professional organizations. You must be 18 years or older to participate in any gaming activities at JL63.",
    playResponsibly: "Play Responsibly:",
  },
  ph: {
    tagline: "Premium Gaming",
    description: "Ang JL63.org ay isang pangunahing online gaming platform na nakatuon sa pagbibigay ng pambihirang entertainment experiences. May higit sa 500 premium na laro, industry-leading security, at walang kapantay na customer service.",
    ssl: "SSL Secured",
    licensed: "Licensed Platform",
    fairPlay: "Fair Play Certified",
    quickLinks: "Mga Quick Links",
    about: "Tungkol sa JL63",
    games: "Mga Laro",
    promotions: "Promotions",
    features: "Features",
    faq: "FAQ",
    support: "Suporta",
    liveChat: "24/7 Live Chat",
    email: "Email: support@jl63.org",
    helpCenter: "Help Center",
    responsibleGaming: "Responsableng Gaming",
    terms: "Mga Tuntunin at Kundisyon",
    copyright: "Lahat ng karapatan ay nakalaan.",
    privacy: "Privacy Policy",
    termsService: "Mga Tuntunin ng Serbisyo",
    cookie: "Cookie Policy",
    responsibleNote: "Ang gaming ay dapat maging entertaining, hindi pinagmumulan ng kita. Mangyaring maglaro sa loob ng iyong kakayahan at magtakda ng mga personal na limitasyon. Kung sa tingin mo ay may problema ka sa gambling, humingi ng tulong mula sa mga propesyonal na organisasyon. Dapat ay 18 taong gulang o mas matanda ka upang makalahok sa anumang gaming activities sa JL63.",
    playResponsibly: "Maglaro ng Responsable:",
  },
};

interface FooterProps {
  lang?: "en" | "ph";
}

const Footer = ({ lang = "en" }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const t = content[lang];

  return (
    <footer className="bg-dark-surface border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to={lang === "en" ? "/" : "/ph/"} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center glow-gold"><span className="font-display font-bold text-xl text-primary-foreground">JL</span></div>
              <div><h3 className="font-display font-bold text-2xl text-gradient-gold">JL63</h3><p className="text-xs text-muted-foreground tracking-widest uppercase">{t.tagline}</p></div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">{t.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground"><Shield className="w-3.5 h-3.5 text-gold" />{t.ssl}</div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground"><Lock className="w-3.5 h-3.5 text-gold" />{t.licensed}</div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground"><Award className="w-3.5 h-3.5 text-gold" />{t.fairPlay}</div>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-gold transition-colors">{t.about}</a></li>
              <li><a href="#games" className="text-muted-foreground hover:text-gold transition-colors">{t.games}</a></li>
              <li><a href="#promotions" className="text-muted-foreground hover:text-gold transition-colors">{t.promotions}</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-gold transition-colors">{t.features}</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-gold transition-colors">{t.faq}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">{t.support}</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">{t.liveChat}</span></li>
              <li><span className="text-muted-foreground">{t.email}</span></li>
              <li><span className="text-muted-foreground">{t.helpCenter}</span></li>
              <li><span className="text-muted-foreground">{t.responsibleGaming}</span></li>
              <li><span className="text-muted-foreground">{t.terms}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Globe className="w-4 h-4" /><span>© {currentYear} JL63.org. {t.copyright}</span></div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground"><span>{t.privacy}</span><span>{t.termsService}</span><span>{t.cookie}</span></div>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-secondary/50 text-center"><p className="text-sm text-muted-foreground"><strong className="text-gold">{t.playResponsibly}</strong> {t.responsibleNote}</p></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
