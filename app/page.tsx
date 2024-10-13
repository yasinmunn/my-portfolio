import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <h1>Hello Portfolio!</h1>
      <FloatingNav
      navItems={navItems}
      />
      <Hero></Hero>
      <Grid></Grid>
      <RecentProjects/>
      <Client/>
      <Experience/>
      <Approach/>
      <Footer/>
    </div>
   </main>
  );
}
