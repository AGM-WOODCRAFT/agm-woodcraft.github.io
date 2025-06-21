import { MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

const GoogleMapsSection = () => (
  <section
    id="uslugi"
    className="py-20 bg-gradient-to-br from-white to-amber-50"
  >
    <div className="container flex flex-col items-center justify-center mx-auto px-4">
      <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 font-medium mb-8">
        <MapPin className="w-4 h-4 mr-2" />
        Nasza Lokalizacja
      </div>
      <SectionHeader
        title="Znajdź Nas"
        subtitle="Odwiedź nas w naszej siedzibie"
      />
      <MapContainer />
    </div>
  </section>
);

const MapContainer = () => (
  <div className="animate-fade-in delay-400 w-full">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-amber-100 h-full">
      <div className="h-[30rem] sm:h-[40rem] w-full shadow-sm rounded-lg overflow-hidden">
        <Map />
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>AGM Woodcraft</span>
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          Witkowo
        </span>
      </div>
    </div>
  </div>
);

const Map = () => (
  <div className="flex h-full min-h-16 w-full items-center justify-center p-1">
    <iframe
      title="AGM Woodcraft Location"
      className="h-full w-full rounded-[inherit] border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.154644975415!2d17.78873417694384!3d52.440113342140734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704bef8fb7830b7%3A0x12ef70f15ac95890!2sBrzozowa%203%2C%2062-230%20Witkowo!5e0!3m2!1spl!2spl!4v1750505279188!5m2!1spl!2spl"
      loading="lazy"
    ></iframe>
  </div>
);

export default GoogleMapsSection;
