export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-20 border-t border-[#EDE9E4]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <span className="font-mono text-sm text-[#B08EC0] tracking-widest">
          dandy.dev
        </span>

        <p className="text-xs text-[#8C8078] text-center">
          © 2025 Dandy Carreon. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:dandycarreon.2001@gmail.com"
            className="text-xs text-[#8C8078] hover:text-[#B08EC0] transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/dandycarreon2001"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-[#8C8078] hover:text-[#B08EC0] transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}