import { type CSSProperties, useState } from 'react';
import { motion } from 'motion/react';
import { timelineItems } from '../../data/timeline';

const timelineThemes = [
  {
    accent: '#a855f7',
    accentSoft: 'rgba(168, 85, 247, 0.12)',
    accentBorder: 'rgba(168, 85, 247, 0.48)',
    accentGlow: 'rgba(168, 85, 247, 0.45)',
  },
  {
    accent: '#38bdf8',
    accentSoft: 'rgba(56, 189, 248, 0.11)',
    accentBorder: 'rgba(56, 189, 248, 0.48)',
    accentGlow: 'rgba(56, 189, 248, 0.42)',
  },
  {
    accent: '#2dd4bf',
    accentSoft: 'rgba(45, 212, 191, 0.11)',
    accentBorder: 'rgba(45, 212, 191, 0.48)',
    accentGlow: 'rgba(45, 212, 191, 0.42)',
  },
  {
    accent: '#fb923c',
    accentSoft: 'rgba(251, 146, 60, 0.11)',
    accentBorder: 'rgba(251, 146, 60, 0.48)',
    accentGlow: 'rgba(251, 146, 60, 0.42)',
  },
];

export function CareerTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="section-screen border-b border-white/8 bg-black/15">
      <div className="section-shell section-screen-inner">
        <p className="text-sm font-black uppercase tracking-[0.36em] text-violet-300">
          My Journey
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
          Career Timeline
        </h2>

        {/* DESKTOP */}
        <div className="relative mt-16 hidden lg:block">
          <div className="grid grid-cols-[22px_repeat(4,minmax(0,1fr))_22px] gap-x-7 gap-y-4">
            {/* line + end points */}
            <div className="relative col-[1/7] row-[1] h-[72px]">
              <motion.div
                className="timeline-track absolute inset-x-0 top-1/2 -translate-y-1/2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.15 }}
                style={{ transformOrigin: 'left' }}
              />

              <span className="timeline-cap absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              <span className="timeline-cap absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2" />
            </div>

            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const theme = timelineThemes[index % timelineThemes.length];

              const timelineStyle = {
                '--timeline-accent': theme.accent,
                '--timeline-soft': theme.accentSoft,
                '--timeline-border': theme.accentBorder,
                '--timeline-glow': theme.accentGlow,
              } as CSSProperties;

              return (
                <motion.button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="group row-[1/4] flex w-full flex-col items-center text-left"
                  style={{
                    ...timelineStyle,
                    gridColumn: index + 2,
                  }}
                >
                  <div className="relative z-10 flex h-[72px] w-full items-center justify-center">
                    <div className="timeline-marker-glow" />

                    <div
                      className={`timeline-marker ${
                        isActive ? 'timeline-marker--active' : ''
                      }`}
                    >
                      <span className="timeline-marker-inner">
                        <span className="timeline-marker-dot" />
                      </span>
                    </div>
                  </div>

                  <p
                    className="mt-2 w-full max-w-[320px] text-left text-sm font-black"
                    style={{ color: theme.accent }}
                  >
                    {item.year}
                  </p>

                  <div
                    className={`timeline-card mt-5 w-full max-w-[320px] min-h-[225px] rounded-3xl p-6 transition duration-300 ${
                      isActive
                        ? 'translate-y-[-4px] opacity-100'
                        : 'opacity-75 hover:translate-y-[-3px] hover:opacity-100'
                    }`}
                  >
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        background: theme.accentSoft,
                        border: `1px solid ${theme.accentBorder}`,
                        color: theme.accent,
                        boxShadow: `0 0 26px ${theme.accentGlow}`,
                      }}
                    >
                      <Icon size={23} />
                    </div>

                    <h3 className="text-lg font-black leading-snug text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/58">
                      {item.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

{/* MOBILE / TABLET */}
<div className="mt-12 lg:hidden">
  <div className="timeline-mobile-desktop-like relative">
    <span className="timeline-mobile-end timeline-mobile-end--top" />
    <span className="timeline-mobile-end timeline-mobile-end--bottom" />

    {timelineItems.map((item, index) => {
      const Icon = item.icon;
      const isActive = activeIndex === index;
      const theme = timelineThemes[index % timelineThemes.length];

      const timelineStyle = {
        '--timeline-accent': theme.accent,
        '--timeline-soft': theme.accentSoft,
        '--timeline-border': theme.accentBorder,
        '--timeline-glow': theme.accentGlow,
      } as CSSProperties;

      return (
        <motion.button
          key={item.year}
          type="button"
          onClick={() => setActiveIndex(index)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.12 }}
          className="timeline-mobile-desktop-like-item group relative grid w-full grid-cols-[64px_1fr] gap-x-5 text-left"
          style={timelineStyle}
        >
          <div className="relative z-10 flex justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <div className="timeline-marker-glow" />

              <div
                className={`timeline-marker ${
                  isActive ? 'timeline-marker--active' : ''
                }`}
              >
                <span className="timeline-marker-inner">
                  <span className="timeline-marker-dot" />
                </span>
              </div>
            </div>
          </div>

          <div>
            <p
              className="pt-4 text-sm font-black"
              style={{ color: theme.accent }}
            >
              {item.year}
            </p>

            <div
              className={`timeline-card mt-4 w-full rounded-3xl p-6 transition duration-300 ${
                isActive
                  ? 'translate-y-[-4px] opacity-100'
                  : 'opacity-75 hover:translate-y-[-3px] hover:opacity-100'
              }`}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: theme.accentSoft,
                  border: `1px solid ${theme.accentBorder}`,
                  color: theme.accent,
                  boxShadow: `0 0 26px ${theme.accentGlow}`,
                }}
              >
                <Icon size={23} />
              </div>

              <h3 className="text-lg font-black leading-snug text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/58">
                {item.description}
              </p>
            </div>
          </div>
        </motion.button>
      );
    })}
  </div>
</div>
      </div>
    </section>
  );
}