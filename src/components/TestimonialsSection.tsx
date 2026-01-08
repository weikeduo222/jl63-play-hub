import { Star, Quote } from "lucide-react";

const content = {
  en: {
    badge: "Player Reviews",
    title1: "What Our ",
    title2: "Players Say",
    description: "Don't just take our word for it – hear from thousands of satisfied players who have made JL63 their preferred gaming destination.",
    avgRating: "Average Rating",
    verifiedReviews: "Verified Reviews",
    satisfaction: "Satisfaction Rate",
    supportAvailable: "Support Available",
    testimonials: [
      { name: "Michael R.", location: "United Kingdom", rating: 5, text: "JL63 has completely transformed my online gaming experience. The game selection is incredible, and I've never had any issues with withdrawals. The support team is responsive and helpful whenever I have questions. Highly recommend this platform to anyone looking for a reliable gaming destination.", highlight: "Fast withdrawals and great games" },
      { name: "Sarah L.", location: "Australia", rating: 5, text: "I've tried many online gaming platforms over the years, but JL63 stands out from the rest. The mobile experience is fantastic – I can play my favorite games anywhere. The bonuses are generous, and the VIP program offers excellent value.", highlight: "Best mobile gaming experience" },
      { name: "James K.", location: "Canada", rating: 5, text: "What I love most about JL63 is the variety of games and the fairness. I've had some amazing wins on their slot games, and the payouts are always processed quickly. The live casino section is top-notch with professional dealers. Five stars from me!", highlight: "Amazing game variety" },
      { name: "Emma T.", location: "Germany", rating: 5, text: "Security was my main concern when choosing an online platform, and JL63 exceeded my expectations. The SSL encryption and verification process gave me confidence from the start. Now I play regularly and have never had a single security issue.", highlight: "Secure and trustworthy platform" },
      { name: "David M.", location: "United States", rating: 5, text: "The customer service at JL63 is exceptional. I had a question about a promotion, and the live chat team resolved it within minutes. They're knowledgeable, friendly, and available around the clock.", highlight: "Outstanding customer support" },
      { name: "Lisa W.", location: "New Zealand", rating: 5, text: "As someone who enjoys both slots and live casino games, JL63 is perfect for me. The game quality is consistently high, and new titles are added regularly. The promotions keep things exciting, and I love the loyalty rewards.", highlight: "Perfect for all game types" },
    ],
  },
  ph: {
    badge: "Mga Review ng Manlalaro",
    title1: "Ano ang Sinasabi ng Aming ",
    title2: "mga Manlalaro",
    description: "Huwag lang maniwala sa amin – pakinggan ang libu-libong nasisiyahang manlalaro na ginawang JL63 ang kanilang paboritong gaming destination.",
    avgRating: "Average Rating",
    verifiedReviews: "Verified Reviews",
    satisfaction: "Satisfaction Rate",
    supportAvailable: "Support Available",
    testimonials: [
      { name: "Michael R.", location: "United Kingdom", rating: 5, text: "Ganap na binago ng JL63 ang aking online gaming experience. Kahanga-hanga ang seleksyon ng laro, at wala akong problema sa mga withdrawal. Responsive at helpful ang support team.", highlight: "Mabilis na withdrawals at magagandang laro" },
      { name: "Sarah L.", location: "Australia", rating: 5, text: "Marami na akong nasubok na online gaming platforms sa paglipas ng mga taon, pero namumukod-tangi ang JL63. Napakaganda ng mobile experience – makakapaglaro ako kahit saan.", highlight: "Pinakamahusay na mobile gaming experience" },
      { name: "James K.", location: "Canada", rating: 5, text: "Ang pinaka-gusto ko sa JL63 ay ang iba't ibang laro at ang pagiging patas. May mga kahanga-hangang panalo ako sa kanilang slot games, at laging mabilis ang payouts.", highlight: "Kahanga-hangang game variety" },
      { name: "Emma T.", location: "Germany", rating: 5, text: "Ang seguridad ang aking pangunahing concern nang pumili ng online platform, at nalampasan ng JL63 ang aking mga inaasahan. Nagbigay ng kumpiyansa ang SSL encryption at verification process.", highlight: "Secure at mapagkakatiwalaang platform" },
      { name: "David M.", location: "United States", rating: 5, text: "Exceptional ang customer service sa JL63. May tanong ako tungkol sa promotion, at nalutas ito ng live chat team sa loob ng ilang minuto lamang. Marunong sila, friendly, at available 24/7.", highlight: "Outstanding customer support" },
      { name: "Lisa W.", location: "New Zealand", rating: 5, text: "Bilang isang taong nagtatamasa ng parehong slots at live casino games, perpekto ang JL63 para sa akin. Consistently high ang game quality, at regular na idinaragdag ang mga bagong titulo.", highlight: "Perpekto para sa lahat ng uri ng laro" },
    ],
  },
};

interface TestimonialsSectionProps {
  lang?: "en" | "ph";
}

const TestimonialsSection = ({ lang = "en" }: TestimonialsSectionProps) => {
  const t = content[lang];
  return (
    <section className="py-20 md:py-32 bg-dark-elevated relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">{t.badge}</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6"><span className="text-foreground">{t.title1}</span><span className="text-gradient-gold">{t.title2}</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-all duration-300">
              <Quote className="w-10 h-10 text-gold/30 mb-4" />
              <div className="flex items-center gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 text-gold fill-gold" />))}</div>
              <p className="text-gold font-semibold mb-3">"{testimonial.highlight}"</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center"><span className="font-display font-bold text-gold text-sm">{testimonial.name.charAt(0)}</span></div><div><p className="font-semibold text-foreground">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.location}</p></div></div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-card/50 border border-border/50"><p className="font-display font-bold text-4xl text-gradient-gold mb-2">4.9</p><p className="text-muted-foreground">{t.avgRating}</p></div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50"><p className="font-display font-bold text-4xl text-gradient-gold mb-2">50K+</p><p className="text-muted-foreground">{t.verifiedReviews}</p></div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50"><p className="font-display font-bold text-4xl text-gradient-gold mb-2">98%</p><p className="text-muted-foreground">{t.satisfaction}</p></div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50"><p className="font-display font-bold text-4xl text-gradient-gold mb-2">24/7</p><p className="text-muted-foreground">{t.supportAvailable}</p></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
