import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { getAllFaculty } from "@/actions/faculty";

export const dynamic = "force-dynamic";

export default async function Faculty() {
    const { success, data: faculty } = await getAllFaculty();

    // Fallback data if no faculty in DB
    const fallbackFaculty = [
        { _id: "1", name: "Dr. N. Venkateswara Rao", role: "Principal", qualification: "Ph.D. in Education, M.Sc. Physics", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" },
        { _id: "2", name: "Ms. Sarah Johnson", role: "Vice Principal", qualification: "M.A. English, B.Ed.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" },
        { _id: "3", name: "Mr. Robert Smith", role: "Senior Physics", qualification: "M.Sc. Physics, 15+ Yrs Exp", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop" },
        { _id: "4", name: "Mrs. Emily Davis", role: "Head of Mathematics", qualification: "M.Sc. Maths, Gold Medalist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop" },
        { _id: "5", name: "Mr. David Wilson", role: "Sports Director", qualification: "B.P.Ed, National Coach", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2000&auto=format&fit=crop" },
        { _id: "6", name: "Ms. Anita Desai", role: "Art & Culture", qualification: "MFA, Visual Arts", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop" }
    ];

    const displayFaculty = faculty && faculty.length > 0 ? faculty : fallbackFaculty;

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="bg-white py-16 mb-16 shadow-sm">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">Our Mentors</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Meet Our Faculty</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        A dedicated team of educators committed to nurturing inclusivity, creativity, and academic excellence.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayFaculty.map((member: any, idx: number) => (
                        <div
                            key={member._id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={member.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex gap-4">
                                        <button className="p-2 bg-white text-primary rounded-full hover:bg-secondary hover:text-white transition-colors"><Mail size={18} /></button>
                                        <button className="p-2 bg-white text-[#0077b5] rounded-full hover:bg-secondary hover:text-white transition-colors"><Linkedin size={18} /></button>
                                        <button className="p-2 bg-white text-[#1da1f2] rounded-full hover:bg-secondary hover:text-white transition-colors"><Twitter size={18} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-secondary font-bold text-sm mb-3 uppercase tracking-wide">{member.role}</p>
                                <p className="text-slate-500 text-sm italic">{member.qualification}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
