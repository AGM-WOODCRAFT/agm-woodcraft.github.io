const SectionHeader = ({
  title,
  subtitle,
  variant = "light",
}: {
  title: string;
  subtitle: string;
  variant?: "light" | "dark";
}) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent p-2">
      {title}
    </h2>
    <p
      className={`text-xl max-w-3xl mx-auto \
        ${variant === "dark" ? "text-gray-200" : "text-muted"}`}
    >
      {subtitle}
    </p>
  </div>
);

export default SectionHeader;
