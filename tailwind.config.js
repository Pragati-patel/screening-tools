/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        "general-sans": ["General Sans", "sans", "ui-sans", "system-ui"],
        "rethink-sans": ["Rethink Sans", "sans-serif", "ui-san", "system-ui"],
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
        32: "32px",
        34: "34px",
        38: "38px",
        42: "42px",
        46: "46px",
        48: "48px",
        56:"56px"
      },
      colors:{
        "D9D9D9":"#D9D9D9",
        "120A2C": "#120A2C",
        fff: "#ffffff",
        "F5F5FC":"#F5F5FC",

      },
      screens: {
        mobile: "360px",
        xs: "428px",
        ms: "520px",
        cxl: "1360px",
        macbook: "1440px",
        macbook1: "1400px",
        "3xl": "1660px",
        "4xl": "1850px",
        "last-screen": "2000px",
      },
    },
  },
  plugins: [],
};
