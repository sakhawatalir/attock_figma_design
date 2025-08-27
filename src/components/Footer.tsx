import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Top Social Media Icons */}

        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/Logo.png"
            alt="BATAL Logo"
            width={200}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Company Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Batal One Advertising</h2>
        <p className="text-lg text-gray-600 mb-2">Billboard Contracting Co. LLC</p>
        
        {/* Address */}
        <p className="text-gray-600 mb-8">
          Office 103-466, Hamad M.A Al Bahar<br />
          Al Khabeesi - Dubai UAE
        </p>

        {/* Bottom Social Media Icons */}
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/batal.ads" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
          >
            <span className="text-white font-bold text-lg">f</span>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/batal_ads" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded flex items-center justify-center hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/971588929900" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Strip Images */}
      <div className="w-full">
        <Image
          src="/images/footer strip 1.png"
          alt="Footer Strip 1"
          width={1920}
          height={50}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/images/footer strip 2.png"
          alt="Footer Strip 2"
          width={1920}
          height={50}
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
}
