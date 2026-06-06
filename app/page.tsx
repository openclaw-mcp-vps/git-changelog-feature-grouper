export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevRel Tools
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Auto-group commits into{" "}
          <span className="text-[#58a6ff]">user-facing features</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub repo, let AI analyze commit patterns, and generate clean changelog entries grouped by meaningful features — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $18/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-4">
        {[
          { icon: "🔗", title: "GitHub Integration", desc: "Webhook-powered real-time commit ingestion from any repo." },
          { icon: "🤖", title: "AI Grouping", desc: "Clusters related commits into coherent user-facing features." },
          { icon: "📋", title: "Clean Changelogs", desc: "Exports polished changelog entries ready to publish." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited repositories",
              "AI-powered commit grouping",
              "Real-time webhook updates",
              "Changelog export (MD, JSON)",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI grouping work?",
              a: "We analyze commit messages, file paths, and timestamps using an LLM to cluster related changes into coherent feature groups that make sense to non-technical readers."
            },
            {
              q: "Which repositories are supported?",
              a: "Any public or private GitHub repository. Just install our GitHub App and we handle the rest via webhooks — no manual syncing needed."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your Lemon Squeezy customer portal. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Git Changelog Feature Grouper. All rights reserved.
      </footer>
    </main>
  );
}
