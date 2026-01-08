import { CreditCard, Wallet, Building2, Bitcoin, Shield, Clock, CheckCircle2 } from "lucide-react";

const content = {
  en: {
    badge: "Payment Options",
    title1: "Secure & Flexible ",
    title2: "Payment Methods",
    description: "JL63 offers a comprehensive range of payment options to suit players from around the world. All transactions are protected by advanced SSL encryption, ensuring your financial information remains completely secure. Deposit and withdraw with confidence using your preferred payment method.",
    methods: [
      {
        icon: CreditCard,
        title: "Credit & Debit Cards",
        description: "We accept all major credit and debit cards including Visa, Mastercard, and Maestro. Card payments are processed instantly with secure 3D authentication. Enjoy the convenience of using your everyday payment cards with the confidence that your transactions are protected by industry-standard security protocols.",
        features: ["Instant deposits", "3D Secure authentication", "Widely accepted globally"],
      },
      {
        icon: Wallet,
        title: "E-Wallets",
        description: "Popular e-wallet options include PayPal, Skrill, Neteller, and ecoPayz. E-wallets offer fast transactions and an extra layer of security as you don't need to share your bank details directly. Many e-wallets also support instant withdrawals, getting your winnings to you faster than traditional methods.",
        features: ["Fast processing", "Extra security layer", "Instant withdrawals available"],
      },
      {
        icon: Building2,
        title: "Bank Transfers",
        description: "For players who prefer traditional banking methods, we support direct bank transfers and wire transfers. While these may take slightly longer to process, they're ideal for larger transactions and offer the reliability of conventional banking systems. Contact our support team for specific bank transfer instructions.",
        features: ["Higher limits available", "Traditional reliability", "Suitable for large amounts"],
      },
      {
        icon: Bitcoin,
        title: "Cryptocurrency",
        description: "Embrace the future of payments with our cryptocurrency options. We accept Bitcoin, Ethereum, Litecoin, and other major cryptocurrencies. Crypto transactions offer enhanced privacy, minimal fees, and fast processing times. Perfect for players who value discretion and modern payment technology.",
        features: ["Enhanced privacy", "Low transaction fees", "Fast processing"],
      },
    ],
    trustBadges: [
      { icon: Shield, label: "256-bit SSL Encryption" },
      { icon: Clock, label: "24-Hour Processing" },
      { icon: CheckCircle2, label: "PCI DSS Compliant" },
    ],
  },
  ph: {
    badge: "Mga Opsyon sa Pagbabayad",
    title1: "Secure at Flexible na ",
    title2: "Payment Methods",
    description: "Nag-aalok ang JL63 ng komprehensibong hanay ng mga opsyon sa pagbabayad upang angkop sa mga manlalaro mula sa buong mundo. Lahat ng transaksyon ay protektado ng advanced SSL encryption, na tinitiyak na ang iyong financial information ay ganap na secure. Mag-deposit at mag-withdraw nang may kumpiyansa gamit ang iyong gustong payment method.",
    methods: [
      {
        icon: CreditCard,
        title: "Credit at Debit Cards",
        description: "Tinatanggap namin ang lahat ng major credit at debit cards kabilang ang Visa, Mastercard, at Maestro. Ang mga card payments ay naproproseso agad na may secure 3D authentication. Enjoy ang convenience ng paggamit ng iyong everyday payment cards na may kumpiyansa na ang iyong mga transaksyon ay protektado ng industry-standard security protocols.",
        features: ["Instant deposits", "3D Secure authentication", "Globally accepted"],
      },
      {
        icon: Wallet,
        title: "E-Wallets",
        description: "Ang mga popular na e-wallet options ay kinabibilangan ng PayPal, Skrill, Neteller, at ecoPayz. Ang mga e-wallets ay nag-aalok ng mabilis na transaksyon at isang extra layer ng seguridad dahil hindi mo kailangang i-share ang iyong bank details nang direkta. Maraming e-wallets din ang sumusuporta sa instant withdrawals, na mas mabilis na nagdadala ng iyong mga panalo sa iyo.",
        features: ["Mabilis na processing", "Extra security layer", "Instant withdrawals available"],
      },
      {
        icon: Building2,
        title: "Bank Transfers",
        description: "Para sa mga manlalaro na mas gusto ang traditional banking methods, sumusuporta kami sa direct bank transfers at wire transfers. Bagaman maaaring tumagal nang kaunti ang mga ito sa pag-process, perpekto ang mga ito para sa mas malalaking transaksyon at nag-aalok ng reliability ng conventional banking systems. Kontakin ang aming support team para sa specific na bank transfer instructions.",
        features: ["Mataas na limits", "Traditional reliability", "Para sa malalaking halaga"],
      },
      {
        icon: Bitcoin,
        title: "Cryptocurrency",
        description: "Yakapin ang kinabukasan ng pagbabayad gamit ang aming cryptocurrency options. Tumatanggap kami ng Bitcoin, Ethereum, Litecoin, at iba pang major cryptocurrencies. Ang crypto transactions ay nag-aalok ng enhanced privacy, minimal fees, at mabilis na processing times. Perpekto para sa mga manlalaro na nagpapahalaga sa discretion at modernong payment technology.",
        features: ["Enhanced privacy", "Mababang transaction fees", "Mabilis na processing"],
      },
    ],
    trustBadges: [
      { icon: Shield, label: "256-bit SSL Encryption" },
      { icon: Clock, label: "24-Hour Processing" },
      { icon: CheckCircle2, label: "PCI DSS Compliant" },
    ],
  },
};

interface PaymentMethodsSectionProps {
  lang?: "en" | "ph";
}

const PaymentMethodsSection = ({ lang = "en" }: PaymentMethodsSectionProps) => {
  const t = content[lang];

  return (
    <section className="py-20 md:py-32 bg-dark-elevated relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
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

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {t.methods.map((method, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <method.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{method.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed">{method.description}</p>
              <div className="flex flex-wrap gap-2">
                {method.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {t.trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary"
            >
              <badge.icon className="w-4 h-4 text-gold" />
              <span className="text-sm text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
