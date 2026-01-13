import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { getNotices } from "@/actions/notice";

// Components
import { NoticeBoard } from "@/components/sections/NoticeBoard";
import { LeaderSection } from "@/components/sections/LeaderSection";
import { WhyUs } from "@/components/sections/WhyUs";
import { FacilitiesGrid } from "@/components/sections/FacilitiesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { ChatBot } from "@/components/sections/ChatBot";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { CTASection } from "@/components/sections/CTASection";

// Force Dynamic for DB calls
export const dynamic = "force-dynamic";

export default async function Home() {
  const { success, data: notices } = await getNotices();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Emergency / Announcement Banner */}
      <div className="bg-red-500 text-white overflow-hidden py-2 relative z-50">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 animate-pulse">
          <AlertCircle size={16} />
          <span className="text-xs md:text-sm font-bold tracking-wide">
            URGENT: School will remain closed on 15th Jan due to heavy rains. Online classes will proceed as scheduled.
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSlider />

      {/* Spacer for floating cards */}
      <div className="hidden lg:block h-16 bg-white" />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Main Feature Sections */}
      <WhyUs />
      <FacilitiesGrid />
      <LeaderSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Notice Board (Dynamic) */}
      <NoticeBoard notices={notices || []} />

      {/* Final CTA */}
      <CTASection />

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}

