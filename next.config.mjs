/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
