export const colors = {
  primary: '#1F2A44',
  primaryDeep: '#0F1A2E',
  accent: '#8B7355',
  gold: '#B08538',
  bg: '#FAF7F2',
  bgAlt: '#F0EBE3',
  text: '#1F2A44',
  muted: '#8B7355',
  white: '#FFFFFF',
} as const;

export const motion = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  spring: {
    type: 'spring',
    stiffness: 260,
    damping: 18,
  },
  stagger: (i: number) => ({ delay: i * 0.1 }),
} as const;

export const layout = {
  containerMaxW: '1200px',
  narrowMaxW: '880px',
  sectionPaddingY: {
    desktop: '120px',
    mobile: '80px',
  },
} as const;

const utmPrefix = '?utm_source=mateusnogueira&utm_medium=landing&utm_campaign=lp1_avalmetab';

export const book = {
  title: 'Avaliação Metabólica Avançada na Saúde e no Desempenho',
  subtitle:
    'Calorimetria Indireta e Teste de Performance Cardiopulmonar na prática clínica. MEV 3.0',
  promise:
    'Da estimativa à medição: o método para dominar Calorimetria Indireta e Teste Cardiopulmonar como terapia de precisão na prática clínica.',
  publisher: 'Editora Atheneu',
  publisherSince: 1928,
  publicationYear: 2026,
  priceFull: 219,
  installments: { count: 5, value: 43.8 },
  preSaleEndDate: '2026-05-24',
  shippingStartDate: '2026-05-24',
  atheneuUrl:
    'https://www.atheneu.com.br/avaliacao-metabolica-avancada-na-saude-e-no-desempenho',
  ctaUrl: (position: string) =>
    `https://www.atheneu.com.br/avaliacao-metabolica-avancada-na-saude-e-no-desempenho${utmPrefix}&utm_content=${encodeURIComponent(position)}`,
  slug: 'avaliacao-metabolica',
  totalChapters: 11,
  totalFigures: 235,
  totalReferences: 100,
  estimatedPages: 350,
  isbn: null,
} as const;

export const author = {
  name: 'Dr. Mateus Antunes Nogueira',
  crm: 'CRM-SP 97.070',
  specialties: [
    'Cirurgião do aparelho digestivo',
    'Médico do esporte',
    'Nutrólogo',
  ],
  doctorate: 'Universidade de São Paulo',
  professionalsTrained: 1000,
  bio: 'Cirurgião do aparelho digestivo, médico do esporte e nutrólogo. Doutor pela Universidade de São Paulo. Mais de 10 anos atuando na interface entre cirurgia, fisiologia integrativa e medicina do estilo de vida.',
  bridge:
    'Cirurgião que escreveu o livro. Fundador da plataforma que aplica o método em tempo real.',
} as const;

export const werutsky = {
  name: 'Prof. Dr. Carlos Alberto Werutsky',
  credentials:
    'Médico Nutrólogo (ABRAN/AMB/CFM) · Médico do Esporte (SBMEE/AMB/CFM) · Mestre em Ciências do Movimento Humano (UFRGS) · Doutor em Clínica Médica (FMRP-USP) · Diretor do Departamento de Nutrologia Esportiva da ABRAN',
  quote:
    'Ao folhar as páginas desse livro, o leitor vai encontrar uma abordagem científica de temas como avaliação metabólica avançada com ferramentas como a calorimetria indireta e o Teste Cardiopulmonar — com aplicação prática em estudos de casos.',
} as const;

export const chapters = [
  {
    n: 1,
    title: 'A Crise Metabólica Moderna',
    subtitle: 'Justificativa para uma Nova Abordagem Clínica (MEV 3.0)',
    takeaways: [
      'O descompasso metabólico moderno entre genoma ancestral e ambiente atual',
      'Lições das Blue Zones, Hadza e Tsimané',
      'Limitações da Medicina 2.0 reativa',
      'Proposta integrativa da MEV 3.0',
    ],
  },
  {
    n: 2,
    title: 'Fisiologia da Saúde Metabólica',
    subtitle: 'O papel central da mitocôndria e bioenergética',
    takeaways: [
      'Macronutrientes e geração de ATP',
      'Sistemas energéticos como continuum',
      'Lactato como "lactormônio" e maestro metabólico',
      'Adaptações ao treino aeróbico vs HIIT',
      'VFC como leitura do SNA',
    ],
  },
  {
    n: 3,
    title: 'A Avaliação Basal',
    subtitle: 'Anamnese, exame físico e composição corporal',
    takeaways: [
      'Anamnese como ferramenta terapêutica',
      'Crítica ao IMC e métodos de composição corporal',
      'Sinais clínicos de resistência à insulina',
      'Painel laboratorial inflamatório e hormonal',
    ],
  },
  {
    n: 4,
    title: 'O Mapa Metabólico em Repouso',
    subtitle: 'Calorimetria Indireta',
    takeaways: [
      'Da estimativa (Harris-Benedict) à medição direta de TMR',
      'Equação de Weir e princípio estequiométrico VO₂/VCO₂',
      'Quociente Respiratório como janela da flexibilidade metabólica',
      'Interpretação qualitativa do laudo',
      'Estudos de caso: síndrome metabólica vs. atleta de elite',
    ],
  },
  {
    n: 5,
    title: 'O Mapa Metabólico em Movimento',
    subtitle: 'Teste Cardiopulmonar de Exercício (TCPE)',
    takeaways: [
      'VO₂máx como preditor independente de mortalidade',
      'Limiares LV1 e LV2, Pulso de O₂, eficiência ventilatória',
      '9 painéis de Wasserman',
      'Mapa Metabólico Modificado em 5 zonas',
      'Sistema de Validação Dialógica de Limiares (SVDL)',
    ],
  },
  {
    n: 6,
    title: 'Avaliação Molecular',
    subtitle: 'Genômica e metabolômica como ferramentas complementares',
    takeaways: [
      'Assinatura molecular como complemento do diagnóstico funcional',
      'Genômica aplicada ao metabolismo e ao esporte',
      'Metabolômica como fotografia química do estado metabólico',
      'Quando indicar ômicas na prática clínica',
    ],
  },
  {
    n: 7,
    title: 'Nutrição de Precisão',
    subtitle: 'Abastecendo o motor metabólico',
    takeaways: [
      'Nutrição para a saúde celular antes da contagem de calorias',
      'Abordagem qualitativa dos macronutrientes',
      'Nutrient timing sincronizado com o estímulo de exercício',
      'Microbiota como ecossistema terapêutico',
      'Suplementação estratégica e hidratação',
    ],
  },
  {
    n: 8,
    title: 'O Estímulo',
    subtitle: 'Princípios e prescrição do exercício de precisão',
    takeaways: [
      'Modelo polarizado 80/20 baseado em evidências',
      'Prescrição do "atleta da saúde" ao atleta de performance',
      'Excesso de exercício e desadaptação metabólica',
      'Sinergia força + mobilidade',
      'VFC como guia de prontidão autonômica',
    ],
  },
  {
    n: 9,
    title: 'A Interação dos Pilares',
    subtitle: 'Mente, sono e ambiente para a saúde metabólica',
    takeaways: [
      'Sono como fundação da recuperação metabólica',
      'Manejo do estresse para resiliência metabólica',
      'Conexões sociais como pilar mensurável',
      'Modulação neuroendócrina integrada',
    ],
  },
  {
    n: 10,
    title: 'Emagrecimento de Precisão',
    subtitle: 'Restauração metabólica sustentável',
    takeaways: [
      'Desconstruindo a "doença da obesidade"',
      'Diagnóstico funcional da disfunção adipocitária',
      'Reprogramação metabólica via sinais corretos',
      'Recomposição corporal como saúde restaurada',
    ],
  },
  {
    n: 11,
    title: 'Da Fisiologia de Precisão à Longevidade Funcional',
    subtitle: 'Síntese e aplicação do método MEV 3.0',
    takeaways: [
      'Médico como "arquiteto metabólico"',
      'Trajetória estruturada do paciente em 5 fases',
      'MEV 3.0 e a Medicina dos 4 P\'s',
      'Da disfunção mitocondrial ao "atleta da saúde"',
    ],
  },
] as const;

export const passages = [
  {
    theme: 'TCPE / Ergoespirometria',
    chapter: 5,
    page: 118,
    text: 'Assim como um teste de estresse cardiológico revela isquemias não aparentes em um eletrocardiograma de repouso, o estresse do exercício revela a saúde mitocondrial e a flexibilidade metabólica em sua dimensão mais autêntica. Décadas de estudos epidemiológicos demonstram, de forma consistente, que o VO₂máx possui forte e inversa associação com a mortalidade por todas as causas e por doenças cardiovasculares.',
    amaScreenshot: '/livros/avaliacao/ama/tcpe-svdl.png',
    amaCaption: 'Plataforma AMA · análise de curvas ventilatórias com SVDL aplicado',
  },
  {
    theme: 'Calorimetria Indireta',
    chapter: 4,
    page: 85,
    text: 'A Calorimetria Indireta elimina a incerteza ao substituir a estimativa pela medição direta do motor metabólico do paciente, em tempo real. O Quociente Respiratório se torna protagonista — uma janela para a função mitocondrial e para a flexibilidade metabólica, revelando qual combustível o organismo utiliza em repouso. Se a TMR nos diz quanto o corpo gasta, o QR nos diz como ele gasta.',
    amaScreenshot: '/livros/avaliacao/ama/calorimetria.png',
    amaCaption: 'Plataforma AMA · módulo de Calorimetria Indireta em produção',
  },
  {
    theme: 'Laudo · Mapa Metabólico',
    chapter: 5,
    page: 205,
    text: 'O laudo do TCPE deixa de ser um simples documento diagnóstico para se tornar o manual de instruções do paciente. Um VO₂máx elevado, limiares ventilatórios em altas intensidades e depuração eficiente de lactato não são apenas marcadores de performance — são os sinais vitais de uma rede mitocondrial saudável. O Mapa Metabólico Modificado em 5 zonas traduz toda essa riqueza de dados em uma prescrição com doses e alvos.',
    amaScreenshot: '/livros/avaliacao/ama/laudo.png',
    amaCaption: 'Plataforma AMA · geração de laudo com método aplicado',
  },
] as const;
