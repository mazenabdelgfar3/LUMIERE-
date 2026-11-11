export { HeroSection as Hero } from "./layout/sections/hero";
export { HeroSection } from "./layout/sections/hero";
export default function HeroDefault() {
  const { HeroSection } = require("./layout/sections/hero");
  return <HeroSection />;
}
