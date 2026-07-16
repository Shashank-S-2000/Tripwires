export interface WebsiteData {
  url: string;
  title: string;
  text: string;
  buttons: string[];
  links: string[];
  screenshot: string;
}

export interface AnalysisResult {
  executiveSummary: string;

  scores: {
    overall: number;
    trust: number;
    clarity: number;
    conversion: number;
    ux: number;
  };

  firstImpression: string;

  topIssues: {
    title: string;
    finding: string;
    why: string;
    fix: string;
    impact: "High" | "Medium" | "Low";
  }[];

  quickWins: string[];

  trustSignals: string[];

  missingTrustSignals: string[];

  heroReview: {
    headline: string;
    subheading: string;
    cta: string;
  };

  ctaReview: {
    current: string;
    suggestion: string;
    reason: string;
  };
}

export function analyzeWebsite(
  website: WebsiteData
): AnalysisResult {

  const text = website.text.toLowerCase();

  const hasPricing =
    text.includes("pricing") ||
    text.includes("plans");

  const hasContact =
    text.includes("contact");

  const hasTestimonials =
    text.includes("testimonial") ||
    text.includes("customer") ||
    text.includes("trusted");

  const hasLogos =
    text.includes("companies") ||
    text.includes("customers") ||
    text.includes("fortune");

  const trustScore =
    [
      hasContact,
      hasTestimonials,
      hasLogos,
    ].filter(Boolean).length * 30 + 10;

  const clarityScore =
    website.title.length > 20 ? 90 : 70;

  const conversionScore =
    website.buttons.length > 0 ? 85 : 55;

  const uxScore = 88;

  return {
    executiveSummary:
      "The website looks professional and trustworthy, but improving trust signals and call-to-action clarity would likely increase conversions.",

    scores: {
      overall: Math.round(
        (trustScore + clarityScore + conversionScore + uxScore) / 4
      ),
      trust: trustScore,
      clarity: clarityScore,
      conversion: conversionScore,
      ux: uxScore,
    },

    firstImpression:
      "Modern, professional and credible. Visitors can understand the product quickly, although stronger social proof would build confidence.",

    topIssues: [
      {
        title: "Improve CTA",
        finding:
          "Primary CTA is too generic.",
        why:
          "Specific CTAs convert better.",
        fix:
          "Use 'Start Free Trial' or 'Analyze My Website'.",
        impact: "High",
      },
      {
        title: "Missing Testimonials",
        finding:
          "Very little customer proof is visible.",
        why:
          "Testimonials reduce buying hesitation.",
        fix:
          "Add customer reviews above the fold.",
        impact: "High",
      },
      {
        title: "Weak Trust Signals",
        finding:
          "Limited customer logos or credibility markers.",
        why:
          "Visitors trust companies trusted by others.",
        fix:
          "Show customer logos and case studies.",
        impact: "Medium",
      },
    ],

    quickWins: [
      "Add customer logos",
      "Improve CTA wording",
      "Shorten headline",
      "Add founder photo",
      "Display testimonials",
    ],

    trustSignals: [
      ...(hasContact ? ["Contact page"] : []),
      ...(hasPricing ? ["Pricing page"] : []),
      ...(hasTestimonials ? ["Testimonials"] : []),
    ],

    missingTrustSignals: [
      !hasTestimonials ? "Testimonials" : "",
      !hasLogos ? "Customer logos" : "",
      "Guarantee",
      "Case studies",
    ].filter(Boolean),

    heroReview: {
      headline:
        "Headline is clear but could emphasize the core benefit sooner.",
      subheading:
        "Supporting copy explains the product but focuses more on features than outcomes.",
      cta:
        website.buttons[0] || "No CTA detected",
    },

    ctaReview: {
      current: website.buttons[0] || "Unknown",
      suggestion: "Start Free Trial",
      reason:
        "Benefit-focused CTAs generally outperform generic wording.",
    },
  };
}