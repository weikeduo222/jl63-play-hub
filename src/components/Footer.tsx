import { Shield, Lock, Award, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center glow-gold">
                <span className="font-display font-bold text-xl text-primary-foreground">JL</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-gradient-gold">JL63</h3>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Premium Gaming</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              JL63.org is a premier online gaming platform dedicated to providing exceptional entertainment 
              experiences. With over 500 premium games, industry-leading security, and unparalleled customer 
              service, we are committed to being your preferred gaming destination. Our platform is licensed, 
              regulated, and designed with your enjoyment and safety in mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-gold" />
                SSL Secured
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5 text-gold" />
                Licensed Platform
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground">
                <Award className="w-3.5 h-3.5 text-gold" />
                Fair Play Certified
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-gold transition-colors">About JL63</a></li>
              <li><a href="#games" className="text-muted-foreground hover:text-gold transition-colors">Games</a></li>
              <li><a href="#promotions" className="text-muted-foreground hover:text-gold transition-colors">Promotions</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-gold transition-colors">Features</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Support</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">24/7 Live Chat</span></li>
              <li><span className="text-muted-foreground">Email: support@jl63.org</span></li>
              <li><span className="text-muted-foreground">Help Center</span></li>
              <li><span className="text-muted-foreground">Responsible Gaming</span></li>
              <li><span className="text-muted-foreground">Terms & Conditions</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>© {currentYear} JL63.org. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
          
          {/* Responsible Gaming Notice */}
          <div className="mt-6 p-4 rounded-lg bg-secondary/50 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-gold">Play Responsibly:</strong> Gaming should be entertaining, not a source of income. 
              Please play within your means and set personal limits. If you feel you may have a gambling problem, 
              seek help from professional organizations. You must be 18 years or older to participate in any gaming activities at JL63.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
