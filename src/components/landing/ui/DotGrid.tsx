type DotGridProps = {
  className?: string;
};

/**
 * Pattern decorativo em SVG/CSS gradient (não imagem). Usa a
 * utility `.dot-grid-mateus` definida em globals.css (gold dots
 * 1px sobre transparente, grid 28×28 px).
 *
 * Portado de vae-handson-landing/src/components/landing/DotGrid.tsx
 * — variante mateus usa cor #B08538 (gold) em vez do dourado VAE.
 */
export function DotGrid({ className = '' }: DotGridProps) {
  return (
    <div
      className={`absolute inset-0 dot-grid-mateus pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
