import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import 
{
  Article1Img,
  Article2Img,
  Article3Img,
  Article4Img,
  Article5Img,
  Article6Img,
  Article7Img,
  Article8Img,
  Article,


} 
from "../assets"
const articles = [
  {
    id: 1,
    title: "Article 1",
    title2: "Quel impact sur les enfants et les adolescents",
    fullDescription:
    "Cet article présente un débat entre deux experts, Alain Héril (psychologue) et Justine Atlan (également psychologue à l'Université de Pennsylvanie), sur les effets de la violence et de la pornographie sur les enfants et les adultes. Selon Alain Héril, les enfants de moins de 12 ans ne sont pas psychologiquement prêts à être exposés à des images pornographiques, car ils n'ont pas encore développé de représentations sexuelles. Cela peut être considéré comme une forme de 'viol avancé' et ces images ne doivent pas être considérées comme un exemple de leur éducation sexuelle. Justine Atlan souligne que la pornographie présente souvent des relations sexuelles où un partenaire utilise l'autre comme objet, ce qui n'est pas un modèle sain. Les images violentes sont moins traumatisantes car les enfants sont exposés plus tôt à la violence dans leurs jeux. Même si une exposition occasionnelle peut être gérée par la discussion, il est important que les parents soient attentifs aux signaux émis par leur enfant et ne négligent pas les questions liées à la sexualité. L'impact serait moindre chez les adolescents qui vivent dans une famille où la communication est possible. Cependant, une exposition répétée peut devenir traumatisante ou normaliser leur perception du désir. L'impact des images violentes dépend de leur nature, les jeux vidéo offrent une forme de catharsis contrairement aux médias. Il est essentiel que les parents expriment leurs valeurs et abordent les sujets d'intérêt pour les adolescents sur les réseaux sociaux. L'autorité parentale a ses limites et nécessite une communication ouverte."
    , previewImage: Article1Img,
    link : "https://www.cairn.info/revue-l-ecole-des-parents-2016-3-page-44.htm?ref=doi&contenu=article"
  },
  {
    id: 2,
    title: "Article 2",
    title2: "L'UTILISATION DE PORNOGRAPHIE CHEZ LES ADOLESCENTS",
    fullDescription: "Dans cette infographie, nous concluons les informations suivantes :",
    fullDescription2:
    "41 % des hommes hétérosexuels et cisgenres regardent de la pornographie.",
      fullDescription3:
    "39,9 % des femmes hétérosexuelles et cisgenres regardent de la pornographie.",
      fullDescription4:
    "11 % des minorités sexuelles et de genre (MSG) qui sont biologiquement de sexe féminin regardent de la pornographie.",
     fullDescription5:
     "5,5 % des minorités sexuelles et de genre (MSG) qui sont biologiquement de sexe masculin regardent de la pornographie.",
      fullDescription6:
      "0,6 % des adolescents appartenant à des minorités sexuelles, des personnes non binaires et des MSG ont regardé de la pornographie.",
    previewImage: Article2Img,
    link: "https://www.cripcas.ca/images/capsules/PRESAJ/Utilisation_de_la_porno.pdf"
  },
  {
    id: 3,
    title: "Article 3",
    title2: "SAVIEZ-VOUS QUE PLUS DE 60% DES ADOLESCENTS ONT DÉJÀ EU LEUR PREMIÈRE EXPÉRIENCE AVEC LA PORNOGRAPHIE À L'ÂGE DE 14 ANS?",
    fullDescription:
    "Une récente étude menée dans notre laboratoire a examiné l'utilisation de la pornographie chez les adolescents hétérosexuels cisgenres (HC) et ceux des minorités sexuelles et de genre (MSG). L'étude a révélé que l'accès facile à la pornographie en a fait une pratique courante chez les adolescents. Les adolescents de MSG ont tendance à l'utiliser pour rechercher des informations sur l'orientation sexuelle ou en raison du manque de partenaires romantiques ou sexuels potentiels. Les résultats de l'étude indiquent que 88 % des garçons HC, 78 % des garçons MSG, 54 % des filles MSG, 39 % des filles HC et 29 % des individus non-binaires MSG ont déclaré avoir regardé de la pornographie avant l'âge de 14 ans. Les filles MSG ont commencé à utiliser la pornographie à un âge plus jeune que les filles HC, avec une moyenne de 12,3 ans contre 12,9 ans. Les garçons, quant à eux, ont commencé à regarder de la pornographie à l'âge moyen de 11,6 ans pour les HC et 11,9 ans pour les MSG. Les garçons MSG ont signalé une utilisation plus fréquente de la pornographie, plusieurs fois par semaine, tandis que les filles HC ont déclaré la consommer moins d'une fois par mois. En résumé, environ deux tiers des adolescents ont été exposés à la pornographie avant l'âge de 14 ans, et plus de la moitié ont déclaré l'utiliser au moins une fois par semaine au cours des trois derniers mois. Ces résultats soulignent l'importance de la pornographie dans le développement sexuel des adolescents, qu'ils soient HC ou MSG. Les habitudes d'utilisation de la pornographie sont similaires entre les garçons HC et MSG, mais présentent certaines différences entre les filles HC et MSG. Les différences de genre concernant l'utilisation de la pornographie semblent persistantes, indépendamment du statut MSG. De plus, ces conclusions mettent en évidence le manque d'informations sur la sexualité des personnes de MSG dans les programmes d'éducation sexuelle actuels, ce qui peut conduire les adolescents MSG à rechercher des informations dans la pornographie.",
    previewImage: Article3Img,
    link: "https://www.sophiebergeron.ca/index.php/nouvelles-scoup/267-saviez-vous-que-plus-de-60-des-adolescents-ont-deja-eu-leur-premiere-experience-avec-la-pornographie-a-l-age-de-14-ans"
  },

  {
    id: 4,
    title: "Article 4 (avec des positifs d'article 5)",
    title2: "Aspects positifs de la pornographie:",
    fullDescription2:
    "Focalisation sur des performances sexuelles intenses et l'exploration de fantasmes. Cecui aide aide avec l'exploration de la sexualité et découverte de différentes orientations sexuelles",
      fullDescription3:
    "Stimulation du désir sexuel et de l'imagination.",
      fullDescription4:
    "Fourniture de conseils sur les activités et positions sexuelles qui ajout d'excitation et facilitation de la communication sur les préférences sexuelles dans les relations et nécessité de pensée critique lors de la consommation de pornographie.",
     fullDescription5:
     "Émergence de plateformes de pornographie éthique ou féministe privilégiant le plaisir, le consentement et une rémunération équitable pour les acteurs et actrices, ainsi que la vérification de leur âge.",
      fullDescription6:
      "La pornographie permet aux personnes d'explorer leur orientation sexuelle et leur identité sexuelle, car tout ce qui est considéré comme normal dans la société est généralement hétérosexuel. Parfois, les individus ne comprennent pas pourquoi ils ne sont pas attirés par les femmes ou les hommes, pensant qu'il y a quelque chose de mal en eux. Mais à travers la pornographie, ils se découvrent et se rendent compte qu'ils ne sont pas étranges, mais normaux.",
     
    fullDescription7:
    "Possibilité d'apprendre et d'explorer de nouvelles pratiques sexuelles",
      fullDescription8:
    "La pornographie permet aux personnes de voir comment les autres ont des relations sexuelles en utilisant des préservatifs et des pratiques sécuritaires, et de les mettre en pratique avec leurs partenaires.",
      fullDescription9:
    "Peut favoriser des discussions sur la sexualité et les préférences avec un partenaire",
      previewImage: Article4Img,
    link: "https://www.noovomoi.ca/vivre/couple/article.bienfaits-mefaits-pornographie.1.8725835.html"
  },

    {
    id: 5,
    title: "Article 5 (avec des negatifs d'article 4)",
    title2: "Aspects positifs de la pornographie:",
    fullDescription2:
    "Risque de dépendance et d'effets négatifs sur la vie personnelle, professionnelle et sociale",
     fullDescription3:
    "La consommation excessive de pornographie peut entraîner une dépendance qui peut 'ruiner les relations sociales, le mariage et d'autres aspects de la vie'. Cela peut avoir un impact négatif sur la vie personnelle, professionnelle et sociale d'une personne, en perturbant ses interactions avec les autres et en créant des conflits dans ses relations. Certains individus peuvent également privilégier la pornographie plutôt que les liens intimes, ce qui peut entraîner des problèmes dans les relations.",
    fullDescription4:
    "Sentiments de dégoût, de honte et de culpabilité associés à la consommation excessive de pornographie",
    fullDescription5:
    "Une consommation excessive de pornographie peut entraîner des sentiments de dégoût, de honte et de culpabilité chez certaines personnes. Cela peut être dû à la nature souvent stigmatisée de la pornographie dans la société et aux normes sociales autour de la sexualité.",
    fullDescription6:
    "Risque de développement de dysfonctions sexuelles chez certains hommes",
    fullDescription7:
    "Il existe un risque que la consommation excessive de pornographie puisse contribuer au développement de dysfonctions sexuelles chez certains hommes. Cela peut être dû à des attentes irréalistes créées par la pornographie et à une désensibilisation aux stimuli sexuels réels.",
    fullDescription8:
    "Perpétuation de stéréotypes nocifs envers les communautés LGBTQIA+ et propagation de dynamiques racistes",
    fullDescription9:
    "La pornographie peut malheureusement perpétuer des stéréotypes nocifs envers les communautés LGBTQIA+ et contribuer à la propagation de dynamiques racistes. Il est important de souligner que ces représentations ne reflètent pas la diversité et la réalité de ces communautés, et peuvent avoir un impact négatif sur la perception et l'acceptation de celles-ci.",
    fullDescription10:
    "Représentations irréalistes du sexe et des relations sexuelles :",
    fullDescription11:
    "La pornographie présente souvent des représentations irréalistes du sexe et des relations sexuelles, embellissant la réalité et ne reflétant pas nécessairement les comportements réels des femmes et des hommes au sein d'une relation. Cela peut créer des attentes irréalistes et potentiellement nuire à la satisfaction dans les relations sexuelles réelles. Cecui aussi cause Possible impact négatif sur l'estime de soi et la confiance dans les relations sexuelles réelle"
    ,fullDescription12:
    "La consommation excessive de pornographie peut avoir un impact négatif sur l'estime de soi et la confiance dans les relations sexuelles réelles. Les comparaisons avec les acteurs et actrices de films pornographiques, ainsi que les représentations idéalisées, peuvent faire naître des doutes sur sa propre performance et son apparence, ce qui peut affecter la confiance dans les relations intimes."
    ,previewImage: Article5Img,
    link: "https://cliniquemana.com/pornographie-bien-ou-mal/"
  },

    {
    id: 6,
    title: "Article 6",
    title2: "Accès à la pornographie chez l’enfant et l’adolescent : conséquences et recommandations",
    fullDescription:
    "Le rapport examine la prévalence de la pornographie chez les enfants et les adolescents, en particulier en France, ainsi que les conséquences potentielles d'une exposition précoce. Il met en évidence la disponibilité généralisée de contenus pornographiques, y compris des images explicites et violentes, sur différentes plateformes médiatiques. Le rapport souligne la nécessité de mener des recherches approfondies pour mieux comprendre l'impact de la pornographie sur la sexualité et les relations des jeunes. De plus, il appelle à des programmes d'éducation sexuelle complets impliquant les parents et abordant les défis éthiques et juridiques liés à l'accès en ligne à la pornographie. Le rapport conclut par des recommandations visant à promouvoir des pratiques responsables dans l'industrie, à soutenir les services de soins spécialisés, et à encourager la poursuite des recherches dans ce domaine."
    , fullDescription2: 
    `"La pornographie est un phénomène d'ampleur croissante présent dans toute la société, même en l'absence de promotion officielle." "Une proportion non négligeable d'enfants et un nombre important d'adolescents sont exposés (ou ont accès) à la pornographie." "Près de 80% des jeunes ont été exposés à la pornographie à un moment donné de leur vie." `,
    fullDescription3:  
    `"Les études convergent pour dire que la pornographie influence la manière dont les jeunes appréhendent leur sexualité et celle de leurs pairs." \n "Le succès des réseaux sociaux auprès de la jeunesse a banalisé l'accès à la pornographie et bouleversé les pratiques et usages des jeunes en termes de sexualité." \n "L'Académie nationale de médecine recommande de repenser l'éducation à la sexualité à l'école et d'intégrer les parents dans cette éducation."`
    , fullDescription4:
    "La pornographie représente 25% du trafic web mondial de vidéos",
    fullDescription5:
    "L'accès à la pornographie était autrefois une démarche volontaire, souvent réalisée en groupe, mais aujourd'hui, le temps passé par les enfants et les adolescents sur les écrans facilite l'accès involontaire à la pornographie"
    , fullDescription6:
    "La disponibilité des technologies numériques a créé des modalités particulières d'accès à la pornographie",
    fullDescription7:
    "Les disparités territoriales dans l'accès aux soins spécialisés doivent être corrigées et les organismes de prise en charge renforcés" 
    ,previewImage: Article6Img,
    link : "https://www.sciencedirect.com/science/article/abs/pii/S000140792300064X?via%3Dihub"
  },

    {
    id: 7,
    title: "Article 7",
    title2: "Les pratiques de sextage chez les adolescents (Sexting)",
    fullDescription:
    `Le document intitulé "Les pratiques de sextage chez les adolescents : État de la situation actuelle et étude sur la contribution de certains déterminants associés au phénomène" est une thèse de doctorat rédigée par François Nadeau dans le domaine de la psychologie clinique, se concentrant sur la prévalence et les déterminants du sextage chez les adolescents. Ce résumé de deux pages présente un aperçu des points clés et des résultats du document de 138 pages.`,
    fullDescription2:
    "L'analyse des comportements de sextage indique que les adolescents s'engagent dans différentes formes de sextage, notamment les messages textes, les images, les vidéos et les activités par webcam. Les taux de prévalence pour chaque type de comportement de sextage sont présentés, mettant en évidence la fréquence d'engagement au sein de l'échantillon.",
    fullDescription3:
    "L'analyse de régression logistique révèle plusieurs facteurs associés à la décision de s'engager dans le sextage. Ces facteurs comprennent la consommation de cyberpornographie, le fait d'avoir plus de deux partenaires sexuels, le genre féminin et la perception de conséquences négatives. Cependant, l'auto-objectification, les compétences d'affirmation de soi et l'âge du premier rapport sexuel ne montrent aucune corrélation significative avec les comportements de sextage.",
    fullDescription4:
    "Une analyse multigroupes indique que le modèle proposé expliquant la décision de pratiquer le sextage ne varie pas en fonction du genre, suggérant que les déterminants du sextage sont cohérents chez les adolescents, qu'ils soient de sexe masculin ou féminin.",
    fullDescription5:
    "L'étude apporte une contribution au domaine de la psychologie en fournissant des informations sur la prévalence et les déterminants du sextage chez les adolescents. Elle met en évidence le rôle de l'exposition médiatique, des efforts de prévention et des facteurs de risque sexuels dans la formation des comportements de sextage. Les résultats ont des implications pour la conception de stratégies de prévention efficaces et d'interventions visant à répondre aux risques associés au sextage chez les adolescents.",
    fullDescription6:
    "Le document reconnaît certaines limites de l'étude, telles que l'utilisation de mesures autodéclarées, un échantillon spécifique de la région de Québec et un potentiel de biais dans le signalement des comportements de sextage. Il suggère des orientations pour larecherche future, notamment des études longitudinales, une représentation géographique plus large et l'exploration de facteurs supplémentaires influençant les comportements de sextage.",
    fullDescription7:
    "L'étude met en évidence l'association entre la consommation de cyberpornographie et les comportements de sextage chez les adolescents. Elle suggère que l'exposition à des contenus explicites en ligne peut influencer les décisions des adolescents de s'engager dans le sextage, soulignant l'importance de l'éducation à la maîtrise des médias et du comportement numérique responsable.",
    fullDescription8:
    "Le document aborde la pertinence des programmes de prévention dans la lutte contre le sextage chez les adolescents. Il explore la relation entre la prise de conscience des conséquences négatives du sextage et le processus de prise de décision des adolescents. Ces résultats soulignent la nécessité de stratégies de prévention globales qui favorisent une utilisation sûre et responsable de la technologie tout en sensibilisant aux risques potentiels.",
    fullDescription9:
    "Compte tenu des résultats, le document met l'accent sur l'importance de fournir aux adolescents une éducation et un soutien en matière de relations saines, de consentement et de citoyenneté numérique. Il suggère que les interventions devraient se concentrer sur la promotion d'une image de soi positive, de compétences d'affirmation de soi et d'un comportement en ligne responsable, tout en abordant les risques potentiels et les conséquences du sextage.",
    fullDescription10:
    "L'étude reconnaît les implications éthiques liées à la recherche sur des sujets sensibles tels que le sextage. Elle souligne l'importance de garantir la confidentialité des participants, le consentement éclairé et l'utilisation de méthodologies de recherche appropriées pour minimiser les éventuels préjudices."
    , fullDescription11:
    "Bien qu'elles ne soient pas largement discutées dans ce résumé, le document explore probablement les conséquences à long terme du sextage chez les adolescents. Comprendre l'impact potentiel sur la santé mentale, l'estime de soi et les relations interpersonnelles peut fournir des informations précieuses pour la recherche future et orienter le développement de services de soutien pour les personnes concernées.",
    fullDescription12:
    "Le document peut présenter des recommandations spécifiques pour la recherche future dans le domaine du sextage chez les adolescents. Celles-ci peuvent inclure l'exploration des facteurs culturels et contextuels, l'étude du rôle de l'influence des pairs, l'analyse de l'efficacité des programmes de prévention et l'analyse de l'évolution des comportements de sextage en réponse aux avancées technologiques."
    ,previewImage: Article7Img,
    link: Article
  },

    {
    id: 8,
    title: "Article 8",
    title2: "Les enjeux particuliers pour les préadolescents et les adolescents",
    fullDescription2:
    "Les adolescents sont de plus en plus exposés à la pornographie à un âge de plus en plus jeune en raison de la facilité d'accès sur Internet.",
    fullDescription3: 
    "Des études montrent que les adolescents commencent à visionner de la pornographie vers l'âge de 11 à 12 ans en moyenne.",
    fullDescription4:
    "L'exposition à la pornographie est liée à la formation d'attitudes malsaines sur le sexe, les relations et l'image corporelle chez les adolescents.",
    fullDescription5:
    "Les garçons et les filles peuvent ressentir une pression pour agir comme ce qu'ils voient dans la pornographie, bien que celle-ci dépeigne des scénarios irréalistes (sources nécessaires). L'utilisation de la pornographie à l'adolescence est corrélée à un plus grand risque de dépendance sexuelle et de problèmes relationnels à l'âge adulte.",
    fullDescription6:
    "Les adolescents visionnent souvent du contenu violent ou extrême pour maintenir l'excitation due à l'habitude. L'exposition à la pornographie peut avoir un impact sur le développement du cerveau des adolescents en matière de maturation sexuelle et de voies de récompense.",
    fullDescription7:
    "Les parents ne parlent souvent pas de sexualité saine avec leurs enfants en raison de leur malaise ou de leur manque d'éducation (sources nécessaires).",
    fullDescription8:
    "Une éducation sexuelle complète est nécessaire pour aider les adolescents à développer une vision mature des relations, du consentement et de la nature irréaliste de la pornographie (sources nécessaires).",
    fullDescription9:
    "Les filtres et les contrôles parentaux sont imparfaits et les adolescents trouvent des moyens d'accéder à la pornographie (sources nécessaires).",
    fullDescription10:
    "Une exposition précoce à la pornographie peut être une occasion manquée pour un développement sain à l'adolescence et pour acquérir des compétences relationnelles (sources nécessaires).",
    fullDescription11:
    "Des recherches supplémentaires sont encore nécessaires sur les impacts à long terme de la pornographie sur les adolescents étant donné l'évolution constante du paysage numérique (sources nécessaires).",
    fullDescription12:
    "Le débat sociétal se poursuit sur le soutien à la santé et au développement des adolescents dans le contexte de la disponibilité généralisée de la pornographie en ligne (sources nécessaires)."
    ,previewImage: Article8Img,
    link: "https://habilomedias.ca/litteratie-numerique-education-aux-medias/enjeux-des-medias/publicite-et-consommation/les-enjeux-particuliers-pour-les-preadolescents-et-les-adolescents"
  },
];

const ArticleCard = ({ article, isExpanded, setExpandedArticleId }) => {
  const { id, title, content, previewImage} = article;

  const handleClick = () => {
    if (isExpanded) {
      setExpandedArticleId(null);
    } else {
      setExpandedArticleId(id);
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 0.75)}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      className={`cursor-pointer w-full sm:w-[360px] ${isExpanded ? 'mt-5' : ''}`}
      onClick={handleClick}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div>
          <img src={previewImage} alt={title} className="mb-4" />
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          {isExpanded && (
            <div className={`mt-2 text-secondary text-[12px] ${isExpanded ? 'max-h-2 overflow-y-scroll' : ''}`}>
              {content}
            </div>
            
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};



const Articles = () => {
  const articlesListRef = useRef(null);
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleArticleClick = (id) => {
    setExpandedArticleId(id);
  };

  const handleResetClick = () => {
    setExpandedArticleId(null);
  };

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedArticles = chunkArray(articles, 3);

const handleShowMore = () => {
  setShowMore(true);
};

const handleShowLess = () => {
  setShowMore(false);
  setExpandedArticleId(null);
};


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Preuves No. 1 (Articles Résumés)</p>
        <h2 className={`${styles.sectionHeadText}`}>Articles</h2>
      </motion.div>
  <div ref={articlesListRef} className="flex flex-wrap">
      {chunkedArticles.slice(0, showMore ? chunkedArticles.length : 1).map((row, index) => (
        <div key={index} className="flex flex-wrap w-full">
          {row.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              isExpanded={expandedArticleId === article.id}
              setExpandedArticleId={handleArticleClick}
            />
          ))}
        </div>
      ))}
    </div>
{articles.length > 3 && !showMore && (
      <div className="flex items-center cursor-pointer" onClick={handleShowMore}>
        <p className="text-red-500">Afficher Plus</p>
        <span className="ml-1">
          <i className="fa-solid fa-chevron-down text-red-500"></i>
        </span>
      </div>
    )}


     
 
{showMore && (
  <div className="flex flex-wrap">
    {/* {chunkedArticles.slice(1).map((row, rowIndex) => (
      <div key={rowIndex} className="flex flex-wrap w-full">
        {row.map((article) => {
          // Exclude the articles that are already displayed in the main section
          if (
            expandedArticleId !== article.id &&
            !chunkedArticles
              .slice(0, rowIndex + 1)
              .flat()
              .some((a) => a.id === article.id)
          ) {
            return (
              <ArticleCard
                key={article.id}
                article={article}
                isExpanded={expandedArticleId === article.id}
                setExpandedArticleId={handleArticleClick}
              />
            );
          }
          return null;
        })}
      </div>
    ))} */}
  </div>
)}

    {showMore && (
      <div className="flex items-center cursor-pointer" onClick={handleShowLess}>
        <p className="text-red-500">Afficher Moins</p>
        <span className="ml-1">
          <i className="fa-solid fa-chevron-up text-red-500"></i>
        </span>
      </div>
    )}


{expandedArticleId && (
  <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <motion.div
      variants={fadeIn("up", "spring", 0, 0.75)}
      initial="collapsed"
      animate="expanded"
      className="bg-white p-8 rounded-lg w-[100%] md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] max-w-screen-lg h-[80%] overflow-y-scroll"
      style={{ zIndex: 1000000000 }}
    >
      <div className="flex justify-end">
        <button className="text-gray-500 hover:text-gray-700 text-3xl cursor-pointer">
          <i className="fas fa-times" onClick={handleResetClick}></i>
        </button>
      </div>
      {articles.map((article) => {
        if (article.id === expandedArticleId) {
          return (
            <div key={article.id}>
              <h3 className="text-black text-center font-bold text-[24px]">{article.title2}</h3>
              <p className="text-gray-700 leading-relaxed">{article.fullDescription}</p>
              <br/>
              <ol className="text-gray-700 leading-relaxed ">
                <li>{article.fullDescription2}</li>
                <li>{article.fullDescription3}</li>
                <li>{article.fullDescription4}</li>
                <li>{article.fullDescription5}</li>
                <li>{article.fullDescription6}</li>
                <li>{article.fullDescription7}</li>
                <li>{article.fullDescription8}</li>
                <li>{article.fullDescription9}</li>
                                <li>{article.fullDescription10}</li>
                                                <li>{article.fullDescription11}</li>
                                                      <li>{article.fullDescription12}</li>



              </ol>
              <br/>
              <a href={article.link} className="text-gray-700 leading-relaxed hover:text-purple-500 ">Source d'article </a>
            </div>
          );
        }
        return null;
      })}
    </motion.div>
  </div>
)}

    </>
  );
};


export default SectionWrapper(Articles, "");