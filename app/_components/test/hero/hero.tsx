"use client";
import React from "react";
/**
 * Components
 */
import { HeroHeader } from "@/app/_components/test/hero/hero-header";
import { HeroFooter } from "@/app/_components/test/hero/hero-footer";
/**
 *
 * GSAP
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HeroImage } from "@/app/_components/test/hero/hero-image";
import dynamic from "next/dynamic";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const containerRef = React.useRef<HTMLElement | null>(null);
  const heroHeaderRef = React.useRef<HTMLDivElement | null>(null);
  const heroFooterRef = React.useRef<HTMLDivElement | null>(null);
  const heroImageRef = React.useRef<HTMLDivElement | null>(null);
  function scroll() {
    const contentSticky: HTMLDivElement[] =
      gsap.utils.toArray(".content--sticky");

    contentSticky.forEach((element, index) => {
      const lastElement = contentSticky.length === index + 1;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "top+=20% top",
            end: "+120%",
            scrub: 1,
          },
        })
        .to(
          element,
          {
            ease: "none",
            scale: lastElement ? 1 : 0.75,
            borderRadius: lastElement ? 0 : 40,
          },
          0,
        );
    });
    /** HeroHeaderScroll */
    const heroHeaderTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroHeaderRef.current,
        start: "top+=5% top",
        end: "bottom top",
        scrub: 1,
      },
    });
    heroHeaderTimeline
      .to(
        heroHeaderRef.current!.children[1],
        {
          startAt: { filter: `grayscale(0) brightness(100%)` },
          filter: `grayscale(100) brightness(0%)`,
        },
        0,
      )
      .to(
        heroHeaderRef.current!.children[0],
        {
          scale: 10,
          ease: "sine.inOut",
        },
        0,
      );
    /** HeroFooterScroll */
    gsap.to(heroFooterRef.current!.children, {
      scale: 0.25,
      startAt: { filter: "grayscale(0) brightness(100%)" },
      filter: `grayscale(100) brightness(50%)`,
      scrollTrigger: {
        trigger: heroFooterRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    /** HeroImageScroll */
    gsap.set(heroImageRef.current!.children[0], {
      autoAlpha: 0.5,
      clipPath: "polygon(50% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)",
      filter: `grayscale(100)`,
      scale: 0.95,
    });
    gsap.to(heroImageRef.current!.children[0], {
      clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
      autoAlpha: 1,
      ease: "none",
      filter: `grayscale(0)`,
      scale: 1,
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }
  useGSAP(() => {
    scroll();
  }, [containerRef]);
  return (
    <section ref={containerRef} className="bg-secondary-blue" id="hero">
      <HeroHeader ref={heroHeaderRef} />
      <HeroFooter ref={heroFooterRef} />
      <HeroImage ref={heroImageRef} />
    </section>
  );
};
export default dynamic(() => Promise.resolve(Hero), {
  ssr: false,
});
