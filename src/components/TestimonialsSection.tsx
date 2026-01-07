import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    location: "United Kingdom",
    rating: 5,
    text: "JL63 has completely transformed my online gaming experience. The game selection is incredible, and I've never had any issues with withdrawals. The support team is responsive and helpful whenever I have questions. Highly recommend this platform to anyone looking for a reliable gaming destination.",
    highlight: "Fast withdrawals and great games",
  },
  {
    name: "Sarah L.",
    location: "Australia",
    rating: 5,
    text: "I've tried many online gaming platforms over the years, but JL63 stands out from the rest. The mobile experience is fantastic – I can play my favorite games anywhere. The bonuses are generous, and the VIP program offers excellent value. This is definitely my go-to platform now.",
    highlight: "Best mobile gaming experience",
  },
  {
    name: "James K.",
    location: "Canada",
    rating: 5,
    text: "What I love most about JL63 is the variety of games and the fairness. I've had some amazing wins on their slot games, and the payouts are always processed quickly. The live casino section is top-notch with professional dealers. Five stars from me!",
    highlight: "Amazing game variety",
  },
  {
    name: "Emma T.",
    location: "Germany",
    rating: 5,
    text: "Security was my main concern when choosing an online platform, and JL63 exceeded my expectations. The SSL encryption and verification process gave me confidence from the start. Now I play regularly and have never had a single security issue. Truly trustworthy.",
    highlight: "Secure and trustworthy platform",
  },
  {
    name: "David M.",
    location: "United States",
    rating: 5,
    text: "The customer service at JL63 is exceptional. I had a question about a promotion, and the live chat team resolved it within minutes. They're knowledgeable, friendly, and available around the clock. Combined with the great games, this makes JL63 my number one choice.",
    highlight: "Outstanding customer support",
  },
  {
    name: "Lisa W.",
    location: "New Zealand",
    rating: 5,
    text: "As someone who enjoys both slots and live casino games, JL63 is perfect for me. The game quality is consistently high, and new titles are added regularly. The promotions keep things exciting, and I love the loyalty rewards. Can't imagine playing anywhere else!",
    highlight: "Perfect for all game types",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-elevated relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Player Reviews
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">What Our </span>
            <span className="text-gradient-gold">Players Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it – hear from thousands of satisfied players who have made JL63 their 
            preferred gaming destination. Our community's trust is our greatest achievement.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold/30 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Highlight */}
              <p className="text-gold font-semibold mb-3">"{testimonial.highlight}"</p>
              
              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-display font-bold text-gold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-card/50 border border-border/50">
            <p className="font-display font-bold text-4xl text-gradient-gold mb-2">4.9</p>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50">
            <p className="font-display font-bold text-4xl text-gradient-gold mb-2">50K+</p>
            <p className="text-muted-foreground">Verified Reviews</p>
          </div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50">
            <p className="font-display font-bold text-4xl text-gradient-gold mb-2">98%</p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50">
            <p className="font-display font-bold text-4xl text-gradient-gold mb-2">24/7</p>
            <p className="text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
