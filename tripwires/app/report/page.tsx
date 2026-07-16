import TopIssues from "@/components/report/TopIssues";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import ScreenshotAnalysis from "@/components/report/ScreenshotAnalysis";
import AnalysisSection from "@/components/report/AnalysisSection";


async function getReport(url: string) {

  const response = await fetch(
    "http://localhost:3000/api/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
      cache: "no-store",
    }
  );


  return response.json();

}



export default async function ReportPage({
  searchParams,
}: {
  searchParams: Promise<{ url?: string }>;
}) {


  const params = await searchParams;


  const website =
    params.url || "example.com";


    type Report = {
      websiteData: {
        url: string;
        title: string;
        screenshot: string;
      };
    
      analysis: {
        executiveSummary: string;
    
        scores: {
          overall: number;
          trust: number;
          clarity: number;
          conversion: number;
          ux: number;
        };
    
        topIssues: {
          title: string;
          finding: string;
          why: string;
          fix: string;
          impact: string;
        }[];
      };
    };
    
    const report = (await getReport(website)) as Report;


  return (

    <main className="min-h-screen bg-[#f8f7f4]">


      <div className="container py-16">


        <p className="text-sm font-medium text-[#315a43]">
          Website Report
        </p>


        <h1 className="mt-3 text-5xl font-semibold">
          {website} Analysis
        </h1>


        <p className="mt-4 text-lg text-stone-600">
          AI analysis of your website experience.
        </p>




        {/* Overall Score */}

        <div className="mt-12 rounded-3xl border border-stone-200 bg-white p-8">


          <p className="text-sm text-stone-500">
            Overall Score
          </p>


          <div className="mt-3 text-7xl font-semibold">

          {report.analysis.scores.overall}
            <span className="text-2xl text-stone-400">
              /100
            </span>

          </div>


          <p className="mt-4 text-stone-600">
          {report.analysis.executiveSummary}          </p>


        </div>




        {/* Scores */}


        <div className="mt-8 grid gap-6 md:grid-cols-4">


        {Object.entries(report.analysis.scores as Record<string, number>).map(
            ([key, value]) => (

              <div
                key={key}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >

                <p className="text-sm capitalize text-stone-500">
                  {key}
                </p>


                <p className="mt-3 text-4xl font-semibold">
                  {value}/100
                </p>


              </div>

            )
          )}


        </div>



        <ExecutiveSummary />


        <ScreenshotAnalysis />


        <AnalysisSection />


        <TopIssues />


      </div>


    </main>

  );

}