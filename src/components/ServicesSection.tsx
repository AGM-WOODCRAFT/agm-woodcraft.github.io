import type { JSX } from "react";
import SectionHeader from "./SectionHeader";

export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
}

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
    ></div>

    <div className="flex flex-col items-center sm:items-start justify-center relative p-8">
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-center sm:text-left">
        {service.description}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
  </div>
);

const ServicesSection = ({ services }: { services: Service[] }) => (
  <section
    id="uslugi"
    className="py-20 bg-gradient-to-br from-white to-amber-50"
  >
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Nasze Usługi"
        subtitle="Kompleksowe usługi stolarskie i budowlane z wykorzystaniem najlepszych materiałów drewnianych"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
