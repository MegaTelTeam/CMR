import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function InstrumentePage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Kompetenz']);

  const toolCategories = [
    {
      category: "Survey Tools",
      description: "Professional survey platforms and questionnaire tools",
      tools: [
        "Online survey platforms",
        "Mobile survey applications", 
        "CATI (Computer Assisted Telephone Interviewing)",
        "CAPI (Computer Assisted Personal Interviewing)",
        "Paper-based questionnaires"
      ],
      icon: "📝"
    },
    {
      category: "Analytics Software",
      description: "Advanced statistical and data analysis tools",
      tools: [
        "SPSS Statistical Software",
        "R Programming Environment",
        "Python Data Science Stack",
        "SAS Analytics",
        "Tableau for visualization"
      ],
      icon: "📈"
    },
    {
      category: "Qualitative Tools",
      description: "Tools for qualitative research and analysis",
      tools: [
        "NVivo qualitative analysis",
        "Video recording equipment",
        "Digital voice recorders",
        "Online focus group platforms",
        "Ethnography mobile apps"
      ],
      icon: "🎥"
    },
    {
      category: "Digital Research Tools",
      description: "Modern digital research and monitoring tools",
      tools: [
        "Social media monitoring",
        "Web scraping tools",
        "Online behavioral tracking",
        "A/B testing platforms",
        "Heat mapping software"
      ],
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Instrumente
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Tools and instruments for comprehensive market research
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
                Research Tools & Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We utilize cutting-edge tools and technologies to ensure precise data collection, 
                analysis, and reporting for all our research projects.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {toolCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-cmr-red-400">
                        {category.category}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-gray-600">
                        • {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technology Integration */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-cmr-red-400 mb-6">
                Technology Integration & Capabilities
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Data Integration</h4>
                  <p className="text-gray-600 text-sm">
                    Seamless integration of multiple data sources and formats
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Real-time Processing</h4>
                  <p className="text-gray-600 text-sm">
                    Live data processing and real-time insight generation
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Data Security</h4>
                  <p className="text-gray-600 text-sm">
                    Enterprise-grade security and data protection protocols
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Solutions */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cmr-red-400 mb-4">
                  Custom Tool Development
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  We also develop custom research instruments and tools tailored to specific 
                  project requirements, ensuring optimal data collection and analysis for unique research challenges.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                  <span>• Bespoke survey tools</span>
                  <span>• Custom analytics dashboards</span>
                  <span>• Specialized data collection apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}