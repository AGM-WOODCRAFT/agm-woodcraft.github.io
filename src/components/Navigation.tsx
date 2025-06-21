import { Hammer } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

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
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}
  >
    <div className="container mx-auto px-4 py-4">
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
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
      <Hammer className="w-6 h-6 text-white" />
    </div>
    <div>
      <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
        AGM WOODCRAFT
      </h1>
      <p className="text-sm text-gray-600">Tomasz Sucholas</p>
    </div>
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
            ? "text-amber-600 border-b-2 border-amber-600"
            : "text-gray-700 hover:text-amber-600"
        }`}
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
    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
    <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg">
      {["home", "uslugi", "galeria", "kontakt"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className="block w-full text-left px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 capitalize"
        >
          {item === "uslugi" ? "Usługi" : item === "galeria" ? "Galeria" : item}
        </button>
      ))}
    </div>
  );

export default Navigation;
