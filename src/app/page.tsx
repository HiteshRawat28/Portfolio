import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Process } from "@/components/sections/Process";
import { Capabilities } from "@/components/sections/Capabilities";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";
import { profile } from "@/content/profile";
export const metadata = buildMetadata(
  "Hitesh Rawat — Full-Stack and AI Applications Engineer",
  profile.positioning,
  "/",
);
export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Process />
      <Capabilities />
      <ContactCTA />
    </>
  );
}
