
import React from 'react';
import { 
  Box, 
  Cpu, 
  Users, 
  Compass, 
  Workflow, 
  Layers,
  Brain,
  Zap,
  Target,
  Globe,
  Layout,
  MousePointer2,
  GitBranch,
  Sprout
} from 'lucide-react';
import { Offer, EventItem, Value, ToolkitItem } from './types';

export const OFFERS: Offer[] = [
  {
    id: 'design-environments',
    title: 'Design Environments — Créez les conditions de la créativité',
    shortDescription: 'Analysez vos environnements pour construire un cadre qui permet aux équipes de collaborer et de concrétiser leurs idées.',
    problem: 'Vos équipes ont des idées, but elles restent en silo. Les méthodes et l’espace de travail ne favorisent pas la collaboration, et la créativité stagne.',
    solution: 'Nous analysons vos environnements, méthodes et cultures pour construire un cadre qui permet aux équipes de collaborer et de concrétiser leurs idées.',
    benefits: ['Collaboration plus fluide', 'Idées rapidement matérialisées', 'Créativité structurée et reproductible'],
    format: '4–8 semaines, audit + recommandations + feuille de route',
    target: 'Entreprises, collectivités, labs, incubateurs',
    cta: 'Contactez-nous pour transformer vos environnements en moteurs de création',
    icon: 'Layers'
  },
  {
    id: 'meta-design-sprint',
    title: 'Meta-Design Sprint™ — Concevez le cadre avant le projet',
    shortDescription: 'Atelier intensif pour définir rôles, processus et règles de collaboration avant de démarrer.',
    problem: 'Les projets avancent lentement : rôles flous, décisions bloquées, méthodes inefficaces.',
    solution: 'Atelier intensif pour définir rôles, processus et règles de collaboration avant de démarrer. Le cadre permet à l’équipe de travailler de manière fluide et efficace.',
    benefits: ['Décisions plus rapides et alignées', 'Rôles et responsabilités clairs', 'Base solide pour tous les projets futurs'],
    format: '2–5 jours, atelier intensif + livrables réutilisables',
    target: 'Directions innovation/produit, équipes multi-métiers',
    cta: 'Réservez un sprint pour aligner vos équipes et structurer vos projets',
    icon: 'Zap'
  },
  {
    id: 'design-operating-systems',
    title: 'Design Operating Systems — Structurez la création sur le long terme',
    shortDescription: 'Nous construisons un système complet : rituels, processus, gouvernance et outils pour rendre vos équipes autonomes et efficaces.',
    problem: 'Le design dépend d’experts externes, les méthodes sont incohérentes, l’équipe peine à être autonome.',
    solution: 'Nous construisons un système complet : rituels, processus, gouvernance et outils pour rendre vos équipes autonomes et efficaces.',
    benefits: ['Autonomie durable des équipes', 'Méthodes et résultats cohérents', 'Réduction de la dépendance externe'],
    format: '6–12 semaines, playbook + toolkit + système interne',
    target: 'Grands groupes, scale-ups, services publics',
    cta: 'Découvrez comment rendre vos équipes autonomes et cohérentes',
    icon: 'Cpu'
  },
  {
    id: 'collective-intelligence-design',
    title: 'Foresight & Intelligence Collective — Faites converger les talents',
    shortDescription: 'Explorer les futurs possibles, créer une vision partagée et activer des dynamiques stratégiques concrètes.',
    problem: 'Projets multi-acteurs : les silos freinent la décision et dispersent les contributions créatives.',
    solution: 'Nous orchestrons vos dynamiques collectives par le design de dispositifs sur mesure. Notre approche permet de synchroniser les expertises et de faire émerger des solutions partagées face à la complexité.',
    benefits: ['Gouvernance de projet clarifiée', 'Engagement fort des contributeurs', 'Convergence rapide vers des solutions actionnables'],
    format: '1 jour → plusieurs semaines, ateliers + dispositifs sur mesure',
    target: 'Collectivités, directions innovation, projets multi-acteurs',
    cta: 'Activez l’intelligence collective dans vos projets dès aujourd’hui',
    icon: 'Users'
  },
  {
    id: 'foresight-studio',
    title: 'Foresight Studio — Prototyper les futurs',
    shortDescription: 'Nous créons des scénarios prospectifs et prototypes pour tester et visualiser l’impact des décisions avant qu’elles ne deviennent critiques.',
    problem: 'Vous devez anticiper l’avenir mais manquez de visibilité sur les scénarios et impacts. Les choix stratégiques sont risqués.',
    solution: 'Nous créons des scénarios prospectifs et prototypes pour tester et visualiser l’impact des décisions avant qu’elles ne deviennent critiques.',
    benefits: ['Décisions éclairées et moins risquées', 'Scénarios tangibles pour guider la stratégie', 'Capacité à anticiper et adapter l’organisation'],
    format: '4–10 semaines, scénarios + prototypes + recommandations',
    target: 'Directions stratégiques, collectivités, organisations à impact',
    cta: 'Explorez vos futurs possibles et préparez vos décisions stratégiques',
    icon: 'Compass'
  },
  {
    id: 's9-studio-global',
    title: 'S9 Studio — Des projets concrets et cohérents',
    shortDescription: 'Nous concevons des projets complets et intégrés, testés dans le réel et livrés avec un cadre pour que vos équipes puissent continuer à les faire évoluer.',
    problem: 'Vos idées restent sur le papier ou manquent de cohérence entre objets, services, espaces et expériences. Les équipes ne savent pas comment les concrétiser.',
    solution: 'Nous concevons des projets complets et intégrés, testés dans le réel et livrés avec un cadre pour que vos équipes puissent continuer à les faire évoluer.',
    benefits: ['Solutions concrètes et opérationnelles', 'Cohérence entre tous les éléments du projet', 'Capacité à reproduire et faire évoluer le projet'],
    format: '2–6 mois, conception + prototypage + coordination multi-expertise',
    target: 'Entreprises, collectivités, startups, projets hybrides',
    cta: 'Transformez vos idées en solutions concrètes et cohérentes avec S9 Studio',
    icon: 'Globe'
  }
];

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  {
    id: 'socle-evolutif',
    title: "Le Socle évolutif",
    category: 'Cadre',
    objective: "Concevoir un système volontairement incomplet pour laisser l'espace nécessaire à l'évolution naturelle et à l'appropriation par les usagers durant le temps de l'usage.",
    whenToUse: [
      "Au lancement d'un nouveau projet ou d'un outil collaboratif",
      "Quand les besoins futurs sont imprévisibles",
      "Pour éviter d'étouffer l'initiative avec un cadre trop rigide"
    ],
    whatItAllows: [
      "Laisser de l'espace à l'appropriation réelle par les usagers",
      "Permettre une évolution organique du projet",
      "Réduire la résistance au changement par la co-conception continue"
    ],
    materials: [
      "Grand tableau blanc (physique ou Miro)",
      "Manifeste du collectif / Vision partagée",
      "Liste des contraintes techniques ou légales incontournables"
    ],
    estimatedTime: "1 journée (définition initiale)",
    steps: [
      {
        title: "Dégeler le domaine",
        description: "Commencez par lister toutes les fonctionnalités, les règles et les outils que vous imaginez devoir mettre en place pour le projet."
      },
      {
        title: "Extraire le noyau dur",
        description: "Analysez cette liste pour ne garder que le minimum vital. Ce sont les éléments sans lesquels le projet s'effondre. Cette base constitue votre semence."
      },
      {
        title: "Identifier les zones de sous-conception",
        description: "Choisissez délibérément plusieurs aspects du projet que vous refusez de trancher immédiatement. Notez-les comme des zones en attente de la décision de ceux qui feront le travail."
      },
      {
        title: "Installer des points d'extension",
        description: "Fournissez les leviers qui permettront aux autres d'ajouter leurs propres briques : accès partagés, modèles modifiables ou budgets de temps pour l'expérimentation."
      },
      {
        title: "Lancer et observer",
        description: "Mettez la semence entre les mains des collaborateurs. Votre rôle devient celui d'un jardinier qui observe comment le collectif s'empare du cadre pour le compléter."
      },
      {
        title: "Capter les adaptations",
        description: "Documentez les moments où les utilisateurs modifient le cadre original pour répondre à un besoin réel du terrain. Intégrez-les au socle si nécessaire."
      }
    ],
    expectedResult: [
      "Une infrastructure robuste mais souple",
      "Une réduction drastique de la résistance au changement",
      "Un projet qui devient vivant et organique"
    ],
    tips: [
      "L'aspect visuel ne doit pas paraître trop fini : gardez un style 'travail en cours' pour inviter à la contribution.",
      "Ne rendez pas le système trop précieux, il doit être malléable.",
      "Célébrez les premières détournements d'usage, ce sont des signes de réussite."
    ],
    useCases: [
      "Lancement d'une plateforme collaborative interne en entreprise.",
      "Mise en place de rituels de gouvernance dans une association.",
      "Conception d'un espace de travail hybride."
    ],
    icon: 'Sprout',
    tags: ["Sous-conception", "Agilité", "Vivant"]
  }
];

export const VALUES: Value[] = [
  { title: 'Création', description: 'Nous ne nous contentons pas d\'analyser, nous produisons des artefacts tangibles.' },
  { title: 'Convergence', description: 'Nous lient les disciplines pour une vision holistique.' },
  { title: 'Collaboration', description: 'L\'intelligence est collective ou elle n\'est pas.' },
  { title: 'Curiosité', description: 'Remettre en question l\'existant est notre point de départ.' },
  { title: 'Humanité', description: 'Le design doit servir le vivant avant tout.' }
];

export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Masterclass: Systèmes & Rituels',
    date: '15 Mai 2024',
    location: 'Paris & Online',
    description: 'Une plongée dans le design des conditions propices à la créativité d\'équipe.'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
  Workflow: <Workflow className="w-8 h-8" />,
  Box: <Box className="w-8 h-8" />,
  Layout: <Layout className="w-8 h-8" />,
  MousePointer2: <MousePointer2 className="w-8 h-8" />,
  GitBranch: <GitBranch className="w-8 h-8" />,
  Sprout: <Sprout className="w-8 h-8" />
};
