import Featured from "@/components/home/Featured";
import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import Statistics from "@/components/home/Statistics";

import Testimonials from "@/components/home/Testimonials";
import TopFreelancers from "@/components/home/TopFreelancers";
import { getUserSession } from "@/lib/core/session";


export default async function Home() {

  const user = await getUserSession()
  return (
      <>
      <HeroBanner user={user}></HeroBanner>
      <Featured>  </Featured>
      <TopFreelancers>  </TopFreelancers>
      <HowItWorks></HowItWorks>
      <Statistics></Statistics>
      {/* <Testimonials></Testimonials> */}
      </>

  );
}
