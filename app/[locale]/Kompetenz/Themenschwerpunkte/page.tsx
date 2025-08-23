import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function ThemenschwerpunktePage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Kompetenz']);

  const themes = [
    {
      title: "Consumer Insights",
      description: "Deep understanding of consumer behavior and preferences",
      icon: "👥"
    },
    {
      title: "Market Dynamics",
      description: "Analysis of market trends and competitive landscapes",
      icon: "📈"
    },
    {
      title: "Brand Research", 
      description: "Brand perception, positioning, and equity studies",
      icon: "🏷️"
    },
    {
      title: "Digital Transformation",
      description: "Research in digital markets and online consumer behavior",
      icon: "💻"
    },
    {
      title: "Innovation Research",
      description: "Product development and innovation opportunity assessment",
      icon: "💡"
    },
    {
      title: "Sustainability Studies",
      description: "Environmental and social responsibility research",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Themenschwerpunkte
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Our key focus areas and specialized expertise
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
                Our Research Focus Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in key market research themes that drive business success. 
                Our expertise spans across various industries and research domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {themes.map((theme, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{theme.icon}</div>
                    <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">
                      {theme.title}
                    </h3>
                    <p className="text-gray-600">
                      {theme.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cmr-red-400 mb-6">
                Cross-Industry Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Industries We Serve
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Media & Communications</li>
                    <li>• Technology & IT</li>
                    <li>• Retail & Consumer Goods</li>
                    <li>• Financial Services</li>
                    <li>• Healthcare & Pharmaceuticals</li>
                    <li>• Automotive & Transportation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Research Approaches
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Quantitative research methodologies</li>
                    <li>• Qualitative insights and ethnography</li>
                    <li>• Mixed-method approaches</li>
                    <li>• Longitudinal studies</li>
                    <li>• Real-time market monitoring</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}