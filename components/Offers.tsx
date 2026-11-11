export { PricingSection as Offers } from "./layout/sections/pricing";
export { PricingSection } from "./layout/sections/pricing";
export default function OffersDefault() {
  const { PricingSection } = require("./layout/sections/pricing");
  return <PricingSection />;
}
