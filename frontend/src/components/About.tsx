export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">

      {/* Section Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-[#B08EC0]" />
        <span className="font-mono text-[#B08EC0] text-xs tracking-[0.15em] uppercase">
          About Me
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-semibold text-[#2D2926] mb-12">
        Develop. Operate.<br />
        <span className="text-[#B08EC0]">Problem Solver.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left - Bio */}
        <div className="space-y-5">
          <p className="text-[#8C8078] leading-relaxed">
            I started my career with <span className="text-[#2D2926] font-medium">Lenovo PCCW Solutions</span> working
            with Control-M batch scheduling and L1/L2 production support, to
            incident analysis, SLA monitoring, and CI/CD pipelines.
          </p>
          <p className="text-[#8C8078] leading-relaxed">
            That foundation makes me a more effective DevOps engineer today. Across my roles
            at <span className="text-[#2D2926] font-medium">Lenovo PCCW Solutions</span> and{' '}
            <span className="text-[#2D2926] font-medium">E-Bureauet ApS</span>.
          </p>
          <p className="text-[#8C8078] leading-relaxed">
            I&apos;m the person who can read the code, understand the pipeline, debug the
            infrastructure, and communicate with the business — all in the same day.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['DevOps', 'Development', 'IT Operations', 'Azure', 'Linux', 'CI/CD', 'Python', 'Java', 'Automation'].map((badge) => (
              <span key={badge} className="text-xs px-3 py-1 rounded-full bg-[#F3EDF7] text-[#B08EC0] border border-[#E9DEFF]">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Contact Card */}
        <div className="bg-white rounded-2xl border border-[#EDE9E4] p-6 shadow-sm space-y-4">
          <p className="font-mono text-xs text-[#B08EC0] tracking-widest uppercase mb-2">
            Contact Info
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#B08EC0]">✉</span>
            <a href="mailto:dandycarreon.2001@gmail.com" className="text-sm text-[#8C8078] hover:text-[#B08EC0] transition-colors">
              dandycarreon.2001@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#B08EC0]">⊕</span>
            <a href="https://www.linkedin.com/in/dandycarreon2001" target="_blank" className="text-sm text-[#8C8078] hover:text-[#B08EC0] transition-colors">
              linkedin.com/in/dandycarreon2001
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#B08EC0]">◉</span>
            <span className="text-sm text-[#8C8078]">Philippines</span>
          </div>

          <div className="pt-4 border-t border-[#EDE9E4]">
            <p className="font-mono text-xs text-[#B08EC0] tracking-widest uppercase mb-3">
              Education
            </p>
            <p className="text-sm font-medium text-[#2D2926]">BS Computer Engineering</p>
            <p className="text-xs text-[#8C8078]">Bulacan State University · 2019–2023</p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDF7] border border-[#E9DEFF]">
              <span className="text-xs text-[#B08EC0]">✓ Civil Service Professional · 2023</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}