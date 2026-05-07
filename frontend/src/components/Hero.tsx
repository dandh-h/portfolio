export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-24">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3EDF7] text-[#B08EC0] text-xs font-mono tracking-widest mb-8 w-fit">
        ✦ Available for opportunities
      </div>

      <h1 className="text-6xl md:text-8xl font-semibold text-[#2D2926] leading-tight tracking-tight mb-4">
        Dandy<br />
        <span className="text-[#B08EC0]">Carreon</span>
      </h1>

      <p className="font-mono text-[#8C8078] text-sm md:text-base mb-6">
        Junior DevOps Engineer
      </p>

      <p className="max-w-xl text-[#8C8078] font-light text-base md:text-lg mb-10 leading-relaxed">
        I build, automate, and operate — bridging the gap between
        development and infrastructure. From REST APIs to CI/CD pipelines,
        I bring both a coder&apos;s mindset and an operator&apos;s discipline.
      </p>

      <div className="flex gap-4 flex-wrap">
        <a
          href="mailto:dandycarreon.2001@gmail.com"
          className="px-6 py-3 rounded-full bg-[#B08EC0] text-white text-sm hover:bg-[#9B7AB0] transition-all duration-200 shadow-sm"
        >
          Get in Touch
        </a>
        <a
          href="https://www.linkedin.com/in/dandycarreon2001"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full border border-[#EDE9E4] text-[#8C8078] text-sm hover:border-[#B08EC0] hover:text-[#B08EC0] transition-all duration-200"
        >
          LinkedIn ↗
        </a>
      </div>

      <div className="flex gap-10 mt-16 flex-wrap">
        <div>
          <p className="text-3xl font-semibold text-[#2D2926]">3<span className="text-[#B08EC0]">+</span></p>
          <p className="text-xs text-[#8C8078] uppercase tracking-widest mt-1">Years Experience</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-[#2D2926]">99<span className="text-[#B08EC0]">%+</span></p>
          <p className="text-xs text-[#8C8078] uppercase tracking-widest mt-1">Service Availability</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-[#2D2926]">4</p>
          <p className="text-xs text-[#8C8078] uppercase tracking-widest mt-1">Roles Held</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-[#2D2926]">0</p>
          <p className="text-xs text-[#8C8078] uppercase tracking-widest mt-1">Compliance Breaches</p>
        </div>
      </div>

    </section>
  )
}