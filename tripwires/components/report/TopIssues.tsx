const issues = [
  {
    priority: "High Impact",
    title: "Primary CTA is unclear",
    problem:
      "Visitors cannot immediately understand what action they should take next.",
    fix:
      "Replace generic buttons like 'Learn More' with outcome-focused text like 'Start Free Trial'.",
  },
  {
    priority: "High Impact",
    title: "Missing social proof",
    problem:
      "New visitors have no evidence that customers trust your product.",
    fix:
      "Add testimonials, customer logos, and real usage examples.",
  },
  {
    priority: "Medium Impact",
    title: "Value proposition needs clarity",
    problem:
      "The headline explains what you do but not why users should care.",
    fix:
      "Lead with the customer's problem and desired outcome.",
  },
  {
    priority: "Medium Impact",
    title: "Pricing is difficult to find",
    problem:
      "Users may leave before understanding your offer.",
    fix:
      "Make pricing accessible from the main navigation.",
  },
  {
    priority: "Low Impact",
    title: "Mobile experience needs improvement",
    problem:
      "Important information requires too much scrolling.",
    fix:
      "Move key benefits and trust signals higher on mobile.",
  },
];


export default function TopIssues() {
  return (
    <section className="mt-10">

      <div className="mb-6">

        <p className="text-sm font-medium text-[#315a43]">
          Priority Fixes
        </p>


        <h2 className="mt-2 text-3xl font-semibold">
          Top 5 things to improve first
        </h2>


        <p className="mt-3 text-stone-600">
          Ranked by expected impact on trust and conversions.
        </p>

      </div>



      <div className="space-y-5">

        {issues.map((issue, index) => (

          <div
            key={issue.title}
            className="rounded-2xl border border-stone-200 bg-white p-6"
          >

            <div className="flex items-start justify-between gap-4">


              <div>

                <div className="text-sm text-[#315a43]">
                  #{index + 1} · {issue.priority}
                </div>


                <h3 className="mt-2 text-xl font-semibold">
                  {issue.title}
                </h3>

              </div>


            </div>



            <div className="mt-5 grid gap-5 md:grid-cols-2">


              <div className="rounded-xl bg-stone-50 p-4">

                <p className="text-sm font-medium">
                  Why this matters
                </p>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {issue.problem}
                </p>

              </div>



              <div className="rounded-xl bg-[#315a43]/5 p-4">

                <p className="text-sm font-medium">
                  Recommended fix
                </p>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {issue.fix}
                </p>

              </div>


            </div>


          </div>

        ))}

      </div>


    </section>
  );
}