export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#f8f7f4]/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
  
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#315a43] text-white font-bold">
              T
            </div>
  
            <span className="text-lg font-semibold tracking-tight">
              Tripwires
            </span>
          </div>
  
  
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a href="#how-it-works" className="hover:text-black transition">
              How It Works
            </a>
  
            <a href="#pricing" className="hover:text-black transition">
              Pricing
            </a>
  
            <a href="#faq" className="hover:text-black transition">
              FAQ
            </a>
          </nav>
  
  
          <button className="rounded-xl bg-[#315a43] px-5 py-2 text-sm font-medium text-white hover:bg-[#274936] transition">
            Analyze Website
          </button>
  
        </div>
      </header>
    );
  }