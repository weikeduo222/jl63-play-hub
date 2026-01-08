import { Button } from "@/components/ui/button";
import { UserPlus, Wallet, Gamepad2, Trophy, ArrowRight } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const content = {
  en: {
    badge: "Getting Started",
    title1: "How to Play at ",
    title2: "JL63",
    description: "Getting started at JL63 is quick, easy, and secure. Follow these simple steps to begin your exciting gaming journey with us. Our streamlined registration and deposit process ensures you'll be playing your favorite games in just minutes.",
    steps: [
      {
        icon: UserPlus,
        number: "01",
        title: "Create Your Account",
        description: "Click the Register button and fill in your basic information. Our secure registration process takes less than 2 minutes. You'll need to provide a valid email address and create a strong password. Once registered, you'll receive a confirmation email to verify your account. Complete the verification to unlock all platform features and claim your welcome bonus.",
      },
      {
        icon: Wallet,
        number: "02",
        title: "Make Your First Deposit",
        description: "Choose from our wide range of secure payment methods including credit/debit cards, e-wallets, bank transfers, and cryptocurrencies. Select your preferred method, enter your deposit amount, and complete the transaction. All deposits are processed securely with SSL encryption. Your funds will appear in your account instantly, allowing you to start playing immediately.",
      },
      {
        icon: Gamepad2,
        number: "03",
        title: "Choose Your Games",
        description: "Browse our extensive game library featuring over 500 premium titles. From exciting slots and progressive jackpots to live casino tables and sports betting, there's something for every player. Use our filters to find games by category, provider, or popularity. Try games in demo mode first to learn the rules before playing with real money.",
      },
      {
        icon: Trophy,
        number: "04",
        title: "Win & Withdraw",
        description: "When you're ready to cash out your winnings, navigate to the withdrawal section. Select your preferred payment method and enter the amount you wish to withdraw. Our fast processing ensures most withdrawals are completed within 24 hours. VIP members enjoy priority processing for even quicker access to their funds. Your winnings are yours to enjoy!",
      },
    ],
    cta: "Register Now & Start Playing",
    note: "Join over 100,000 players who trust JL63 for their gaming entertainment",
  },
  ph: {
    badge: "Pagsisimula",
    title1: "Paano Maglaro sa ",
    title2: "JL63",
    description: "Ang pagsisimula sa JL63 ay mabilis, madali, at secure. Sundin ang mga simpleng hakbang na ito upang simulan ang iyong kapana-panabik na gaming journey sa amin. Ang aming streamlined registration at deposit process ay nagtitiyak na makakapaglaro ka ng iyong mga paboritong laro sa ilang minuto lamang.",
    steps: [
      {
        icon: UserPlus,
        number: "01",
        title: "Gumawa ng Iyong Account",
        description: "I-click ang Register button at punan ang iyong basic information. Ang aming secure registration process ay tumatagal ng wala pang 2 minuto. Kakailanganin mong magbigay ng valid email address at gumawa ng malakas na password. Kapag nakarehistro na, makakatanggap ka ng confirmation email upang ma-verify ang iyong account. Kumpletuhin ang verification upang ma-unlock ang lahat ng platform features at makuha ang iyong welcome bonus.",
      },
      {
        icon: Wallet,
        number: "02",
        title: "Gawin ang Iyong Unang Deposit",
        description: "Pumili mula sa aming malawak na hanay ng secure payment methods kabilang ang credit/debit cards, e-wallets, bank transfers, at cryptocurrencies. Piliin ang iyong gustong paraan, ilagay ang iyong deposit amount, at kumpletuhin ang transaksyon. Lahat ng deposits ay securely naproproseso gamit ang SSL encryption. Ang iyong pondo ay magpapakita sa iyong account agad, na nagpapahintulot sa iyong magsimulang maglaro kaagad.",
      },
      {
        icon: Gamepad2,
        number: "03",
        title: "Pumili ng Iyong mga Laro",
        description: "I-browse ang aming malawak na game library na nagtatampok ng higit sa 500 premium titles. Mula sa mga kapana-panabik na slots at progressive jackpots hanggang sa live casino tables at sports betting, may para sa bawat manlalaro. Gamitin ang aming mga filter upang mahanap ang mga laro ayon sa kategorya, provider, o popularidad. Subukan muna ang mga laro sa demo mode upang matutunan ang mga patakaran bago maglaro gamit ang tunay na pera.",
      },
      {
        icon: Trophy,
        number: "04",
        title: "Manalo at Mag-withdraw",
        description: "Kapag handa ka nang i-cash out ang iyong mga panalo, pumunta sa withdrawal section. Piliin ang iyong gustong payment method at ilagay ang halaga na nais mong i-withdraw. Ang aming mabilis na processing ay nagtitiyak na karamihan sa mga withdrawals ay nakumpleto sa loob ng 24 oras. Ang mga VIP member ay nagtatamasa ng priority processing para sa mas mabilis na access sa kanilang pondo. Ang iyong mga panalo ay sa iyo para ma-enjoy!",
      },
    ],
    cta: "Mag-register Na at Magsimulang Maglaro",
    note: "Sumali sa higit sa 100,000 manlalaro na nagtitiwala sa JL63 para sa kanilang gaming entertainment",
  },
};

interface HowToPlaySectionProps {
  lang?: "en" | "ph";
}

const HowToPlaySection = ({ lang = "en" }: HowToPlaySectionProps) => {
  const t = content[lang];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">{t.title1}</span>
            <span className="text-gradient-gold">{t.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-all duration-300 relative"
            >
              <span className="absolute top-4 right-4 font-display font-bold text-4xl text-gold/20">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={CTA_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Button variant="cta" size="xl" className="group">
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-muted-foreground mt-4 text-sm">{t.note}</p>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
