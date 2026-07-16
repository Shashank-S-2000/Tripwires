const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Try Tripwires with your first websites.",
      features: [
        "3 website reports",
        "Basic AI review",
        "Desktop analysis",
      ],
      button: "Start Free",
    },
    {
      name: "Pro",
      price: "$19",
      description: "For founders and teams improving conversions.",
      features: [
        "Unlimited reports",
        "Mobile + desktop analysis",
        "Priority AI insights",
        "Export reports",
      ],
      button: "Start Pro",
      popular: true,
    },
  ];
  
  
  export default function Pricing() {
    return (
      <section id="pricing" className="py-24">
  
        <div className="container">
  
          <div className="max-w-2xl">
  
            <p className="text-sm font-medium text-[#315a43]">
              Pricing
            </p>
  
  
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Simple pricing. No complicated plans.
            </h2>
  
  
            <p className="mt-4 text-lg text-stone-600">
              Start free and upgrade when Tripwires becomes part of your workflow.
            </p>
  
          </div>
  
  
  
          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl">
  
  
            {plans.map((plan) => (
  
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 ${
                  plan.popular
                    ? "border-[#315a43] bg-white shadow-lg"
                    : "border-stone-200 bg-white"
                }`}
              >
  
                {plan.popular && (
                  <div className="text-sm font-medium text-[#315a43]">
                    Most Popular
                  </div>
                )}
  
  
                <h3 className="mt-4 text-2xl font-semibold">
                  {plan.name}
                </h3>
  
  
                <div className="mt-4 text-5xl font-semibold">
                  {plan.price}
  
                  <span className="text-base text-stone-500">
                    /month
                  </span>
                </div>
  
  
                <p className="mt-4 text-stone-600">
                  {plan.description}
                </p>
  
  
  
                <ul className="mt-6 space-y-3">
  
                  {plan.features.map((feature) => (
  
                    <li
                      key={feature}
                      className="text-sm text-stone-700"
                    >
                      ✓ {feature}
                    </li>
  
                  ))}
  
                </ul>
  
  
  
                <button
                  className="mt-8 w-full rounded-xl bg-[#315a43] py-3 text-sm font-medium text-white transition hover:bg-[#274936]"
                >
                  {plan.button}
                </button>
  
  
              </div>
  
            ))}
  
  
          </div>
  
  
        </div>
  
      </section>
    );
  }