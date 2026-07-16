export default function ScreenshotAnalysis() {
    return (
      <section className="mt-10">
  
        <div className="rounded-3xl border border-stone-200 bg-white p-8">
  
  
          <div>
  
            <p className="text-sm font-medium text-[#315a43]">
              Visual Analysis
            </p>
  
  
            <h2 className="mt-2 text-3xl font-semibold">
              What AI noticed on your page
            </h2>
  
  
            <p className="mt-3 text-stone-600">
              Tripwires reviews your layout, hierarchy, and important visitor
              actions.
            </p>
  
          </div>
  
  
  
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
  
  
            {/* Desktop Preview */}
  
            <div>
  
              <p className="mb-3 text-sm font-medium">
                Desktop View
              </p>
  
  
              <div className="aspect-video rounded-2xl border border-stone-200 bg-stone-100 p-6">
  
                <div className="rounded-xl bg-white p-5 shadow-sm">
  
                  <div className="h-4 w-32 rounded bg-stone-200" />
  
                  <div className="mt-5 h-10 w-3/4 rounded bg-stone-200" />
  
                  <div className="mt-3 h-4 w-full rounded bg-stone-100" />
  
                  <div className="mt-6 h-10 w-36 rounded-xl bg-[#315a43]" />
  
                </div>
  
  
              </div>
  
            </div>
  
  
  
  
            {/* Mobile Preview */}
  
            <div>
  
              <p className="mb-3 text-sm font-medium">
                Mobile View
              </p>
  
  
              <div className="flex justify-center rounded-2xl border border-stone-200 bg-stone-100 p-6">
  
  
                <div className="w-48 rounded-3xl border border-stone-300 bg-white p-4 shadow-sm">
  
  
                  <div className="h-3 w-20 rounded bg-stone-200" />
  
  
                  <div className="mt-5 h-16 rounded bg-stone-200" />
  
  
                  <div className="mt-4 h-3 rounded bg-stone-100" />
  
  
                  <div className="mt-4 h-8 rounded-lg bg-[#315a43]" />
  
  
                </div>
  
  
              </div>
  
            </div>
  
  
          </div>
  
  
  
  
          {/* AI Findings */}
  
          <div className="mt-10">
  
            <h3 className="text-xl font-semibold">
              AI Findings
            </h3>
  
  
            <div className="mt-5 space-y-3">
  
  
              <Finding
                title="CTA visibility"
                text="Primary action is visible but could stand out more."
              />
  
  
              <Finding
                title="Hero clarity"
                text="Headline communicates the product but lacks a specific outcome."
              />
  
  
              <Finding
                title="Trust placement"
                text="Social proof appears too low on the page."
              />
  
  
            </div>
  
          </div>
  
  
        </div>
  
  
      </section>
    );
  }
  
  
  
  function Finding({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) {
    return (
      <div className="rounded-xl bg-stone-50 p-4">
  
        <p className="font-medium">
          {title}
        </p>
  
        <p className="mt-1 text-sm text-stone-600">
          {text}
        </p>
  
      </div>
    );
  }