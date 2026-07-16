const issues = [
    "Primary CTA is unclear for first-time visitors",
    "Homepage lacks enough trust signals",
    "Value proposition takes too long to understand",
    "Pricing information is difficult to find",
    "Mobile experience needs improvement",
  ];
  
  const fixes = [
    "Rewrite CTA to explain the outcome",
    "Add testimonials and customer proof",
    "Clarify who the product is for",
  ];
  
  
  export default function ExampleReport() {
    return (
      <section className="py-24">
        <div className="container">
  
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#315a43]">
              Example Report
            </p>
  
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Not more data. Just what matters.
            </h2>
  
            <p className="mt-4 text-lg text-stone-600">
              Tripwires turns website analysis into clear decisions your team
              can actually act on.
            </p>
          </div>
  
  
          <div className="mt-12 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
  
            {/* Scores */}
  
            <div className="grid gap-6 md:grid-cols-4">
  
              <ScoreCard
                title="Overall"
                score="89"
              />
  
              <ScoreCard
                title="Clarity"
                score="92"
              />
  
              <ScoreCard
                title="Trust"
                score="78"
              />
  
              <ScoreCard
                title="Conversion"
                score="86"
              />
  
            </div>
  
  
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
  
  
              {/* Problems */}
  
              <div>
                <h3 className="text-xl font-semibold">
                  Top 5 Issues
                </h3>
  
  
                <div className="mt-5 space-y-3">
  
                  {issues.map((issue) => (
                    <div
                      key={issue}
                      className="rounded-xl bg-stone-50 p-4 text-sm text-stone-700"
                    >
                      {issue}
                    </div>
                  ))}
  
                </div>
              </div>
  
  
  
              {/* Fixes */}
  
              <div>
                <h3 className="text-xl font-semibold">
                  Fix First
                </h3>
  
  
                <div className="mt-5 space-y-3">
  
                  {fixes.map((fix) => (
                    <div
                      key={fix}
                      className="rounded-xl border border-stone-200 p-4 text-sm"
                    >
                      ✓ {fix}
                    </div>
                  ))}
  
                </div>
  
              </div>
  
  
            </div>
  
  
          </div>
  
  
        </div>
      </section>
    );
  }
  
  
  
  function ScoreCard({
    title,
    score,
  }: {
    title: string;
    score: string;
  }) {
    return (
      <div className="rounded-2xl border border-stone-200 p-5">
  
        <p className="text-sm text-stone-500">
          {title}
        </p>
  
        <p className="mt-2 text-4xl font-semibold">
          {score}
          <span className="text-lg text-stone-400">
            /100
          </span>
        </p>
  
      </div>
    );
  }