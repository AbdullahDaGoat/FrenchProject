import {
  // Needed
  check,
  articles,
  Socials,
  Video,
  conclusion,
  Quora1,
  Quora2,
  Reddit1,
  Reddit2,
  Twitter1,
  Twitter2
} from "../assets";


const services = [
  {
    title: "Introduction",
    icon: check,
  },
  {
    title: "Articles",
    icon: articles,
  },
  {
    title: "Publications sur les Réseaux Sociaux",
    icon: Socials,
  },
  {
    title: "Vidéo",
    icon: Video,
  },
   {
    title: "Conclusion",
    icon: conclusion,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
 {
  name: "Réseaux Sociaux 1",
  description:
    `Selon deux post de Quora sur l'utilisation de la pornographie par les adolescents, il y a différentes opinions. Certains affirment que c'est mal et que cela ne devrait pas être autorisé. \n Cependant, au lieu de punir un adolescent qui en regarde, il est préférable de lui expliquer pourquoi la pornographie est nocive. On devrait lui permettre de prendre la décision, avec un peu de contrôle et de discipline, de s'éloigner des sites sensibles tels que Pornhub. Il est important de souligner que la pornographie ne reflète pas la réalité des relations amoureuses et peut être nocive pour leur corps en affectant les niveaux d'hormones comme les œstrogènes (pour les filles) et la testostérone (pour les garçons). \ Il est préférable de rendre la discussion brève et concise pour ne pas mettre l'adolescent mal à l'aise et le rassurer progressivement.`,
  image: Quora1,
  description2: `Deuxième Réseaux Sociaux publication ici`,
  link: "https://fr.quora.com/À-quel-point-est-ce-mauvais-pour-les-adolescents-de-regarder-des-vidéos-porno",
  link2: "https://www.quora.com/What-is-your-opinion-on-allowing-teens-to-view-pornography"
},
  {
    name: "Réseaux Sociaux 2 (Anglais)",
    description:
    "Dans ce message sur les réseaux sociaux sur Quora, de nombreuses réponses à propos de la pornographie partagent des caractéristiques similaires. Ils affirment que la pornographie procure une augmentation de la dopamine et une satisfaction, mais finit par causer un sentiment de malaise ou le désir de voir plus que simplement des personnes ayant des rapports sexuels. Malheureusement, cela peut entraîner des obsessions étranges et entraîner des comportements problématiques. Au fil des années, cela peut même conduire à des actes criminels tels que l'inceste, le viol ou même la pornographie infantile. 'La pornographie est comme le sel', a déclaré un utilisateur de Quora. Si elle est utilisée avec modération et contrôle, elle n'est ni bonne ni mauvaise, mais en excès, elle peut causer des dommages.",
    image: Quora2,
    link: "https://www.quora.com/What-are-your-views-on-pornography"
  },
  {
    name: "Réseaux Sociaux 3",
    description:
    "Les membres de ce subreddit postent sur Reddit.com, un site de médias sociaux, et pensent que les personnes de moins de 25 ans doivent avoir un accès facile au contenu prolifique, car beaucoup d'entre eux entrent dans la catégorie des personnes regardant du contenu pornographique selon les statistiques de Pornhub. Par conséquent, ils doivent avoir un moyen facile d'accéder à ce contenu, principalement parce que la science et la technologie sont plus libérales et offrent plus de liberté, du moins aux États-Unis, car dans de nombreux autres pays comme la France, Pornhub est interdit (bien que certains contournent cette interdiction avec des VPN). Ils croient que la génération Z et les générations futures ont trop accès à Internet, ce qui est dangereux et entraîne une augmentation de ces statistiques. Ils mentionnent en particulier comment les enfants de moins de 13 ans ont des iPhones tout neufs alors qu'ils avaient seulement des téléphones à clapet, ce qui les rend encore plus susceptibles de consommer ce contenu adulte."
    , image: Reddit1,
    link: "https://www.reddit.com/r/france/comments/14282cj/la_pornographie_de_plus_en_plus_consommée_par_les/"
  },


   {
    name: "Réseaux Sociaux 4",
    description:
    "Cette publication était moins formelle. Beaucoup ont affirmé qu'ils utilisaient régulièrement des sites pornographiques, montrant ainsi à quel point ils sont populaires et accessibles, tout en soulignant qu'ils sont destinés aux adultes uniquement. Cependant, il y avait un message qui affirmait que si les pays n'autorisaient pas l'accès au contenu pornographique, les enfants ne s'y rendraient pas et que c'est uniquement parce que les enfants ont l'opportunité de le faire qu'ils le font, non pas parce qu'ils le veulent, mais parce que leur curiosité les y pousse. Étant donné que les pays font cela, nous devons éduquer nos enfants par le biais d'un moyen formel, mais en veillant à ce qu'ils n'accèdent pas à ces sites et à ce que les conversations ne soient pas trop longues, car le sujet de la sexualité les met mal à l'aise."
    , image: Reddit2,
    link: "https://www.reddit.com/r/AskMeuf/comments/148sw5e/quel_est_votre_rapport_au_porno/"
  },

   {
    name: "Réseaux Sociaux 5",
    description:
    "Ce tweet de X (anciennement Twitter) de l'équipe de journalistes de Rédaction de France Culturel partage un lien vers un article qui aborde la consommation généralisée de pornographie chez les adolescents français. Cela a des effets néfastes sur leur vie intime, provoquant des perceptions déformées, des attentes irréalistes et des difficultés à établir des relations saines. L'article souligne la nécessité d'un dialogue ouvert et d'une meilleure éducation sexuelle, tout en abordant l'impact sociétal de l'objectification des femmes et des pressions exercées sur les hommes. Des programmes de 'détoxification pornographique' en ligne sont suggérés comme solution pour remettre en question les idées fausses et promouvoir des attitudes plus saines envers la sexualité."
    , image: Twitter1,
    description2: `Directe Source de publication ici`
    ,link2: "https://www.radiofrance.fr/franceculture/podcasts/le-reportage-de-la-redaction/generation-porno-9551263"
    , link: "https://twitter.com/FC_actu/status/1575064572511555588"
  },

   {
    name: "Réseaux Sociaux 6",
    description:
    "Ce message dans le même fil de discussion aborde un problème similaire où des hommes et des adolescents âgés de 15 ans et plus semblent maltraiter et blesser des femmes en raison de ce qu'ils ont consommé dans la pornographie, où les femmes sont dépeintes comme des objets et non comme des êtres humains. Des commentaires soutiennent que cela est vrai et que les garçons adoptent ces comportements, mais aussi que des adultes de différents pays ont plus facilement accès aux adolescents, ce qui entraîne des actes pédophiles graves. Cet article aborde également cette problématique et souligne comment cela crée des tensions parmi les enfants et entre leurs parents."
    , description2: `Directe Source de publication ici`
    ,image: Twitter2,
    link: "https://twitter.com/FC_actu/status/1575005250494160896"
    , link2: "https://www.radiofrance.fr/franceculture/podcasts/journal-de-8-h/journal-de-08h00-clara-lecocq-reale-du-mercredi-28-septembre-2022-6835028"
  },

];


export { services, testimonials, projects };
