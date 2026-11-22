export const whatsappBaseUrl = "https://wa.me/243991040032";

export const whatsappUrl = `${whatsappBaseUrl}?text=Bonjour%20Nordev%2C%20je%20souhaite%20un%20diagnostic%20gratuit%20pour%20mon%20entreprise.`;

export const whatsappMessages = {
  diagnostic: whatsappUrl,
  essentiel: `${whatsappBaseUrl}?text=Bonjour%20Nordev%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20forfait%20Essentiel.`,
  pro: `${whatsappBaseUrl}?text=Bonjour%20Nordev%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20forfait%20Pro.`,
  business: `${whatsappBaseUrl}?text=Bonjour%20Nordev%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20forfait%20Business.`,
  quote: `${whatsappBaseUrl}?text=Bonjour%20Nordev%2C%20je%20souhaite%20un%20devis%20pour%20un%20site%20web%2C%20une%20application%20mobile%20ou%20un%20SaaS.`,
  pilot: `${whatsappBaseUrl}?text=Bonjour%20Nordev%2C%20je%20souhaite%20devenir%20entreprise%20pilote.`,
};

export const navigation = [
  { label: "Offre", href: "#offre" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Comment ça marche", href: "#processus" },
  { label: "Réalisations", href: "#realisations" },
  { label: "FAQ", href: "#faq" },
];

export const ways = [
  {
    label: "Freelancer isolé",
    title: "Un livrable, puis il disparaît",
    subtitle: "Délai incertain, aucun suivi",
    features: [
      "Aucune analyse de votre activité",
      "Pas de formation de vos équipes",
      "Aucun suivi après la livraison",
      "Aucune garantie écrite",
    ],
    reassurance: "Faible",
    highlighted: false,
  },
  {
    label: "Nordev Agency",
    title: "à partir de 35 $/mois",
    subtitle: "Diagnostic gratuit sous 72 h",
    features: [
      "Analyse de votre façon de travailler",
      "Solution sur mesure, testée avant la mise en service",
      "Formation de vos agents",
      "Support WhatsApp et évolutions",
      "Corrigé ou remboursé",
    ],
    reassurance: "Totale",
    highlighted: true,
  },
  {
    label: "Grande agence",
    title: "Budget élevé, délais longs",
    subtitle: "Surtout orientée sites vitrines",
    features: [
      "Des semaines d'appels et de validations",
      "Un budget souvent hors de portée d'une PME",
      "Peu adaptée à votre réalité",
      "Les modifications sont souvent facturées en plus",
    ],
    reassurance: "Coûteuse",
    highlighted: false,
  },
];

export const problems = [
  { number: "01", title: "Des devis refaits à la main", text: "Chaque devis est retapé sur Excel ou Word, avec le risque d'une erreur de prix." },
  { number: "02", title: "Des factures qui partent en retard", text: "L'argent rentre plus tard parce que la facture n'est pas prête à temps." },
  { number: "03", title: "Des stocks suivis sur papier", text: "Impossible de savoir en un coup d'œil ce qu'il reste vraiment." },
  { number: "04", title: "Des rapports faits à la main", text: "Des heures perdues chaque semaine à rassembler des chiffres." },
];

export const benefits = [
  { number: "01", title: "Analyse de votre fonctionnement", text: "Nous étudions comment votre entreprise travaille vraiment, avant de proposer quoi que ce soit." },
  { number: "02", title: "Solution sur mesure", text: "Devis et factures, suivi des commandes, gestion des stocks : l'outil adapté à vos besoins réels." },
  { number: "03", title: "Mise en place et tests", text: "Nous installons, testons et corrigeons avant la mise en service." },
  { number: "04", title: "Formation de vos agents", text: "Vos équipes savent l'utiliser dès le premier jour." },
  { number: "05", title: "Hébergement et support WhatsApp", text: "Une question ? Vous nous écrivez, nous répondons." },
  { number: "06", title: "Évolutions continues", text: "Votre outil grandit avec votre entreprise." },
];

export const pricing = [
  {
    name: "Diagnostic",
    price: "Gratuit",
    description: "Savoir par où commencer.",
    button: "Demander mon diagnostic",
    href: whatsappMessages.diagnostic,
    features: ["Appel de 30 minutes", "Plan d'action d'une page", "Réponse sous 72 h", "Sans engagement"],
    highlighted: false,
  },
  {
    name: "Essentiel",
    price: "35 $",
    description: "Résoudre un problème précis : vos devis et factures.",
    button: "Choisir Essentiel",
    href: whatsappMessages.essentiel,
    features: ["1 outil en service (devis et factures)", "Hébergement inclus", "Support WhatsApp", "Engagement de 3 mois"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "65 $",
    description: "Plusieurs processus reliés entre eux.",
    button: "Choisir Pro",
    href: whatsappMessages.pro,
    features: ["Tout ce qui est dans Essentiel", "Suivi des commandes ou des stocks", "Formation de vos agents", "Engagement de 3 mois"],
    highlighted: true,
  },
  {
    name: "Business",
    price: "100 $",
    description: "Une entreprise qui veut tout suivre.",
    button: "Choisir Business",
    href: whatsappMessages.business,
    features: ["Tout ce qui est dans Pro", "Rapports automatiques", "Support prioritaire", "Évolutions de l'outil", "Engagement de 3 mois"],
    highlighted: false,
  },
];

export const processSteps = [
  { number: "01", title: "Diagnostic gratuit", text: "Un appel de 30 minutes pour comprendre votre fonctionnement et vos priorités.", time: "Sous 72 h" },
  { number: "02", title: "Proposition sur mesure", text: "Vous recevez un plan d'action clair avec le prix mensuel, sans engagement.", time: "Sous 72 h" },
  { number: "03", title: "Mise en place et tests", text: "Nous construisons, testons et ajustons votre solution.", time: "7 à 21 jours" },
  { number: "04", title: "Formation et suivi", text: "Vos agents sont formés, et nous restons disponibles sur WhatsApp.", time: "En continu" },
];

export const projects = [
  { name: "KaziUp", image: "/portfolio/kazi-up.png", href: "https://kazi-up.vercel.app/" },
  { name: "Funda Online", image: "/portfolio/funda-online.png", href: "https://funda-online.vercel.app/" },
  { name: "Unco Chi", image: "/portfolio/unco.png", href: "https://unco-chi.vercel.app/" },
];

export const testimonials: Array<{ photo: string; name: string; company: string; text: string; date: string }> = [];

export const faqItems = [
  { question: "Nordev est-elle sérieuse ?", answer: "Nordev est une agence de développement web et mobile qui a déjà mis en ligne plusieurs projets, visibles dans la section Réalisations. Le diagnostic est gratuit et sans engagement : vous pouvez nous juger avant de payer quoi que ce soit." },
  { question: "Combien ça coûte vraiment ?", answer: "De 35 à 100 $ par mois selon le forfait, avec un engagement minimum de 3 mois. Le diagnostic est gratuit. Les sites web, applications mobiles et SaaS sur mesure sont proposés sur devis." },
  { question: "Comment puis-je payer ?", answer: "Par Mobile Money, virement bancaire ou carte. Nous vous indiquons les détails dans la proposition." },
  { question: "Que comprend le diagnostic gratuit ?", answer: "Un appel de 30 minutes pour comprendre votre fonctionnement, puis un plan d'action d'une page avec la solution recommandée et son prix. Vous êtes libre de nous confier la mise en place ou non." },
  { question: "Combien de temps avant que ça fonctionne ?", answer: "Vous recevez votre plan d'action sous 72 h après le premier échange. La première solution est en service sous 7 à 21 jours selon le forfait." },
  { question: "Que se passe-t-il après les 3 mois ?", answer: "Votre abonnement continue chaque mois, et vous pouvez l'arrêter à tout moment après la période minimale." },
  { question: "Et si je ne suis pas satisfait ?", answer: "Nous corrigeons sans frais. Si la solution ne fonctionne toujours pas, nous vous remboursons." },
  { question: "Mes données sont-elles en sécurité ?", answer: "Vos données restent les vôtres et ne sont jamais revendues ni partagées. L'accès à votre outil est protégé par des identifiants personnels." },
  { question: "Dois-je acheter du matériel ?", answer: "Non. Un téléphone ou un ordinateur avec accès à internet suffit." },
  { question: "Cela fonctionne-t-il avec une connexion limitée ?", answer: "Nous concevons des outils légers, pensés pour fonctionner même avec une connexion faible." },
];
