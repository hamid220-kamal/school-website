import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { getNotices } from "@/actions/notice";

// Components
import { NoticeBoard } from "@/components/sections/NoticeBoard";
import { Testimonials } from "@/components/sections/Testimonials";
import { FacilitiesGrid } from "@/components/sections/FacilitiesGrid";
import { ChatBot } from "@/components/sections/ChatBot";
import { HeroSlider } from "@/components/sections/HeroSlider";

// New Home Components
import { InstitutionAbout } from "@/components/sections/home/InstitutionAbout";
import { AboutTheGroup } from "@/components/sections/home/AboutTheGroup";
import { BranchPreviewCards } from "@/components/sections/home/BranchPreviewCards";
import { ChairmanMessage } from "@/components/sections/home/ChairmanMessage";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { AcademicExcellence } from "@/components/sections/home/AcademicExcellence";
import { EventsHighlights } from "@/components/sections/home/EventsHighlights";
import { QuickAdmissionCTA } from "@/components/sections/home/QuickAdmissionCTA";

// Force Dynamic for DB calls
export const dynamic = "force-dynamic";

export default async function Home() {
  const { success, data: notices } = await getNotices();

  return (
    <div className="flex flex-col min-h-screen bg-white">


      {/* Hero Section with Updated Content */}
      <HeroSlider />

      {/* About the Institution */}
      <InstitutionAbout />

      {/* About the Group (Comprehensive with Founder Message) */}
      <AboutTheGroup />

      {/* Branch Overview Cards (3 Clickable Campus Cards) */}
      <section id="our-campuses">
        <BranchPreviewCards />
      </section>

      {/* Trust & Credibility Section */}
      <TrustSection />

      {/* Chairman / Director Message */}
      <ChairmanMessage />

      {/* Academic Bright Horizon Stats Dashboard */}
      <AcademicExcellence />

      {/* Events Highlights Across Campuses */}
      <EventsHighlights />

      {/* Facilities Grid (Existing) */}
      <FacilitiesGrid />

      {/* Testimonials (Existing) */}
      <Testimonials />

      {/* Notice Board (Dynamic) */}
      <NoticeBoard notices={notices || []} />

      {/* Quick Admission CTA (Enhanced) */}
      <QuickAdmissionCTA />

      {/* Chatbot (Existing) */}
      <ChatBot />
    </div>
  );
}

