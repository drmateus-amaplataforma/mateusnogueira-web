import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold';
  external?: boolean;
  className?: string;
  size?: 'md' | 'lg';
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
  size = 'md',
}: CTAButtonProps) {
  const sizing =
    size === 'lg'
      ? 'text-base font-semibold py-4 px-8'
      : 'text-sm font-semibold py-3 px-6';

  const variantClasses = {
    primary: cn(
      'bg-mateus-primary text-mateus-bg',
      'hover:bg-mateus-primary-deep shadow-cta-primary',
      'hover:shadow-cta-gold'
    ),
    secondary: cn(
      'bg-transparent text-mateus-primary border border-mateus-primary/30',
      'hover:border-mateus-primary hover:bg-mateus-primary/[0.04]'
    ),
    gold: cn(
      'bg-mateus-gold text-mateus-primary-deep',
      'hover:bg-mateus-gold/90 shadow-cta-gold'
    ),
  };

  const className_ = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200',
    sizing,
    variantClasses[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className_}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className_}>
      {children}
    </Link>
  );
}
