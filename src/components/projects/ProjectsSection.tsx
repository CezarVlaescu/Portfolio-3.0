import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-screen border-b border-white/8">
      <div className="section-shell section-screen-inner">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.36em] text-fuchsia-300">
            Featured Work
          </p>
          <h2 className="mt-3 text-5xl font-black tracking-tight">Projects Showcase</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/58">
            A selection of projects presented like interactive devices and live product previews.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] px-8 pb-10 pt-16 shadow-[0_0_90px_rgba(139,92,246,0.18)]">
          <div className="absolute inset-x-16 bottom-10 h-28 rounded-[50%] bg-gradient-to-r from-cyan-500/35 via-fuchsia-500/35 to-orange-400/35 blur-2xl" />
          <div className="absolute bottom-4 left-12 right-12 h-24 rounded-[50%] border border-fuchsia-400/35" />

          <div className="relative grid gap-7 lg:grid-cols-4">
            {projects.map((project, index) => {
              const isPhone = project.type === 'phone';

              return (
                <motion.article
                  key={project.title}
                  className="group relative pt-4"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <div
                    className={`mx-auto ${
                      isPhone
                        ? 'h-[250px] w-[128px] device-perspective-reverse'
                        : 'h-[190px] w-[260px] device-perspective'
                    }`}
                  >
                    <div className="h-full rounded-[1.8rem] border border-white/15 bg-slate-950 p-3 shadow-2xl transition duration-300 group-hover:-translate-y-2">
                      <div
                        className={`h-full overflow-hidden rounded-[1.35rem] bg-gradient-to-br ${project.gradient} p-4`}
                      >
                        <div className="h-full rounded-2xl bg-slate-950/72 p-4">
                          <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-red-400" />
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                          </div>

                          <div className="mt-5 space-y-3">
                            <div className="h-3 w-3/4 rounded-full bg-white/70" />
                            <div className="h-3 w-1/2 rounded-full bg-white/35" />
                            <div className="grid grid-cols-2 gap-2 pt-4">
                              <div className="h-12 rounded-xl bg-white/15" />
                              <div className="h-12 rounded-xl bg-white/10" />
                              <div className="h-12 rounded-xl bg-white/10" />
                              <div className="h-12 rounded-xl bg-white/15" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card relative z-10 -mt-9 rounded-3xl p-5">
                    <h3 className="text-lg font-black leading-snug">{project.title}</h3>
                    <p className="mt-1 text-sm font-bold text-violet-300">{project.stack}</p>
                    <p className="mt-3 min-h-[78px] text-sm leading-6 text-white/58">
                      {project.description}
                    </p>

                    <div className="mt-5 flex gap-2">
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-xs font-bold transition hover:bg-blue-500">
                        Live Demo <ExternalLink size={13} />
                      </button>

                      <button className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/8 px-3 py-3 text-xs font-bold transition hover:bg-white/15">
                        View
                      </button>

                      <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/8 transition hover:bg-white/15">
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
        </div>
      </div>
    </section>
  );
}