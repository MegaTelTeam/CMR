import initTranslations from '@/app/i18n';
import Link from 'next/link';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function ReferenzprojektePage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Referenzprojekte']);

  const projectCategories = [
    {
      title: "Printmedien",
      description: "Print media research and analysis projects",
      link: `/Kompetenz/referenzprojekte/printmedien`,
      icon: "📰",
      examples: ["Magazine readership studies", "Newspaper circulation analysis", "Print advertising effectiveness"]
    },
    {
      title: "Hörfunk", 
      description: "Radio and audio media research projects",
      link: `/Kompetenz/referenzprojekte/horfunk`,
      icon: "📻",
      examples: ["Radio audience measurement", "Audio content analysis", "Podcast listening behavior"]
    },
    {
      title: "Investitionsgüter | IT | Telekommunikation",
      description: "Investment goods, IT and telecommunications research",
      link: `/Kompetenz/referenzprojekte/investitionsguter`,
      icon: "💼",
      examples: ["B2B technology adoption", "Enterprise software studies", "Telecom market analysis"]
    },
    {
      title: "Handel | Gastronomie",
      description: "Retail and gastronomy industry research",
      link: `/Kompetenz/referenzprojekte/handel-gastronomie`,
      icon: "🛍️",
      examples: ["Consumer shopping behavior", "Restaurant preference studies", "Retail trend analysis"]
    },
    {
      title: "Meinungsforschung | Politik-Umfragen",
      description: "Opinion research and political polling",
      link: `/Kompetenz/referenzprojekte/meinungsforschung-politik-umfragen`,
      icon: "🗳️",
      examples: ["Political opinion polling", "Public policy research", "Social attitude studies"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Referenzprojekte
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Showcasing our expertise across diverse industries and research domains
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Our Project Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive collection of research projects across multiple industries. 
              Each category represents our specialized expertise and successful project delivery.
            </p>
          </div>

          {/* Project Categories */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectCategories.map((category, index) => (
              <Link key={index} href={`/${locale}${category.link}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                  <div className="flex items-start mb-4">
                    <span className="text-4xl mr-4 flex-shrink-0">{category.icon}</span>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-cmr-red-400 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Example Projects:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-cmr-blue-400 font-semibold hover:text-cmr-blue-500">
                      View Projects →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-8">
              Project Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cmr-blue-400 mb-2">500+</div>
                <div className="text-gray-600">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cmr-blue-400 mb-2">15+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cmr-blue-400 mb-2">25</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cmr-blue-400 mb-2">200+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Start Your Project Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to benefit from our proven expertise? Contact us to discuss 
              your research needs and discover how we can help achieve your objectives.
            </p>
            <Link href={`/${locale}/contact`}>
              <button className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}