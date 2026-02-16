import { Metadata } from "next";
import { Award, Target, Globe, Heart, Shield, Lightbulb, TrendingUp, Users, Star, Trophy, Medal, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Excellence Academy Network | Our Vision, Mission & Leadership",
    description: "Learn about Excellence Academy Network's vision, mission, core values, leadership team, achievements, and recognition. 35+ years of educational excellence across 3 world-class campuses.",
    keywords: ["about excellence academy", "vision mission", "educational leadership", "institutional achievements", "board affiliations", "award-winning school"],
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
                        alt="About Excellence Academy"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-purple-900/90" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                        About
                        <br />
                        <span className="text-gradient-secondary">Excellence Academy Network</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Empowering the next generation through world-class education, innovation, and values since 1989.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Target size={16} className="text-secondary" />
                            VISION & MISSION
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Our Guiding <span className="text-gradient">Principles</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Vision */}
                        <div className="p-10 rounded-3xl bg-gradient-primary text-white shadow-glow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
                            <Target size={56} className="mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-black mb-6 relative z-10">Our Vision</h3>
                            <p className="text-white/95 leading-relaxed text-lg relative z-10">
                                To be recognized as India's leading educational institution network, known for academic excellence,
                                innovative teaching methodologies, and producing confident, compassionate leaders who shape the
                                future of our nation and the world.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="p-10 rounded-3xl bg-gradient-secondary text-white shadow-glow-secondary relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
                            <Lightbulb size={56} className="mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-black mb-6 relative z-10">Our Mission</h3>
                            <p className="text-white/95 leading-relaxed text-lg relative z-10">
                                To provide world-class education that empowers students with knowledge, skills, and values to excel
                                academically and contribute meaningfully to society while fostering innovation, creativity, and
                                global citizenship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Heart size={16} className="text-secondary" />
                            CORE VALUES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            What We <span className="text-gradient">Stand For</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our core values guide every decision, action, and interaction across all our campuses.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: Award,
                                title: "Excellence",
                                description: "Setting the highest standards in academic achievement and character development"
                            },
                            {
                                icon: Globe,
                                title: "Global Perspective",
                                description: "Preparing students to thrive in an interconnected, multicultural world"
                            },
                            {
                                icon: Heart,
                                title: "Holistic Development",
                                description: "Nurturing mind, body, and spirit for well-rounded individuals"
                            },
                            {
                                icon: Shield,
                                title: "Values & Ethics",
                                description: "Building strong moral foundations and responsible citizenship"
                            },
                            {
                                icon: Lightbulb,
                                title: "Innovation",
                                description: "Embracing creativity and forward-thinking approaches to education"
                            },
                            {
                                icon: Users,
                                title: "Collaboration",
                                description: "Fostering teamwork, communication, and community engagement"
                            },
                            {
                                icon: TrendingUp,
                                title: "Continuous Growth",
                                description: "Commitment to lifelong learning and self-improvement"
                            },
                            {
                                icon: Star,
                                title: "Integrity",
                                description: "Upholding honesty, transparency, and accountability in all actions"
                            }
                        ].map((value, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group"
                            >
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary text-white mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Users size={16} className="text-secondary" />
                            LEADERSHIP
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Our <span className="text-gradient">Leadership Team</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Visionary leaders with decades of experience in educational excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Mr. Arun Sharma",
                                position: "Founder & Managing Director",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
                                bio: "35+ years of educational leadership, pioneering modern teaching methods"
                            },
                            {
                                name: "Dr. Priya Mehta",
                                position: "Academic Director",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
                                bio: "Ph.D. in Education, 20+ years of curriculum development experience"
                            },
                            {
                                name: "Mr. Rajiv Kapoor",
                                position: "Operations Head",
                                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
                                bio: "MBA with 18 years in educational administration and infrastructure"
                            }
                        ].map((leader, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                                    <p className="text-primary font-bold mb-3">{leader.position}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements & Milestones */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Trophy size={16} className="text-secondary" />
                            ACHIEVEMENTS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Our <span className="text-gradient">Journey of Excellence</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { year: "1989", event: "Foundation of Excellence Academy", icon: Target },
                            { year: "1995", event: "First 100% Board Result", icon: Award },
                            { year: "2005", event: "International Campus Launched", icon: Globe },
                            { year: "2010", event: "ISO 9001:2008 Certification", icon: Medal },
                            { year: "2015", event: "Technology Campus Opened", icon: Lightbulb },
                            { year: "2018", event: "NAAC A+ Accreditation", icon: Star },
                            { year: "2020", event: "Green School Certification", icon: Shield },
                            { year: "2024", event: "4700+ Students Milestone", icon: Users }
                        ].map((milestone, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group relative"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                                    <milestone.icon size={24} className="text-primary" />
                                </div>
                                <div className="text-2xl font-black text-primary mb-2">{milestone.year}</div>
                                <p className="text-slate-700 font-medium leading-relaxed">{milestone.event}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recognition & Affiliations */}
            <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Medal size={16} className="text-secondary" />
                            RECOGNITION & AFFILIATIONS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Officially <span className="text-gradient">Recognized</span>
                        </h2>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {/* Board Affiliations */}
                        <div className="glass-card p-10 rounded-3xl shadow-premium">
                            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <Award className="text-primary" size={28} />
                                Board Affiliations
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: "CBSE Affiliated", subtitle: "North Campus - Affiliation No. 1234567" },
                                    { title: "Cambridge International", subtitle: "South Campus - Centre No. IN123" },
                                    { title: "State Board", subtitle: "All Campuses - Recognition No. MB/ABC/123" }
                                ].map((affiliation, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">{affiliation.title}</h4>
                                        <p className="text-sm text-slate-600">{affiliation.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="glass-card p-10 rounded-3xl shadow-premium">
                            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <Shield className="text-primary" size={28} />
                                Certifications & Accreditations
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "ISO 9001:2015 Certified Institution",
                                    "NAAC A+ Grade Accreditation (2018)",
                                    "Green School Certification (2020)",
                                    "Safety First Institution Award",
                                    "Digital India Initiative Partner",
                                    "National Quality Education Award 2022"
                                ].map((cert, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-transparent">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                            <Award size={16} className="text-emerald-600" />
                                        </div>
                                        <span className="text-slate-700 font-bold">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media & Press */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Newspaper size={16} className="text-secondary" />
                            MEDIA & PRESS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            In the <span className="text-gradient">News</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Recognized by leading publications for our commitment to educational excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                publication: "Times of India",
                                date: "March 2024",
                                headline: "Excellence Academy Ranks Among Top 10 Schools in Maharashtra",
                                image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                                publication: "Education Today",
                                date: "January 2024",
                                headline: "Pioneering AI & Robotics Education at Excellence Tech Academy",
                                image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                                publication: "The Hindu",
                                date: "November 2023",
                                headline: "100% Success Rate Achieved Across All Three Campuses",
                                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                                publication: "Indian Express",
                                date: "August 2023",
                                headline: "Excellence Academy's Holistic Approach to Student Development",
                                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop"
                            }
                        ].map((article, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.headline}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{article.publication}</span>
                                        <span className="text-xs text-slate-500">{article.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                                        {article.headline}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        Ready to Join Our Legacy?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Become part of a community that values excellence, innovation, and holistic growth.
                    </p>
                    <Link
                        href="/admissions"
                        className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-black tracking-wide rounded-full shadow-2xl hover:bg-secondary hover:text-white transition-all btn-premium"
                    >
                        <Award size={24} />
                        APPLY FOR ADMISSION
                    </Link>
                </div>
            </section>
        </div>
    );
}
