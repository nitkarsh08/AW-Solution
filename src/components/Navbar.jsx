import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-500">AW Solution</h1>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition">
              {link.name}
            </a>
          ))}
          <a href="#contact">
  <button className="bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
    Hire Us
  </button>
</a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-white/10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-4 border-b border-white/10 hover:bg-zinc-800"
            >
              {link.name}
            </a>
          ))}
          <div className="p-5">
            <a href="#contact" onClick={() => setOpen(false)}>
  <button className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700 transition">
    Hire Us
  </button>
</a>
          </div>
        </div>
      )}
    </nav>
  );
}