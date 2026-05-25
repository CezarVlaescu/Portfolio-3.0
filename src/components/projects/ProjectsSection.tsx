import { motion } from 'motion/react';

import laptopProject1 from '../../assets/images/laptop-project-1.png';
import laptopProject2 from '../../assets/images/laptop-project-2.png';
import phoneProject1 from '../../assets/images/phone-project-1.png';
import phoneProject2 from '../../assets/images/phone-project-2.png';

const projects = [
  {
    title: 'Analytics Dashboard',
    stack: 'Angular · TypeScript',
    description:
      'Real-time analytics dashboard with data visualization and reporting.',
    image: laptopProject1,
    imageClass: 'project-mockup--laptop',
  },
  {
    title: 'TaskFlow App',
    stack: 'Angular · Firebase',
    description:
      'Productivity app with tasks, boards, and real-time sync.',
    image: phoneProject1,
    imageClass: 'project-mockup--phone',
  },
  {
    title: 'ShopEase E-Commerce',
    stack: 'MERN Stack',
    description:
      'Fullstack e-commerce platform with payments and admin panel.',
    image: laptopProject2,
    imageClass: 'project-mockup--laptop',
  },
  {
    title: 'AI Content Assistant',
    stack: 'Next.js · OpenAI API',
    description:
      'AI-powered assistant that helps create, improve and automate content.',
    image: phoneProject2,
    imageClass: 'project-mockup--phone',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-screen section-screen--compact border-b border-white/8">
      <div className="section-shell section-screen-inner">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.36em] text-fuchsia-300">
            Featured Work
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Projects Showcase
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/58 md:text-base">
            A selection of projects I&apos;ve built with passion.
          </p>
        </div>

        <div className="projects-grid-clean mt-14">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-clean-item"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="project-clean-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className={`project-clean-image ${project.imageClass}`}
                />
              </div>

              <div className="project-clean-card">
                <h3 className="text-lg font-black leading-snug text-white">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm font-bold text-violet-300">
                  {project.stack}
                </p>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/58">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button type="button" className="project-primary-button">
                    Live Demo
                  </button>

                  <button type="button" className="project-secondary-button">
                    View Project
                  </button>

                  <button type="button" className="project-github-button">
                    GitHub
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}