import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function HorfunkPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Referenzprojekte']);

  const projects = [
    {
      title: "National Radio Audience Measurement",
      client: "Public Broadcasting Corporation",
      description: "Comprehensive audience measurement across all radio stations and programs",
      scope: "Continuous tracking with 25,000+ diary keepers nationwide",
      results: ["Enhanced program scheduling", "Improved advertiser confidence", "Detailed audience demographics"]
    },
    {
      title: "Podcast Listening Behavior Study",
      client: "Digital Media Agency",
      description: "Understanding podcast consumption patterns and advertising effectiveness",
      scope: "Multi-method approach with 15,000 podcast listeners",
      results: ["New advertising opportunities identified", "Optimal episode length recommendations", "Target audience insights"]
    },
    {
      title: "Radio Station Positioning Research",
      client: "Commercial Radio Group",
      description: "Market positioning analysis for competitive radio station portfolio",
      scope: "Regional market analysis across 8 major cities",
      results: ["Successful rebranding strategy", "Market share growth of 15%", "Enhanced listener loyalty"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hörfunk
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Radio and audio media research projects
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Audio Media Research Excellence
            </h2>
            <p className="text-lg text-gray-600">
              From traditional radio broadcasting to modern podcast platforms, our audio media 
              research provides deep insights into listening behaviors, audience preferences, 
              and advertising effectiveness across all audio formats.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📻</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Audience Measurement</h3>
              <p className="text-gray-600">Comprehensive radio audience tracking and analysis</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Podcast Analytics</h3>
              <p className="text-gray-600">Digital audio content consumption and engagement</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Content Optimization</h3>
              <p className="text-gray-600">Programming and content strategy development</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 text-center mb-8">
              Featured Audio Media Projects
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
              <h3 className="text-xl font-bold text-cmr-red-400 mb-6">Traditional Radio Research</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Audience measurement and ratings
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Program performance analysis
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Market share tracking
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Listener demographics profiling
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Radio advertising effectiveness
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-cmr-red-400 mb-6">Digital Audio Research</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Podcast consumption patterns
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Streaming audio behavior
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Voice technology adoption
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Audio advertising recall
                </li>
                <li className="flex items-start">
                  <span className="text-cmr-blue-400 mr-2">•</span>
                  Cross-platform audio usage
                </li>
              </ul>
            </div>
          </div>

          {/* Technology & Methods */}
          <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 mb-6 text-center">
              Advanced Audio Research Technology
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Mobile Tracking</h4>
                <p className="text-gray-600 text-sm">
                  Advanced mobile apps for real-time audio consumption tracking
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎚️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Audio Recognition</h4>
                <p className="text-gray-600 text-sm">
                  Automated content recognition and measurement technology
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Analytics Platform</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive data analysis and reporting dashboards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}