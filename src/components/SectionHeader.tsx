const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent p-2">
      {title}
    </h2>
    <p className="text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>
  </div>
);

export default SectionHeader;
