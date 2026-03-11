"use client";

import { Header } from "@/components/Header/Header";
import {
  ResumeHero,
  ResumeSummary,
  ResumeExperience,
  ResumeStack,
  ResumeLanguages,
  ResumeContact,
  ResumeFooter,
} from "@/components/resume";

export default function ResumePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ResumeHero />
        <ResumeSummary />
        <ResumeExperience />
        <ResumeStack />
        <ResumeLanguages />
        <ResumeContact />
        <ResumeFooter />
      </main>
    </>
  );
}
