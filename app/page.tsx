import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhatWeDetect from "@/components/WhatWeDetect";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <WhatWeDetect />
        <Process />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
