import { Hero } from "../components/Hero/Hero";
import { Problems } from "../components/Problems/Problems";
import { Solution } from "../components/Solution/Solution";
import {Trust} from "../components/Trust/Trust.tsx";
import {HowItWorks} from "../components/HowItWorks/HowItWorks.tsx";
import {LeadForm} from "../components/LeadForm/LeadForm.tsx";
import {Cases} from "../components/Cases/Cases.tsx";
import {Contacts} from "../components/Contacts/Contacts.tsx";
import { useState } from "react";

export function Home() {
  const [prefill, setPrefill] = useState<{ comment?: string; nonce?: string }>({});

  return (
    <>
      <Hero
        onConsultationClick={() => {
          setPrefill({
            comment: "Нужна консультация. Перезвоните, пожалуйста.",
            nonce: String(Date.now()),
          });

          document
            .getElementById("lead")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Problems />
      <Solution />
      <Trust />
      <HowItWorks />
      <Cases />
      <LeadForm prefill={prefill} />
      <Contacts />
    </>
  );
}