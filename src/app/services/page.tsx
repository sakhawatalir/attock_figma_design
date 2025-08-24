import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive signage solutions tailored to your business needs. 
              From design to installation, we handle every aspect of your signage project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose BATAL?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 15 years of experience in the signage industry, we&apos;ve mastered 
                the art of creating impactful visual solutions that drive business growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">15+ years of industry experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dubai Municipality approved</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free consultation and design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Warranty on all installations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Rectangle 10.png"
                alt="BATAL Services"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Portfolio</h2>
            <p className="text-xl text-gray-600">Comprehensive signage solutions for every business need</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Illuminated Signs */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Illuminated Signs</h3>
                  <p className="text-green-600 font-semibold">LED & Backlit Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Energy-efficient LED illuminated signs perfect for shops, restaurants, and offices. 
                Available in various styles including backlit, front-lit, and edge-lit options.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• LED backlit signs</li>
                <li>• Front-lit channel letters</li>
                <li>• Edge-lit acrylic signs</li>
                <li>• Weather-resistant materials</li>
              </ul>
            </div>

            {/* 3D Letters */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">3D Letters</h3>
                  <p className="text-blue-600 font-semibold">Premium Dimensional Signs</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                High-quality 3D letter signs in acrylic, metal, or wood. Perfect for shopfronts, 
                offices, and receptions with custom finishes and lighting options.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Acrylic 3D letters</li>
                <li>• Metal channel letters</li>
                <li>• Wooden dimensional signs</li>
                <li>• Custom finishes & colors</li>
              </ul>
            </div>

            {/* Glass & Vinyl */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Glass & Vinyl</h3>
                  <p className="text-purple-600 font-semibold">Interior & Exterior Decals</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Upgrade interiors or storefronts with vinyl decals, glass frosting, and logo stickers. 
                Weatherproof, removable, and perfect for branding.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Vinyl decals & stickers</li>
                <li>• Glass frosting</li>
                <li>• Logo applications</li>
                <li>• Removable solutions</li>
              </ul>
            </div>

            {/* Pylon & Hoardings */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Pylon & Hoardings</h3>
                  <p className="text-orange-600 font-semibold">Large Scale Signage</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Large pylon signs and construction hoardings built to Dubai Municipality standards. 
                Ideal for developers, real estate, and outdoor advertising.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Pylon signs</li>
                <li>• Construction hoardings</li>
                <li>• Billboards</li>
                <li>• Municipal compliance</li>
              </ul>
            </div>

            {/* Wayfinding */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Wayfinding</h3>
                  <p className="text-teal-600 font-semibold">Directional Systems</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Clear, custom wayfinding signage for malls, offices, hospitals, and buildings. 
                Designed for function, brand consistency, and professional installation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Directional signs</li>
                <li>• Floor plans</li>
                <li>• Room identification</li>
                <li>• Branded systems</li>
              </ul>
            </div>

            {/* Vehicle Branding */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Vehicle Branding</h3>
                  <p className="text-indigo-600 font-semibold">Mobile Advertising</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Turn cars, vans, and bikes into mobile ads with custom vehicle wraps and branding stickers. 
                Ideal for delivery fleets and service vehicles.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Vehicle wraps</li>
                <li>• Branding stickers</li>
                <li>• Fleet branding</li>
                <li>• High-quality materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">Free consultation to understand your needs and vision</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">Custom design concepts with 3D visualizations</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fabrication</h3>
              <p className="text-gray-600">Premium materials and expert craftsmanship</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">Professional installation with warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your signage project.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
