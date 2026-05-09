'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Carrega lazy-only as DOM features do Framer Motion (animação,
 * hover, tap, whileInView). Reduz o bundle em ~70% vs `motion.*`
 * global em árvores que usam `m.*`.
 *
 * IMPORTANTE: `strict={false}` (default). Precisamos suportar
 * tanto componentes premium novos (`m.*`) quanto LP1/LP2/palestras
 * existentes (`motion.*`). Migração futura de todos para `m.*`
 * permite ativar `strict` e remover ~30 KB extras do bundle.
 *
 * Portado de vae-handson-landing/src/components/landing/MotionProvider.tsx
 * (versão strict — adaptada aqui sem strict pelo motivo acima).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
