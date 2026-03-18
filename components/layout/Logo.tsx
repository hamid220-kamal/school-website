import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    scrolled?: boolean;
}

export function Logo({ className, scrolled }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className={cn(
                "relative w-12 h-12 flex items-center justify-center transition-all duration-700",
            )}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Sun Rays (Yellow/Orange) */}
                    <g fill={scrolled ? "#FBAF17" : "#FFFFFF"}>
                        <rect x="47" y="5" width="6" height="15" rx="3" transform="rotate(0 50 50)" />
                        <rect x="47" y="5" width="6" height="15" rx="3" transform="rotate(30 50 50)" />
                        <rect x="47" y="5" width="6" height="15" rx="3" transform="rotate(60 50 50)" />
                        <rect x="47" y="5" width="6" height="15" rx="3" transform="rotate(90 50 50)" />
                        <rect x="47" y="5" width="6" height="15" rx="3" transform="rotate(-30 50 50)" />
                        <rect x="47" y="5" width="6" height="15" rx="3" transform="rotate(-60 50 50)" />
                        <rect x="47" y="5" width="6" height="15" rx="3" transform="rotate(-90 50 50)" />
                    </g>
                    
                    {/* Bottom Horizon (Blue) */}
                    <circle cx="50" cy="50" r="30" fill={scrolled ? "#1D70D6" : "#FFFFFF"} clipPath="inset(50% 0 0 0)" />
                    
                    {/* Top Sun (Yellow) */}
                    <circle cx="50" cy="50" r="30" fill={scrolled ? "#FBAF17" : "#FFFFFF"} clipPath="inset(0 0 50% 0)" />
                    
                    {/* Horizontal Divider Lines */}
                    <g stroke={scrolled ? "#FFFFFF" : "#000000"} strokeWidth="2">
                        <line x1="25" y1="58" x2="75" y2="58" />
                        <line x1="30" y1="66" x2="70" y2="66" />
                        <line x1="38" y1="74" x2="62" y2="74" />
                    </g>
                </svg>
            </div>
            <div className="flex flex-col">
                <h1 className={cn(
                    "font-black font-heading leading-none tracking-tighter transition-all duration-500 uppercase text-lg lg:text-xl",
                    scrolled ? "text-[#1D70D6]" : "text-white"
                )}>
                    Bright Horizon
                </h1>
                <span className={cn(
                    "font-bold tracking-[0.4em] text-[8px] lg:text-[10px] transition-all duration-500 uppercase mt-0.5",
                    scrolled ? "text-[#FBAF17]" : "text-white/80"
                )}>
                    School
                </span>
            </div>
        </div>
    );
}
