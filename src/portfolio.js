const header = {
  homepage: '#top',
  title: 'PH.',
}

const about = {
  name: 'Paco Humbert',
  role: 'Business Intelligence & analyse de données',
  picture: 'image_PF.webp',

  description:
    'Après un premier parcours en intégration web, je poursuis ma formation en Business Intelligence chez OpenClassrooms. J’utilise SQL, Python et Power BI pour préparer les données, analyser une problématique métier et rendre les résultats compréhensibles.',

  social: {
    linkedin: 'https://www.linkedin.com/in/paco-humbert-52738894/',
    github: 'https://github.com/Paco-Humbert?tab=repositories',
  },
}

const webProjects = [
  {
    name: 'Argent Bank',
    description:
      'Développement de l’interface d’une application bancaire avec React et gestion de l’état avec Redux.',
    stack: ['SASS', 'React', 'JavaScript', 'Redux'],
    sourceCode: 'https://github.com/Paco-Humbert/10_HUMBERT_PACO_ARGENTBANK_09_2025',
    
  },
  {
    name: 'KASA',
    description:
      'Création d’une application de location immobilière avec React et une interface responsive.',
    stack: ['SASS', 'React'],
    sourceCode: 'https://github.com/Paco-Humbert/7_Humbert_Paco_KASA_062025',
    livePreview: 'https://7-humbert-paco-kasa-062025.vercel.app/',
    
  },
  {
    name: 'Architecte Sophie Bluel',
    description:
      'Développement d’un portfolio dynamique pour une architecte avec JavaScript.',
    stack: ['SASS', 'JavaScript'],
    sourceCode: 'https://github.com/Paco-Humbert/6_Humbert_Paco_architecte-sophie-bluel_052025',
    livePreview: 'https://6-humbert-paco-architecte-sophie-bl-zeta.vercel.app/',
  },
  {
    name: 'Nina Carducci',
    description:
      'Optimisation des performances, du référencement et de l’accessibilité d’un site de photographe.',
    stack: ['SASS', 'JavaScript', 'SEO', 'Accessibilité'],
    sourceCode: 'https://github.com/Paco-Humbert/8_Humbert_Paco_Nina_Carducci_072025',
    livePreview: 'https://paco-humbert.github.io/8_Humbert_Paco_Nina_Carducci_072025/',
  },
  {
    name: '724 Events',
    description:
      'Diagnostic de bugs dans une application React, tests et documentation de recette.',
    stack: ['Débogage', 'Tests unitaires', 'JavaScript'],
    sourceCode: 'https://github.com/Paco-Humbert/9_HUMBERT_PACO_724Events_082025',
    livePreview: 'https://9-humbert-paco-724-events-082025.vercel.app/',
  },
  {
    name: 'Oh My Food',
    description:
      'Intégration d’un site de restaurants à partir de maquettes, avec une approche mobile first.',
    stack: ['Responsive','SASS','HTML','Figma'],
    sourceCode: 'https://github.com/Paco-Humbert/3_HUMBERT_PACO_OHMYFOOD_042025',
    livePreview: 'https://paco-humbert.github.io/3_HUMBERT_PACO_OHMYFOOD_042025/',
  },
]

const webSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Responsive',
  'Accessibilité',
  'Intégration de maquettes',
  'SEO',
  'Figma',
  'Débogage',
  'Tests unitaires',
  'Git, GitHub'
]

const contact = {
  email: 'humbert.paco@gmail.com',
}

const projects = [
  {
    id: 'p5', name: 'Comprendre la satisfaction client', label: 'P5 · BestMarket', category: 'SQL & SQLite',
    description: 'Centraliser les retours clients et comparer la satisfaction selon les magasins, les produits et les canaux.',
    outcome: '17 analyses SQL, contrôles qualité et indicateurs de satisfaction.',
    stack: ['SQL', 'SQLite', 'Qualité des données'], image: 'p5-modele.jpg',
    imageAlt: 'Schéma relationnel de la base de satisfaction client BestMarket', imageCaption: 'Schéma de la base de données',
    sourceCode: 'https://github.com/Paco-Humbert/5_Humbert_Paco_Analyse-de-la-satisfaction-client-avec-SQL',
  },
  {
    id: 'p6', name: 'Rapprocher ventes et stocks', label: 'P6 · BottleNeck', category: 'Python & pandas',
    description: 'Consolider les exports ERP et web pour analyser le chiffre d’affaires, les stocks et les marges d’un marchand de vin.',
    outcome: '825 références ERP, dont 714 rapprochées du catalogue web.',
    stack: ['Python', 'pandas', 'Analyse exploratoire'], image: 'p6-correlation.png',
    imageAlt: 'Matrice de corrélation entre le stock, les ventes et les prix de BottleNeck', imageCaption: 'Graphique extrait du notebook',
    sourceCode: 'https://github.com/Paco-Humbert/P6-Bottleneck-Analyse-Python',
  },
  {
    id: 'p8', name: 'Estimer un portefeuille immobilier', label: 'P8 · Immobilier parisien', category: 'Analyse prédictive',
    description: 'Étudier les prix parisiens de 2017 à 2021, estimer la valeur d’un portefeuille et explorer une segmentation KMeans.',
    outcome: 'Régression linéaire : 9,05 % d’erreur relative moyenne (MAPE) sur le jeu de test.',
    note: 'Test aléatoire sur l’historique ; ce score ne garantit pas une prévision future.',
    stack: ['Python', 'scikit-learn', 'Statistiques'], image: 'p8-predictions.png',
    imageAlt: 'Comparaison des valeurs immobilières réelles et prédites dans le notebook P8', imageCaption: 'Graphique extrait du notebook',
    sourceCode: 'https://github.com/Paco-Humbert/P8-Analyse-Immobiliere-Python',
  },
  {
    id: 'p7', name: 'Piloter un portefeuille de projets', label: 'P7 · Sanitoral', category: 'Power BI',
    description: 'Comparer les coûts, les délais et les livrables prévus et réels pour repérer les projets qui nécessitent une action.',
    outcome: 'Suivi des alertes à partir de 15 % de dérive défavorable.',
    stack: ['Power BI', 'DAX', 'Power Query'], image: 'p7-modele.jpg',
    imageAlt: 'Modèle relationnel du rapport Power BI de suivi des projets Sanitoral', imageCaption: 'Modèle de données du rapport',
    sourceCode: 'https://github.com/Paco-Humbert/P7-Suivi-Projets-PowerBI',
  },
  {
    id: 'p9', name: 'Analyser la performance commerciale', label: 'P9 · BottleNeck', category: 'Python & Power BI',
    description: 'Préparer les données puis construire un suivi des ventes, des marges, des stocks et des promotions.',
    outcome: 'Six pages Power BI pour passer de la vue globale aux priorités métier.',
    stack: ['Power BI', 'Python', 'SQLite'], image: 'p9-modele.png',
    imageAlt: 'Schéma de la base BottleNeck reliant les données financières, ventes, promotions et catalogue web', imageCaption: 'Schéma de la base de données',
    sourceCode: 'https://github.com/Paco-Humbert/P9-Performance-Commerciale-PowerBI',
  },
]

const skills = ['SQL', 'SQLite', 'Python', 'pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'Power BI', 'Power Query', 'DAX']
const skillGroups = [
  { name: 'Analyse & préparation des données', items: ['SQL', 'SQLite', 'Python', 'pandas', 'NumPy', 'Statistiques', 'scikit-learn'] },
  { name: 'Business Intelligence & reporting', items: ['Power BI', 'Power Query', 'DAX', 'Matplotlib', 'Excel', 'Communication métier'] },
  { name: 'Intégration & développement web', items: webSkills },
]

export { header, about, projects, webProjects, skills, skillGroups, contact }
