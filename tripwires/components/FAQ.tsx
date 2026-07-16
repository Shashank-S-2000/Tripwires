const questions = [
    {
      question: "Is Tripwires an SEO tool?",
      answer:
        "No. Tripwires focuses on first impressions, trust, clarity, user experience, and conversion problems.",
    },
    {
      question: "How does the AI review my website?",
      answer:
        "The AI analyzes your website like a first-time visitor by reviewing content, layout, trust signals, navigation, and calls to action.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. Reports are written in simple language with explanations and recommended fixes.",
    },
    {
      question: "Can I analyze mobile websites?",
      answer:
        "Yes. Tripwires is designed to review both desktop and mobile experiences.",
    },
  ];
  
  
  export default function FAQ() {
    return (
      <section id="faq" className="py-24">
  
        <div className="container">
  
          <div className="max-w-2xl">
  
            <p className="text-sm font-medium text-[#315a43]">
              FAQ
            </p>
  
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Questions founders usually ask.
            </h2>
  
          </div>
  
  
          <div className="mt-12 max-w-3xl space-y-4">
  
            {questions.map((item) => (
  
              <div
                key={item.question}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
  
                <h3 className="font-semibold">
                  {item.question}
                </h3>
  
  
                <p className="mt-3 leading-7 text-stone-600">
                  {item.answer}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
  
        </div>
  
      </section>
    );
  }