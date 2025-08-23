import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function MethodenPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Kompetenz']);

  const methodologies = [
    {
      category: "Quantitative Methods",
      methods: [
        "Surveys and questionnaires",
        "Statistical analysis",
        "Data mining and analytics",
        "Predictive modeling",
        "Market measurement"
      ],
      icon: "📊"
    },
    {
      category: "Qualitative Methods", 
      methods: [
        "In-depth interviews",
        "Focus groups",
        "Ethnographic research",
        "Observational studies",
        "Content analysis"
      ],
      icon: "🎤"
    },
    {
      category: "Digital Methods",
      methods: [
        "Online panels",
        "Social media analytics",
        "Web analytics",
        "Mobile research",
        "Digital ethnography"
      ],
      icon: "💻"
    },
    {
      category: "Mixed Methods",
      methods: [
        "Sequential explanatory design",
        "Concurrent triangulation",
        "Exploratory sequential design",
        "Embedded design",
        "Transformative framework"
      ],
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Methoden
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Research methodologies and analytical approaches
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
                Our Research Methodologies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We employ a comprehensive range of research methodologies to ensure 
                accurate, reliable, and actionable insights for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {methodologies.map((methodology, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{methodology.icon}</span>
                    <h3 className="text-xl font-semibold text-cmr-red-400">
                      {methodology.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {methodology.methods.map((method, methodIndex) => (
                      <li key={methodIndex} className="text-gray-600">
                        • {method}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Methodology Selection Process */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cmr-red-400 mb-6">
                Our Methodology Selection Process
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">1. Objective Definition</h4>
                  <p className="text-gray-600 text-sm">
                    Clear understanding of research goals and business objectives
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">2. Method Selection</h4>
                  <p className="text-gray-600 text-sm">
                    Choosing the optimal methodology based on research requirements
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">3. Implementation</h4>
                  <p className="text-gray-600 text-sm">
                    Rigorous execution with quality control and validation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}