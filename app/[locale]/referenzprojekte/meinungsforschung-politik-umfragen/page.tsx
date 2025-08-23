import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function MeinungsforschungPolitikUmfragenPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Referenzprojekte']);

  const projects = [
    {
      title: "Federal Election Polling Program",
      client: "Major German Media Consortium",
      description: "Comprehensive pre-election polling and exit poll analysis for federal elections",
      scope: "Multi-wave polling with 45,000+ respondents across all federal states",
      results: ["Accurate election predictions", "Detailed voter behavior analysis", "Real-time election night coverage"]
    },
    {
      title: "Public Policy Acceptance Study",
      client: "Government Ministry",
      description: "Assessment of public opinion on major policy initiatives and reforms",
      scope: "Longitudinal study tracking opinion changes over 18 months",
      results: ["Policy communication optimization", "Stakeholder engagement strategy", "Implementation timeline recommendations"]
    },
    {
      title: "Social Attitudes and Values Research",
      client: "Social Research Foundation",
      description: "Long-term tracking of societal attitudes, values, and demographic changes",
      scope: "Annual representative survey with 10,000+ participants since 2010",
      results: ["Social trend identification", "Generational analysis insights", "Policy impact assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Meinungsforschung | Politik-Umfragen
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Opinion research and political polling expertise
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
              Political and Social Research Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Decades of expertise in political polling, public opinion research, and social attitude studies. 
              We provide accurate, reliable insights for media organizations, political parties, 
              government institutions, and civil society organizations.
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-lg font-semibold text-cmr-red-400 mb-3">Election Polling</h3>
              <p className="text-gray-600 text-sm">Pre-election surveys, exit polls, and voter behavior analysis</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-cmr-red-400 mb-3">Public Opinion</h3>
              <p className="text-gray-600 text-sm">Policy acceptance, government approval, and issue tracking</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-cmr-red-400 mb-3">Social Attitudes</h3>
              <p className="text-gray-600 text-sm">Values research, lifestyle studies, and social change analysis</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-cmr-red-400 mb-3">International Studies</h3>
              <p className="text-gray-600 text-sm">Cross-national research and comparative political analysis</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 text-center mb-8">
              Featured Political Research Projects
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

          {/* Methodology & Standards */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 mb-8 text-center">
              Research Standards & Methodology
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Quality Standards</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    ADM (German Market Research Association) certified
                  </li>
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    ISO 20252 quality standard compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    ESOMAR international guidelines adherence
                  </li>
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    Independent data quality audits
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Sampling Methods</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    Probability-based representative sampling
                  </li>
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    Multi-stage stratified sampling designs
                  </li>
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    Quota sampling for specific demographics
                  </li>
                  <li className="flex items-start">
                    <span className="text-cmr-blue-400 mr-2">•</span>
                    Real-time sample monitoring and adjustments
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">CATI Interviewing</h4>
                <p className="text-gray-600 text-sm">
                  Computer-assisted telephone interviewing with trained professionals
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Online Panels</h4>
                <p className="text-gray-600 text-sm">
                  Proprietary online panels with verified participant profiles
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Mobile Research</h4>
                <p className="text-gray-600 text-sm">
                  Mobile-optimized surveys and real-time polling capabilities
                </p>
              </div>
            </div>
          </div>

          {/* Accuracy Track Record */}
          <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cmr-red-400 mb-6 text-center">
              Track Record of Accuracy
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cmr-blue-400 mb-2">95%+</div>
                <div className="text-gray-600">Prediction Accuracy</div>
                <div className="text-sm text-gray-500">Last 5 federal elections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cmr-blue-400 mb-2">1000+</div>
                <div className="text-gray-600">Political Studies</div>
                <div className="text-sm text-gray-500">Completed since 1995</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cmr-blue-400 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
                <div className="text-sm text-gray-500">In political research</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cmr-blue-400 mb-2">50+</div>
                <div className="text-gray-600">Media Partners</div>
                <div className="text-sm text-gray-500">Regular collaborations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}