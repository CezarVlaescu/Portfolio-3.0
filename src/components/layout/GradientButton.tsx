import type { ReactNode } from 'react';

type GradientButtonProps = {
  children: ReactNode;
  href?: string;
};

export function GradientButton({ children, href = '#contact' }: GradientButtonProps) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-500
        to-orange-400
        px-7
        py-4
        text-sm
        font-bold
        text-white
        shadow-[0_0_35px_rgba(236,72,153,0.35)]
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_55px_rgba(249,115,22,0.45)]
        sm:px-8
        sm:py-4
        lg:h-[58px]
        lg:px-9
        lg:text-[15px]
      "
    >
      {children}

      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-white/20
          text-sm
          transition
          group-hover:translate-x-1
          lg:h-8
          lg:w-8
        "
      >
        →
      </span>
    </a>
  );
}