export default function Footer() {
    return (
      <footer className="mt-24 border-t border-stone-300 bg-[#eee9df]">
  
        <div className="container py-16">
  
          <div className="grid gap-10 md:grid-cols-4">
  
  
            {/* Brand */}
  
            <div className="md:col-span-2">
  
              <div className="flex items-center gap-3">
  
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#315a43] text-white font-bold">
                  T
                </div>
  
                <span className="text-xl font-semibold">
                  Tripwires
                </span>
  
              </div>
  
  
              <p className="mt-5 max-w-sm leading-7 text-stone-600">
                AI website intelligence that helps businesses understand
                where visitors lose trust, clarity, and conversions.
              </p>
  
            </div>
  
  
  
            {/* Product */}
  
            <div>
  
              <h3 className="font-semibold">
                Product
              </h3>
  
  
              <ul className="mt-4 space-y-3 text-sm text-stone-600">
  
                <li>
                  Website Analysis
                </li>
  
                <li>
                  AI Reports
                </li>
  
                <li>
                  Pricing
                </li>
  
                <li>
                  API
                </li>
  
              </ul>
  
            </div>
  
  
  
            {/* Company */}
  
            <div>
  
              <h3 className="font-semibold">
                Company
              </h3>
  
  
              <ul className="mt-4 space-y-3 text-sm text-stone-600">
  
                <li>
                  About
                </li>
  
                <li>
                  Contact
                </li>
  
                <li>
                  Privacy
                </li>
  
                <li>
                  Terms
                </li>
  
              </ul>
  
            </div>
  
  
          </div>
  
  
  
          <div className="mt-12 border-t border-stone-300 pt-6 text-sm text-stone-500">
  
            © 2026 Tripwires. All rights reserved.
  
          </div>
  
  
        </div>
  
      </footer>
    );
  }