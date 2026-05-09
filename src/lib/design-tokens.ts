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
// Reescrita 09/05/2026 (sessão pós-bug) com base na leitura
// integral do manuscrito (147 páginas) e síntese em
// docs/livro-nova-mev/SINTESE_PARA_LP2.md
// =====================================================

const utmPrefixMev =
  '?utm_source=mateusnogueira&utm_medium=landing&utm_campaign=lp2_novamev';

export const bookMev = {
  title: 'Nova Medicina do Estilo de Vida',
  subtitle: 'Prevenção, Tratamento e Longevidade',
  promise:
    'Não é mais um livro sobre dieta. Não é sobre força de vontade. É o convite para entender como seu corpo realmente funciona — e por que tudo o que te disseram sobre calorias, treino exaustivo e disciplina passa muito longe do que a ciência hoje já sabe.',
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
  totalFigures: 10,
  totalReferences: 68,
  estimatedPages: 147,
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
    subtitle: 'Por que seu corpo se sente travado num mundo de abundância',
    takeaways: [
      'Por que seus ancestrais andavam 10 km por dia — e o que isso ainda muda no seu corpo hoje',
      'A "calibragem do motor": entender por que o movimento não é castigo, é regulagem',
      'A contradição que o seu cérebro vive: ele te empurra para o sofá e o chocolate',
      'Por que dietas restritivas falham — não é falta de força de vontade',
    ],
  },
  {
    n: 2,
    title: 'Quebrando paradigmas',
    subtitle: 'A conversa franca: o que ninguém te contou sobre metabolismo',
    takeaways: [
      'A história do colega cirurgião com bife e alface — por que comer pouco não funciona',
      'Por que contar caloria é a métrica errada (e o que de fato importa no prato)',
      'A pesquisa que mostrou: 150 minutos por semana = até 14 anos a mais de vida',
      'Por que ficar parado pesa quase tanto na saúde quanto fumar',
    ],
  },
  {
    n: 3,
    title: 'O homem moderno, os alimentos e a medicina ocidental',
    subtitle: 'Como 70 anos de comida industrial mudaram a sua biologia',
    takeaways: [
      'A pirâmide alimentar que orientou o mundo inteiro estava errada — entenda o porquê',
      'A diferença que muda tudo: in natura, processado e ultraprocessado',
      'Por que até "bisnaga light" pode ser inimigo do seu metabolismo',
      'O que a indústria não te conta sobre conservantes, corantes e gordura trans',
    ],
  },
  {
    n: 4,
    title: 'Expectativa e qualidade de vida',
    subtitle: 'Os exames de rotina mentem? E o que pedir para descobrir a verdade',
    takeaways: [
      'Por que o "tá tudo normal" do seu exame pode estar te enganando',
      'O que é a glicemia de quem realmente vive saudável (e por que a referência atual é frouxa)',
      'O sono, o estresse e a insulina: o triângulo que decide tudo',
      'Como sair da angústia da balança e olhar para os marcadores que importam',
    ],
  },
  {
    n: 5,
    title: 'Medicina 3.0',
    subtitle: 'Quando "tomar remédio" deixa de ser a única resposta',
    takeaways: [
      'A diferença entre apagar incêndio (Medicina 2.0) e cuidar da casa (Medicina 3.0)',
      'Por que a fragmentação dos especialistas frequentemente não cura nada',
      'O que muda quando seu médico passa a olhar a causa, não só o sintoma',
      'A virada de chave: você como protagonista, o médico como guia',
    ],
  },
  {
    n: 6,
    title: 'Os 6 pilares da Medicina do Estilo de Vida',
    subtitle: 'Movimento · Alimentação · Sono · Estresse · Conexões · Sem tóxicos',
    takeaways: [
      'O movimento certo: caminhar num ritmo onde você ainda consegue conversar',
      'O prato simples: metade vegetais, um quarto proteína de qualidade — comer devagar até 80% satisfeito',
      'O sono como remédio gratuito (e por que a tela antes de dormir destrói tudo)',
      'O estresse: 5 minutos de pausa que tiram seu corpo do modo "luta ou fuga"',
      'As conexões sociais como fator de longevidade — comprovado pelo estudo mais longo do mundo',
    ],
  },
  {
    n: 7,
    title: 'Blue Zones e lições de longevidade',
    subtitle: 'O que os povos mais longevos do mundo fazem diferente',
    takeaways: [
      'As 5 Blue Zones do mundo (e por que nenhuma é no Brasil) — Sardenha, Okinawa, Loma Linda, Nicoya, Ikaria',
      'Os Tsimané, na Bolívia: as artérias mais saudáveis já encontradas em qualquer ser humano',
      'O caso clínico da paciente com Doença de Crohn que escapou de uma segunda cirurgia',
      'O que esses povos comem, fazem e cultivam — e o que dá para trazer para a sua semana',
    ],
  },
  {
    n: 8,
    title: 'Saúde em movimento — comece agora',
    subtitle: 'A história pessoal do autor + o roteiro prático para seus primeiros 7 dias',
    takeaways: [
      'A noite em que o autor quase pulou da janela de tanta dor (e o que descobriu na UTI)',
      'A paciente L.P. (58 anos): em 8 meses, o "motor" dela ficou 21% mais potente — ela ganhou músculo perdendo peso',
      'O Apêndice prático: o roteiro dia a dia para começar essa semana, sem assustar a sua rotina',
      'A frase que fecha o livro: "Resta, então, dar o primeiro passo. Comece a sua Vida Ativa!"',
    ],
  },
] as const;

export const audienceMev = [
  {
    label: 'Você que já tentou de tudo',
    description:
      'Você cansou de dietas restritivas, do treino exaustivo e dos efeitos bumerangue. Aqui você vai entender por que nada disso funciona — e o que funciona de verdade.',
  },
  {
    label: 'Você que quer chegar inteiro aos 80, 90, 100',
    description:
      'Não é sobre viver mais. É sobre chegar lá com energia, lucidez e autonomia. O livro mostra o que decide isso muito antes de você sentir.',
  },
  {
    label: 'Você que cuida dos seus pais (ou de você mesmo)',
    description:
      'Esse é o livro que você lê e empresta. Linguagem clara, sem culpa e sem assustar. Útil para conversas difíceis em família.',
  },
  {
    label: 'Você que quer entender por dentro',
    description:
      'Por que o sono importa tanto. Por que sentar mata. Por que o açúcar não é o vilão único. As respostas que ninguém te deu — em linguagem que você compreende.',
  },
  {
    label: 'Você que se sente perdido com tanta informação contraditória',
    description:
      'Influenciador, médico, vizinho — cada um diz uma coisa. Aqui você tem um cirurgião e doutor pela USP separando o que tem ciência do que é moda passageira.',
  },
  {
    label: 'Profissionais de saúde — como humanos primeiro',
    description:
      'Médicos, nutricionistas, fisioterapeutas, educadores físicos. Para ler como gente que também cuida da própria saúde — e para indicar aos pacientes que perguntam demais.',
  },
] as const;

// Anedota curta para abrir o conceito (S4) — texto extraído do Cap 2
// "Certa vez, um colega do centro cirúrgico..." (linha ~354 do manuscrito)
export const anedotaMev = {
  eyebrow: 'Uma cena que se repete',
  hook:
    'Almoço no centro cirúrgico. Um colega — cirurgião plástico, jovem, marombeiro — chega com um prato de alface e uma montanha de bife.',
  conflict:
    'Está desesperado contando calorias. Quer barriga trincada. Acredita que está fazendo o certo.',
  paragraph:
    'Olhei para o prato e disse a ele: "Desse jeito você não vai conseguir nunca." Não pela quantidade — pela escolha. A gordura saturada do bife em excesso, sem o equilíbrio de um carboidrato integral, sem as sementes que ajudariam o índice glicêmico. Cortar carboidrato e empilhar proteína cheia de gordura ruim pode até secar no curto prazo. Mas não constrói saúde.',
  insight:
    'Esse colega é a maioria dos seus amigos. É talvez você. Não é falta de disciplina — é receita errada. O livro inteiro é uma conversa para destravar isso.',
} as const;

// Caso clínico em narrativa de 2 fases — Cap 7, paciente com Doença de Crohn + adenocarcinoma
// Texto sintetizado dos trechos literais do livro (pp 137-139)
export const casoMev = {
  eyebrow: 'Um caso real do consultório',
  heading: 'Quando a cirurgia não basta',
  fase1: {
    label: 'Primeiro encontro',
    text:
      'Uma paciente jovem chegou ao meu consultório por indicação. Tinha Doença de Crohn — uma inflamação crônica do intestino — e o quadro tinha evoluído para um câncer já em nível cirúrgico. O diagnóstico era alarmante: um adenocarcinoma, tipo de câncer frequente em quem convive há anos com inflamações intestinais. Operamos. A cirurgia foi radical: precisei retirar quase todo o intestino grosso para garantir que nada do tumor ficasse para trás. Tentei preservar uma pequena porção do reto para evitar uma colostomia definitiva — uma decisão arriscada, porque essa região continuaria vulnerável à mesma inflamação que originou tudo.',
  },
  ponte: 'Depois da cirurgia, fui claro: precisava mudar tudo no estilo de vida. A força dos antigos padrões — somada à ilusão de que a cirurgia tinha resolvido tudo — falou mais alto. A transformação não aconteceu.',
  fase2: {
    label: 'Dois anos depois',
    text:
      'Recebi a ligação que eu temia: a inflamação no reto havia voltado, e pior, já evoluía novamente para câncer. A única proposta da medicina convencional era a amputação definitiva do reto. Foi o momento de uma conversa franca. Fui categórico: só haveria uma alternativa viável se ela assumisse total responsabilidade pelas mudanças que eu propunha. Não era mais uma recomendação. Era a última chance.',
  },
  resolucao:
    'Desta vez, ela agarrou a oportunidade. Implementamos com rigor uma alimentação anti-inflamatória, e introduzi exercícios físicos na medida certa — aeróbicos e de força, na dose adequada para o corpo dela. Três meses depois, os exames trouxeram o que parecia improvável: a inflamação tinha regredido completamente. Meu colega gastroenterologista, profissional que respeito muito, ficou incrédulo. Para ele, era difícil aceitar que mudança de hábitos pudesse fazer aquilo.',
  closing:
    'A história dessa paciente ensina que a chave para uma vida mais longa e saudável não está em fórmulas mágicas. Está nas escolhas diárias — pequenos gestos que, somados, transformam destinos.',
  question: 'E você? Está pronto para essa conversa?',
} as const;

// Narrativa literal do trombo — Cap 8
// Texto extraído dos trechos literais (pp 140-141)
export const autorMev = {
  eyebrow: 'Autor · A noite em que tudo mudou',
  heading: 'O cirurgião que precisou virar paciente',
  identifier: 'Dr. Mateus Antunes Nogueira · CRM-SP 97.070',
  paragraph1:
    'Eu vivia como muitos que vão pegar este livro. Disciplinado. Contava calorias. Treinava acima da média. Achava que estava fazendo tudo certo. Tinha alguma dificuldade com colesterol, mas atribuía à genética e seguia em frente. Era o que a medicina tradicional ensinava a fazer.',
  paragraph2:
    'Certa noite, acordei com uma dor abdominal intensa. Achei que ia passar. Não passou. No dia seguinte, a dor nas costas piorou independente da posição — eu sabia que não era muscular. Ao final da terça-feira, a dor era tão insuportável que cheguei a pensar em saltar pela janela, de tanto desespero. Eu estava sozinho com minha filha pequena. Minha esposa estava de plantão no hospital. Liguei para um colega me levar ao pronto-socorro.',
  paragraph3:
    'Os exames revelaram uma condição rara: um trombo no tronco celíaco, a artéria que leva sangue ao fígado e ao estômago. O médico vascular explicou: eu tinha sofrido uma dissecção arterial, situação grave em que a artéria quase se rompe. Passei quatro dias na UTI sob observação para garantir que não houvesse rompimento total.',
  pullQuote:
    'Foi um alerta. Eu achava que fazia tudo certo. Descobri que tinha muito a aprender. Já era médico. Já era cirurgião. Foi a partir desse episódio que comecei a estudar nutrição e medicina do esporte com profundidade — para entender como o corpo realmente funciona, na dose certa, no momento certo.',
  paragraph4:
    'Depois do susto, fundei a Vida Ativa Ensino e Pesquisa para levar essa abordagem a outros profissionais de saúde. Sigo sendo cirurgião, especialidade que só foi possível graças à medicina tradicional. Mas atendo, opero, ensino e oriento de outra maneira agora. Esta é a medicina que escrevi para você — a mesma que reconstruiu o que precisava ser reconstruído em mim.',
  creds: [
    { label: 'CRM-SP', value: '97.070' },
    { label: 'Doutor pela', value: 'USP' },
    { label: 'Especialidades', value: 'Cirurgia · Esporte · Nutrologia' },
    { label: 'Atende em SP', value: 'desde 2010' },
  ],
} as const;

// Roteiro prático de 7 dias — Apêndice (pp 146-147)
// Teaser do que vem dentro do livro como entrega concreta
export const roteiroMev = {
  eyebrow: 'O que você leva já na primeira semana',
  heading: 'O Roteiro de Início Rápido — sua primeira Vida Ativa em 7 dias',
  intro:
    'No final do livro tem um apêndice prático: um roteiro dia a dia para você sair da paralisia do "por onde eu começo?". Não é dieta rígida nem treino de atleta. É o convite para começar a enviar os sinais certos para suas células, num ritmo que cabe na sua semana.',
  dias: [
    {
      n: 1,
      titulo: 'O ambiente',
      acao: 'Vá até a sua despensa. Tire de vista o que você sabe que sabota. Coloque frutas e água onde você as veja primeiro.',
    },
    {
      n: 2,
      titulo: 'O movimento',
      acao: 'Caminhe 20 a 30 minutos num ritmo onde o corpo aquece, mas você ainda consegue conversar. Esse é o "remédio" das suas mitocôndrias.',
    },
    {
      n: 3,
      titulo: 'O prato',
      acao: 'Metade do prato com vegetais. Um quarto com proteína de qualidade. Coma devagar até estar 80% satisfeito.',
    },
    {
      n: 4,
      titulo: 'O sono',
      acao: 'Marque um alarme — não para acordar, para ir dormir. Telas desligadas uma hora antes. Quarto escuro e fresco.',
    },
    {
      n: 5,
      titulo: 'A pausa',
      acao: '5 minutos sentado em silêncio, respirando consciente. Isso tira seu corpo do modo "luta ou fuga" — e libera a queima de gordura.',
    },
    {
      n: 6,
      titulo: 'A conexão',
      acao: 'Repita a caminhada do dia 2 — agora com alguém que te faz bem. O vínculo social positivo potencializa todos os outros pilares.',
    },
    {
      n: 7,
      titulo: 'A reflexão',
      acao: 'Pese-se sem julgamento. Tire uma foto. Escreva como se sentiu nessa semana. Planeje a próxima.',
    },
  ],
  closing:
    '"A informação sem ação é apenas arquivo morto. A transformação acontece no movimento." — Dr. Mateus, no fechamento do livro.',
} as const;

export const faqMev = [
  {
    q: 'Eu não sou da área da saúde — vou conseguir entender?',
    a: 'Vai. O livro foi escrito para você, leigo curioso sobre o próprio corpo. Quando aparece um termo técnico, ele vem traduzido no mesmo parágrafo: "mitocôndria (a usina de energia das suas células)", "VO₂ máximo (a potência do seu motor)". Sem fórmula química, sem jargão de hospital. Histórias de pacientes reais, gráficos claros, exemplos do dia a dia.',
  },
  {
    q: 'Não vai me culpar por estar acima do peso ou cansado, vai?',
    a: 'O autor é categórico nisso. Como ele escreve no livro: "se você enfrenta uma compulsão ou descontrole alimentar, saiba que você não é fraco ou preguiçoso. Você está lutando contra instintos profundamente enraizados". O livro é o oposto da culpa. É o convite para entender o que está acontecendo no seu corpo — e fazer paz com ele.',
  },
  {
    q: 'É mais um livro de "vida saudável"?',
    a: 'Não. A maioria dos livros do gênero é achismo travestido de ciência ou ciência rasa travestida de motivação. Aqui é um cirurgião e doutor pela USP fazendo o oposto: ciência rigorosa em linguagem clara, com casos clínicos do consultório dele e a história pessoal de quando ele mesmo precisou virar paciente.',
  },
  {
    q: 'Tenho médico de confiança. O livro vai entrar em conflito com ele?',
    a: 'Não — esse não é o objetivo. O livro te dá o vocabulário para conversar de igual para igual com qualquer profissional de saúde. Você vai fazer perguntas melhores, entender melhor as recomendações e participar das decisões. Junto com seu médico, não contra. O autor é explícito: "a medicina tradicional nos salvou de poucas e boas e continua fazendo milagres".',
  },
  {
    q: 'Promete emagrecer?',
    a: 'O autor diz logo na introdução: "este não é um livro sobre emagrecer". É um livro sobre estilo de vida. A perda de peso aparece como consequência natural, sem dieta restritiva, sem fome, sem treino exaustivo. Mas a promessa real é outra: viver mais, com mais energia e mais autonomia.',
  },
  {
    q: 'Quando recebo o livro?',
    a: 'A partir de 24 de maio de 2026. A Editora Atheneu envia direto do estoque conforme o cronograma de pré-venda. Após o lançamento, segue disponível para envio direto.',
  },
  {
    q: 'Qual a forma de pagamento?',
    a: 'Diretamente no site da Atheneu: cartão de crédito (até 3× sem juros), Pix ou boleto. Durante a pré-venda, R$ 139 (3× de R$ 46,33 sem juros).',
  },
  {
    q: 'Posso comprar para presentear?',
    a: 'É uma das melhores razões. Pais, filhos, irmãos, amigos num momento de virada — o livro tem a clareza necessária para ser presente útil. Linguagem acolhedora, evidência sólida, zero culpa. Muitos leitores acabam comprando o segundo exemplar para dar a alguém.',
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
