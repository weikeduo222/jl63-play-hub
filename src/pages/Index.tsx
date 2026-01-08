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

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>JL63 | Premier Online Gaming Platform - 500+ Premium Games</title>
        <meta name="description" content="JL63.org is your ultimate destination for online gaming entertainment. Over 500 premium slots, live casino, sports betting & more. Secure platform with fast payouts." />
        <meta name="keywords" content="JL63, jl63.org, online casino, slots, live casino, sports betting, jackpot games, online gaming, premium games" />
        <link rel="canonical" href="https://jl63.org/" />
        <link rel="alternate" hrefLang="en" href="https://jl63.org/" />
        <link rel="alternate" hrefLang="fil" href="https://jl63.org/ph/" />
        <link rel="alternate" hrefLang="x-default" href="https://jl63.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jl63.org/" />
        <meta property="og:title" content="JL63 | Premier Online Gaming Platform" />
        <meta property="og:description" content="Experience world-class gaming at JL63.org. 500+ premium games, secure transactions, and 24/7 support." />
        <meta property="og:site_name" content="JL63" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://jl63.org/" />
        <meta name="twitter:title" content="JL63 | Premier Online Gaming Platform" />
        <meta name="twitter:description" content="Experience world-class gaming at JL63.org. 500+ premium games, secure transactions, and 24/7 support." />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Header lang="en" />
        <HeroSection lang="en" />
        <AboutSection lang="en" />
        <WhyChooseSection lang="en" />
        <GamesSection lang="en" />
        <FeaturesSection lang="en" />
        <HowToPlaySection lang="en" />
        <PromotionsSection lang="en" />
        <PaymentMethodsSection lang="en" />
        <TestimonialsSection lang="en" />
        <ResponsibleGamingSection lang="en" />
        <FAQSection lang="en" />
        <CTASection lang="en" />
        <Footer lang="en" />
        <BackToTop />
        
        {/* Noscript fallback for SEO */}
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#0a0a0f', color: '#f5f5dc' }}>
            <h1>Welcome to JL63 - Premier Online Gaming Platform</h1>
            <p>
              JL63.org is your ultimate destination for online gaming entertainment. We offer over 500 premium games 
              including slots, live casino, table games, sports betting, and jackpot games. Our platform provides 
              bank-level security, lightning-fast payouts, and 24/7 customer support.
            </p>
            <p>
              Please enable JavaScript to experience the full features of JL63. For the best gaming experience, 
              we recommend using a modern browser with JavaScript enabled.
            </p>
            <h2>Why Choose JL63?</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ 500+ Premium Games from Top Providers</li>
              <li>✓ 256-bit SSL Encryption Security</li>
              <li>✓ Fast Withdrawals within 24 Hours</li>
              <li>✓ Generous Welcome Bonuses</li>
              <li>✓ 24/7 Customer Support</li>
              <li>✓ Mobile-Optimized Platform</li>
              <li>✓ Licensed and Regulated</li>
            </ul>
            <h2>Popular Games at JL63</h2>
            <p>
              Explore our extensive game library featuring popular titles like Fortune Tiger, Sweet Bonanza, 
              Gates of Olympus, Live Blackjack, Speed Roulette, and many more. New games are added weekly 
              to keep your entertainment fresh and exciting.
            </p>
            <h2>Contact JL63 Support</h2>
            <p>
              Our dedicated support team is available 24 hours a day, 7 days a week. Whether you need 
              assistance with account issues, game inquiries, or payment questions, our knowledgeable 
              staff is ready to help. Email: support@jl63.org
            </p>
            <p>
              © 2024 JL63.org - All Rights Reserved. Play Responsibly. 18+ Only.
            </p>
          </div>
        </noscript>
      </main>
    </>
  );
};

export default Index;
