"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
function getYear() {
  const dates = new Date().getFullYear();
  return dates;
}
interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        id="footer"
        className={cn(
          "relative mt-[-100vh] flex h-auto w-full flex-col items-center justify-between px-2 lg:px-10",
          className,
        )}
      >
        <Image
          src={"/logo-01.svg"}
          alt="pondok kopi logo"
          priority
          width={0}
          height={0}
          sizes="100vh"
          className="relative mt-40 size-96 object-contain object-center"
        />
        <div className="flex h-auto w-full flex-col justify-between rounded-t-xl bg-lush-white">
          <div className="flex basis-full flex-col px-5 pt-5 lg:flex-row">
            <div className="basis-1/2">
              <h1 className="text-xl font-medium">Kontak Kami</h1>
              <p>Jl. Penglipuran No. 123, Bali</p>
              <p>+62 812 3456 7890</p>
              <p>info@pondokkopipengliupuran.com</p>
            </div>

            <div className="basis-1/2">
              <h1 className="text-xl font-medium">Follow us on</h1>
              <h1>Facebook</h1>
              <h1>Instagram</h1>
              <h1>Youtube</h1>
              <h1>Twitter</h1>
            </div>
          </div>
          <div className="border-t py-2 text-center">
            © {getYear()} Pondok Kopi Penglipuran. All right reserved
          </div>
        </div>
      </div>
    );
  },
);
