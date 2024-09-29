
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <WhyUs/>
      <Stats/>
      <Testimonials/>
      <Newsletter/>
    </main>
  );
}
