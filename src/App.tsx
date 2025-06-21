import { Archive, ChefHat, Home, Sofa, TreePine, Waves } from "lucide-react"
import { useEffect, useState } from "react"
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import HeroSection from "./components/HeroSection"
import Navigation from "./components/Navigation"
import ServicesSection from "./components/ServicesSection"
import GoogleMapsSection from "./components/GoogleMapsSection"

const AGMWoodcraft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Budowa Saun",
      description:
        "Profesjonalne sauny z najwyższej jakości drewna, zaprojektowane dla maksymalnego relaksu i trwałości.",
      gradient: "from-amber-400 to-orange-600",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Bale Ogrodowe",
      description:
        "Solidne konstrukcje z bali drewnianych, idealne do stworzenia naturalnej atmosfery w ogrodzie.",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Domy z Drewna",
      description:
        "Ekologiczne domy drewniane łączące tradycyjne rzemiosło z nowoczesnymi rozwiązaniami.",
      gradient: "from-blue-400 to-cyan-600",
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Meble Ogrodowe",
      description:
        "Wytrzymałe meble ogrodowe z drewna, zaprojektowane do wieloletniego użytkowania na zewnątrz.",
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Meble Kuchenne",
      description:
        "Funkcjonalne meble kuchenne z płyty meblowej, dostosowane do Twoich potrzeb i przestrzeni.",
      gradient: "from-red-400 to-rose-600",
    },
    {
      icon: <Archive className="w-8 h-8" />,
      title: "Szafy i Garderoby",
      description:
        "Szafy z płyty meblowej i garderoby z drzwiami przesuwnymi - praktyczne rozwiązania do domu.",
      gradient: "from-indigo-400 to-violet-600",
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection services={services} />
      <Gallery />
      <GoogleMapsSection />
      <ContactSection />
      <Footer />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  )
}

export default AGMWoodcraft
