const analyses = [
    {
      title: "Trust Analysis",
      score: 72,
      finding:
        "The website explains the product well but lacks strong trust signals.",
      why:
        "New visitors need evidence before they feel comfortable taking action.",
      action:
        "Add testimonials, customer logos, security information, and company details.",
    },
    {
      title: "CTA Analysis",
      score: 84,
      finding:
        "The primary CTA exists but does not clearly communicate the outcome.",
      why:
        "Visitors decide within seconds whether they understand the next step.",
      action:
        "Use action-focused language that explains the benefit.",
    },
    {
      title: "Hero Section Review",
      score: 91,
      finding:
        "The headline is clear but could communicate a stronger customer benefit.",
      why:
        "The hero section determines whether visitors continue exploring.",
      action:
        "Make the headline problem-focused and outcome-driven.",
    },
    {
      title: "Navigation Review",
      score: 88,
      finding:
        "Navigation is usable but important pages could be easier to find.",
      why:
        "Confusing navigation creates unnecessary visitor friction.",
      action:
        "Highlight pricing, contact, and key product pages.",
    },
    {
      title: "Mobile Experience",
      score: 79,
      finding:
        "The mobile layout works but some important content appears too low.",
      why:
        "Many visitors will judge your website from mobile first.",
      action:
        "Prioritize important information above the fold.",
    },
  ];
  
  
  export default function AnalysisSection() {
    return (
      <section className="mt-10">
  
        <div className="rounded-3xl border border-stone-200 bg-white p-8">
  
  
          <p className="text-sm font-medium text-[#315a43]">
            Detailed Analysis
          </p>
  
  
          <h2 className="mt-2 text-3xl font-semibold">
            Understand every recommendation
          </h2>
  
  
  
          <div className="mt-8 space-y-6">
  
  
            {analyses.map((item) => (
  
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200 p-6"
              >
  
                <div className="flex items-center justify-between">
  
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
  
  
                  <span className="rounded-full bg-[#315a43]/10 px-4 py-1 text-sm font-medium text-[#315a43]">
                    {item.score}/100
                  </span>
  
                </div>
  
  
  
                <div className="mt-6 grid gap-5 md:grid-cols-3">
  
  
                  <Info
                    title="What we found"
                    text={item.finding}
                  />
  
  
                  <Info
                    title="Why it matters"
                    text={item.why}
                  />
  
  
                  <Info
                    title="Recommended action"
                    text={item.action}
                  />
  
  
                </div>
  
  
              </div>
  
            ))}
  
  
          </div>
  
  
        </div>
  
  
      </section>
    );
  }
  
  
  
  function Info({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) {
    return (
      <div className="rounded-xl bg-stone-50 p-4">
  
        <p className="text-sm font-medium">
          {title}
        </p>
  
  
        <p className="mt-2 text-sm leading-6 text-stone-600">
          {text}
        </p>
  
      </div>
    );
  }