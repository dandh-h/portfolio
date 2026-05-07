const experiences = [
  {
    company: 'E-Bureauet ApS',
    role: 'Junior DevOps Engineer',
    period: 'Apr 2025 – Jan 2026',
    type: 'DevOps',
    color: 'bg-[#F3EDF7] text-[#B08EC0] border-[#E9DEFF]',
    dot: 'bg-[#B08EC0]',
    highlights: ['99%+ Availability', '~20% MTTD Reduction', '0 Compliance Breaches'],
    bullets: [
      'Applied DevOps practices including SLA monitoring, incident analysis, and task automation, maintaining 99%+ service availability.',
      'Reduced recurring issues by ~20% through incident reviews and root cause analysis.',
      'Monitored system health via SolarWinds, BetterStack, and Application Insights.',
      'Enforced security and compliance standards — zero breaches recorded during all audits.',
      'Contributed to post-mortems, introducing clearer escalation paths and faster ticket triage.',
    ],
  },
  {
    company: 'Lenovo PCCW Solutions / LPS',
    role: 'Operations Management Administrator',
    period: 'Jul 2023 – Dec 2024',
    type: 'IT Operations',
    color: 'bg-[#FDF4EC] text-[#D4956A] border-[#FAE3CC]',
    dot: 'bg-[#D4956A]',
    highlights: ['95% SLA Compliance', '10%+ Cost Savings', '25% Fewer Delays'],
    bullets: [
      'Reduced downtime incidents by 15% and improved system performance scores by 20%.',
      'Achieved 95% SLA compliance and cut average resolution time by 30 minutes per ticket.',
      'Managed vendor negotiations, reducing annual costs by at least 10%.',
      'Reduced project delays by 25% through executive collaboration on resource allocation.',
      'Prepared management reports that reduced budget variances by 12%.',
    ],
  },
  {
    company: 'Lenovo PCCW Solutions / LPS',
    role: 'L1/L2 Production Services Support',
    period: 'Jul 2023 – Dec 2024',
    type: 'Production Support',
    color: 'bg-[#FDF4EC] text-[#D4956A] border-[#FAE3CC]',
    dot: 'bg-[#D4956A]',
    highlights: ['98% SLA Compliance', '18% Defect Reduction', '100% Retrieval Accuracy'],
    bullets: [
      'Developed and maintained Control-M batch job processes, achieving 98% SLA compliance.',
      'Cut average incident resolution time by 25% through incident and change management.',
      'Delivered client solution designs that reduced rework by 15%.',
      'Utilized Linux and Putty for client data retrieval with 100% accuracy.',
      'Created test plans that reduced defect leakage by 18% during UAT.',
    ],
  },
  {
    company: 'Lenovo PCCW Solutions / LPS',
    role: 'Junior Developer',
    period: 'Jul 2023 – Dec 2024',
    type: 'Software Development',
    color: 'bg-[#EDF3FD] text-[#6A95D4] border-[#CCE0FA]',
    dot: 'bg-[#6A95D4]',
    highlights: ['Java + Angular', 'REST APIs', 'SQL'],
    bullets: [
      'Assisted in development using Java and Angular, contributing to two internal projects.',
      'Supported implementation of REST APIs, successfully testing 3 endpoints.',
      'Wrote SQL queries for database management, generating reports for 50–100 records.',
      'Participated in code reviews, reducing minor defects by 5–8%.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">

      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-[#B08EC0]" />
        <span className="font-mono text-[#B08EC0] text-xs tracking-[0.15em] uppercase">
          Career Timeline
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-semibold text-[#2D2926] mb-12">
        Work <span className="text-[#B08EC0]">Experience</span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-[#EDE9E4]" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10">
              {/* Dot */}
              <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${exp.dot} opacity-20 flex items-center justify-center`}>
                <div className={`w-3 h-3 rounded-full ${exp.dot}`} />
              </div>

              <div className="bg-white rounded-2xl border border-[#EDE9E4] p-6 shadow-sm hover:shadow-md transition-all duration-200">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-xs text-[#8C8078] font-mono mb-1">{exp.company}</p>
                    <h3 className="text-lg font-semibold text-[#2D2926]">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs px-3 py-1 rounded-full border ${exp.color}`}>
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-[#8C8078] bg-[#F9F7F5] px-3 py-1 rounded-full border border-[#EDE9E4]">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-[#8C8078]">
                      <span className="text-[#B08EC0] mt-1">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#EDE9E4]">
                  {exp.highlights.map((h) => (
                    <span key={h} className={`text-xs px-3 py-1 rounded-full border ${exp.color}`}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}