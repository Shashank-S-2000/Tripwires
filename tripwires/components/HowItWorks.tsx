const steps = [
    {
      number: "01",
      title: "Enter URL",
      description:
        "Add your website address and start a complete first-impression analysis.",
    },
    {
      number: "02",
      title: "AI Visits Website",
      description:
        "Tripwires analyzes your pages like a real visitor — reviewing clarity, trust, UX, and conversion signals.",
    },
    {
      number: "03",
      title: "Receive Actionable Report",
      description:
        "Get prioritized problems, explanations, and fixes that improve customer experience.",
    },
  ];
  
  
  export default function HowItWorks() {
    return (
      <section id="how-it-works" className="py-24">
        <div className="container">
  
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#315a43]">
              How It Works
            </p>
  
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              From website to insights in minutes.
            </h2>
  
            <p className="mt-4 text-lg text-stone-600">
              No dashboards full of confusing metrics. Just the problems that
              matter and what to fix first.
            </p>
          </div>
  
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
  
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-stone-200 bg-white p-8"
              >
  
                <div className="text-sm font-medium text-[#315a43]">
                  {step.number}
                </div>
  
  
                <h3 className="mt-5 text-xl font-semibold">
                  {step.title}
                </h3>
  
  
                <p className="mt-3 leading-7 text-stone-600">
                  {step.description}
                </p>
  
  
              </div>
            ))}
  
          </div>
  
  
        </div>
      </section>
    );
  }