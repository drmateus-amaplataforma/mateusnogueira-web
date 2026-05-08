'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from '@/components/landing/ui/Section';
import { author } from '@/lib/design-tokens';

const CREDS = [
  { label: 'CRM-SP', value: '97.070' },
  { label: 'Doutorado', value: 'USP' },
  { label: 'Especialidades', value: 'Cirurgia · Esporte · Nutrologia' },
  { label: 'Treinou', value: '+1.000 profissionais' },
];

export function S6_Autor() {
  return (
    <Section id="autor" alt>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4"
        >
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-mateus-accent/20 shadow-card-soft">
            <Image
              src="/livros/avaliacao/autor-candidato-1-academico.jpg"
              alt={author.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 space-y-6"
        >
          <p className="eyebrow">Autor</p>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-primary leading-[1.1] tracking-tight">
            Quem assina.
          </h2>

          <p className="text-xl font-extrabold text-mateus-primary">
            {author.name} · <span className="text-mateus-muted font-normal">{author.crm}</span>
          </p>

          <p className="text-lg text-mateus-text/85 leading-relaxed">
            {author.bio}
          </p>

          <p className="text-base text-mateus-text/85 leading-relaxed">
            Autor de <em className="font-serif">Avaliação Metabólica Avançada na Saúde e no Desempenho</em> (Atheneu, 2026).{' '}
            <strong className="font-extrabold text-mateus-primary">
              Fundador da Plataforma AMA
            </strong>{' '}
            (
            <a
              href="https://amaplataforma.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-mateus-primary hover:text-mateus-gold"
            >
              amaplataforma.com.br
            </a>
            ) — sistema clínico que aplica em produção, em tempo real, o método MEV 3.0 descrito no livro.
          </p>

          <div className="bg-mateus-white border border-mateus-accent/15 rounded-xl p-5 mt-6">
            <p className="font-serif italic text-mateus-primary text-lg leading-relaxed">
              “{author.bridge}”
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {CREDS.map((c) => (
              <div key={c.label}>
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-muted">
                  {c.label}
                </p>
                <p className="text-sm font-extrabold text-mateus-primary mt-0.5 leading-snug">
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
