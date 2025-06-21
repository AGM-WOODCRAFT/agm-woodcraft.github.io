import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ContactSection = () => (
  <section
    id="kontakt"
    className="py-20 bg-gradient-to-br from-slate-900 to-amber-900 text-white"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Skontaktuj się z nami"
          subtitle="Jesteśmy gotowi pomóc w realizacji Twojego projektu"
        />

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <BusinessHours />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactInfo = () => (
  <div>
    <h3 className="text-2xl font-bold mb-8 text-amber-300">
      Informacje Kontaktowe
    </h3>

    <div className="space-y-4 sm:space-y-6">
      <ContactItem
        icon={<MapPin className="w-6 h-6 text-white" />}
        title="Adres"
        titleColor="text-amber-300"
        bgGradient="from-amber-500 to-orange-600"
        href={"https://maps.app.goo.gl/9zcjwCtg8CoS4n9Y7"}
      >
        <p className="text-gray-300 leading-relaxed">
          Witkowo Brzozowa 3<br />
          62-230 Witkowo
        </p>
      </ContactItem>

      <ContactItem
        icon={<Phone className="w-6 h-6 text-white" />}
        title="Telefon"
        titleColor="text-green-300"
        bgGradient="from-green-500 to-emerald-600"
        href="tel:+48601351699"
      >
        <p className="text-gray-300">Skontaktuj się z nami telefonicznie</p>
        <b className="text-gray-300">+48 601 351 699</b>
      </ContactItem>

      <ContactItem
        icon={<Mail className="w-6 h-6 text-white" />}
        title="Email"
        titleColor="text-blue-300"
        bgGradient="from-blue-500 to-cyan-600"
        href="mailto:biuroagmwoodcraft@interia.pl"
      >
        <p className="text-gray-300">Napisz do nas maila</p>
        <b className="text-gray-300">biuroagmwoodcraft@interia.pl</b>
      </ContactItem>
    </div>
  </div>
);

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  titleColor: string;
  bgGradient: string;
  children: React.ReactNode;
  href: string;
}

const ContactItem = ({
  icon,
  title,
  titleColor,
  bgGradient,
  children,
  href,
}: ContactItemProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start space-x-4 rounded-xl bg-none hover:scale-105 transition-transform duration-300 cursor-pointer"
  >
    <div
      className={`w-12 h-12 bg-gradient-to-br ${bgGradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
    >
      {icon}
    </div>
    <div>
      <h4 className={`font-semibold ${titleColor} sm:mb-2`}>{title}</h4>
      {children}
    </div>
  </a>
);

const BusinessHours = () => (
  <div>
    <h3 className="text-2xl font-bold mb-8 text-amber-300">Godziny Pracy</h3>

    <div className="space-y-4 mb-8">
      <HourItem day="Poniedziałek - Piątek" hours="8:00 - 16:00" />
      <HourItem day="Sobota" hours="8:00 - 14:00" />
      <HourItem day="Niedziela" hours="Zamknięte" />
      <HourItem day="Święta" hours="Zamknięte" />
    </div>
  </div>
);

const HourItem = ({ day, hours }: { day: string; hours: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-white/20 flex-no-wrap">
    <span className="text-gray-300 text-sm sm:text-base">{day}</span>
    <span className="text-white font-semibold text-sm sm:text-base">
      {hours}
    </span>
  </div>
);

export default ContactSection;
