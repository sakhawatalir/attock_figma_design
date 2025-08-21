import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Hero Section with Asset SVG */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  <span className="text-3xl lg:text-4xl font-normal text-gray-600">Turn Your Spaces into</span>
                  <br />
                  <span className="text-5xl lg:text-7xl">Brand Stories</span>
                </h1>
                <p className="text-xl text-green-600 font-semibold">Powered by BATAL HEROES</p>
              </div>

              {/* Colored Line */}
              <div className="flex space-x-1">
                <div className="w-8 h-2 bg-red-500"></div>
                <div className="w-8 h-2 bg-black"></div>
                <div className="w-8 h-2 bg-green-500"></div>
                <div className="w-8 h-2 bg-yellow-400"></div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Free Design Advice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Free Suggestion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Free Quote</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                  [GET IN TOUCH]
                </button>
                <div className="w-16 h-0.5 bg-black mt-2"></div>
                <p className="text-lg text-gray-600 mt-2">For Free Consultation</p>
              </div>
            </div>

            {/* Right Content with Asset SVG */}
            <div className="relative">
              <div className="p-4">
                <div className="bg-gray-100 p-8">
                  <div className="space-y-6">
                    {/* Asset SVG */}
                    <div className="text-center">
                      <Image
                        src="/images/Asset 1 1 (1).svg"
                        alt="Asset SVG"
                        width={600}
                        height={500}
                        className="mx-auto"
                      />
                    </div>
                    
                    {/* City Scene with Signs */}
                    {/* <div className="relative">
                      <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">ROOF SIGN</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">HOARDING / BILLBOARD</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">BUILDING WRAP</span>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-black rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">SHOPFRONT SIGN</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">HOARDING</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Image
                src="/images/Group (1).png"
                alt="Illuminated SIOUX Sign"
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 object-cover"
              />
            </div>
            <div className="text-center">
              <Image
                src="/images/Group (2).png"
                alt="Retail Space Interior"
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 object-cover"
              />
            </div>
            <div className="text-center">
              <Image
                src="/images/Group (3).png"
                alt="Signage Components"
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 object-cover"
              />
            </div>
          </div>

          {/* Services List */}
          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center items-center gap-4 text-white text-2xl font-bold">
              <span>Signboards</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Vinyl Graphics</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Wayfinding</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Hoardings</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Kids Room Makeovers</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-center text-white text-lg max-w-4xl mx-auto mb-8">
            <p>
              Our expert team fabricates and installs customized 3D letter signs, illuminated shopfronts, and wayfinding systems across Dubai and Sharjah
            </p>
          </div>

          {/* Colored Line */}
          <div className="flex justify-center space-x-1">
            <div className="w-8 h-2 bg-red-500"></div>
            <div className="w-8 h-2 bg-black"></div>
            <div className="w-8 h-2 bg-green-500"></div>
            <div className="w-8 h-2 bg-yellow-400"></div>
          </div>
        </div>
      </section>

      {/* BATAL Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="bg-green-100 border-2 border-green-500 rounded-full px-8 py-3">
                  <h2 className="text-2xl font-bold text-green-800">BATAL Service</h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  BATAL is a top-rated signage company in Dubai, offering custom signage solutions for businesses across the UAE. We specialize in illuminated signs, 3D letter signage, and glass & vinyl decals to wayfinding systems, hoardings, and vehicle branding. We help brands stand out with fast delivery and durable results.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Illuminated Signs</h3>
                    <p className="text-gray-600">Durable illuminated signage in Dubai with 24/7 exposure.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3D Letters</h3>
                    <p className="text-gray-600">3D letter signs in acrylic, metal or wood—ideal for shopfronts, offices, and receptions with premium finishes and long-lasting quality.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Wayfinding & Directionals</h3>
                    <p className="text-gray-600">Clear, custom wayfinding signage for malls, offices, hospitals, and buildings designed for function and brand consistency.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Glass & Vinyl Signs</h3>
                    <p className="text-gray-600">Vinyl decals, glass frosting, and logo stickers for interiors or storefronts—weatherproof, removable, and perfect for branding.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pylon/Hoardings</h3>
                    <p className="text-gray-600">Large pylon signs and construction hoardings built to meet Dubai Municipality standards, ideal for real estate and outdoor advertising.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vehicle Branding</h3>
                    <p className="text-gray-600">Transform cars, vans, and bikes into mobile ads with custom vehicle wraps and branding stickers, suitable for delivery fleets and service vehicles.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom-made signs for Shops, Offices, Buildings</h2>
                <p className="text-2xl text-green-600 italic">Looking for a trusted signage company in Dubai?</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/Group (5).png"
                    alt="DARWISH CAFE Interior"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <Image
                    src="/images/Group (6).png"
                    alt="Circular Ornate Sign"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="/images/Group 10.png"
                    alt="Modern Building with Banners"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <Image
                    src="/images/Group 11.png"
                    alt="ChTime Registration Desk Sign"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Complete Visualization Before Production</h2>
                <h3 className="text-2xl font-bold text-gray-800">Help you take Better Decision</h3>
                <p className="text-xl text-green-600 italic">Looking for a trusted signage company in Dubai?</p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At BATAL, we help you make confident decisions with realistic design visualizations tailored to your space. We provide detailed design previews for shopfronts, hanging signs, or directional signage, including materials, lighting style, and mounting. We offer true-to-scale mockups to align your vision with the final result.
                </p>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Laptop</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Lightbulb</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-purple-600">∞</span>
                    </div>
                    <span className="text-sm text-gray-600">INFICITY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center">
              <Image
                src="/images/Group 4.png"
                alt="NIKE 3D Rendered Sign"
                width={500}
                height={400}
                className="rounded-lg shadow-xl mx-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex space-x-1">
            <div className="w-8 h-2 bg-red-500"></div>
            <div className="w-8 h-2 bg-yellow-400"></div>
            <div className="w-8 h-2 bg-green-500"></div>
            <div className="w-8 h-2 bg-black"></div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Services */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="text-2xl font-bold text-green-600">BATAL Illuminated Signage</div>
                <div className="text-2xl font-bold text-green-600">BATAL Vinyl & Frosted Sticker</div>
                <div className="text-2xl font-bold text-green-600 bg-gray-100 px-4 py-2 rounded-lg">BATAL Service</div>
                <div className="text-2xl font-bold text-green-600">BATAL Pylon Hoardings</div>
                <div className="text-2xl font-bold text-green-600">BATAL Wayfinding</div>
                <div className="text-2xl font-bold text-green-600">BATAL Vehicle Branding</div>
              </div>
            </div>

            {/* Right Image */}
            <div className="text-center">
              <Image
                src="/images/Group.png"
                alt="3D Rendered Signage"
                width={500}
                height={400}
                className="rounded-lg shadow-xl mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Products */}
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-3xl font-bold text-amber-800">1</span>
                  </div>
                  <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-3xl font-bold text-amber-800">2</span>
                  </div>
                  <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-3xl font-bold text-amber-800">3</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-3xl font-bold text-amber-800">4</span>
                  </div>
                  <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center mb-2 mx-auto">
                    <span className="text-3xl font-bold text-amber-800">5</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black text-white p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">313</div>
                    <div className="text-sm">Batal One</div>
                  </div>
                </div>
                <div className="bg-black text-white p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">505</div>
                    <div className="text-sm">Batal One</div>
                  </div>
                </div>
                <div className="bg-black text-white p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">KITCHEN</div>
                  </div>
                </div>
                <div className="bg-black text-white p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">← 500 - 507</div>
                    <div className="text-sm">→ 508 - 515</div>
                    <div className="text-lg font-bold mt-2">5F</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="text-right">
                <h2 className="text-3xl font-bold text-green-600 italic">Our 15 Years Trust</h2>
              </div>

              <div className="text-center space-y-4">
                <Image
                  src="/images/Asset 1 1 (1).svg"
                  alt="Bull Logo"
                  width={200}
                  height={200}
                  className="mx-auto"
                />

                <div className="flex justify-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Batal One Advertising</h3>
                  <p className="text-lg text-gray-700">Billboard Contracting Co. LLC</p>
                  <p className="text-gray-600">Office 103-466, Hamad M.A Al Bahar, Al Khabeesi - Dubai UAE</p>
                </div>

                <div className="flex justify-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">&copy; 2024 BATAL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
