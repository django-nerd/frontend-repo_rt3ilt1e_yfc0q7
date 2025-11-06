import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white font-bold">B</span>
          <span className="font-semibold text-lg tracking-tight">Bubbly Tea</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#menu" className="hover:text-pink-600 transition-colors">Menu</a>
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2 text-white text-sm font-medium shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400">
          <ShoppingBag className="h-4 w-4" /> Order Now
        </button>
      </div>
    </header>
  );
}
