import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GamesSection from "@/components/GamesSection";
import FeaturesSection from "@/components/FeaturesSection";
import PromotionsSection from "@/components/PromotionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import PaymentMethodsSection from "@/components/PaymentMethodsSection";
import ResponsibleGamingSection from "@/components/ResponsibleGamingSection";

const IndexPH = () => {
  return (
    <>
      <Helmet>
        <html lang="fil" />
        <title>JL63 | Pangunahing Online Gaming Platform - 500+ Premium na Laro</title>
        <meta name="description" content="Ang JL63.org ang iyong pinakahuling destinasyon para sa online gaming entertainment. Mahigit 500 premium slots, live casino, sports betting at iba pa. Secure na platform na may mabilis na payouts." />
        <meta name="keywords" content="JL63, jl63.org, online casino, slots, live casino, sports betting, jackpot games, online gaming, premium games, Philippines, Filipino" />
        <link rel="canonical" href="https://jl63.org/ph/" />
        <link rel="alternate" hrefLang="en" href="https://jl63.org/" />
        <link rel="alternate" hrefLang="fil" href="https://jl63.org/ph/" />
        <link rel="alternate" hrefLang="x-default" href="https://jl63.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jl63.org/ph/" />
        <meta property="og:title" content="JL63 | Pangunahing Online Gaming Platform" />
        <meta property="og:description" content="Maranasan ang world-class gaming sa JL63.org. 500+ premium na laro, secure na transaksyon, at 24/7 suporta." />
        <meta property="og:site_name" content="JL63" />
        <meta property="og:locale" content="fil_PH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://jl63.org/ph/" />
        <meta name="twitter:title" content="JL63 | Pangunahing Online Gaming Platform" />
        <meta name="twitter:description" content="Maranasan ang world-class gaming sa JL63.org. 500+ premium na laro, secure na transaksyon, at 24/7 suporta." />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Header lang="ph" />
        <HeroSection lang="ph" />
        <AboutSection lang="ph" />
        <WhyChooseSection lang="ph" />
        <GamesSection lang="ph" />
        <FeaturesSection lang="ph" />
        <HowToPlaySection lang="ph" />
        <PromotionsSection lang="ph" />
        <PaymentMethodsSection lang="ph" />
        <TestimonialsSection lang="ph" />
        <ResponsibleGamingSection lang="ph" />
        <FAQSection lang="ph" />
        <CTASection lang="ph" />
        <Footer lang="ph" />
        <BackToTop />
        
        {/* Noscript fallback for SEO */}
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#0a0a0f', color: '#f5f5dc' }}>
            <h1>Maligayang Pagdating sa JL63 - Pangunahing Online Gaming Platform</h1>
            <p>
              Ang JL63.org ang iyong pinakahuling destinasyon para sa online gaming entertainment. Nag-aalok kami ng higit sa 500 premium na laro 
              kabilang ang slots, live casino, table games, sports betting, at jackpot games. Nagbibigay ang aming platform ng 
              bank-level security, lightning-fast payouts, at 24/7 customer support.
            </p>
            <p>
              Mangyaring paganahin ang JavaScript upang maranasan ang buong features ng JL63. Para sa pinakamahusay na gaming experience, 
              inirerekomenda namin ang paggamit ng modernong browser na may JavaScript enabled.
            </p>
            <h2>Bakit Piliin ang JL63?</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ 500+ Premium na Laro mula sa Top Providers</li>
              <li>✓ 256-bit SSL Encryption Security</li>
              <li>✓ Mabilis na Withdrawals sa loob ng 24 Oras</li>
              <li>✓ Mapagbigay na Welcome Bonuses</li>
              <li>✓ 24/7 Customer Support</li>
              <li>✓ Mobile-Optimized Platform</li>
              <li>✓ Licensed at Regulated</li>
            </ul>
            <h2>Mga Sikat na Laro sa JL63</h2>
            <p>
              Tuklasin ang aming malawak na game library na nagtatampok ng mga sikat na titulo tulad ng Fortune Tiger, Sweet Bonanza, 
              Gates of Olympus, Live Blackjack, Speed Roulette, at marami pang iba. Mga bagong laro ay idinaragdag lingguhan 
              upang mapanatiling sariwa at kapana-panabik ang iyong entertainment.
            </p>
            <h2>Kontakin ang JL63 Support</h2>
            <p>
              Ang aming dedicated support team ay available 24 oras sa isang araw, 7 araw sa isang linggo. Kung kailangan mo ng 
              tulong sa mga isyu sa account, katanungan tungkol sa laro, o mga tanong tungkol sa pagbabayad, ang aming marunong na 
              staff ay handang tumulong. Email: support@jl63.org
            </p>
            <p>
              © 2024 JL63.org - Lahat ng Karapatan ay Nakalaan. Maglaro ng Responsable. 18+ Lamang.
            </p>
          </div>
        </noscript>
      </main>
    </>
  );
};

export default IndexPH;
