export default function ExecutiveSummary() {
    return (
      <section className="mt-10">
  
        <div className="rounded-3xl border border-stone-200 bg-white p-8">
  
  
          <div>
            <p className="text-sm font-medium text-[#315a43]">
              AI Executive Summary
            </p>
  
  
            <h2 className="mt-2 text-3xl font-semibold">
              What visitors experience
            </h2>
  
          </div>
  
  
  
          <div className="mt-6 rounded-2xl bg-stone-50 p-6">
  
            <p className="leading-8 text-stone-700">
  
              This website creates a strong first impression and clearly
              communicates its purpose. However, visitors may hesitate before
              taking action because trust signals are limited and the main call
              to action does not strongly communicate the expected outcome.
  
              <br />
              <br />
  
              Improving customer proof, simplifying messaging, and strengthening
              the primary CTA could increase visitor confidence and conversions.
  
            </p>
  
          </div>
  
  
  
          <div className="mt-8 grid gap-5 md:grid-cols-3">
  
  
            <Insight
              title="Business Type"
              value="SaaS Product"
            />
  
  
            <Insight
              title="Target Audience"
              value="Founders & Teams"
            />
  
  
            <Insight
              title="Brand Feeling"
              value="Professional"
            />
  
  
          </div>
  
  
        </div>
  
  
      </section>
    );
  }
  
  
  
  function Insight({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) {
    return (
      <div className="rounded-2xl border border-stone-200 p-5">
  
        <p className="text-sm text-stone-500">
          {title}
        </p>
  
  
        <p className="mt-2 font-semibold">
          {value}
        </p>
  
      </div>
    );
  }