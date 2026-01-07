import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const faqs = [
  {
    question: "What is JL63 and what services does it offer?",
    answer: "JL63 is a premier online gaming platform that offers a comprehensive entertainment experience. Our platform features over 500 premium games including slots, live casino, table games, sports betting, and jackpot games. We provide a secure, fair, and exciting environment for players worldwide, backed by industry-leading technology and customer support. At JL63.org, we pride ourselves on delivering exceptional gaming experiences with generous bonuses and fast payouts.",
  },
  {
    question: "How do I create an account at JL63?",
    answer: "Creating an account at JL63 is quick and straightforward. Simply click the 'Register' button on our website, fill in the required information including your email address and preferred password, and verify your account through the confirmation email. The entire process takes just a few minutes. Once registered, you'll have immediate access to our full game library and can make your first deposit to start playing. New members also receive an exclusive welcome bonus package.",
  },
  {
    question: "Is JL63 safe and secure?",
    answer: "Absolutely. Security is our top priority at JL63. We employ state-of-the-art 256-bit SSL encryption technology to protect all transactions and personal information. Our platform operates under strict regulatory oversight and all games are independently tested by certified laboratories to ensure fair play. We also offer two-factor authentication for enhanced account security. Your safety and privacy are guaranteed when you play at JL63.org.",
  },
  {
    question: "What payment methods does JL63 accept?",
    answer: "JL63 supports a wide range of payment methods to accommodate players from different regions. We accept major credit and debit cards (Visa, Mastercard), popular e-wallets (PayPal, Skrill, Neteller), bank transfers, and various cryptocurrencies including Bitcoin and Ethereum. All transactions are processed securely with no hidden fees. Deposits are instant, and withdrawals are typically processed within 24 hours.",
  },
  {
    question: "How long do withdrawals take at JL63?",
    answer: "We pride ourselves on offering some of the fastest withdrawal processing times in the industry. Most withdrawal requests are processed within 24 hours. The actual time for funds to reach your account depends on your chosen payment method - e-wallets are typically instant once approved, while bank transfers may take 1-3 business days. VIP members enjoy priority processing for even faster access to their winnings.",
  },
  {
    question: "What bonuses are available for new players?",
    answer: "New players at JL63 are welcomed with an exceptional bonus package. This includes a generous match bonus on your first deposit, giving you extra funds to explore our games. You'll also receive free spins on selected slot games. Additionally, new members gain immediate access to our daily and weekly promotions. Check our promotions page for the current welcome offer details and wagering requirements.",
  },
  {
    question: "Can I play JL63 games on my mobile device?",
    answer: "Yes, JL63 is fully optimized for mobile gaming. Our responsive platform works seamlessly on all devices including smartphones and tablets, regardless of operating system. There's no need to download any app – simply access JL63.org through your mobile browser for instant access to our complete game library. The mobile experience mirrors our desktop version with the same high-quality graphics and smooth gameplay.",
  },
  {
    question: "How does the JL63 VIP program work?",
    answer: "Our VIP program rewards loyal players with escalating benefits across five exclusive tiers. As you play, you accumulate loyalty points that unlock higher VIP levels. Benefits include increased withdrawal limits, personal account managers, exclusive bonuses, cashback offers, and invitations to special events. The more you play, the more rewards you unlock. VIP status is determined by your overall gaming activity on the platform.",
  },
  {
    question: "What games are most popular at JL63?",
    answer: "Our players enjoy a diverse range of games. Popular slots include Fortune Tiger, Sweet Bonanza, and Gates of Olympus, known for their exciting features and big win potential. In our live casino, Speed Roulette and Live Blackjack attract many players seeking authentic casino experiences. Our progressive jackpot games like Mega Moolah have created numerous millionaires. Sports betting enthusiasts particularly enjoy our football and basketball markets.",
  },
  {
    question: "How can I contact JL63 customer support?",
    answer: "Our customer support team is available 24/7 to assist with any questions or concerns. You can reach us through live chat on our website for instant assistance, send an email for detailed inquiries, or call our dedicated support line. Our knowledgeable team is trained to help with account issues, game inquiries, payment assistance, and any other questions you may have about the JL63 platform.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 inline mr-1" />
            Help Center
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most common questions about JL63. If you can't find what you're looking for, 
            our support team is available 24/7 to help you with any inquiries.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-gold py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Support CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our support team is here to help 24/7.
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Button variant="gold" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
