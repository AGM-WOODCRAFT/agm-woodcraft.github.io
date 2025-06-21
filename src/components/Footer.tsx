import { Hammer } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-900 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
          <Hammer className="w-4 h-4 text-white" />
        </div>
        <span className="text-lg font-semibold">AGM WOODCRAFT</span>
      </div>
      <p className="text-gray-400 text-sm">
        © 2025 AGM WOODCRAFT Tomasz Sucholas. Wszystkie prawa zastrzeżone.
      </p>
    </div>
  </footer>
);

export default Footer;
