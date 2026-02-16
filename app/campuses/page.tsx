import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Award, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Campuses | Excellence Academy Network - 3 World-Class Schools",
    description: "Explore our three premier institutions: Bright Horizon School (CBSE), Cherry Blossom School (International), and Lotus Veda Public School (Technology). Each campus offers unique excellence.",
    keywords: ["our campuses", "bright horizon school", "cherry blossom school", "lotus veda public school", "cbse school", "international school", "technology school"],
};

export default function CampusesPage() {
    const campuses = [
        {
            id: "bright-horizon",
            name: "Bright Horizon School",
            tagline: "CBSE Excellence & Holistic Development",
            description: "Our flagship campus established in 1989, offering comprehensive CBSE curriculum with focus on academic excellence, sports, and extracurricular activities. Known for consistent 100% board results and strong foundation in core subjects.",
            location: "Sector 21, Knowledge Park",
            established: "1989",
            students: "2000+",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
            color: "indigo",
            href: "/branch/bright-horizon",
            highlights: [
                "CBSE Affiliated - Affiliation No. 1234567",
                "100% Board Result Track Record",
                "State-of-the-art Science Labs",
                "Olympic-size Swimming Pool"
            ]
        },
        {
            id: "cherry-blossom",
            name: "Cherry Blossom School",
            tagline: "Global Curriculum & International Standards",
            description: "Launched in 2005, this campus follows Cambridge International curriculum, preparing students for global citizenship. Features international exchange programs, world-class infrastructure, and emphasis on languages and cultural diversity.",
            location: "Green Valley, International Zone",
            established: "2005",
            students: "1500+",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
            color: "emerald",
            href: "/branch/cherry-blossom",
            highlights: [
                "Cambridge International Certified",
                "International Exchange Programs",
                "Multilingual Education (6 Languages)",
                "Smart Classrooms with AI Integration"
            ]
        },
        {
            id: "lotus-veda",
            name: "Lotus Veda Public School",
            tagline: "Science, Technology & Innovation Hub",
            description: "Our newest campus (2015) specializes in STEM education with cutting-edge facilities. Features robotics labs, AI learning centers, maker spaces, and partnerships with leading tech companies for student internships and projects.",
            location: "Tech Valley, Innovation District",
            established: "2015",
            students: "1200+",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
            color: "orange",
            href: "/branch/lotus-veda",
            highlights: [
                "STEM-Focused Curriculum",
                "AI & Robotics Labs",
                "Industry Partnership Programs",
                "Innovation & Maker Spaces"
            ]
        }
    ];

    const colorClasses = {
        indigo: {
            gradient: "from-indigo-500 to-purple-600",
            bg: "bg-indigo-500",
            text: "text-indigo-600",
            border: "border-indigo-200",
            hover: "hover:border-indigo-400"
        },
        emerald: {
            gradient: "from-emerald-500 to-teal-600",
            bg: "bg-emerald-500",
            text: "text-emerald-600",
            border: "border-emerald-200",
            hover: "hover:border-emerald-400"
        },
        orange: {
            gradient: "from-orange-500 to-red-600",
            bg: "bg-orange-500",
            text: "text-orange-600",
            border: "border-orange-200",
            hover: "hover:border-orange-400"
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
                        alt="Our Campuses"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-purple-900/85 to-primary/90" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <span className="inline-flex items-center gap-2 glass text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                        <Award size={16} className="text-secondary" />
                        EXCELLENCE ACADEMY NETWORK
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                        Our <span className="text-gradient-secondary">Campuses</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Three distinct campuses, one shared vision of excellence.
                        <br />
                        Discover the perfect fit for your child's educational journey.
                    </p>
                </div>
            </section>

            {/* Campuses Grid */}
            <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {campuses.map((campus, idx) => (
                            <div
                                key={campus.id}
                                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 ${colorClasses[campus.color as keyof typeof colorClasses].border} ${colorClasses[campus.color as keyof typeof colorClasses].hover}`}
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={campus.image}
                                        alt={campus.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Established Badge */}
                                    <div className={`absolute top-4 right-4 bg-gradient-to-br ${colorClasses[campus.color as keyof typeof colorClasses].gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                                        Est. {campus.established}
                                    </div>

                                    {/* Name Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h2 className="text-2xl font-black mb-1">{campus.name}</h2>
                                        <p className="text-white/90 text-sm font-medium">{campus.tagline}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Quick Stats */}
                                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <MapPin size={16} className={colorClasses[campus.color as keyof typeof colorClasses].text} />
                                            <span className="font-medium">{campus.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Users size={16} className={colorClasses[campus.color as keyof typeof colorClasses].text} />
                                            <span className="font-bold">{campus.students}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                        {campus.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mb-6 space-y-2">
                                        {campus.highlights.slice(0, 3).map((highlight, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-2">
                                                <div className={`flex-shrink-0 w-5 h-5 rounded-full ${colorClasses[campus.color as keyof typeof colorClasses].bg} flex items-center justify-center mt-0.5`}>
                                                    <Award size={12} className="text-white" />
                                                </div>
                                                <span className="text-xs text-slate-700 font-medium leading-relaxed">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Visit Button */}
                                    <Link
                                        href={campus.href}
                                        className={`group/btn w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r ${colorClasses[campus.color as keyof typeof colorClasses].gradient} text-white px-6 py-4 rounded-xl font-bold tracking-wide text-sm shadow-lg hover:shadow-xl transition-all`}
                                    >
                                        VISIT BRANCH
                                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Compare Our <span className="text-gradient">Campuses</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Each campus offers unique strengths while maintaining our core commitment to excellence.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="p-4 text-left font-black text-slate-900">Feature</th>
                                    {campuses.map(campus => (
                                        <th key={campus.id} className="p-4 text-center font-black text-slate-900">
                                            {campus.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Board Affiliation", values: ["CBSE", "Cambridge International", "CBSE (STEM Focus)"] },
                                    { feature: "Established", values: ["1989", "2005", "2015"] },
                                    { feature: "Students", values: ["2000+", "1500+", "1200+"] },
                                    { feature: "Specialization", values: ["Holistic Development", "Global Curriculum", "STEM & Innovation"] },
                                    { feature: "Language Options", values: ["Hindi, English, Sanskrit", "6 Languages", "English, Coding Languages"] }
                                ].map((row, rowIdx) => (
                                    <tr key={rowIdx} className="border-b border-slate-100">
                                        <td className="p-4 font-bold text-slate-700">{row.feature}</td>
                                        {row.values.map((value, valIdx) => (
                                            <td key={valIdx} className="p-4 text-center text-slate-600">
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                        Which Campus is Right for Your Child?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Schedule a visit to experience our campuses firsthand and make an informed decision.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-black tracking-wide rounded-full shadow-2xl hover:bg-secondary hover:text-white transition-all btn-premium"
                        >
                            <Calendar size={24} />
                            SCHEDULE CAMPUS VISIT
                        </Link>
                        <Link
                            href="/admissions"
                            className="inline-flex items-center gap-3 glass hover:bg-white/20 text-white px-10 py-5 font-bold tracking-wide rounded-full transition-all"
                        >
                            APPLY NOW
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
