export const colors = {
  primary: '#1F2A44',
  primaryDeep: '#0F1A2E',
  accent: '#8B7355',
  gold: '#B08538',
  lilas: '#6B5B95',
  lilasLight: '#9E8FB8',
  lilasDeep: '#4D3E76',
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

// =====================================================
// LP2 — Nova Medicina do Estilo de Vida
// =====================================================

const utmPrefixMev =
  '?utm_source=mateusnogueira&utm_medium=landing&utm_campaign=lp2_novamev';

export const bookMev = {
  title: 'Nova Medicina do Estilo de Vida',
  subtitle: 'Os 6 pilares para uma vida mais longa — e melhor.',
  promise:
    'Da prescrição genérica à medicina personalizada: o método para usar nutrição, movimento e sono como terapia de precisão para uma vida mais longa — e melhor.',
  publisher: 'Editora Atheneu',
  publisherSince: 1928,
  publicationYear: 2026,
  priceFull: 139,
  installments: { count: 3, value: 46.33 },
  preSaleEndDate: '2026-05-24',
  shippingStartDate: '2026-05-24',
  atheneuUrl:
    'https://www.atheneu.com.br/nova-medicina-do-estilo-de-vida',
  ctaUrl: (position: string) =>
    `https://www.atheneu.com.br/nova-medicina-do-estilo-de-vida${utmPrefixMev}&utm_content=${encodeURIComponent(position)}`,
  slug: 'nova-medicina',
  totalChapters: 8,
  totalFigures: 6,
  totalReferences: 68,
  estimatedPages: 120,
} as const;

export const nelson = {
  name: 'Prof. Dr. Nelson Iucif Junior',
  credentials: 'Médico Geriatra e Nutrólogo',
  quote:
    'É um livro que orienta sem intimidar, motiva sem prometer milagres e convida o leitor a assumir o protagonismo da própria trajetória de saúde, com informação de qualidade e senso de responsabilidade.',
} as const;

export const chaptersMev = [
  {
    n: 1,
    title: 'Qual é o estado metabólico natural do ser humano?',
    subtitle: 'Herança evolutiva vs. mundo moderno',
    takeaways: [
      'Atividade física como calibragem, não como queima de calorias',
      'Contradição evolutiva: instintos ancestrais em ambiente de abundância',
      'Por que dietas restritivas falham',
      'Origem dopaminérgica da compulsão alimentar',
    ],
  },
  {
    n: 2,
    title: 'Quebrando paradigmas',
    subtitle: 'Metabolismo, emagrecimento e bem-estar',
    takeaways: [
      'Quantidade vs. qualidade · Metabolismo vs. longevidade',
      'Estudo de San-Millán sobre flexibilidade metabólica',
      'Motor flexível vs. motor travado',
      'Estudo das Enfermeiras: até 14 anos a mais de vida',
      'Sedentarismo é fator de risco comparável ao tabagismo',
    ],
  },
  {
    n: 3,
    title: 'O homem moderno, os alimentos e a medicina ocidental',
    subtitle: 'Hipercalóricos, parâmetros laboratoriais e fórmulas mágicas',
    takeaways: [
      '5 estágios evolutivos do metabolismo humano',
      'Por que 70 anos não bastam para adaptação biológica',
      'Crítica aos atalhos farmacológicos (Mounjaro, Ozempic, sibutramina)',
      'Reframe da culpa: "não é só sua"',
    ],
  },
  {
    n: 4,
    title: 'Expectativa e qualidade de vida',
    subtitle: 'A fome, a insulina, o estresse, o sono — sem pânico',
    takeaways: [
      'Insulina como hormônio central das doenças crônicas',
      'Eixo cortisol-sono-gordura visceral',
      'Por que o pânico bloqueia a transformação',
    ],
  },
  {
    n: 5,
    title: 'Medicina 3.0',
    subtitle: 'Um novo olhar para a saúde',
    takeaways: [
      'Reativo vs. proativo: limites da Medicina 2.0',
      'Caso da paciente com câncer de pâncreas que prolongou sobrevida',
      'Por que protocolos genéricos falham',
      'A virada cognitiva como pré-requisito',
    ],
  },
  {
    n: 6,
    title: 'Os 6 pilares da medicina do estilo de vida',
    subtitle: 'Atividade física · Alimentação · Sono · Estresse · Conexões · Substâncias',
    takeaways: [
      'Hierarquia dos pilares — não é arbitrária',
      '80/20: zonas de treinamento e princípio polarizado',
      'Caso Carlos: VO₂ de 28 → 38 ml/kg/min em 6 meses',
      'Adesão a múltiplos hábitos reduz mortalidade em 63%',
    ],
  },
  {
    n: 7,
    title: 'Blue Zones e lições de longevidade',
    subtitle: 'Ikaria · Okinawa · Sardenha · Nicoya · Loma Linda',
    takeaways: [
      'Tradição empírica vs. ciência aplicada',
      'Tsimané: menores níveis de aterosclerose já registrados em humanos',
      'Caso da paciente com Doença de Crohn + adenocarcinoma',
      'Os Hadza e os Tsimané como espelho evolutivo',
    ],
  },
  {
    n: 8,
    title: 'Saúde em movimento',
    subtitle: 'A prática · O cotidiano · Caso real Paciente L.P.',
    takeaways: [
      'Relato pessoal: trombo no tronco celíaco e a virada profissional',
      'Paciente L.P.: VO₂ 35,3 → 43,0 ml/kg/min em 8 meses',
      '−10,3 kg de gordura · +1,1 kg de músculo',
      'Apêndice: Roteiro de Início Rápido em 7 dias',
    ],
  },
] as const;

export const passagesMev = [
  {
    theme: 'Atividade física · Pilar 1',
    chapter: 6,
    page: 95,
    text: 'A atividade física é mais do que ganho e perda de energia — ela modela todo o metabolismo humano. O que se busca é uma sintonia fina: desenvolver a complexa capacidade metabólica do organismo por meio de um equilíbrio estratégico entre os estímulos da atividade leve e os da atividade intensa. É justamente essa harmonia que favorece a biogênese mitocondrial — literalmente, o corpo passa a produzir mais mitocôndrias.',
    amaScreenshot: '/livros/nova-medicina/ama/zonas-treino.png',
    amaCaption: 'Plataforma AMA · prescrição de zonas de treinamento por VO₂ e limiares',
  },
  {
    theme: 'Conexões sociais · Pilar 5',
    chapter: 6,
    page: 130,
    text: 'O Harvard Study of Adult Development, acompanhando vidas desde 1938, revelou de forma consistente que o fator mais importante para uma vida longa, feliz e saudável não é a riqueza, a fama ou o sucesso profissional — mas sim a qualidade das nossas conexões significativas.',
    amaScreenshot: '/livros/nova-medicina/ama/protocolo-mev.png',
    amaCaption: 'Plataforma AMA · plano de cuidado integrado dos 6 pilares',
  },
  {
    theme: 'Longevidade · Blue Zones',
    chapter: 7,
    page: 155,
    text: 'Um estudo marcante revelou que os Tsimané, na Bolívia, possuem os menores níveis de aterosclerose coronária já registrados em qualquer população humana. A baixa expectativa média não vem de envelhecimento ruim ou doença crônica — mas de mortalidade infantil. Quem sobrevive aos perigos iniciais frequentemente atinge a velhice com uma saúde invejável.',
    amaScreenshot: '/livros/nova-medicina/ama/nutricao-precisao.png',
    amaCaption: 'Plataforma AMA · monitoramento de marcadores metabólicos',
  },
] as const;

export const audienceMev = [
  {
    label: 'Médicos preventivistas e clínicos',
    description:
      'Para quem quer entregar mais que receita: um método baseado em evidências para tratar metabolismo na raiz.',
  },
  {
    label: 'Nutrólogos e nutricionistas',
    description:
      'Da contagem calórica à flexibilidade metabólica: a base científica que reposiciona qualidade acima de quantidade.',
  },
  {
    label: 'Geriatras e medicina de longevidade',
    description:
      'Os 6 pilares operacionalizados em protocolo aplicável — do consultório à rotina do paciente.',
  },
  {
    label: 'Pacientes e cuidadores',
    description:
      'Para quem já tentou tudo: dietas, treinos, medicação. O método para sair do ciclo da culpa.',
  },
  {
    label: 'Adultos focados em longevidade',
    description:
      'Para quem entendeu que viver mais não basta — quer viver melhor, com energia e independência funcional.',
  },
  {
    label: 'Educação física e fisiologistas',
    description:
      'A tradução dos princípios polarizado, FatMax e Zona 2 do esporte para a clínica preventiva.',
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
