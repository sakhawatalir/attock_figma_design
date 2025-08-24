import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of successful signage projects across Dubai and the UAE. 
              From illuminated signs to 3D branding, see how we bring brands to life.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors">
              All Projects
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Illuminated Signs
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              3D Letters
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Vehicle Branding
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors">
              Pylon Signs
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/Group (1).png"
                  alt="Darwish Cafe Project"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Illuminated
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Darwish Cafe</h3>
                <p className="text-gray-600 mb-4">
                  Custom illuminated signage for a popular cafe in Dubai Marina. 
                  Features LED backlighting and weather-resistant materials.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Dubai Marina</span>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/Group (2).png"
                  alt="Modern Building Project"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    3D Letters
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Building</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale 3D letter signage for a corporate headquarters. 
                  Premium acrylic finish with internal LED lighting.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Business Bay</span>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/Group (3).png"
                  alt="Vehicle Branding Project"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Vehicle
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery Fleet</h3>
                <p className="text-gray-600 mb-4">
                  Complete vehicle branding for a logistics company. 
                  High-quality vinyl wraps with company branding and contact details.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Across UAE</span>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/Group (5).png"
                  alt="Pylon Sign Project"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Pylon
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Shopping Mall</h3>
                <p className="text-gray-600 mb-4">
                  Large pylon sign for a shopping mall entrance. 
                  Built to Dubai Municipality standards with LED illumination.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Deira</span>
                  <span className="text-gray-500 text-sm">2023</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/Group (6).png"
                  alt="Wayfinding Project"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Wayfinding
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Office Complex</h3>
                <p className="text-gray-600 mb-4">
                  Complete wayfinding system for a multi-story office building. 
                  Clear directional signage with consistent branding.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Sheikh Zayed Road</span>
                  <span className="text-gray-500 text-sm">2023</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/Group (7).png"
                  alt="Glass Signage Project"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Glass & Vinyl
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Retail Store</h3>
                <p className="text-gray-600 mb-4">
                  Glass frosting and vinyl decals for a luxury retail store. 
                  Elegant design that enhances the shopping experience.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Dubai Mall</span>
                  <span className="text-gray-500 text-sm">2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expert signage solutions.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get a Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
