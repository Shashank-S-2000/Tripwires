const features = [
    {
      title: "AI Website Review",
      description:
        "Tripwires views your website like a first-time visitor and identifies what helps or hurts conversions.",
    },
    {
      title: "Screenshot Analysis",
      description:
        "AI examines desktop and mobile screenshots to find visual issues and missed opportunities.",
    },
    {
      title: "CTA Review",
      description:
        "Understand whether your buttons, wording, and placement guide visitors toward action.",
    },
    {
      title: "Trust Analysis",
      description:
        "Discover missing trust signals like testimonials, proof, security, and company information.",
    },
    {
      title: "Navigation Review",
      description:
        "Find confusing menus, unclear paths, and friction points that make visitors leave.",
    },
  ];
  
  export default function TrustSection() {
    return (
      <section className="py-24">
        <div className="container">
  
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#315a43]">
              Website Intelligence
            </p>
  
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Understand your website like your customers do.
            </h2>
  
            <p className="mt-4 text-lg text-stone-600">
              Tripwires combines AI analysis and UX thinking to reveal the
              problems that stop visitors from becoming customers.
            </p>
          </div>
  
  
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
  
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
  
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#315a43]/10 text-[#315a43]">
                  ✓
                </div>
  
  
                <h3 className="mt-5 font-semibold">
                  {feature.title}
                </h3>
  
  
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {feature.description}
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }