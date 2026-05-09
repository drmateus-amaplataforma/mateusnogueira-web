/**
 * JSON-LD schema helpers para Rich Results do Google.
 *
 * Strings são literais para que `JSON.stringify(...)` produza o objeto exato
 * que o Google Rich Results Test consome. O `@id` de cada entidade é
 * canônico — referencie-o em outras entidades em vez de aninhar duplicatas.
 *
 * Validador: https://search.google.com/test/rich-results
 */

import { author, book, bookMev } from '@/lib/design-tokens';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://mateusnogueira.com.br';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// =====================================================================
// Helpers internos
// =====================================================================

const SOCIAL_PROFILES = [
  // TODO Doutor: confirmar URL do LinkedIn pessoal (slug atual é placeholder)
  'https://www.linkedin.com/in/dr-mateus-antunes-nogueira',
  'https://www.instagram.com/drmateus.nogueira',
  'https://www.youtube.com/@drmateusnogueiravidaativa',
] as const;

// =====================================================================
// Person — Dr. Mateus Antunes Nogueira
// =====================================================================

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: author.name,
    url: SITE_URL,
    image: `${SITE_URL}/sobre/dr-mateus-portrait.jpg`,
    jobTitle: 'Cirurgião do aparelho digestivo, médico do esporte e nutrólogo',
    description: author.bio,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'CRM-SP',
      value: '97070',
    },
    knowsLanguage: ['pt-BR'],
    knowsAbout: [
      'Avaliação metabólica avançada',
      'Calorimetria indireta',
      'Teste cardiopulmonar de exercício (TCPE)',
      'Medicina do estilo de vida',
      'Cirurgia do aparelho digestivo',
      'Nutrologia',
      'Medicina do esporte',
      'Fisiologia do exercício',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidade de São Paulo',
      url: 'https://www5.usp.br/',
      sameAs: 'https://en.wikipedia.org/wiki/University_of_S%C3%A3o_Paulo',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Plataforma AMA',
        url: 'https://amaplataforma.com.br',
      },
      {
        '@type': 'Organization',
        name: 'Vida Ativa Ensino e Pesquisa',
        url: 'https://vidaativaensino.com.br',
      },
      {
        '@type': 'MedicalBusiness',
        name: 'Oxy Recovery',
        // TODO Doutor: site Oxy quando publicado
      },
    ],
    sameAs: [...SOCIAL_PROFILES],
  } as const;
}

// =====================================================================
// WebSite — site institucional
// =====================================================================

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: author.name,
    inLanguage: 'pt-BR',
    publisher: { '@id': PERSON_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  } as const;
}

// =====================================================================
// Book — LP1 (Avaliação Metabólica) e LP2 (Nova Medicina)
// =====================================================================

type BookSlug = 'avaliacao-metabolica' | 'nova-medicina';

const BOOK_DATA: Record<
  BookSlug,
  {
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    atheneuUrl: string;
    pages: number;
    price: number;
    isbn: string | null;
  }
> = {
  'avaliacao-metabolica': {
    title: book.title,
    subtitle: book.subtitle,
    description:
      'O método para dominar Calorimetria Indireta e Teste Cardiopulmonar de Exercício na prática clínica. Aborda Sistema de Validação Dialógica de Limiares (SVDL), Mapa Metabólico Modificado em 5 zonas e a Medicina do Estilo de Vida 3.0. Para profissionais de saúde.',
    coverImage: `${SITE_URL}/livros/avaliacao/capa-livro.png`,
    atheneuUrl: book.atheneuUrl,
    pages: book.estimatedPages,
    price: book.priceFull,
    isbn: book.isbn,
  },
  'nova-medicina': {
    title: bookMev.title,
    subtitle: bookMev.subtitle,
    description:
      'Não é mais um livro sobre dieta nem sobre força de vontade. É o convite para entender como o corpo realmente funciona — e por que tudo o que disseram sobre calorias, treino exaustivo e disciplina passa longe do que a ciência hoje sabe. Para público leigo qualificado.',
    coverImage: `${SITE_URL}/livros/nova-medicina/capa-livro.png`,
    atheneuUrl: bookMev.atheneuUrl,
    pages: bookMev.estimatedPages,
    price: bookMev.priceFull,
    // TODO Doutor: confirmar ISBN com Editora Atheneu (omitido até confirmação)
    isbn: null,
  },
};

export function getBookSchema(slug: BookSlug) {
  const data = BOOK_DATA[slug];
  const url = `${SITE_URL}/livros/${slug}`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${url}#book`,
    name: data.title,
    alternateName: data.subtitle,
    description: data.description,
    image: data.coverImage,
    url,
    inLanguage: 'pt-BR',
    // TODO Doutor: confirmar com Atheneu se a 1ª edição é Hardcover ou
    // Paperback. Mantemos schema.org/BookFormatType "Hardcover" como
    // hipótese editora científica padrão; corrigir se Paperback.
    bookFormat: 'https://schema.org/Hardcover',
    numberOfPages: data.pages,
    datePublished: '2026-05-24',
    author: { '@id': PERSON_ID },
    publisher: {
      '@type': 'Organization',
      name: 'Editora Atheneu',
      url: 'https://www.atheneu.com.br',
      foundingDate: '1928',
    },
    offers: {
      '@type': 'Offer',
      url: data.atheneuUrl,
      priceCurrency: 'BRL',
      price: String(data.price.toFixed(2)),
      availability: 'https://schema.org/PreOrder',
      availabilityStarts: '2026-05-24',
      priceValidUntil: '2026-05-24',
      seller: {
        '@type': 'Organization',
        name: 'Editora Atheneu',
        url: 'https://www.atheneu.com.br',
      },
    },
  };

  if (data.isbn) {
    schema.isbn = data.isbn;
  }

  return schema;
}

// =====================================================================
// Course — /palestras (formato de educação corporativa)
// =====================================================================
//
// Schema.org/Course é o tipo canônico para conteúdo educacional
// estruturado. Modelamos as palestras como um único Course com 3
// CourseInstance (keynote, workshop, mentoria) — cada um com courseMode
// diferente. Provider é o Dr. Mateus pessoal (Person), não uma org.

export function getCourseSchema() {
  const url = `${SITE_URL}/palestras`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${url}#course`,
    name: 'Palestras com Dr. Mateus Antunes Nogueira',
    description:
      'Keynotes, workshops e mentorias sobre avaliação metabólica avançada, medicina do exercício e medicina do estilo de vida 3.0. Conteúdo científico denso traduzido em recomendações concretas — para empresas, eventos médicos e mídia.',
    url,
    inLanguage: 'pt-BR',
    educationalLevel: 'Professional',
    provider: { '@id': PERSON_ID },
    instructor: { '@id': PERSON_ID },
    audience: {
      '@type': 'Audience',
      audienceType:
        'Empresas, eventos médicos, congressos científicos, mídia e veículos de imprensa',
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'Keynote',
        description:
          'Palestra de abertura ou encerramento (60 min) para plateias de 50 a 1.500 pessoas. Inclui Q&A.',
        courseMode: 'OnSite',
        courseWorkload: 'PT60M',
        instructor: { '@id': PERSON_ID },
      },
      {
        '@type': 'CourseInstance',
        name: 'Workshop',
        description:
          'Imersão prática (4h) com casos clínicos reais, leitura de laudos e exercícios em grupo. Até 80 participantes.',
        courseMode: 'Blended',
        courseWorkload: 'PT4H',
        instructor: { '@id': PERSON_ID },
      },
      {
        '@type': 'CourseInstance',
        name: 'Mentoria executiva',
        description:
          'Acompanhamento 1-a-1, sessões mensais para C-levels e líderes individuais. Avaliação metabólica completa + plano em ciclos de 3 meses.',
        courseMode: 'Online',
        instructor: { '@id': PERSON_ID },
      },
    ],
  } as const;
}

// =====================================================================
// JsonLd helper — renderiza <script type="application/ld+json"> server-side
// =====================================================================

export function jsonLdScriptProps(schema: unknown) {
  return {
    type: 'application/ld+json' as const,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema),
    },
  };
}
