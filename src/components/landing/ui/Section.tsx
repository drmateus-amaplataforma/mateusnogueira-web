import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  alt?: boolean;
  children: React.ReactNode;
}

export function Section({ id, className, alt = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-py',
        alt ? 'bg-mateus-bg-alt' : 'bg-mateus-bg',
        className
      )}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'space-y-4',
        align === 'center' && 'text-center mx-auto max-w-narrow',
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-mateus-primary">{heading}</h2>
      {subheading && (
        <p className="text-lg text-mateus-muted max-w-2xl leading-relaxed">{subheading}</p>
      )}
    </header>
  );
}
