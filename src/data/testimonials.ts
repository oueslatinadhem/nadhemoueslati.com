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
    text: "Nadhem a été un partenaire précieux dans la refonte pour l'un de mes clients. Sa maîtrise de l'UI/UX combinée à sa compréhension de la stratégie de marque a permis de créer une expérience utilisateur en parfaite adéquation avec les valeurs et les objectifs du client. Toujours à l'écoute, il apporte des solutions pertinentes et créatives tout en respectant les délais serrés. Une vraie force dans un projet.",
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