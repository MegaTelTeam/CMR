import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function InvestitionsguterPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Referenzprojekte']);

  const projects = [
    {
      title: "Enterprise Software Adoption Study",
      client: "Leading IT Solutions Provider",
      description: "Comprehensive analysis of enterprise software adoption patterns in German B2B market",
      scope: "Cross-industry study with 2,500+ decision makers",
      results: ["New market segments identified", "Product development insights", "Go-to-market strategy optimization"]
    },
    {
      title: "Telecommunications Infrastructure Research",
      client: "Major Telecom Equipment Manufacturer",
      description: "Market analysis for 5G infrastructure deployment and investment decisions",
      scope: "Multi-country study covering DACH region",
      results: ["Strategic investment recommendations", "Competitive positioning insights", "Technology roadmap validation"]
    },
    {
      title: "Industrial IoT Market Assessment",
      client: "German Manufacturing Consortium",
      description: "Market potential analysis for Industrial Internet of Things solutions",
      scope: "Comprehensive B2B research across manufacturing sectors",
      results: ["Market size quantification", "Adoption barrier identification", "Value proposition development"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Investitionsgüter | IT | Telekommunikation
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Investment goods, IT and telecommunications research
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              B2B Technology Market Research
            </h2>
            <p className="text-lg text-gray-600">
              Specialized research for complex B2B markets including investment goods, 
              information technology, and telecommunications. We provide strategic insights 
              for technology companies, manufacturers, and service providers.
            </p>
          </div>

          {/* Market Sectors */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Investment Goods</h3>
              <p className="text-gray-600">Industrial equipment, machinery, and capital goods research</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Information Technology</h3>
              <p className="text-gray-600">Enterprise software, cloud services, and IT infrastructure</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Telecommunications</h3>
              <p className="text-gray-600">Network infrastructure, communication technologies</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 text-center mb-8">
              Featured B2B Technology Projects
            </h3>
            
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-cmr-red-400 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-3">
                      <strong>Client:</strong> {project.client}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Scope:</strong> {project.scope}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Key Results:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex}>• {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Specializations */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-cmr-red-400 mb-6">Research Specializations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Technology adoption analysis
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  B2B purchase decision processes
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Market sizing and segmentation
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Competitive intelligence
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Innovation and R&D research
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Digital transformation studies
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-cmr-red-400 mb-6">Target Industries</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Manufacturing and industrial automation
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Enterprise software and cloud services
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Telecommunications infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Cybersecurity and data protection
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  IoT and connected devices
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Artificial intelligence and machine learning
                </li>
              </ul>
            </div>
          </div>

          {/* Methodology Approach */}
          <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 mb-6 text-center">
              B2B Research Methodology
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Stakeholder Mapping</h4>
                <p className="text-gray-600 text-sm">
                  Identification of key decision makers and influencers
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Interviews</h4>
                <p className="text-gray-600 text-sm">
                  In-depth interviews with industry experts and practitioners
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Quantitative Surveys</h4>
                <p className="text-gray-600 text-sm">
                  Large-scale surveys for market quantification
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Market Intelligence</h4>
                <p className="text-gray-600 text-sm">
                  Secondary research and competitive analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}