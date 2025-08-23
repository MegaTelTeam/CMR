import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function SoFindenSieUnsPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Contact']);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            So finden Sie uns
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Location and directions to our offices
          </p>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Office */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-cmr-red-400 mb-8">
                Our Main Office
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Address</h3>
                      <p className="text-gray-600">
                        C.M.R. Gesellschaft für Kommunikations- und Medienforschung mbH<br />
                        Musterstraße 123<br />
                        12345 Berlin, Germany
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Details</h3>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>Phone:</strong> +49 (0) 30 123456789</p>
                        <p><strong>Fax:</strong> +49 (0) 30 123456790</p>
                        <p><strong>Email:</strong> <a href="mailto:info@cmr.de" className="text-cmr-blue-400 hover:underline">info@cmr.de</a></p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Office Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>Monday - Thursday:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong>Friday:</strong> 9:00 AM - 5:00 PM</p>
                        <p><strong>Saturday - Sunday:</strong> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Placeholder for map */}
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-4">🗺️</div>
                      <p className="text-lg font-semibold mb-2">Interactive Map</p>
                      <p className="text-sm">Map integration will be implemented here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-cmr-red-400 mb-6">
                  Public Transportation
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">U-Bahn (Subway)</h4>
                      <p className="text-gray-600 text-sm">Line U6: Station Stadtmitte (5 min walk)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">S-Bahn (Regional Train)</h4>
                      <p className="text-gray-600 text-sm">Lines S1, S2: Station Friedrichstraße (8 min walk)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Bus</h4>
                      <p className="text-gray-600 text-sm">Lines 100, 200: Stop Unter den Linden (3 min walk)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Tram</h4>
                      <p className="text-gray-600 text-sm">Line M1: Stop Hackescher Markt (10 min walk)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-cmr-red-400 mb-6">
                  By Car & Parking
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">From Highway A100</h4>
                    <p className="text-gray-600 text-sm">
                      Take exit &quot;Mitte&quot; and follow signs to city center. 
                      Continue straight for 2km, turn right onto Musterstraße.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Parking Options</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Street parking available (2 hours max)</li>
                      <li>• Parking garage &quot;Mitte Center&quot; (200m away)</li>
                      <li>• Underground parking &quot;Central Plaza&quot; (150m away)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold text-yellow-800 mb-1">Note</h4>
                    <p className="text-yellow-700 text-sm">
                      We recommend using public transportation due to limited parking in the city center.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cmr-red-400 mb-6">
                Additional Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Accessibility</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Wheelchair accessible entrance
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Elevator to all floors
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Accessible restrooms
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Reserved parking spaces
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Nearby Amenities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Restaurants and cafes within 200m</li>
                    <li>• ATM and banks nearby</li>
                    <li>• Hotel accommodations in the area</li>
                    <li>• Shopping centers within walking distance</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center">
                  For specific directions or if you need assistance finding our office, 
                  please don&apos;t hesitate to <a href="tel:+493012345678" className="text-cmr-blue-400 hover:underline">call us</a> 
                  or <a href="mailto:info@cmr.de" className="text-cmr-blue-400 hover:underline">send an email</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}