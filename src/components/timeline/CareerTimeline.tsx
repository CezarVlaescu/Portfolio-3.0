import { useState } from 'react';
import { motion } from 'motion/react';
import { timelineItems } from '../../data/timeline';

export function CareerTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="timeline" className="border-b border-white/8 bg-black/15 py-20">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.36em] text-violet-300">
          My Journey
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
          Career Timeline
        </h2>

        <div className="relative mt-16">
          <motion.div
            className="absolute left-0 right-0 top-[30px] h-px bg-gradient-to-r from-violet-500 via-cyan-400 to-orange-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: 'left' }}
          />

          <div className="relative grid gap-7 lg:grid-cols-4">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group block w-full text-left"
                  >
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_35px_rgba(139,92,246,0.35)] transition group-hover:scale-110`}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/65">
                        <span className="h-2.5 w-2.5 rounded-full bg-white" />
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-black text-white/70">{item.year}</p>

                    <div
                      className={`glass-card mt-5 min-h-[190px] rounded-3xl p-6 transition duration-300 ${
                        isActive
                          ? 'translate-y-[-4px] border-white/25 bg-white/[0.1]'
                          : 'opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div
                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                      >
                        <Icon size={23} />
                      </div>

                      <h3 className="text-lg font-black leading-snug">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/58">
                        {item.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}