import aurelianImage from "../assets/aurelian.jpg";
import invoiceImage from "../assets/invoice.jpg";
import bazar from "../assets/199Bazar.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Aurelian House India",
      category: "E-commerce Website",
      description:
        "Modern MERN e-commerce website with authentication, cart and admin panel.",
      image: aurelianImage,
      demo: "https://aurelianhouseindia.com",
      github: "#",
    },

    {
      title: "Invoice Generator",
      category: "Web App",
      description: "Invoice generator built with MERN.",
      image: invoiceImage,
      demo: "https://nku-invoice-generate-f.vercel.app/",
      github: "https://github.com/nitkarsh/invoice-generator",
    },

    {
      title: "199Bazar",
      category: "Shopping Marketplace",
      description: "199Bazar: E-commerce Storefront with MERN Stack",
      image: bazar,
      demo: "https://199-bazar.vercel.app/",
      github: "https://github.com/nitkarsh/199Bazar",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-zinc-950 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-white/10 bg-black hover:border-blue-500 transition-all duration-300"
            >

              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <p className="text-blue-400 text-sm">
                  {p.category}
                </p>

                <h3 className="font-bold text-xl mt-2">
                  {p.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-center transition"
                  >
                    Live Demo
                  </a>

                  {p.github !== "#" && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/20 hover:border-white/50 px-4 py-2 rounded-lg text-center transition"
                    >
                      GitHub
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}