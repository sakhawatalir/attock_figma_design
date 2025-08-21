import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative min-h-[80px]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/Fancy Strip.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2
        }}
      ></div>
      
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0 bg-white/20" style={{ zIndex: -1 }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="BATAL Logo"
              width={140}
              height={25}
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">HOME</a>
            <a href="#" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">ABOUT US</a>
            <a href="#" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">PROJECTS</a>
            <a href="#" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">SERVICES</a>
            <a href="#" className="text-gray-800 hover:text-green-600 font-semibold text-sm tracking-wide transition-colors">CONTACT</a>
          </nav>

          {/* CTA Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors flex items-center gap-2 shadow-md">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            A Quick Quote?
          </button>
        </div>
      </div>
    </header>
  );
}
