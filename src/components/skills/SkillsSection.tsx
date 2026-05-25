import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import { hardSkills, serviceCards, softSkills } from '../../data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="section-screen border-b border-white/8">
      <div className="section-shell section-screen-inner">
        <p className="text-sm font-bold uppercase tracking-[0.32em] text-fuchsia-300">What I Do</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Skills, Services & Strengths</h2>

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.9fr_0.8fr_1.1fr]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  className={`glass-card rounded-3xl border p-6 ${card.border}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Icon className={card.color} size={34} />
                  <h3 className="mt-8 text-xl font-black">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{card.description}</p>
                  <button className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70">
                    →
                  </button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="gradient-border glass-card relative flex min-h-[430px] items-end overflow-hidden rounded-[2rem] p-7"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute left-1/2 top-16 h-52 w-52 -translate-x-1/2 rounded-full border border-fuchsia-400/80 shadow-[0_0_55px_rgba(217,70,239,0.55)]" />
            <div className="absolute left-1/2 top-24 h-44 w-32 -translate-x-1/2 rounded-t-full bg-black/70" />
            <div className="absolute left-1/2 top-56 h-32 w-56 -translate-x-1/2 rounded-t-[5rem] bg-black/70" />

            <div className="relative z-10 w-full rounded-3xl border border-white/10 bg-slate-950/65 p-6 backdrop-blur-xl">
              <p className="text-lg font-bold">Always learning.</p>
              <p className="text-lg font-bold text-violet-300">Always building.</p>
              <p className="mt-4 font-serif text-3xl italic text-fuchsia-300">Cezar</p>
            </div>
          </motion.div>

          <div className="space-y-5">
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <Trophy className="text-orange-300" />
                <h3 className="text-xl font-black">Conferences & Career Fairs</h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/58">
                I enjoy being involved in the tech community, attending developer conferences and
                representing the company at career fairs.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/68">
                <li>• Developer conferences</li>
                <li>• Company career fairs</li>
                <li>• Tech community events</li>
                <li>• Product and engineering discussions</li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-black text-cyan-300">Hard Skills</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/8 px-3 py-2 text-xs text-white/68">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-xl font-black text-emerald-300">Soft Skills</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/8 px-3 py-2 text-xs text-white/68">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}