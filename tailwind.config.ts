import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16332F",
        forest: "#174D43",
        mint: "#DCEFE7",
        lime: "#C8F169",
        cream: "#F7F7F0",
        muted: "#63736E"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(22, 51, 47, 0.10)"
      }
    }
  },
  plugins: []
};
export default config;