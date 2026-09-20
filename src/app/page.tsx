import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Process } from "@/components/sections/Process";
import { Capabilities } from "@/components/sections/Capabilities";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
export const metadata = buildMetadata(
  "Hitesh Rawat — Software Engineer",
  profile.positioning,
  "/",
);
export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <MoreProjects />
      <About />
      <Process />
      <Capabilities />
      <ContactCTA />
    </>
  );
}
