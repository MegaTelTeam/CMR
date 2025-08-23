import initTranslations from '@/app/i18n';
import Link from 'next/link';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function KompetenzPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Kompetenz']);

  const kompetenzSections = [
    {
      title: "Leistungsspektrum",
      description: "Our comprehensive range of services and capabilities",
      link: `/Kompetenz/Leistungsspektrum`,
      icon: "📊"
    },
    {
      title: "Themenschwerpunkte", 
      description: "Key focus areas and specialized expertise",
      link: `/Kompetenz/Themenschwerpunkte`,
      icon: "🎯"
    },
    {
      title: "Methoden",
      description: "Research methodologies and analytical approaches",
      link: `/Kompetenz/Methoden`,
      icon: "🔬"
    },
    {
      title: "Instrumente",
      description: "Tools and instruments for market research",
      link: `/Kompetenz/instrumente`,
      icon: "🛠️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kompetenz
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Our expertise and capabilities in market research
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Our Core Competencies
            </h2>
            <p className="text-lg text-gray-600">
              Discover our comprehensive expertise in market research, methodological approaches, 
              and specialized tools that drive insights and business success.
            </p>
          </div>

          {/* Competency Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {kompetenzSections.map((section, index) => (
              <Link key={index} href={`/${locale}${section.link}`}>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{section.icon}</div>
                    <h3 className="text-2xl font-bold text-cmr-red-400 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.description}
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center text-cmr-blue-400 font-semibold hover:text-cmr-blue-500">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to learn more about how our expertise can help your business 
              make informed decisions through comprehensive market research.
            </p>
            <Link href={`/${locale}/contact`}>
              <button className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}