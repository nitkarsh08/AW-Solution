const plans = [
    {
        name: "Starter (Small Business)",
        price: "₹7999",
        features: [
            "Professional Website",
            "1-3 Pages",
            "Custom Modern Design",
            "Free Domain",
            "Mobile & Tablet Responsive",
            "About & Services Section",
            "Contact Section",
            "Contact Form",
            "WhatsApp Integration",
            "One-Click Calling",
            "Google Maps Integration",
            "Social Media Integration",
            "Basic SEO",
            "Fast Loading Optimization",
            "SSL Setup Assistance",
            "Website Deployment",
            "7 Days Support",
            "Source Code Handover"
        ]
    },

    {
        name: "Business",
        price: "₹17999",
        features: [
            "Everything in Starter",
            "Up to 7 Pages",
            "Free Domain",
            "Premium UI/UX Design",
            "Advanced Responsive Design",
            "Custom Animations",
            "WhatsApp Integration",
            "Contact Form → Email",
            "Google Maps Integration",
            "Social Media Integration",
            "Google Analytics",
            "Google Search Console",
            "Sitemap Setup",
            "Basic Technical SEO",
            "Image Optimization",
            "Website Speed Optimization",
            "Custom Favicon",
            "Custom 404 Page",
            "Blog / News Section",
            "Basic Database Integration",
            "Basic Admin Functionality",
            "2 Revision Rounds",
            "30 Days Support & Maintenance",
            "Deployment & Domain Assistance",
            "Source Code Handover"
        ]
    },

    {
        name: "Premium",
        price: "₹34999+",
        features: [
            "Everything in Business",
            "10+ Custom Pages",
            "Free Domain",
            "Premium UI/UX",
            "Advanced Animations",
            "Custom React Web Development",
            "Full Backend Integration",
            "Database Integration",
            "User Authentication",
            "Admin Dashboard",
            "Product / Service Management",
            "Online Booking System",
            "E-commerce Functionality",
            "Shopping Cart",
            "Payment Gateway Integration",
            "Order Management",
            "Email Notifications",
            "WhatsApp Integration",
            "Google Analytics",
            "Google Search Console",
            "Advanced Technical SEO",
            "Schema / Structured Data",
            "Advanced Speed Optimization",
            "Security Configuration",
            "Deployment",
            "Domain & Hosting Assistance",
            "90 Days Support & Maintenance",
            "Source Code Handover"
        ]
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-zinc-950 px-6">

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                <h2 className="text-4xl text-center font-bold mb-12">
                    Pricing
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {plans.map((plan, i) => (

                        <div key={i}
                            className={`rounded-3xl p-8 border ${i === 1 ? "border-blue-500" : "border-white/10"} bg-black`}>

                            <h3 className="text-2xl font-bold">{plan.name}</h3>

                            <p className="text-4xl text-blue-500 my-5">{plan.price}</p>

                            {plan.features.map((f, j) => <p key={j} className="py-2 text-gray-300">✓ {f}</p>)}

                            <button className="w-full mt-6 bg-blue-600 py-3 rounded-xl">
                                Get Started
                            </button>

                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}