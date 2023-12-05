import CalculatorSection from "@/components/CalculatorSection";
import ColorSection from "@/components/ColorSection";
import DiffSection from "@/components/DiffSection";
import HeroSection from "@/components/HeroSection";

import { url } from "@utils/env";

const getColors = async () => {
  try {
    const res = await fetch(`${url}/api/colors`, {
      cache: "no-store",
    });
    console.log(url);
    console.log(res);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export default async function Home() {
  const data = await getColors();
  console.log(data);
  return (
    <>
      <HeroSection />
      <DiffSection />
      <ColorSection data={data} />
      <CalculatorSection />
    </>
  );
}
