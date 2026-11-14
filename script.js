const brands = [
  {
    slug: 'chanel',
    name: 'CHANEL',
    short: 'PARIS · FRANCE',
    founded: '1910',
    accent: '#92745b',
    descriptor: 'A elegância da simplicidade, transformada em linguagem.',
    category: 'COUTURE & MODA',
    image: 'https://i.pinimg.com/1200x/8c/36/ab/8c36abe1525003cc880451610e15502a.jpg',
    showImage: 'https://i.pinimg.com/1200x/5a/05/82/5a0582facee499ad035718779ada0455.jpg',
    origin: 'PARIS · FRANÇA',
    headline: 'A revolução de uma mulher que simplificou o luxo.',
    story: 'Fundada por Gabrielle “Coco” Chanel, a maison transformou a relação entre moda, liberdade e vida cotidiana. Ao levar o jérsei para o vestuário feminino e propor silhuetas mais funcionais, Chanel questionou os códigos rígidos da Belle Époque. O pequeno vestido preto, o tailleur de tweed, a bolsa 2.55 e o perfume N°5 se tornaram símbolos de uma identidade visual reconhecível em todo o mundo.',
    founder: 'Gabrielle “Coco” Chanel',
    founderBio: 'Nascida em 1883, Gabrielle Chanel construiu uma visão de moda baseada em movimento, conforto e independência. Em 1910, abriu sua boutique de chapéus Chanel Modes na rue Cambon, em Paris. Sua proposta de retirar excessos e valorizar a construção da roupa redefiniu o guarda-roupa moderno.',
    timeline: [
      ['1910', 'Abertura da Chanel Modes, boutique de chapéus na rue Cambon.'],
      ['1921', 'Lançamento do perfume Chanel N°5, criado por Ernest Beaux.'],
      ['1926 / 1955', 'O vestido preto simples ganha destaque; chega a bolsa 2.55.']
    ],
    showSeason: 'FALL / WINTER 1994 · READY-TO-WEAR',
    showTitle: 'Chanel sob o olhar de Karl Lagerfeld',
    showDescription: 'Uma leitura lúdica dos códigos da maison: o tailleur de tweed encontra referências de après-ski, com volumes acolchoados, acabamentos de pelo e uma mistura entre sofisticação e sportswear.',
    looks: [
      'Conjuntos de tweed com acabamento de pelo e proporções invernais.',
      'Calças e shorts de nylon combinados a jaquetas estruturadas.',
      'Saias coordenadas e casacos que atualizam o tailleur clássico.'
    ],
    showModels: [
      'Claudia Schiffer',
      'Inès de la Fressange',
      'Linda Evangelista',
      'Vittoria Ceretti'
    ],
    showUrl: 'https://www.vogue.com/fashion-shows/fall-1994-ready-to-wear/chanel',
    historyUrl: 'https://www.chanel.com/br/about-chanel/a-maison-chanel/1910/',
    codes: [
      'Tweed',
      'Preto & branco',
      'Jérsei',
      'Camélia',
      'Correntes',
      'Bolsa 2.55'
    ],
    models: [
      'Inès de la Fressange',
      'Claudia Schiffer',
      'Linda Evangelista',
      'Vittoria Ceretti'
    ]
  },

  {
    slug: 'dior',
    name: 'DIOR',
    short: 'PARIS · FRANCE',
    founded: '1946',
    accent: '#6f7e83',
    descriptor: 'A arte da silhueta e a poesia da alta-costura.',
    category: 'HAUTE COUTURE',
    image: 'https://i.pinimg.com/736x/da/ee/d7/daeed775d59ff6d4cb72b3ccbe4a7294.jpg ',
    showImage: 'https://i.pinimg.com/736x/23/9e/7d/239e7d3c537725ebb4d64cde77312880.jpg',
    origin: 'PARIS · FRANÇA',
    headline: 'O nascimento de uma nova silhueta para a mulher do pós-guerra.',
    story: 'A Maison Dior foi fundada em Paris em 1946. Em 12 de fevereiro de 1947, Christian Dior apresentou sua primeira coleção, com as linhas Corolle e En 8. A silhueta de cintura marcada, ombros suaves e saias amplas ficou conhecida como New Look e se tornou um marco na história da moda. Desde então, a casa revisita seus próprios códigos por meio de diferentes diretores criativos.',
    founder: 'Christian Dior',
    founderBio: 'Christian Dior nasceu em Granville, na Normandia, em 1905. Antes de fundar sua maison, trabalhou com galerias e casas de moda parisienses. Com o apoio do empresário Marcel Boussac, abriu a Maison Dior em 30 avenue Montaigne, em 1946, e apresentou no ano seguinte a coleção que mudaria a história da silhueta feminina.',
    timeline: [
      ['1946', 'A Maison Dior é fundada no número 30 da avenue Montaigne.'],
      ['1947', 'A primeira coleção apresenta o New Look e a jaqueta Bar.'],
      ['1957 — 2025', 'A casa passa por diferentes direções criativas e continua reinterpretando seu legado.']
    ],
    showSeason: 'FALL 2007 · HAUTE COUTURE',
    showTitle: 'John Galliano — 60 anos de Dior',
    showDescription: 'Apresentada em Versalhes, a coleção de aniversário reverencia a história da maison. A abertura recupera a memória do New Look de 1947, enquanto o restante da coleção explora romantismo, delicadeza e referências artísticas.',
    looks: [
      'Jaquetas de cintura marcada com saias amplas, em diálogo com o New Look.',
      'Vestidos de alta-costura com volumes, bordados e referências pictóricas.',
      'Silhuetas românticas com drapeados e construção escultural.'
    ],
    showModels: [
      'Linda Evangelista',
      'Naomi Campbell',
      'Amber Valletta',
      'Shalom Harlow',
      'Gisele Bündchen'
    ],
    showUrl: 'https://www.vogue.com/fashion-shows/fall-2007-couture/christian-dior',
    historyUrl: 'https://www.galeriedior.com/pt-BR/historia',
    codes: [
      'New Look',
      'Jaqueta Bar',
      'Cannage',
      'Tule',
      'Couture',
      'Lady Dior'
    ],
    models: [
      'Linda Evangelista',
      'Naomi Campbell',
      'Amber Valletta',
      'Shalom Harlow',
      'Gisele Bündchen'
    ]
  },

  {
    slug: 'giorgio-armani',
    name: 'GIORGIO ARMANI',
    short: 'MILANO · ITALY',
    founded: '1975',
    accent: '#8d8068',
    descriptor: 'Alfaiataria suave, discrição e elegância sem esforço.',
    category: 'ITALIAN TAILORING',
    image: 'https://i.pinimg.com/736x/8b/87/5d/8b875daa76f57e0481bfffb17fc3d8b7.jpg',
    showImage: 'https://i.pinimg.com/1200x/7b/f3/43/7bf3437672262075d9dda2fd53682a76.jpg',
    origin: 'MILÃO · ITÁLIA',
    headline: 'A alfaiataria que aprendeu a respirar.',
    story: 'Fundada em Milão em 1975, a Giorgio Armani apresentou uma ideia de elegância menos rígida. A marca ficou conhecida por suavizar a construção dos paletós, experimentar tecidos fluidos e aproximar a alfaiataria do cotidiano. Tons neutros, linhas limpas e um equilíbrio entre estrutura e movimento se tornaram parte de seu vocabulário visual.',
    founder: 'Giorgio Armani',
    founderBio: 'Giorgio Armani nasceu em Piacenza, na Itália, em 1934. Antes de criar sua própria maison, trabalhou no varejo e em empresas de moda italianas, desenvolvendo uma visão pessoal sobre proporção e construção. Em 1975, fundou a marca em Milão com Sergio Galeotti, seu parceiro de negócios.',
    timeline: [
      ['1975', 'Giorgio Armani funda sua maison em Milão com Sergio Galeotti.'],
      ['Anos 1980', 'A alfaiataria desestruturada ganha projeção internacional.'],
      ['1990', 'O arquivo SS1990 registra a elegância mais livre e natural da marca.']
    ],
    showSeason: 'SPRING / SUMMER 1990 · ARCHIVE STUDY',
    showTitle: 'A linguagem da alfaiataria desestruturada',
    showDescription: 'O arquivo Armani apresenta um momento importante da assinatura da casa: paletós mais leves, proporções relaxadas e uma elegância natural que se afasta da rigidez da alfaiataria tradicional.',
    looks: [
      'Paletó de abotoamento duplo com ombros suaves e caimento fluido.',
      'Camisa e colete em tons naturais, combinados a calças de pregas.',
      'Conjuntos leves que equilibram construção precisa e conforto.'
    ],
    showModels: [
      'Yasmin Le Bon',
      'Tatjana Patitz',
      'Cindy Crawford',
      'Eva Herzigová'
    ],
    showUrl: 'https://www.armani.com/en/giorgio-armani/experience/giorgio-armani-archivio/',
    historyUrl: 'https://www.armani.com/en/giorgio-armani/experience/about-giorgio-armani/',
    codes: [
      'Soft tailoring',
      'Tons neutros',
      'Seda',
      'Ombros suaves',
      'Minimalismo',
      'Proporção'
    ],
    models: [
      'Yasmin Le Bon',
      'Tatjana Patitz',
      'Cindy Crawford',
      'Eva Herzigová'
    ]
  },

  {
    slug: 'gucci',
    name: 'GUCCI',
    short: 'FLORENCE · ITALY',
    founded: '1921',
    accent: '#526d54',
    descriptor: 'Herança italiana, artesanato e reinvenção constante.',
    category: 'LEATHER & LUXURY',
    image: 'https://i.pinimg.com/736x/af/92/9f/af929f1087045a5c4acd26bbe4c32d7e.jpg',
    showImage: 'https://pt.cinco-store.com/cdn/shop/articles/colagem_capa-01_4c56525a-61dd-4bf1-87fe-640a2551142b.png?v=1790892630',
    origin: 'FLORENÇA · ITÁLIA',
    headline: 'De uma oficina de artigos de couro a um ícone global.',
    story: 'Guccio Gucci abriu sua primeira loja em Florença em 1921, inspirado pelo universo das viagens e pelo trabalho artesanal em couro. A casa desenvolveu uma identidade ligada à qualidade dos materiais, ao universo equestre e a acessórios que se tornaram reconhecíveis, como o horsebit. Ao longo das décadas, diferentes diretores criativos reinterpretaram o arquivo da marca.',
    founder: 'Guccio Gucci',
    founderBio: 'Nascido em Florença em 1881, Guccio Gucci trabalhou no Savoy Hotel, em Londres, onde observou o estilo e os objetos da clientela internacional. De volta à Itália, abriu em 1921 uma loja dedicada a artigos de couro e acessórios de viagem, dando início à casa Gucci.',
    timeline: [
      ['1921', 'Guccio Gucci abre sua primeira loja na Via della Vigna Nuova, em Florença.'],
      ['Anos 1950', 'O horsebit se consolida como um dos códigos da casa.'],
      ['1995', 'Tom Ford apresenta uma nova direção de glamour para a marca.']
    ],
    showSeason: 'FALL 1995 · READY-TO-WEAR',
    showTitle: 'Tom Ford inaugura uma nova era de glamour',
    showDescription: 'O desfile de outono de 1995 marcou a chegada de uma linguagem mais provocadora à Gucci: brilho, sensualidade e referências setentistas, com uma energia que reposicionou a casa no cenário internacional.',
    looks: [
      'Camisas de cetim em tons joia, abertas no colo.',
      'Calças de veludo de cintura baixa e silhueta ajustada.',
      'Mocassins de couro com horsebit e acabamento polido.'
    ],
    showModels: [
      'Amber Valletta',
      'Shalom Harlow',
      'Kate Moss'
    ],
    showUrl: 'https://www.vogue.com/fashion-shows/fall-1995-ready-to-wear/gucci',
    historyUrl: 'https://www.gucci.com/us/en/nst/history-of-gucci',
    codes: [
      'Horsebit',
      'Bambu',
      'Web stripe',
      'Couro',
      'Flora',
      'Glamour'
    ],
    models: [
      'Amber Valletta',
      'Shalom Harlow',
      'Kate Moss',
      'Daria Werbowy'
    ]
  },

  {
    slug: 'loewe',
    name: 'LOEWE',
    short: 'MADRID · SPAIN',
    founded: '1846',
    accent: '#a56e4d',
    descriptor: 'Artesanato em couro, experimentação e arte contemporânea.',
    category: 'LEATHER CRAFT',
    image: 'https://i.pinimg.com/736x/75/94/8b/75948b1913e65106cdf128692df1652d.jpg',
    showImage: 'https://i.pinimg.com/1200x/d2/8b/78/d28b78cf0509a77882be77d3acda2ad3.jpg',
    origin: 'MADRI · ESPANHA',
    headline: 'O fazer artesanal como ponto de partida para a experimentação.',
    story: 'A história da Loewe começa em 1846, quando um coletivo de artesãos espanhóis abriu uma oficina de couro em Madri. Em 1872, o artesão alemão Enrique Loewe Roessberg se uniu ao negócio e, mais tarde, seu nome passou a identificar a casa. A tradição de marroquinaria permanece central, mas o universo da marca também acolhe arte, materiais experimentais e formas inesperadas.',
    founder: 'Coletivo de artesãos espanhóis',
    founderBio: 'Ao contrário de muitas maisons, a Loewe não nasceu da visão de um único fundador: começou como uma oficina coletiva de artesãos em Madri. Enrique Loewe Roessberg juntou-se ao grupo em 1872, contribuindo com conhecimento técnico e dando seu nome à casa que se desenvolveu a partir daquele ateliê.',
    timeline: [
      ['1846', 'Artesãos espanhóis abrem uma oficina de artigos de couro em Madri.'],
      ['1872', 'Enrique Loewe Roessberg se une à oficina e seu nome passa a identificar a casa.'],
      ['2023', 'A coleção Fall 2023 explora ilusão visual com peças de efeito “ghost”.']
    ],
    showSeason: 'FALL 2023 · READY-TO-WEAR',
    showTitle: 'Jonathan Anderson e os “ghost garments”',
    showDescription: 'A coleção brinca com a percepção: vestidos de cetim duchesse recebem imagens desfocadas de outras roupas, criando a ilusão de peças impressas sobre peças. Um encontro entre classicismo, tecnologia visual e artesanato.',
    looks: [
      'Vestidos brancos de cetim com imagens borradas de vestidos vintage.',
      'Peças que evocam trench coats e casacos de pele por meio de impressão.',
      'Silhuetas limpas que deixam o trompe-l’œil ocupar o centro da cena.'
    ],
    showModels: [
      'Anok Yai',
      'Paloma Elsesser',
      'Vittoria Ceretti',
      'Mona Tougaard'
    ],
    showUrl: 'https://www.vogue.com/fashion-shows/fall-2023-ready-to-wear/loewe',
    historyUrl: 'https://www.loewe.com/int/en/art-and-craft/178-years-of-craft.html',
    codes: [
      'Marroquinaria',
      'Puzzle bag',
      'Craft',
      'Trompe-l’œil',
      'Couro',
      'Experimentação'
    ],
    models: [
      'Anok Yai',
      'Paloma Elsesser',
      'Vittoria Ceretti',
      'Mona Tougaard'
    ]
  },

  {
    slug: 'prada',
    name: 'PRADA',
    short: 'MILANO · ITALY',
    founded: '1913',
    accent: '#7a8061',
    descriptor: 'Intelecto, contradição e beleza fora do óbvio.',
    category: 'INTELLECTUAL LUXURY',
    image: 'https://i.pinimg.com/1200x/32/4f/9a/324f9a9f8a033a1c5130df9126f4fd12.jpg',
    showImage: 'https://i.pinimg.com/1200x/74/f2/0c/74f20c5c6447902fde61a10c3f2fd776.jpg',
    origin: 'MILÃO · ITÁLIA',
    headline: 'A beleza de desafiar as próprias regras do bom gosto.',
    story: 'A história da Prada começou em 1913, com a abertura de uma loja de artigos de couro na Galleria Vittorio Emanuele II, em Milão. Sob Miuccia Prada, que assumiu papel central na marca a partir de 1978, o repertório da casa passou a explorar contrastes: materiais técnicos, silhuetas inesperadas, cores incomuns e uma ideia de beleza que não depende da convenção.',
    founder: 'Mario Prada',
    founderBio: 'Mario Prada fundou a Fratelli Prada em 1913 com seu irmão Martino, inicialmente dedicada a artigos de couro e acessórios de viagem. Décadas depois, Miuccia Prada transformou a marca familiar em uma das vozes mais influentes da moda contemporânea, ampliando seu vocabulário estético.',
    timeline: [
      ['1913', 'A primeira loja Prada abre na Galleria Vittorio Emanuele II, em Milão.'],
      ['1978', 'Miuccia Prada assume papel decisivo na evolução da empresa.'],
      ['1996', 'A coleção Spring 1996 transforma cores “difíceis” e misturas em linguagem.']
    ],
    showSeason: 'SPRING 1996 · READY-TO-WEAR',
    showTitle: 'Miuccia Prada e o “good taste of bad taste”',
    showDescription: 'Uma coleção que desafiou os padrões de beleza mais óbvios da década de 1990. Tons oliva e marrons, estampas que se chocam e sandálias robustas criaram uma estética intelectual, deliberadamente estranha e influente.',
    looks: [
      'Combinações de verde-abacate, marrom-terroso e cores pouco convencionais.',
      'Estampas de aparência desenhada, combinadas sem buscar harmonia tradicional.',
      'Sandálias robustas e peças de proporções deliberadamente desajeitadas.'
    ],
    showModels: [
      'Kristen McMenamy',
      'Stella Tennant',
      'Amber Valletta'
    ],
    showUrl: 'https://www.vogue.com/fashion-shows/spring-1996-ready-to-wear/prada',
    historyUrl: 'https://www.pradagroup.com/en/group/history.html',
    codes: [
      'Nylon',
      'Minimalismo',
      'Contraste',
      'Verde oliva',
      'Estampa',
      'Intelectual chic'
    ],
    models: [
      'Kristen McMenamy',
      'Stella Tennant',
      'Amber Valletta',
      'Naomi Campbell'
    ]
  },

  {
    slug: 'saint-laurent',
    name: 'SAINT LAURENT',
    short: 'PARIS · FRANCE',
    founded: '1961',
    accent: '#856b59',
    descriptor: 'Uma elegância noturna, andrógina e deliberadamente livre.',
    category: 'PARISIAN COUTURE',
    image: 'https://i.pinimg.com/736x/f7/30/2b/f7302bf09eca374d308e43f09af943b2.jpg',
    showImage: 'https://i.pinimg.com/736x/bf/14/4e/bf144e2bf1ac114aa3bac808badb4390.jpg',
    origin: 'PARIS · FRANÇA',
    headline: 'Quando o smoking atravessou a fronteira entre masculino e feminino.',
    story: 'Yves Saint Laurent e Pierre Bergé fundaram a maison em 1961. O estilista propôs uma moda que dialogava com arte, juventude e liberdade, levando referências do guarda-roupa masculino para a roupa feminina. Em 1966, o smoking feminino se tornou um dos símbolos mais duradouros da casa, acompanhado pela criação da linha prêt-à-porter Rive Gauche.',
    founder: 'Yves Saint Laurent & Pierre Bergé',
    founderBio: 'Yves Saint Laurent nasceu em Orã, na Argélia, em 1936, e ganhou projeção ainda jovem ao suceder Christian Dior. Em 1961, fundou sua própria casa ao lado de Pierre Bergé, parceiro de vida e de negócios. A dupla estabeleceu uma marca que aproximou a alta-costura da juventude e da cultura urbana.',
    timeline: [
      ['1961', 'Yves Saint Laurent e Pierre Bergé fundam a maison em Paris.'],
      ['1966', 'O smoking feminino é apresentado e a linha Rive Gauche é lançada.'],
      ['1970s', 'A casa amplia seu diálogo com referências artísticas e culturais.']
    ],
    showSeason: 'FALL / WINTER 1966 · HAUTE COUTURE',
    showTitle: 'Le Smoking — uma nova ideia de poder',
    showDescription: 'Yves Saint Laurent adaptou os códigos do smoking masculino ao corpo feminino. A peça foi apresentada na coleção de alta-costura de outono-inverno de 1966 e se tornou uma das imagens mais duradouras da história da moda.',
    looks: [
      'Paletó de smoking preto com lapelas marcadas e cintura definida.',
      'Calça de alfaiataria de linha alongada, em contraponto à tradição do vestido de noite.',
      'Camisa branca e acessórios discretos que deixam a construção do conjunto falar.'
    ],
    showModels: [
      'Ulla (primeira apresentação do smoking)',
      'Betty Catroux',
      'Loulou de la Falaise',
      'Naomi Campbell'
    ],
    showUrl: 'https://museeyslparis.com/biographie/premier-smoking',
    historyUrl: 'https://www.ysl.com/en-us/collections/heritage',
    codes: [
      'Le Smoking',
      'Preto',
      'Alfaiataria',
      'Transparência',
      'Rive Gauche',
      'Silhueta andrógina'
    ],
    models: [
      'Ulla',
      'Betty Catroux',
      'Loulou de la Falaise',
      'Kate Moss',
      'Naomi Campbell'
    ]
  },

  {
    slug: 'versace',
    name: 'VERSACE',
    short: 'MILANO · ITALY',
    founded: '1978',
    accent: '#a31f32',
    descriptor: 'O maximalismo italiano em sua forma mais teatral.',
    category: 'ITALIAN GLAMOUR',
    image: 'https://i.pinimg.com/736x/bb/54/8e/bb548ec1abb0fd8e610cd4fe9478d8bf.jpg',
    showImage: 'https://i.pinimg.com/1200x/40/2a/df/402adf30888a16057c69565789b15986.jpg',
    origin: 'MILÃO · ITÁLIA',
    headline: 'Cor, sensualidade e atitude como assinatura visual.',
    story: 'Gianni Versace fundou a maison em Milão, em 1978. A marca desenvolveu uma linguagem que combina referências clássicas, exuberância mediterrânea, estampas marcantes e uma relação direta com a cultura pop. O desfile Fall 1991 tornou-se um marco da era das supermodelos, especialmente por seu encerramento com quatro das figuras mais influentes da década caminhando juntas.',
    founder: 'Gianni Versace',
    founderBio: 'Nascido em Reggio Calabria, em 1946, Gianni Versace cresceu próximo ao ateliê de costura de sua mãe. Mudou-se para Milão e, em 1978, apresentou sua primeira coleção sob o próprio nome. Sua visão misturava arte, arquitetura, cultura popular e artesanato italiano.',
    timeline: [
      ['1978', 'Gianni Versace funda a maison em Milão.'],
      ['1991', 'O desfile Fall 1991 consolida um dos momentos emblemáticos da era das supermodelos.'],
      ['1997', 'Após a morte de Gianni, Donatella Versace assume a direção criativa.']
    ],
    showSeason: 'FALL 1991 · READY-TO-WEAR',
    showTitle: 'Freedom! — o desfile que definiu uma era',
    showDescription: 'O encerramento entrou para a história: Linda Evangelista, Cindy Crawford, Naomi Campbell e Christy Turlington caminharam de braços dados, recriando o espírito do videoclipe Freedom! ’90. A coleção cristalizou a força cultural das supermodelos.',
    looks: [
      'Minivestidos de presença gráfica e silhueta marcante.',
      'Peças de noite com brilho, recortes e atitude maximalista.',
      'O encerramento com quatro supermodelos tornou-se a imagem-síntese do desfile.'
    ],
    showModels: [
      'Linda Evangelista',
      'Cindy Crawford',
      'Naomi Campbell',
      'Christy Turlington'
    ],
    showUrl: 'https://www.vogue.com/fashion-shows/fall-1991-ready-to-wear/versace',
    historyUrl: 'https://www.versace.com/pa/en/about-us/company-profile.html',
    codes: [
      'Medusa',
      'Baroque print',
      'Ouro',
      'Cores intensas',
      'Alfinetes',
      'Sensualidade'
    ],
    models: [
      'Linda Evangelista',
      'Cindy Crawford',
      'Naomi Campbell',
      'Christy Turlington',
      'Claudia Schiffer'
    ]
  }
];


// ------------------------------------------------------------
// 2. ELEMENTOS DO DOM
// ------------------------------------------------------------

const brandGrid = document.getElementById('brand-grid');
const homeView = document.getElementById('home-view');
const detailView = document.getElementById('brand-detail');
const searchInput = document.getElementById('brand-search');
const favoritesFilter = document.getElementById('favorites-filter');
const emptyState = document.getElementById('empty-state');
const loginDialog = document.getElementById('login-dialog');
const toast = document.getElementById('toast');

let currentBrand = null;
let favoritesOnly = false;
let activeAuthMode = 'login';
let toastTimer;


// ------------------------------------------------------------
// 3. ARMAZENAMENTO LOCAL
// ------------------------------------------------------------

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function getFavorites() {
  return readStorage('maisonFavorites', []);
}

function setFavorites(value) {
  localStorage.setItem('maisonFavorites', JSON.stringify(value));
}

function getUser() {
  return readStorage('maisonUser', null);
}


// ------------------------------------------------------------
// 4. NOTIFICAÇÕES
// ------------------------------------------------------------

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2600);
}


// ------------------------------------------------------------
// 5. SEGURANÇA: ESCAPE DE HTML
// ------------------------------------------------------------

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}


// ------------------------------------------------------------
// 6. ATUALIZAR BOTÃO DE LOGIN
// ------------------------------------------------------------

function updateLoginButton() {
  const button = document.getElementById('login-trigger');
  const user = getUser();

  if (user?.name || user?.email) {
    const label = user.name
      ? user.name.split(' ')[0].toUpperCase()
      : 'MINHA CONTA';

    button.innerHTML = `${escapeHTML(label)} <span aria-hidden="true">↗</span>`;
    button.title = 'Clique para sair da sessão demonstrativa';

  } else {
    button.innerHTML = 'ENTRAR <span aria-hidden="true">↗</span>';
    button.title = 'Entrar no arquivo';
  }
}


// ------------------------------------------------------------
// 7. RENDERIZAÇÃO DAS MARCAS
// ------------------------------------------------------------

function renderBrands(query = '') {

  const term = query.trim().toLocaleLowerCase('pt-BR');
  const favorites = getFavorites();

  const filtered = brands.filter(brand => {

    const matchesTerm =
      `${brand.name} ${brand.short} ${brand.descriptor}`
        .toLocaleLowerCase('pt-BR')
        .includes(term);

    const matchesFavorites =
      !favoritesOnly || favorites.includes(brand.slug);

    return matchesTerm && matchesFavorites;
  });

  brandGrid.innerHTML = filtered.map((brand, index) => {

    const saved = favorites.includes(brand.slug);

    return `
      <article
        class="brand-card"
        data-open-brand="${brand.slug}"
        tabindex="0"
        role="button"
        aria-label="Explorar ${brand.name}"
      >

        <div class="brand-card-visual">

          <img
            src="${brand.image}"
            alt="Imagem editorial inspirada na estética de ${brand.name}"
            loading="lazy"
          />

          <span class="brand-card-number">
            M—${String(brands.indexOf(brand) + 1).padStart(2, '0')}
          </span>

          <button
            class="brand-card-fav ${saved ? 'is-saved' : ''}"
            data-favorite="${brand.slug}"
            aria-label="${saved ? 'Remover dos favoritos' : 'Salvar nos favoritos'}"
            aria-pressed="${saved}"
          >
            ${saved ? '♥' : '♡'}
          </button>

          <span class="brand-card-arrow" aria-hidden="true">
            ↗
          </span>

        </div>

        <div class="brand-card-meta">
          <span>${brand.short}</span>
          <span>EST. ${brand.founded}</span>
        </div>

        <h3>${brand.name}</h3>

        <span class="brand-card-link">
          EXPLORE THE HOUSE ↗
        </span>

      </article>
    `;

  }).join('');

  emptyState.hidden = filtered.length > 0;
}


// ------------------------------------------------------------
// 8. SISTEMA DE FAVORITOS
// ------------------------------------------------------------

function toggleFavorite(slug) {

  const favorites = getFavorites();

  const exists = favorites.includes(slug);

  const next = exists
    ? favorites.filter(item => item !== slug)
    : [...favorites, slug];

  setFavorites(next);

  renderBrands(searchInput.value);

  if (currentBrand?.slug === slug) {
    updateDetailFavorite();
  }

  showToast(
    exists
      ? 'Maison removida da sua seleção.'
      : 'Maison salva na sua seleção.'
  );
}


function updateDetailFavorite() {

  if (!currentBrand) return;

  const saved = getFavorites().includes(currentBrand.slug);

  const button = document.getElementById('detail-favorite');

  button.innerHTML = `
    ${saved ? '♥' : '♡'}
    <span>${saved ? 'SALVO' : 'SALVAR'}</span>
  `;

  button.setAttribute('aria-pressed', String(saved));
}


// ------------------------------------------------------------
// 9. ABRIR PÁGINA INDIVIDUAL DA MARCA
// ------------------------------------------------------------

function openBrand(slug) {

  const brand = brands.find(item => item.slug === slug);

  if (!brand) return;

  currentBrand = brand;

  // Alterar identidade visual da maison

  document.documentElement.style.setProperty(
    '--accent',
    brand.accent
  );

  detailView.style.setProperty(
    '--house-accent',
    brand.accent
  );

  // Imagem principal

  document.getElementById('detail-cover').src = brand.image;

  document.getElementById('detail-cover').alt =
    `Editorial de moda associado à estética de ${brand.name}`;

  document.getElementById('detail-hero').style.setProperty(
    '--house-accent',
    brand.accent
  );

  // Identidade da marca

  document.getElementById('detail-origin').innerHTML =
    `<span class="eyebrow-line"></span>${escapeHTML(brand.origin)} · THE HOUSE`;

  document.getElementById('detail-name').textContent =
    brand.name;

  document.getElementById('detail-tagline').textContent =
    brand.descriptor;

  document.getElementById('detail-est').textContent =
    `ESTABLISHED ${brand.founded}  /  ${brand.category}`;

  // História

  document.getElementById('detail-kicker').textContent =
    `THE STORY OF ${brand.name}`;

  document.getElementById('detail-headline').textContent =
    brand.headline;

  document.getElementById('detail-story').textContent =
    brand.story;

  // Fundador

  document.getElementById('founder-name').textContent =
    brand.founder;

  document.getElementById('founder-bio').textContent =
    brand.founderBio;

  // Linha do tempo

  document.getElementById('brand-timeline').innerHTML =
    brand.timeline.map(([year, description]) => `

      <article class="timeline-item">

        <div class="timeline-year">
          ${escapeHTML(year)}
        </div>

        <p class="timeline-copy">
          ${escapeHTML(description)}
        </p>

      </article>

    `).join('');

  // Informação sobre desfile

  document.getElementById('runway-note').textContent =
    `Uma escolha editorial para observar como a maison traduz seus códigos em roupa, casting e apresentação. Consulte o acervo original para ver as imagens da passarela.`;

  document.getElementById('show-image').src =
    brand.showImage;

  document.getElementById('show-image').alt =
    `Imagem editorial de referência para o estudo de desfile ${brand.showTitle}`;

  document.getElementById('show-season').textContent =
    brand.showSeason;

  document.getElementById('show-title').textContent =
    brand.showTitle;

  document.getElementById('show-description').textContent =
    brand.showDescription;

  // Looks selecionados

  document.getElementById('look-list').innerHTML =
    brand.looks.map((look, index) => `

      <div class="look-item">

        <span class="look-number">
          0${index + 1}
        </span>

        <span class="look-text">
          ${escapeHTML(look)}
        </span>

      </div>

    `).join('');

  // Modelos principais do desfile

  document.getElementById('show-models').textContent =
    brand.showModels.join(' · ');

  // Links externos

  document.getElementById('show-source').href =
    brand.showUrl;

  document.getElementById('runway-source-secondary').href =
    brand.showUrl;

  document.getElementById('history-source').href =
    brand.historyUrl;

  // Códigos visuais da marca

  document.getElementById('code-tags').innerHTML =
    brand.codes.map(code => `

      <span class="code-tag">
        ${escapeHTML(code)}
      </span>

    `).join('');

  // Modelos associadas à maison

  document.getElementById('model-names').innerHTML =
    brand.models.map(name => `

      <span>
        ${escapeHTML(name)}
      </span>

    `).join('');

  // Atualizar favorito

  updateDetailFavorite();

  // Alternar entre home e página individual

  homeView.hidden = true;
  detailView.hidden = false;

  // Voltar ao topo

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Atualizar endereço da página

  history.replaceState(
    null,
    '',
    `#maison/${brand.slug}`
  );

  // Atualizar título da aba

  document.title =
    `${brand.name} — MAISON Archive`;
}


// ------------------------------------------------------------
// 10. VOLTAR PARA A PÁGINA INICIAL
// ------------------------------------------------------------

function goHome() {

  currentBrand = null;

  detailView.hidden = true;
  homeView.hidden = false;

  document.documentElement.style.setProperty(
    '--accent',
    '#9a1822'
  );

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  history.replaceState(
    null,
    '',
    '#home'
  );

  document.title =
    'MAISON — The Fashion Archive';
}


// ------------------------------------------------------------
// 11. NAVEGAÇÃO ENTRE AS MARCAS
// ------------------------------------------------------------

function openNextBrand() {

  if (!currentBrand) return;

  const index = brands.findIndex(
    brand => brand.slug === currentBrand.slug
  );

  openBrand(
    brands[(index + 1) % brands.length].slug
  );
}


// ------------------------------------------------------------
// 12. SISTEMA DE LOGIN
// ------------------------------------------------------------

function openAuth() {

  // Se já estiver conectado, oferecer opção de sair

  if (getUser()) {

    const shouldLogout = confirm(
      'Deseja sair da sessão demonstrativa?'
    );

    if (shouldLogout) {

      localStorage.removeItem('maisonUser');

      updateLoginButton();

      showToast('Você saiu da sessão.');
    }

    return;
  }

  // Limpar mensagens anteriores

  document.getElementById('auth-message').textContent = '';

  // Abrir janela de autenticação

  loginDialog.showModal();

  document.body.classList.add('no-scroll');
}


// ------------------------------------------------------------
// 13. FECHAR LOGIN
// ------------------------------------------------------------

function closeAuth() {

  loginDialog.close();

  document.body.classList.remove('no-scroll');
}


// ------------------------------------------------------------
// 14. ALTERNAR ENTRE LOGIN E CADASTRO
// ------------------------------------------------------------

function setAuthMode(mode) {

  activeAuthMode = mode;

  // Atualizar botões

  document.querySelectorAll('[data-auth-mode]').forEach(button => {

    const active = button.dataset.authMode === mode;

    button.classList.toggle('is-active', active);

    button.setAttribute(
      'aria-selected',
      String(active)
    );

  });

  // Campos de nome

  const nameLabel = document.querySelector(
    'label[for="auth-name"]'
  );

  const nameInput = document.getElementById(
    'auth-name'
  );

  nameLabel.hidden = mode !== 'register';

  nameInput.hidden = mode !== 'register';

  nameInput.required = mode === 'register';

  // Configuração da senha

  document.getElementById('auth-password').autocomplete =
    mode === 'register'
      ? 'new-password'
      : 'current-password';

  // Texto do botão

  document.getElementById('auth-submit').innerHTML =
    mode === 'register'
      ? 'CRIAR ACESSO <span>↗</span>'
      : 'ENTRAR NO ARQUIVO <span>↗</span>';

  // Limpar mensagens

  document.getElementById('auth-message').textContent = '';
}


// ------------------------------------------------------------
// 15. EVENTOS DOS CARDS DAS MARCAS
// ------------------------------------------------------------

brandGrid.addEventListener('click', event => {

  // Verificar botão de favoritos

  const favoriteButton = event.target.closest(
    '[data-favorite]'
  );

  if (favoriteButton) {

    event.stopPropagation();

    toggleFavorite(
      favoriteButton.dataset.favorite
    );

    return;
  }

  // Verificar card da marca

  const card = event.target.closest(
    '[data-open-brand]'
  );

  if (card) {

    openBrand(
      card.dataset.openBrand
    );
  }

});


// ------------------------------------------------------------
// 16. NAVEGAÇÃO PELO TECLADO
// ------------------------------------------------------------

brandGrid.addEventListener('keydown', event => {

  if (
    (event.key === 'Enter' || event.key === ' ') &&
    event.target.matches('[data-open-brand]')
  ) {

    event.preventDefault();

    openBrand(
      event.target.dataset.openBrand
    );
  }

});


// ------------------------------------------------------------
// 17. PESQUISA DE MARCAS
// ------------------------------------------------------------

searchInput.addEventListener('input', () => {

  renderBrands(searchInput.value);

});


// ------------------------------------------------------------
// 18. FILTRO DE FAVORITOS
// ------------------------------------------------------------

favoritesFilter.addEventListener('click', () => {

  favoritesOnly = !favoritesOnly;

  favoritesFilter.classList.toggle(
    'is-active',
    favoritesOnly
  );

  favoritesFilter.setAttribute(
    'aria-pressed',
    String(favoritesOnly)
  );

  favoritesFilter.innerHTML = `

    ${favoritesOnly ? '♥' : '♡'}

    <span>
      MINHA SELEÇÃO
    </span>

  `;

  renderBrands(searchInput.value);

});


// ------------------------------------------------------------
// 19. BOTÃO DE PESQUISA DO MENU
// ------------------------------------------------------------

document.getElementById('search-trigger').addEventListener('click', () => {

  if (homeView.hidden) {
    goHome();
  }

  document.getElementById('maisons').scrollIntoView({
    behavior: 'smooth'
  });

  setTimeout(() => {
    searchInput.focus();
  }, 450);

});


// ------------------------------------------------------------
// 20. BOTÃO VOLTAR PARA O ARQUIVO
// ------------------------------------------------------------

document.getElementById('back-to-archive').addEventListener('click', () => {

  goHome();

  setTimeout(() => {

    document.getElementById('maisons').scrollIntoView({
      behavior: 'smooth'
    });

  }, 50);

});


// ------------------------------------------------------------
// 21. BOTÃO FAVORITAR NA PÁGINA DA MARCA
// ------------------------------------------------------------

document.getElementById('detail-favorite').addEventListener('click', () => {

  if (currentBrand) {
    toggleFavorite(currentBrand.slug);
  }

});


// ------------------------------------------------------------
// 22. BOTÃO PRÓXIMA MARCA
// ------------------------------------------------------------

document.getElementById('next-brand').addEventListener(
  'click',
  openNextBrand
);


// ------------------------------------------------------------
// 23. EVENTOS DO LOGIN
// ------------------------------------------------------------

document.getElementById('login-trigger').addEventListener(
  'click',
  openAuth
);

document.getElementById('dialog-close').addEventListener(
  'click',
  closeAuth
);


// Fechar clicando fora da janela

loginDialog.addEventListener('click', event => {

  if (event.target === loginDialog) {
    closeAuth();
  }

});


// Garantir que a página volte ao normal ao fechar

loginDialog.addEventListener('close', () => {

  document.body.classList.remove('no-scroll');

});


// Alternar entre login e cadastro

document.querySelectorAll('[data-auth-mode]').forEach(button => {

  button.addEventListener('click', () => {

    setAuthMode(button.dataset.authMode);

  });

});


// ------------------------------------------------------------
// 24. PROCESSAMENTO DO FORMULÁRIO DE AUTENTICAÇÃO
// ------------------------------------------------------------

document.getElementById('auth-form').addEventListener('submit', event => {

  event.preventDefault();

  const submittedMode = activeAuthMode;

  const email = document.getElementById(
    'auth-email'
  ).value.trim();

  const password = document.getElementById(
    'auth-password'
  ).value;

  const name = document.getElementById(
    'auth-name'
  ).value.trim();

  const message = document.getElementById(
    'auth-message'
  );

  // Validação dos campos

  if (
    !email ||
    password.length < 6 ||
    (activeAuthMode === 'register' && !name)
  ) {

    message.textContent =
      'Confira os campos e utilize uma senha com pelo menos 6 caracteres.';

    return;
  }

  // Demonstração local:
  // não armazena a senha nem envia dados a um servidor.

  const session = {
    email,
    name: name || email.split('@')[0],
    createdAt: new Date().toISOString()
  };

  localStorage.setItem(
    'maisonUser',
    JSON.stringify(session)
  );

  // Atualizar interface

  updateLoginButton();

  closeAuth();

  event.target.reset();

  setAuthMode('login');

  showToast(
    submittedMode === 'register'
      ? 'Acesso demonstrativo criado. Bem-vinda ao arquivo.'
      : 'Sessão demonstrativa iniciada.'
  );

});


// ------------------------------------------------------------
// 25. MENU RESPONSIVO PARA CELULARES
// ------------------------------------------------------------

document.getElementById('mobile-menu-trigger').addEventListener('click', event => {

  const nav = document.querySelector('.main-nav');

  const isOpen = nav.classList.toggle('is-open');

  event.currentTarget.setAttribute(
    'aria-expanded',
    String(isOpen)
  );

});

document.querySelectorAll('.main-nav a').forEach(link => {

  link.addEventListener('click', () => {

    document.querySelector('.main-nav').classList.remove(
      'is-open'
    );

    document.getElementById('mobile-menu-trigger').setAttribute(
      'aria-expanded',
      'false'
    );

    if (!homeView.hidden) return;

    goHome();

    const target = document.querySelector(
      link.getAttribute('href')
    );

    if (target) {

      setTimeout(() => {

        target.scrollIntoView({
          behavior: 'smooth'
        });

      }, 50);

    }

  });

});

renderBrands();


updateLoginButton();

const initialRoute = window.location.hash.match(
  /^#maison\/(.+)$/
);

if (initialRoute) {

  openBrand(initialRoute[1]);

}