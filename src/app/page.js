import Featured from "@/components/home/Featured";
import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import Statistics from "@/components/home/Statistics";

import Testimonials from "@/components/home/Testimonials";
import TopFreelancers from "@/components/home/TopFreelancers";


export default function Home() {
  return (
      <>
      <HeroBanner></HeroBanner>
      <TopFreelancers>  </TopFreelancers>
      <Featured>  </Featured>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <Statistics></Statistics>
      </>

  );
}
