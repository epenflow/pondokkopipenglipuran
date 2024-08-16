import { cn } from "@/lib/utils";
import React from "react";

interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> {}
export const HeroImage = React.forwardRef<HTMLDivElement, HeroImageProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={cn(
          "content--sticky z-20 overflow-hidden bg-lush-white",
          className,
        )}
      >
        <div
          style={{
            backgroundImage: `url('https://ucarecdn.com/b7335594-1bb7-49ac-9b6a-91e859a9073c/IMG-20.JPG')`,
          }}
          className="h-full w-full bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
    );
  },
);
