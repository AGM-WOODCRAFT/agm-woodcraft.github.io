/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        accent: "hsl(var(--color-accent))",
        bg: "hsl(var(--color-bg))",
        surface: "hsl(var(--color-surface))",
        text: "hsl(var(--color-text))",
        muted: "hsl(var(--color-muted))",
        info: "hsl(var(--color-info))",
        success: "hsl(var(--color-success))",
        warning: "hsl(var(--color-warning))",
        danger: "hsl(var(--color-danger))",
        border: "hsl(var(--color-border))",
        overlay: "hsl(var(--color-overlay))",
        gallery: {
          from: "hsl(var(--color-gallery-from))",
          via: "hsl(var(--color-gallery-via))",
          to: "hsl(var(--color-gallery-to))",
          accent: "hsl(var(--color-gallery-accent))",
          category: "hsl(var(--color-gallery-category))",
          title: "hsl(var(--color-gallery-title))",
          desc: "hsl(var(--color-gallery-desc))",
          muted: "hsl(var(--color-gallery-muted))",
        },
      },
    },
  },
  plugins: [],
};
