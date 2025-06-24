import { Menu, X } from "lucide-react";

interface NavigationProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Navigation = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}: NavigationProps) => (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-surface/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}
  >
    <div className="container mx-auto px-4 py-0">
      <div className="flex items-center justify-between">
        <Logo />
        <DesktopMenu
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <MobileMenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />
    </div>
  </nav>
);

// Logo Component
const Logo = () => (
  <div className="flex items-center">
    <img src="logo.svg" alt="AGM WOODCRAFT" className="size-20" />
  </div>
);

// Desktop Menu Component
const DesktopMenu = ({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (section: string) => void;
}) => (
  <div className="hidden md:flex items-center space-x-8">
    {["home", "uslugi", "galeria", "kontakt"].map((item) => (
      <button
        key={item}
        onClick={() => scrollToSection(item)}
        className={`capitalize font-medium transition-all duration-300 ${
          activeSection === item
            ? "text-primary border-b-2 border-primary"
            : "text-text hover:text-primary"
        } cursor-pointer`}
      >
        {item === "uslugi" ? "Usługi" : item === "galeria" ? "Galeria" : item}
      </button>
    ))}
  </div>
);

// Mobile Menu Button Component
const MobileMenuButton = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}) => (
  <button
    className="md:hidden p-2 rounded-lg hover:bg-muted/10 transition-colors cursor-pointer"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
);

// Mobile Menu Component
const MobileMenu = ({
  isMenuOpen,
  scrollToSection,
}: {
  isMenuOpen: boolean;
  scrollToSection: (section: string) => void;
}) =>
  isMenuOpen && (
    <div className="md:hidden mt-4 py-4 bg-surface/95 backdrop-blur-md rounded-xl shadow-lg">
      {["home", "uslugi", "galeria", "kontakt"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className="block w-full text-left px-4 py-3 text-text hover:text-primary hover:bg-primary/5 transition-all duration-300 capitalize cursor-pointer"
        >
          {item === "uslugi" ? "Usługi" : item === "galeria" ? "Galeria" : item}
        </button>
      ))}
    </div>
  );

export default Navigation;
