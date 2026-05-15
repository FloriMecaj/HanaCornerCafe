import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--bg-primary)",
        secondaryBg: "var(--bg-secondary)",
        sage: "var(--accent-sage)",
        terracotta: "var(--accent-terracotta)",
        blush: "var(--accent-blush)",
        espresso: "var(--accent-espresso)",
        textPrimary: "var(--text-primary)",
        textMuted: "var(--text-muted)"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(122, 158, 126, 0.18)",
        card: "0 18px 60px rgba(44, 26, 14, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
