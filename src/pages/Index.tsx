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

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <FeaturesSection />
      <PromotionsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      
      {/* Noscript fallback for SEO */}
      <noscript>
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#0a0a0f', color: '#f5f5dc' }}>
          <h1>Welcome to JL63 - Premium Online Gaming Platform</h1>
          <p>
            JL63.com is your ultimate destination for online gaming entertainment. We offer over 500 premium games 
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
            staff is ready to help. Email: support@jl63.com
          </p>
          <p>
            © 2024 JL63.com - All Rights Reserved. Play Responsibly. 18+ Only.
          </p>
        </div>
      </noscript>
    </main>
  );
};

export default Index;
