import { type CSSProperties } from 'react';
import { motion } from 'motion/react';
import { Code2, Sparkles, Trophy } from 'lucide-react';
import { hardSkills, serviceCards, softSkills } from '../../data/skills';
import skillsPortrait from '../../assets/images/signature-card.png';

const serviceThemes = [
  {
    accent: '#d946ef',
    soft: 'rgba(217, 70, 239, 0.10)',
    border: 'rgba(217, 70, 239, 0.45)',
    glow: 'rgba(217, 70, 239, 0.30)',
  },
  {
    accent: '#38bdf8',
    soft: 'rgba(56, 189, 248, 0.10)',
    border: 'rgba(56, 189, 248, 0.45)',
    glow: 'rgba(56, 189, 248, 0.28)',
  },
  {
    accent: '#2dd4bf',
    soft: 'rgba(45, 212, 191, 0.10)',
    border: 'rgba(45, 212, 191, 0.45)',
    glow: 'rgba(45, 212, 191, 0.28)',
  },
  {
    accent: '#fb923c',
    soft: 'rgba(251, 146, 60, 0.10)',
    border: 'rgba(251, 146, 60, 0.45)',
    glow: 'rgba(251, 146, 60, 0.28)',
  },
];

const infoThemes = {
  conferences: {
    accent: '#fbbf24',
    soft: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.32)',
    glow: 'rgba(251, 191, 36, 0.20)',
  },
  hard: {
    accent: '#67e8f9',
    soft: 'rgba(103, 232, 249, 0.08)',
    border: 'rgba(103, 232, 249, 0.30)',
    glow: 'rgba(103, 232, 249, 0.18)',
  },
  soft: {
    accent: '#6ee7b7',
    soft: 'rgba(110, 231, 183, 0.08)',
    border: 'rgba(110, 231, 183, 0.30)',
    glow: 'rgba(110, 231, 183, 0.18)',
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-screen border-b border-white/8">
      <div className="section-shell section-screen-inner">
        <p className="text-sm font-bold uppercase tracking-[0.32em] text-fuchsia-300">
          What I Do
        </p>

        <h2 className="mt-3 text-4xl font-black md:text-5xl">
          Skills, Services & Strengths
        </h2>

        <div className="mt-12 grid items-center gap-7 lg:grid-cols-[0.9fr_0.8fr_1.1fr]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              const theme = serviceThemes[index % serviceThemes.length];

              const cardStyle = {
                '--skill-accent': theme.accent,
                '--skill-soft': theme.soft,
                '--skill-border': theme.border,
                '--skill-glow': theme.glow,
              } as CSSProperties;

              return (
                <motion.div
                  key={card.title}
                  className="skill-service-card group rounded-3xl p-6"
                  style={cardStyle}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="skill-icon-box">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-xl font-black leading-snug text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {card.description}
                  </p>

                  <button
                    type="button"
                    aria-label={`Open ${card.title}`}
                    className="skill-arrow-button mt-6"
                  >
                    →
                  </button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="relative flex min-h-[430px] items-center justify-center overflow-visible"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <img
              src={skillsPortrait}
              alt="Cezar portrait card"
              draggable={false}
              className="
                pointer-events-none
                relative
                z-10
                w-full
                max-w-[430px]
                select-none
                object-contain
                drop-shadow-[0_0_55px_rgba(168,85,247,0.28)]
                lg:max-w-[470px]
                xl:max-w-[520px]
              "
            />
          </motion.div>

          <div className="space-y-5">
            <div
              className="skill-info-card rounded-3xl p-6"
              style={
                {
                  '--skill-accent': infoThemes.conferences.accent,
                  '--skill-soft': infoThemes.conferences.soft,
                  '--skill-border': infoThemes.conferences.border,
                  '--skill-glow': infoThemes.conferences.glow,
                } as CSSProperties
              }
            >
              <div className="flex items-center gap-3">
                <Trophy className="text-[var(--skill-accent)]" />
                <h3 className="text-xl font-black text-white">
                  Conferences & Career Fairs
                </h3>
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

            <div
            className="skill-info-card rounded-3xl p-6"
            style={
              { 
                '--skill-accent': infoThemes.hard.accent, 
                '--skill-soft': infoThemes.hard.soft, 
                '--skill-border': infoThemes.hard.border, 
                '--skill-glow': infoThemes.hard.glow 
              } as CSSProperties
            }
            >
              <div className="flex items-center gap-3">
                <Code2 size={24} className="text-[var(--skill-accent)]" />
                <h3 className="text-xl font-black text-[var(--skill-accent)]">
                  Hard Skills
                </h3>
              </div>
              
              <div className="mt-5 flex flex-wrap gap-2">
                {hardSkills.map((skill) => ( <span key={skill} className="skill-pill">{skill}</span>))}
              </div>
            </div>

            <div
            className="skill-info-card rounded-3xl p-6"
            style={
              {
                '--skill-accent': infoThemes.soft.accent,
                '--skill-soft': infoThemes.soft.soft,
                '--skill-border': infoThemes.soft.border,
                '--skill-glow': infoThemes.soft.glow,
              } as CSSProperties
            }
            >
              <div className="flex items-center gap-3">
                <Sparkles size={24} className="text-[var(--skill-accent)]" />
                <h3 className="text-xl font-black text-[var(--skill-accent)]">Soft Skills</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {softSkills.map((skill) => (<span key={skill} className="skill-pill">{skill}</span>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}