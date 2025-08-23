import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function HandelGastronomiePage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Referenzprojekte']);

  const projects = [
    {
      title: "National Retail Consumer Behavior Study",
      client: "Leading German Retail Chain",
      description: "Comprehensive analysis of shopping behaviors and preferences across multiple retail formats",
      scope: "12-month study with 35,000+ consumers across 50 cities",
      results: ["Store layout optimization", "Product assortment insights", "Customer journey improvements"]
    },
    {
      title: "Restaurant Industry Recovery Research",
      client: "Gastronomy Association",
      description: "Post-pandemic recovery analysis and future dining trend identification",
      scope: "Multi-stakeholder research including consumers, operators, and suppliers",
      results: ["Recovery strategy development", "New service model recommendations", "Digital transformation roadmap"]
    },
    {
      title: "E-commerce vs. Physical Retail Study",
      client: "Multi-channel Retailer",
      description: "Omnichannel shopping behavior analysis and integration opportunities",
      scope: "Longitudinal study tracking 15,000 customers across all channels",
      results: ["Channel optimization strategy", "Inventory management improvements", "Customer experience enhancement"]
    }
  ];

  const retailSegments = [
    { name: "Fashion & Apparel", icon: "👗" },
    { name: "Food & Grocery", icon: "🛒" },
    { name: "Electronics & Technology", icon: "📱" },
    { name: "Home & Garden", icon: "🏡" },
    { name: "Health & Beauty", icon: "💄" },
    { name: "Sports & Leisure", icon: "⚽" }
  ];

  const gastronomySegments = [
    { name: "Fast Food", icon: "🍔" },
    { name: "Casual Dining", icon: "🍽️" },
    { name: "Fine Dining", icon: "🥂" },
    { name: "Cafes & Bakeries", icon: "☕" },
    { name: "Bars & Pubs", icon: "🍺" },
    { name: "Food Delivery", icon: "🚚" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Handel | Gastronomie
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Retail and gastronomy industry research
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Consumer-Centric Market Research
            </h2>
            <p className="text-lg text-gray-600">
              Deep insights into consumer behavior, shopping patterns, and dining preferences. 
              Our research helps retailers and restaurants optimize their offerings, 
              improve customer experience, and drive business growth.
            </p>
          </div>

          {/* Industry Focus Areas */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cmr-red-400 mb-6 text-center">
                Retail Segments
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {retailSegments.map((segment, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl mr-3">{segment.icon}</span>
                    <span className="text-gray-700">{segment.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-cmr-red-400 mb-6 text-center">
                Gastronomy Segments
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {gastronomySegments.map((segment, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl mr-3">{segment.icon}</span>
                    <span className="text-gray-700">{segment.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 text-center mb-8">
              Featured Retail & Gastronomy Projects
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

          {/* Research Capabilities */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-cmr-red-400 mb-6">Retail Research Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Consumer shopping behavior analysis
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Store performance evaluation
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Product assortment optimization
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Price sensitivity research
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Customer loyalty programs evaluation
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Omnichannel experience research
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-cmr-red-400 mb-6">Gastronomy Research Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Dining preference studies
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Menu development research
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Service quality evaluation
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Location and concept testing
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Food delivery market analysis
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Sustainability and health trends
                </li>
              </ul>
            </div>
          </div>

          {/* Consumer Insights */}
          <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 mb-6 text-center">
              Consumer Insight Methodologies
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Focus Groups</h4>
                <p className="text-gray-600 text-sm">
                  In-depth consumer discussions and preference exploration
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Mystery Shopping</h4>
                <p className="text-gray-600 text-sm">
                  Objective evaluation of service quality and experience
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Mobile Ethnography</h4>
                <p className="text-gray-600 text-sm">
                  Real-time insights through mobile research platforms
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Transaction Analysis</h4>
                <p className="text-gray-600 text-sm">
                  Data-driven insights from purchase behavior patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}