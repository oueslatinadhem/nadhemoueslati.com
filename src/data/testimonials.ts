interface Testimonial {
  text: string;
  author: {
    name: string;
    role: string[];
    photo: string;
    linkedin: string;
  };
  company: {
    logo: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    text: "Collaborer avec Nadhem pour la refonte du site institutionnel de Point S a été un vrai plaisir. Il a su gérer un projet complexe avec de nombreuses parties prenantes internationales, tout en maintenant une communication fluide et efficace. Sa capacité à comprendre nos besoins et à les traduire en solutions web robustes est impressionnante. Grâce à lui, notre site est aujourd'hui à la hauteur de nos ambitions globales.",
    author: {
      name: "Fabrice Kindel",
      role: ["International director", "Point S Group"],
      photo: "/testimonials/fabricekindel.jpeg",
      linkedin: "https://www.linkedin.com/in/fabrice-kindel-712962/"
    },
    company: {
      logo: "/testimonials/points.png"
    }
  },
  {
    text: "Nous avons avec Nadhem travaillé de manière collaborative à la refonte du site de Point S sur plusieurs mois.\nGrâce à nos nombreux échanges, j'ai pu noter son sens de l'écoute et sa volonté de trouver des solutions rapides et efficaces pour les problèmes que nous rencontrions. Les conseils partagés ainsi que son expertise digitale furent une vraie valeur ajoutée quant au projet.\nCela a fortement contribué à la transformation digitale de notre client.\nUne collaboration très réussie avec un chef de projet fiable et proactif !",
    author: {
      name: "Augustin Bucaille",
      role: ["Digital strategist - Brand architect", "Addretail"],
      photo: "/testimonials/augustinbucaille.jpeg",
      linkedin: "https://www.linkedin.com/in/augustin-bucaille/"
    },
    company: {
      logo: "/testimonials/adretail.png"
    }
  },
  {
    text: "Travailler avec Nadhem chez Churchill m'a toujours inspiré confiance. Sur chaque projet, il allie une rigueur technique exemplaire et une compréhension pointue des enjeux SEO. Ses consignes sont claires, appliquées avec méthode, et surtout, il s'assure toujours de partager ses connaissances pour faire monter l'équipe en compétences. Un atout incontournable dans toute équipe de projet.",
    author: {
      name: "Cédric Martin",
      role: ["Account Manager SEO", "Webloom"],
      photo: "/testimonials/cedricmartin.jpeg",
      linkedin: "https://www.linkedin.com/in/cédric-martin-a2abb417/"
    },
    company: {
      logo: "/testimonials/webloom.png"
    }
  },
  {
    text: "Pour la refonte de mon ERP, Nadhem a su allier expertise technique et compréhension fine des besoins spécifiques à mon activité. Il a transformé un système dépassé en un outil moderne, intuitif et performant, parfaitement adapté à mes processus. Toujours disponible et réactif, il a su me guider tout au long du projet. Le résultat dépasse mes attentes !",
    author: {
      name: "Rafy Goulli",
      role: ["Expert retraite & gestion de patrimoine", "Retraite conseil"],
      photo: "/testimonials/rafygoulli.jpeg",
      linkedin: "https://www.linkedin.com/in/rafy-goulli-aa46076b/"
    },
    company: {
      logo: "/testimonials/retraiteconseil.png"
    }
  }
];