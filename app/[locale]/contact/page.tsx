import initTranslations from '@/app/i18n';
import Link from 'next/link';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function ContactPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Contact']);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kontakt
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Get in touch with our team of experts
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-cmr-red-400 mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cmr-blue-400 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                      <p className="text-gray-600">
                        C.M.R. Gesellschaft für Kommunikations- und Medienforschung mbH<br />
                        Musterstraße 123<br />
                        12345 Berlin, Germany
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cmr-blue-400 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+49 (0) 30 123456789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cmr-blue-400 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@cmr.de" className="text-cmr-blue-400 hover:underline">
                          info@cmr.de
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cmr-blue-400 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                  <Link href={`/${locale}/contact/so-finden-sie-uns`}>
                    <button className="bg-cmr-blue-400 text-white px-6 py-3 rounded-lg hover:bg-cmr-blue-500 transition-colors">
                      Find Our Location
                    </button>
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-cmr-red-400 mb-8">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cmr-blue-400 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cmr-blue-400 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cmr-blue-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cmr-blue-400 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cmr-blue-400 focus:border-transparent"
                      placeholder="Subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cmr-blue-400 focus:border-transparent"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the processing of my data in accordance with the 
                      <a href="#" className="text-cmr-blue-400 hover:underline ml-1">privacy policy</a> *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-8">
              How Can We Help You?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Projects</h3>
                <p className="text-gray-600">
                  Custom market research solutions tailored to your specific business needs
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Consulting Services</h3>
                <p className="text-gray-600">
                  Strategic consulting based on comprehensive market insights and analysis
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Partnerships</h3>
                <p className="text-gray-600">
                  Long-term partnerships for ongoing research and strategic support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}