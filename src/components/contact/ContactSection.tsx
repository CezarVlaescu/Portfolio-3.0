import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/8 bg-[#050814] px-6 py-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.25fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300">
              Get in Touch
            </p>

            <h2 className="mt-2 max-w-[360px] text-3xl font-black leading-tight text-white md:text-4xl">
              Let&apos;s Build Something Amazing Together
            </h2>

            <p className="mt-4 max-w-[360px] text-sm leading-6 text-white/60">
              I&apos;m always open to discussing new opportunities, interesting projects or just a
              friendly tech chat.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-fuchsia-400/60 hover:bg-white/10 hover:text-fuchsia-200"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-fuchsia-400/60 hover:bg-white/10 hover:text-fuchsia-200"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://x.com/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-fuchsia-400/60 hover:bg-white/10 hover:text-fuchsia-200"
              >
                <FaXTwitter size={17} />
              </a>

              <a
                href="mailto:cezar.dev@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:border-fuchsia-400/60 hover:bg-white/10 hover:text-fuchsia-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_45px_rgba(168,85,247,0.08)] backdrop-blur-xl"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid gap-3 md:grid-cols-2">
              <input
                name="name"
                placeholder="Your Name"
                className="h-10 rounded-lg border border-white/10 bg-[#0b1020] px-4 text-xs text-white outline-none transition placeholder:text-white/40 focus:border-fuchsia-400/70"
              />

              <input
                name="email"
                placeholder="Your Email"
                type="email"
                className="h-10 rounded-lg border border-white/10 bg-[#0b1020] px-4 text-xs text-white outline-none transition placeholder:text-white/40 focus:border-fuchsia-400/70"
              />
            </div>

            <input
              name="subject"
              placeholder="Subject"
              className="mt-3 h-10 w-full rounded-lg border border-white/10 bg-[#0b1020] px-4 text-xs text-white outline-none transition placeholder:text-white/40 focus:border-fuchsia-400/70"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              className="mt-3 w-full resize-none rounded-lg border border-white/10 bg-[#0b1020] px-4 py-3 text-xs text-white outline-none transition placeholder:text-white/40 focus:border-fuchsia-400/70"
            />

            <button
              type="submit"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-5 py-2.5 text-xs font-bold text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition hover:scale-[1.02]"
            >
              Send Message <Send size={14} />
            </button>
          </form>

          <div className="relative min-h-[190px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_45px_rgba(168,85,247,0.08)] backdrop-blur-xl">
            <div className="relative z-10 space-y-5">
              <div className="flex gap-4">
                <Mail size={21} className="text-fuchsia-300" />
                <div>
                  <h3 className="text-sm font-bold text-white">Email</h3>
                  <p className="mt-1 text-xs text-white/55">cezar.dev@example.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin size={21} className="text-cyan-300" />
                <div>
                  <h3 className="text-sm font-bold text-white">Location</h3>
                  <p className="mt-1 text-xs text-white/55">Cluj-Napoca, Romania</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                <div>
                  <h3 className="text-sm font-bold text-white">Currently</h3>
                  <p className="mt-1 text-xs text-white/55">
                    Software Developer at meteocontrol
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 top-8 h-36 w-36 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute -right-8 bottom-4 h-28 w-28 rounded-full bg-orange-400/20 blur-3xl" />
          </div>
        </div>

        <footer className="mt-8 flex flex-col justify-between gap-4 border-t border-white/8 pt-5 text-xs text-white/45 md:flex-row">
          <p>© 2026 Cezar. All rights reserved.</p>

          <p>
            Built with <span className="text-red-400">❤️</span> and lots of ☕
          </p>

          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}