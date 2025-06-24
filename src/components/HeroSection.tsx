import { TreePine } from "lucide-react";

const HeroSection = ({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <BackgroundElements />
    <div className="container mx-auto px-4 text-center relative z-10">
      <div className="max-w-4xl mx-auto">
        <HeroContent scrollToSection={scrollToSection} />
      </div>
    </div>
  </section>
);

const BackgroundElements = () => (
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-success to-green-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-info to-cyan-600 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>
);

const HeroContent = ({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) => (
  <>
    <div className="mb-8 ">
      <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
        <TreePine className="w-4 h-4 mr-2" />
        Rzemiosło Drewniane
      </div>
    </div>

    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent delay-200 leading-tight">
      AGM WOODCRAFT
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-text mb-6 sm:mb-8 delay-400 px-4">
      Tworzymy wyjątkowe konstrukcje drewniane z pasją i precyzją
    </p>

    <p className="text-base sm:text-lg text-muted mb-8 sm:mb-12 max-w-2xl mx-auto delay-600 px-4 leading-relaxed">
      Od saun po domy z drewna, od mebli ogrodowych po szafy - realizujemy
      projekty, które łączą tradycyjne rzemiosło z nowoczesnymi standardami
      jakości.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center delay-800 px-4">
      <button
        onClick={() => scrollToSection("uslugi")}
        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-accent font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base cursor-pointer"
      >
        Zobacz Nasze Usługi
      </button>
      <button
        onClick={() => scrollToSection("kontakt")}
        className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-primary/20 text-sm sm:text-base cursor-pointer"
      >
        Skontaktuj się z nami
      </button>
    </div>
  </>
);

export default HeroSection;
