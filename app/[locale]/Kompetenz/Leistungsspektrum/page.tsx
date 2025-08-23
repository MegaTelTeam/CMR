import initTranslations from '@/app/i18n';

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function LeistungsspektrumPage({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ['Kompetenz']);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cmr-blue-400 to-cmr-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Leistungsspektrum
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Our comprehensive range of services and solutions
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-cmr-red-400 mb-6">
                Service Portfolio
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                This page will showcase our complete range of services, from market analysis 
                to consumer insights, demonstrating the breadth and depth of our capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-cmr-red-400 mb-4">
                  Market Research Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Consumer behavior analysis</li>
                  <li>• Market sizing and segmentation</li>
                  <li>• Competitive intelligence</li>
                  <li>• Brand positioning research</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-cmr-red-400 mb-4">
                  Data Analysis & Insights
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Statistical analysis</li>
                  <li>• Predictive modeling</li>
                  <li>• Trend analysis</li>
                  <li>• Custom reporting</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-cmr-red-400 mb-4">
                  Consulting Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Strategic planning support</li>
                  <li>• Market entry strategies</li>
                  <li>• Business intelligence</li>
                  <li>• Decision support systems</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-cmr-red-400 mb-4">
                  Specialized Solutions
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Industry-specific research</li>
                  <li>• Custom methodologies</li>
                  <li>• International studies</li>
                  <li>• Long-term partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}