import { Button } from "@/components/ui/button";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center glow-gold">
              <span className="font-display font-bold text-xl text-primary-foreground">JL</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl text-gradient-gold">JL63</h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Premium Gaming</p>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="goldOutline" size="sm" className="hidden sm:inline-flex">
                Login
              </Button>
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="gold" size="sm">
                Register
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
