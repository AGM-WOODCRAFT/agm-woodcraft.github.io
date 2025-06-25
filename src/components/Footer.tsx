import { MapPin, Phone, Mail } from "lucide-react";

const Logo = () => (
  <div
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="flex items-center justify-center cursor-pointer"
  >
    <img src="logoWhite.svg" alt="AGM WOODCRAFT" className="size-20" />
  </div>
);

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => (
  <footer className="flex flex-col items-center justify-center bg-text text-accent pb-8 pt-4">
    <div className="container mx-auto px-4 text-center">
      <Logo />
      <div className="flex flex-col sm:flex-row-reverse items-center justify-between">
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="#home"
            className="text-muted hover:text-primary"
            onClick={(e) => scrollToSection(e, "home")}
          >
            Home
          </a>
          <p className="text-muted">|</p>
          <a
            href="#uslugi"
            className="text-muted hover:text-primary"
            onClick={(e) => scrollToSection(e, "uslugi")}
          >
            Usługi
          </a>
          <p className="text-muted">|</p>
          <a
            href="#galeria"
            className="text-muted hover:text-primary"
            onClick={(e) => scrollToSection(e, "galeria")}
          >
            Galeria
          </a>
          <p className="text-muted">|</p>
          <a
            href="#kontakt"
            className="text-muted hover:text-primary"
            onClick={(e) => scrollToSection(e, "kontakt")}
          >
            Kontakt
          </a>
        </div>
        <div className="flex flex-col items-start w-fit gap-2 mb-2">
          <div className="flex items-center gap-2 text-muted text-sm">
            <MapPin className="w-4 h-4 opacity-70" />
            <a
              href="https://maps.app.goo.gl/9zcjwCtg8CoS4n9Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Witkowo Brzozowa 3, 62-230 Witkowo
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted text-sm">
            <Phone className="w-4 h-4 opacity-70" />
            <a
              href="tel:+48601351699"
              className="hover:text-primary transition-colors"
            >
              +48 601 351 699
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted text-sm">
            <Mail className="w-4 h-4 opacity-70" />
            <a
              href="mailto:biuroagmwoodcraft@interia.pl"
              className="hover:text-primary transition-colors"
            >
              biuroagmwoodcraft@interia.pl
            </a>
          </div>
        </div>
      </div>
      <hr className="my-4 border-muted" />
      <p className="text-muted text-sm">
        © 2025 AGM WOODCRAFT Tomasz Sucholas. Wszystkie prawa zastrzeżone.
      </p>
    </div>
  </footer>
);

export default Footer;
