import { motion } from 'motion/react';
import { GradientButton } from '../layout/GradientButton';
import rightHeroSection from '../../assets/images/right-hero-section-transparent-2x.png';

export function HeroSection() {
  return (
    <section
    id="home"
    className="hero-grid-bg relative min-h-screen overflow-hidden border-b border-white/8 pt-24 lg:min-h-[760px] lg:pt-20"
    >
      <div className="hero-local-bg pointer-events-none absolute inset-0" />
      <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-32 lg:h-40" />

      <div
      className="
      section-shell
      relative
      z-10
      grid
      min-h-[calc(100vh-96px)]
      items-center
      gap-6
      pb-14
      lg:min-h-[680px]
      lg:grid-cols-[0.88fr_1.12fr]
      lg:gap-8
      lg:pb-0
      "
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-20 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-xs
              text-white/70
              backdrop-blur
              sm:text-sm
              lg:mb-7
            "
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)]" />
            Frontend Developer · Building the Future
          </div>

          <h1
            className="
              max-w-[620px]
              text-[48px]
              font-black
              leading-[0.95]
              tracking-tight
              sm:text-[62px]
              md:text-[72px]
              xl:text-[82px]
            "
          >
            Hi, I&apos;m <span className="neon-text">Cezar</span>
          </h1>

          <p
          className="
          mx-auto
          mt-6
          max-w-[560px]
          text-sm
          leading-7
          text-white/68
          sm:text-base
          lg:mx-0
          xl:text-lg
          xl:leading-8
          "
          >
            I craft beautiful, fast and accessible web experiences. Frontend Developer today,
            Fullstack Builder tomorrow. I love turning ideas into scalable solutions.
          </p>

          <div className="mt-8 lg:mt-9">
            <GradientButton href="#contact">Contact Me</GradientButton>
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-white/45 lg:mt-9">
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1">
              <span className="h-2 w-1 rounded-full bg-white/50" />
            </span>
            Scroll Down
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="
            relative
            z-10
            mt-2
            flex
            min-h-[220px]
            w-full
            items-center
            justify-center
            sm:min-h-[290px]
            md:min-h-[340px]
            lg:mt-0
            lg:min-h-[400px]
          "
        >
          <div className="hero-image-glow bottom-[18%] right-[12%] hidden lg:block" />

          <img
          src={rightHeroSection}
          alt="Cezar portfolio hero"
          draggable={false}
          className="
          pointer-events-none
          relative
          z-10
          w-[350px]
          max-w-[108%]
          select-none
          object-contain
          drop-shadow-[0_0_40px_rgba(34,211,238,0.14)]
          sm:w-[430px]
          md:w-[520px]
          lg:absolute
          lg:left-[20px]
          lg:top-1/2
          lg:w-[650px]
          lg:max-w-none
          lg:-translate-y-1/2
          xl:left-[40px]
          xl:w-[710px]
          2xl:left-[70px]
          2xl:w-[750px]
          "
          />
        </motion.div>
      </div>
    </section>
  );
}