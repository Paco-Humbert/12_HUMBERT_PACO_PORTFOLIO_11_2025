const header = {
  homepage: '#top',
  title: 'PH.',
}

const about = {
  name: 'Paco Humbert',
  role: 'Analyser la performance. Identifier les leviers d’action. Éclairer les décisions.',
  picture: 'image_PF.webp',

  description:
    'Business Intelligence Analyst, j’associe compréhension des besoins métier, fiabilité des données et restitution des résultats. Je mobilise SQL, Python et Power BI pour analyser les écarts de performance et formuler des recommandations argumentées. Mon parcours en intégration web renforce cette approche par une attention particulière à la lisibilité des tableaux de bord et à leur simplicité d’utilisation.',

  social: {
    linkedin: 'https://www.linkedin.com/in/paco-humbert-52738894/',
    github: 'https://github.com/Paco-Humbert?tab=repositories',
  },
}

const webProjects = [
  {
    name: 'Argent Bank',
    image: 'web-argentbank.webp', imageKind: 'web',
    imageAlt: 'Visuel de la page d’accueil du projet Argent Bank : arbre et pièces de monnaie',
    imageCaption: 'Visuel utilisé dans le site Argent Bank',
    description:
      'Développement de l’interface d’une application bancaire avec React et gestion de l’état avec Redux.',
    stack: ['SASS', 'React', 'JavaScript', 'Redux'],
    sourceCode: 'https://github.com/Paco-Humbert/10_HUMBERT_PACO_ARGENTBANK_09_2025',
    
  },
  {
    name: 'KASA',
    image: 'web-kasa.png', imageKind: 'web',
    imageAlt: 'Paysage côtier utilisé pour la bannière du site Kasa',
    imageCaption: 'Bannière utilisée dans le site Kasa',
    description:
      'Création d’une application de location immobilière avec React et une interface responsive.',
    stack: ['SASS', 'React'],
    sourceCode: 'https://github.com/Paco-Humbert/7_Humbert_Paco_KASA_062025',
    livePreview: 'https://7-humbert-paco-kasa-062025.vercel.app/',
    
  },
  {
    name: 'Architecte Sophie Bluel',
    image: 'web-sophie-bluel.png', imageKind: 'web',
    imageAlt: 'Projet d’architecture de la galerie Sophie Bluel : hôtel First Arte à New Delhi',
    imageCaption: 'Visuel de la galerie du projet Sophie Bluel',
    description:
      'Développement d’un portfolio dynamique pour une architecte avec JavaScript.',
    stack: ['SASS', 'JavaScript'],
    sourceCode: 'https://github.com/Paco-Humbert/6_Humbert_Paco_architecte-sophie-bluel_052025',
    livePreview: 'https://6-humbert-paco-architecte-sophie-bl-zeta.vercel.app/',
  },
  {
    name: 'Nina Carducci',
    image: 'web-nina-carducci.webp', imageKind: 'web',
    imageAlt: 'Photographie du carrousel Nina Carducci : un homme traverse un passage piéton',
    imageCaption: 'Photographie du carrousel du site Nina Carducci',
    description:
      'Optimisation des performances, du référencement et de l’accessibilité d’un site de photographe.',
    stack: ['SASS', 'JavaScript', 'SEO', 'Accessibilité'],
    sourceCode: 'https://github.com/Paco-Humbert/8_Humbert_Paco_Nina_Carducci_072025',
    livePreview: 'https://paco-humbert.github.io/8_Humbert_Paco_Nina_Carducci_072025/',
  },
  {
    name: '724 Events',
    image: 'web-724events.png', imageKind: 'web',
    imageAlt: 'Photographie événementielle utilisée dans le projet 724 Events',
    imageCaption: 'Visuel utilisé dans le site 724 Events',
    description:
      'Diagnostic de bugs dans une application React, tests et documentation de recette.',
    stack: ['Débogage', 'Tests unitaires', 'JavaScript'],
    sourceCode: 'https://github.com/Paco-Humbert/9_HUMBERT_PACO_724Events_082025',
    livePreview: 'https://9-humbert-paco-724-events-082025.vercel.app/',
  },
  {
    name: 'Oh My Food',
    image: 'web-ohmyfood.jpg', imageKind: 'web',
    imageAlt: 'Photographie de restaurant utilisée dans le projet Ohmyfood',
    imageCaption: 'Photographie utilisée dans le site Ohmyfood',
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
    stack: ['SQL', 'SQLite', 'Qualité des données'], image: 'p5-satisfaction.svg',
    imageAlt: 'Graphique comparant la note moyenne de satisfaction par canal de retour client', imageCaption: 'Notes moyennes calculées depuis la base SQLite du P5',
    sourceCode: 'https://github.com/Paco-Humbert/5_Humbert_Paco_Analyse-de-la-satisfaction-client-avec-SQL',
  },
  {
    id: 'p6', name: 'Rapprocher ventes et stocks', label: 'P6 · BottleNeck', category: 'Analyse de données avec Python',
    description: 'Consolider les exports ERP et web pour analyser le chiffre d’affaires, les stocks et les marges d’un marchand de vin.',
    outcome: '825 références ERP, dont 714 rapprochées du catalogue web.',
    stack: ['Python','Jupyter Notebook', 'Nettoyage des données', 'Analyse exploratoire'], image: 'p6-correlation.png',
    imageAlt: 'Matrice de corrélation entre le stock, les ventes et les prix de BottleNeck', imageCaption: 'Graphique extrait du notebook',
    sourceCode: 'https://github.com/Paco-Humbert/P6-Bottleneck-Analyse-Python',
  },
  {
    id: 'p8', name: 'Estimer un portefeuille immobilier', label: 'P8 · Immobilier parisien', category: 'Analyse prédictive',
    description: 'Étudier les prix parisiens de 2017 à 2021, estimer la valeur d’un portefeuille et explorer une segmentation KMeans.',
    outcome: 'Régression linéaire : 9,05 % d’erreur relative moyenne (MAPE) sur le jeu de test.',
    note: 'Test aléatoire sur l’historique ; ce score ne garantit pas une prévision future.',
    stack: ['Python', 'Jupyter Notebook', 'Statistiques'], image: 'p8-predictions.png',
    imageAlt: 'Comparaison des valeurs immobilières réelles et prédites dans le notebook P8', imageCaption: 'Graphique extrait du notebook',
    sourceCode: 'https://github.com/Paco-Humbert/P8-Analyse-Immobiliere-Python',
  },
  {
    id: 'p7', name: 'Piloter un portefeuille de projets', label: 'P7 · Sanitoral', category: 'Power BI',
    description: 'Comparer les coûts, les délais et les livrables prévus et réels pour repérer les projets qui nécessitent une action.',
    outcome: 'Suivi des alertes à partir de 15 % de dérive défavorable.',
    stack: ['Power BI', 'DAX', 'Power Query'], image: 'p7-couts.svg',
    imageAlt: 'Comparaison des coûts prévus et réels pour les projets informatiques et marketing de Sanitoral', imageCaption: 'Graphique calculé depuis le fichier source Sanitoral du P7',
    sourceCode: 'https://github.com/Paco-Humbert/P7-Suivi-Projets-PowerBI',
  },
  {
    id: 'p9', name: 'Analyser la performance commerciale', label: 'P9 · BottleNeck', category: 'Python & Power BI',
    description: 'Préparer les données puis construire un suivi des ventes, des marges, des stocks et des promotions.',
    outcome: 'Six pages Power BI pour passer de la vue globale aux priorités métier.',
    stack: ['Power BI', 'Python', 'SQLite'], image: 'p9-ventes.svg',
    imageAlt: 'Évolution mensuelle du chiffre d’affaires catalogue estimé pour BottleNeck', imageCaption: 'Graphique calculé depuis les exports Finance et Sales du P9',
    sourceCode: 'https://github.com/Paco-Humbert/P9-Performance-Commerciale-PowerBI',
  },
]

const skills = ['SQL', 'SQLite', 'Python', 'Power BI', 'Power Query', 'DAX', 'Excel']
const skillGroups = [
  { name: 'Analyse & préparation des données', items: ['SQL', 'SQLite', 'Python', 'Statistiques', 'Contrôle qualité des données'] },
  { name: 'Business Intelligence & reporting', items: ['Power BI', 'Power Query', 'DAX', 'Excel', 'Tableaux de bord'] },
  { name: 'Intégration & développement web', items: webSkills },
  { name: 'Cadrage fonctionnel', items: ['Analyse des besoins métier', 'Définition des indicateurs', 'Documentation des analyses'] },
]
const softSkills = ['Rigueur', 'Esprit critique', 'Esprit de synthèse', 'Organisation', 'Autonomie']

export { header, about, projects, webProjects, skills, skillGroups, softSkills, contact }
