"use client";
/**
 * Components
 */
import { BeansJourney } from "@/app/_components/coffee-story/beans-journey";
import { BrewedNarrative } from "@/app/_components/coffee-story/brewed-narrative";
/**
 *
 * GSAP
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
/**
 * register GSAP Plugin
 */
gsap.registerPlugin(ScrollTrigger);
import React from "react";
import { EndJourney } from "@/app/_components/coffee-story/end-journery";
import dynamic from "next/dynamic";
const CoffeeStory = () => {
  const containerRef = React.useRef<HTMLElement | null>(null);
  const brewedNarrativeRef = React.useRef<HTMLDivElement | null>(null);
  const beansJourneyRef = React.useRef<HTMLDivElement | null>(null);
  function scroll() {}
  useGSAP(() => {
    const beans: HTMLDivElement[] = gsap.utils.toArray(".bean--pin");
    const spoon = gsap.utils.toArray(".spoon");
    const timeline = gsap.timeline({
      scrollTrigger: {
        pin: containerRef.current,
        trigger: brewedNarrativeRef.current,
        endTrigger: beansJourneyRef.current,
        start: "top-=50% top",
        end: "bottom-=50% top",
        scrub: 1,
      },
    });
    timeline
      .to(
        beans,
        {
          y: 0,
          x: 0,
          bottom: 0,
          rotate: 90,
          left: 150,
          width: 50,
          ease: "none",
        },
        0,
      )
      .to(
        spoon,
        {
          bottom: 150,
          rotate: -90,
          ease: "none",
        },
        0,
      );
  }, [containerRef]);
  return (
    <section
      className="relative overflow-x-hidden bg-lush-white"
      id="coffee-story"
    >
      <BrewedNarrative ref={brewedNarrativeRef} />
      <BeansJourney ref={beansJourneyRef} />
      <EndJourney />
    </section>
  );
};
export default dynamic(() => Promise.resolve(CoffeeStory), {
  ssr: false,
});
