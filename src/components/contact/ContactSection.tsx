import { Mail, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="section-screen px-6">
      <div className="section-shell section-screen-inner">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-fuchsia-300">
              Get in Touch
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Let&apos;s Build Something Amazing Together
            </h2>

            <p className="mt-5 leading-7 text-white/58">
              I&apos;m always open to discussing new opportunities, interesting projects or just a
              friendly tech chat.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/8 transition hover:bg-white/15"
                href="mailto:cezar.dev@example.com"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="glass-card rounded-3xl p-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/35 focus:border-fuchsia-400"
              />

              <input
                name="email"
                placeholder="Your Email"
                type="email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/35 focus:border-fuchsia-400"
              />
            </div>

            <input
              name="subject"
              placeholder="Subject"
              className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/35 focus:border-fuchsia-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/35 focus:border-fuchsia-400"
            />

            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-bold shadow-[0_0_35px_rgba(236,72,153,0.3)]"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="glass-card rounded-3xl p-6">
            <div className="space-y-7">
              <div className="flex gap-4">
                <Mail className="text-fuchsia-300" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-white/55">cezar.dev@example.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-cyan-300" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-sm text-white/55">Bucharest, Romania</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                <div>
                  <h3 className="font-bold">Available</h3>
                  <p className="text-sm text-white/55">Open for opportunities</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-36 rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 opacity-80 blur-sm" />
          </div>
        </div>

        <footer className="mt-16 flex flex-col justify-between gap-4 border-t border-white/8 pt-8 text-sm text-white/45 md:flex-row">
          <p>© 2026 Cezar. All rights reserved.</p>
          <p>Built with ❤️ and lots of ☕</p>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}