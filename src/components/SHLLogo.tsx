
import React from "react";
import { cn } from "@/lib/utils";

type LogoVariant = "color" | "green" | "black" | "white" | "grey";

interface SHLLogoProps {
  variant?: LogoVariant;
  className?: string;
}

export function SHLLogo({ variant = "color", className }: SHLLogoProps) {
  // Default (color) logo uses the direct SVG URL
  if (variant === "color") {
    return (
      <img 
        src="https://www.shl.com/assets/header-graphics/SHL-logo-colour-update.svg" 
        alt="SHL Logo" 
        className={cn("h-8", className)}
      />
    );
  }

  // For other variants, we'll recreate the SVG with the appropriate color
  const fillColor = {
    green: "#009639",  // SHL green color
    black: "#000000",
    white: "#FFFFFF",
    grey: "#8E9196"
  }[variant];

  return (
    <svg 
      className={cn("h-8", className)} 
      viewBox="0 0 57 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SHL Logo SVG path */}
      <path 
        d="M16.007 0.86C16.007 0.86 12.274 0.86 9.404 0.86C6.534 0.86 4.401 3.047 4.401 5.443V11.28H0.674V16.171H4.401V27.14H9.301V16.171H16.007V11.28H9.301V6.245C9.301 5.372 9.869 4.791 10.754 4.791H16.007V0.86Z" 
        fill={fillColor} 
      />
      <path 
        d="M32.799 11.126H27.899V23.184C27.899 24.062 27.332 24.607 26.452 24.607H24.232V27.14H27.546C29.929 27.14 32.799 25.95 32.799 22.874V11.126Z" 
        fill={fillColor} 
      />
      <path 
        d="M32.799 4.388C32.799 2.807 31.434 1.518 29.929 1.518C28.359 1.518 26.994 2.807 26.994 4.388C26.994 5.933 28.359 7.222 29.929 7.222C31.434 7.222 32.799 5.933 32.799 4.388Z" 
        fill={fillColor} 
      />
      <path 
        d="M53.389 12.402C52.437 11.588 51.105 11.126 49.662 11.126C47.979 11.126 46.647 11.665 45.695 12.402V11.28H40.795V27.14H45.695V17.47C45.695 16.138 46.614 15.273 47.853 15.273C49.091 15.273 50.011 16.138 50.011 17.47V27.14H54.91V16.65C54.91 14.934 54.342 13.21 53.389 12.402Z" 
        fill={fillColor} 
      />
    </svg>
  );
}
