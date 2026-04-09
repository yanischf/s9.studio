
import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Globe, 
  Users, 
  Target, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';

const teamMembers = [
  {
    name: "Fabrice Liut",
    role: "Designer Organisationnel, Facilitateur",
    description: "Fabrice structure ce que la croissance a rendu flou. Avec 15 ans d'expérience auprès de TPE, PME et grands comptes, il intervient sur la clarification des rôles, la fluidification des communications et la mise en place des processus adaptés à chaque stade de développement. Ancré dans les approches régénératives, il conçoit des cadres organisationnels qui permettent aux équipes de fonctionner en autonomie et en cohésion durable. Community builder, il a développé et animé des communautés de plusieurs milliers de membres autour des sujets de design organisationnel et de la collaboration.",
    image: "https://image.noelshack.com/fichiers/2026/15/4/1775725404-fabrice.jpeg",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Saniya Al Saadi",
    role: "Designer de Services, Design Fiction",
    description: "Saniya part du futur pour mieux comprendre le présent. Elle conçoit des récits, des objets du futur et des dispositifs pour interroger les trajectoires des organisations et favoriser l'action. Avec 15 ans d'expérience en innovation, design de services, recherche usagers et stratégie, elle a accompagné des organisations privées et publiques sur des sujets de prospective : CNP Assurances, Société du Grand Paris, Ministère de la Transition Écologique, Cultura, Groupe Excelia. Diplômée d'HEC Paris, formée à la prospective à l'École des Ponts, au Cnam et à l'Institut des Futurs Souhaitables. Elle partage ses observations dans sa newsletter possible.s.",
    image: "https://image.noelshack.com/fichiers/2026/15/4/1775725404-saniya.jpeg",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "Johann Milani",
    role: "Directeur Artistique, Designer d’Experience",
    description: "Johann conçoit les espaces où les esprits et les corps entrent en création. Avec 20 ans d'expérience en direction artistique et 15 ans en tant que fondateur d'espaces de travail, il a façonné des dizaines d'environnements à Lyon et Paris — concept stores, espaces de coworking, salles de réunion, lieux de programmation culturelle. Fondateur de Ballad.club : 2 cafés, 4 espaces de coworking, 10 salles de réunion, plus de 1000 membres.",
    image: "https://image.noelshack.com/fichiers/2026/15/4/1775725404-jojo.jpeg",
    socials: {
      linkedin: "#",
      website: "#"
    }
  },
  {
    name: "Yanis Cherfaoui",
    role: "Responsable Innovation, Meta Designer",
    description: "Yanis intervient là où se fabriquent les décisions, les idées, les tensions, avant que les solutions existent. Avec 15 ans d'expérience dans la création de solutions numériques et 10 ans dans l'application des méthodes Design auprès de groupes projets, il conçoit les cadres qui permettent aux équipes de penser, décider et créer ensemble. Ancré dans la pratique du meta-design, il construit des dispositifs ouverts que les équipes peuvent s'approprier et transformer durablement après son passage.",
    image: "https://image.noelshack.com/fichiers/2026/15/4/1775725420-moi.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-6">À Propos de S9</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-black mb-12">
            Concevoir le cadre, pas seulement le projet.
          </h1>
          <p className="text-xl md:text-2xl text-muted font-light leading-relaxed italic max-w-2xl">
            Nous sommes un studio de design systémique qui aide les organisations à bâtir leurs propres infrastructures de création.
          </p>
        </motion.div>
      </section>

      {/* POURQUOI SECTION */}
      <section className="bg-surface py-32 rounded-[5rem] mx-4 md:mx-10 mb-40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                  <Target size={14} /> Pourquoi S9 ?
                </div>
              </div>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  Trop souvent, l'innovation est déléguée à des tiers sans que l'organisation n'en tire un apprentissage durable. On achète une solution, mais on ne développe pas la capacité de la reproduire.
                </p>
                <p className="font-medium text-black">
                  S9 est né d'un constat simple : la véritable souveraineté créative vient de la maîtrise de son propre environnement de travail.
                </p>
                <p>
                  Nous ne venons pas pour "faire à votre place", mais pour concevoir avec vous le cadre, méthodes, outils, rituels  qui rendra votre équipe autonome et performante sur le long terme.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                  alt="Collaboration S9" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-[2rem] hidden md:block max-w-xs shadow-2xl">
                <p className="text-sm italic font-light">
                  "L'autonomie n'est pas l'absence de règles, c'est la présence d'un cadre qui autorise l'initiative."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ÉQUIPE SECTION - SWISS GRID DESIGN WITH ROUNDED CARDS */}
      <section className="bg-white py-32 border-t border-black/5 mb-40">
        <div className="container mx-auto px-6 bg-surface rounded-[5rem] py-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 px-4 lg:px-10">
            <div className="max-w-2xl space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">L'Équipe</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-black">
                Les visages derrière le système.
              </h2>
            </div>
            <p className="text-xl text-muted font-light italic max-w-sm">
              Un mélange de stratèges, créatifs et technologues unis par une même vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 px-4 lg:px-20 pb-32">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`group p-8 lg:p-16 flex flex-col h-full bg-white rounded-[4rem] hover:shadow-2xl transition-all duration-700 border border-black/5 ${
                  i % 2 === 1 ? 'md:mt-32' : ''
                }`}
              >
                <div className="flex justify-end items-start mb-16">
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-black hover:scale-125 transition-transform">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-black hover:scale-125 transition-transform">
                        <Twitter size={20} />
                      </a>
                    )}
                    {member.socials.website && (
                      <a href={member.socials.website} className="text-black hover:scale-125 transition-transform">
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="aspect-[16/10] mb-6 overflow-hidden grayscale rounded-[2rem]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-black">{member.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted">{member.role}</p>
                  </div>
                  <div className="space-y-4">
                    {member.description.split('. ').map((sentence, idx) => (
                      <p key={idx} className="text-base text-muted leading-relaxed font-light">
                        {sentence}{idx < member.description.split('. ').length - 1 ? '.' : ''}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto px-6 py-32 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-[4rem] p-12 md:p-32 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto">
              Prêt à concevoir les conditions de votre réussite ?
            </h2>
            <div className="flex justify-center">
              <a 
                href="mailto:meet.section9@gmail.com" 
                className="group flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform mx-auto"
              >
                Contactez S9 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center select-none">
            <span className="font-logo text-[40vw] font-black leading-none tracking-tighter">§</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
