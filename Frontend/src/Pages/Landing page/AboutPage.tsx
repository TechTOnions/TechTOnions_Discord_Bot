import { AboutHero } from "./components/Hero-About";
import { Story } from "./components/Story";
import { Vision } from "./components/Vision";
import { Whoarewe } from "./components/Whoarewe";

export const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <Story />
      <Whoarewe />
      <Vision />
    </div>
  );
};
