"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

interface HeroHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const HeroHeader = React.forwardRef<HTMLDivElement, HeroHeaderProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cn(
          "content--sticky relative flex items-center justify-center overflow-hidden bg-lush-white",
          className,
        )}
      >
        <div className="absolute--center z-30 text-white">
          <h1 className="text-6xl lg:text-9xl">Pondok Kopi</h1>
          <Link href={"#about-us"} className="text-2xl lg:text-6xl">
            Read More
          </Link>
        </div>

        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src="https://ucarecdn.com/6f53fbbc-21d6-4124-b8ab-6ce746212650/" />
        </video>
      </div>
    );
  },
);