import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function PrintmedienPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Referenzprojekte']);

  const projects = [
    {
      title: "National Magazine Readership Study",
      client: "Leading German Publishing House",
      description: "Comprehensive analysis of readership patterns across multiple magazine titles",
      scope: "12-month longitudinal study with 50,000+ respondents",
      results: ["25% increase in targeted advertising efficiency", "Optimized content strategy", "Enhanced reader engagement metrics"]
    },
    {
      title: "Regional Newspaper Circulation Analysis",
      client: "Regional Media Group",
      description: "Market penetration and competitive analysis for regional newspaper portfolio", 
      scope: "Multi-city research covering 15 regional markets",
      results: ["Identified growth opportunities", "Competitive positioning insights", "Distribution optimization recommendations"]
    },
    {
      title: "Print Advertising Effectiveness Study",
      client: "Automotive Industry Client",
      description: "Impact measurement of print advertising campaigns across automotive magazines",
      scope: "Cross-media effectiveness analysis with control groups",
      results: ["ROI improvement of 30%", "Optimal media mix recommendations", "Enhanced campaign targeting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Printmedien
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Print media research and analysis projects
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Print Media Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Our extensive experience in print media research spans from traditional newspapers 
              and magazines to specialized trade publications, delivering actionable insights 
              for publishers, advertisers, and media agencies.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Readership Analysis</h3>
              <p className="text-gray-600">Comprehensive reader profiling and behavior analysis</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Circulation Studies</h3>
              <p className="text-gray-600">Market penetration and distribution optimization</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-cmr-red-400 mb-3">Ad Effectiveness</h3>
              <p className="text-gray-600">Print advertising impact and ROI measurement</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 text-center mb-8">
              Featured Print Media Projects
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

          {/* Methodologies */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 mb-6 text-center">
              Our Print Media Research Methodologies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Quantitative Approaches</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Large-scale readership surveys</li>
                  <li>• Circulation tracking and analysis</li>
                  <li>• Cross-media consumption studies</li>
                  <li>• Advertising recall measurements</li>
                  <li>• Market penetration analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Qualitative Methods</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reader focus groups</li>
                  <li>• In-depth reader interviews</li>
                  <li>• Content analysis</li>
                  <li>• Editorial evaluation studies</li>
                  <li>• Brand perception research</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}