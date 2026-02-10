import { Hero } from "../components/Hero/Hero";
import { Problems } from "../components/Problems/Problems";
import { Solution } from "../components/Solution/Solution";
import {Trust} from "../components/Trust/Trust.tsx";
import {HowItWorks} from "../components/HowItWorks/HowItWorks.tsx";
import {LeadForm} from "../components/LeadForm/LeadForm.tsx";
import {Cases} from "../components/Cases/Cases.tsx";
import {Contacts} from "../components/Contacts/Contacts.tsx";

export function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <Trust />
      <HowItWorks />
      <Cases />
      <LeadForm />
      <Contacts />
    </>
  );
}