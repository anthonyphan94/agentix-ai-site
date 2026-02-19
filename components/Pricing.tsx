import { GUMROAD_URL } from "@/lib/modules";

const included = [
  "All 73 modules",
  "100+ domain-specialist agents",
  "146+ progressive skills",
  "91 orchestration workflows",
  "Lifetime access",
  "Future module updates",
  "Instant GitHub access",
  "30-day money-back guarantee",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="mx-auto max-w-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, one-time pricing
          </h2>
          <p className="text-[#a1a1aa]">
            Pay once. Use forever. No subscriptions, no usage limits.
          </p>
        </div>

        <div className="bg-[#111] border border-[#00ff41]/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff41]/50 to-transparent" />

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold text-white">$49</span>
            <span className="text-[#52525b]">one-time</span>
          </div>
          <p className="text-[#a1a1aa] text-sm mb-6">Everything included. No hidden fees.</p>

          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-4 mb-6">
            <p className="text-xs text-[#52525b] uppercase tracking-widest mb-2">Your ROI</p>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              Save <span className="text-white font-semibold">10 hours</span> in your first week
              {" "}&times; <span className="text-white font-semibold">$30</span>/hr
              {" "}= <span className="text-[#00ff41] font-bold">$300 in value</span>.
              {" "}Cost: $49. That&apos;s a <span className="text-[#00ff41] font-bold">6x return</span> before day 7.
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#a1a1aa]">
                <span className="text-[#00ff41] flex-shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#00ff41] hover:bg-[#00cc33] text-black font-semibold py-4 rounded-xl text-center transition-colors text-base"
          >
            Get Your Edge &mdash; $49
          </a>

          <p className="text-center text-[#52525b] text-xs mt-4">
            Instant GitHub access after purchase &middot; 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
