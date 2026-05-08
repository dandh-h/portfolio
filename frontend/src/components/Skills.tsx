const skillGroups = [
  {
    category: 'DevOps & Cloud',
    icon: '⚙',
    skills: ['Azure DevOps', 'CI/CD', 'SLA Monitoring', 'Automation', 'BetterStack', 'SolarWinds', 'App Insights'],
  },
  {
    category: 'Development',
    icon: '⌨',
    skills: ['Java', 'Angular', 'REST APIs', 'C#', 'HTML/CSS/JS', 'SQL', 'Python', 'Bash'],
  },
  {
    category: 'Operations & ITSM',
    icon: '◈',
    skills: ['Control-M', 'JIRA', 'Remedy', 'Incident Management', 'Change Management'],
  },
  {
    category: 'Infrastructure',
    icon: '▤',
    skills: ['Linux', 'Unix', 'Windows', 'Putty', 'MS365 / O365', 'Docker', 'GitHub Actions', 'Git'],
  },
  {
    category: 'Business & Management',
    icon: '◎',
    skills: ['Vendor Management', 'Budget Management', 'Client Management', 'Cross-Functional Support', 'Admin Support'],
  },
  {
    category: 'Soft Skills',
    icon: '◐',
    skills: ['Critical Thinking', 'Growth Mindset', 'Communication', 'Escalation Handling', 'Post-Mortems'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-[#FFFFF0]">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#B08EC0]" />
          <span className="font-mono text-[#B08EC0] text-xs tracking-[0.15em] uppercase">
            Technical Toolkit
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2D2926] mb-12">
          Skills &{' '}
          <span className="text-[#B08EC0]">Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl border border-[#EDE9E4] p-6 shadow-sm hover:shadow-md hover:border-[#B08EC0] transition-all duration-200"
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3 className="font-mono text-xs text-[#B08EC0] tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-[#F3EDF7] text-[#8C8078] border border-[#E9DEFF]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}