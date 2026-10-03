import { Globe } from "lucide-react";

const services = [
    "Custom Website",
    "E-commerce Website",
    "Business Website",
    "Landing Page",
    "Portfolio Website",
    "Mobile Apps",
    "MERN Development",
    "React Frontend",
    "Node Backend",
    "MongoDB",
    "Website Maintenance",
    "Website Redesign",
    "Bug Fixing",
    "Performance Optimization",
    "SEO",
    "Hosting Setup",
    "API Integration",
    "Payment Gateway",
    "Admin Dashboard",
    "CMS",
    "Technical Support",
    "Website Management"
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Our Services
                </h2>

                <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">

                    {services.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-blue-500 hover:-translate-y-2 transition"
                        >

                            <Globe className="text-blue-500 mb-2 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6" />

                            <h3 className="font-semibold text-xs sm:text-base">
                                {item}
                            </h3>

                            <p className="text-gray-400 text-[10px] sm:text-sm mt-1 sm:mt-2">
                                Quality solutions with modern technology.
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}