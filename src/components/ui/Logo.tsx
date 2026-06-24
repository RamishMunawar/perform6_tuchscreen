import { cn } from '../../lib/cn';

const LOGO_SRC = '/images/p6-logo.jpg';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="Perform6"
      className={cn('p6-logo block h-auto w-[7.5rem] max-w-full object-contain object-left md:w-[11.5rem]', className)}
      draggable={false}
    />
  );
}
