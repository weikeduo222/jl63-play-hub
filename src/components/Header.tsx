import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const CTA_URL = "https://jiliaaa.superace0.com/click-go-to/";

interface HeaderProps {
  lang?: "en" | "ph";
}

const Header = ({ lang = "en" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const alternateLang = lang === "en" ? "/ph/" : "/";
  const langLabel = lang === "en" ? "Filipino" : "English";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg" 
          : "bg-background/80 backdrop-blur-xl border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={lang === "en" ? "/" : "/ph/"} className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-gold flex items-center justify-center glow-gold">
              <span className="font-display font-bold text-lg md:text-xl text-primary-foreground">JL</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl md:text-2xl text-gradient-gold">JL63</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">Premium Gaming</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switch */}
            <Link to={alternateLang}>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                <Globe className="w-4 h-4 mr-2" />
                {langLabel}
              </Button>
            </Link>
            
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="goldOutline" size="sm">
                {lang === "en" ? "Login" : "Mag-login"}
              </Button>
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="gold" size="sm">
                {lang === "en" ? "Register" : "Mag-register"}
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            {/* Register Button Always Visible on Mobile */}
            <a
              href={CTA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button variant="gold" size="sm" className="text-xs px-3">
                {lang === "en" ? "Register" : "Mag-register"}
              </Button>
            </a>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link to={alternateLang} onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground hover:text-gold">
                  <Globe className="w-4 h-4 mr-2" />
                  {langLabel}
                </Button>
              </Link>
              <a
                href={CTA_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full"
              >
                <Button variant="goldOutline" size="sm" className="w-full">
                  {lang === "en" ? "Login" : "Mag-login"}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
