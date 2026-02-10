import { Hero } from "../components/Hero/Hero";
import { Problems } from "../components/Problems/Problems";
import { Solution } from "../components/Solution/Solution";
import {Trust} from "../components/Trust/Trust.tsx";
import {HowItWorks} from "../components/HowItWorks/HowItWorks.tsx";

export function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <Trust />
      <HowItWorks />
    </>
  );
}