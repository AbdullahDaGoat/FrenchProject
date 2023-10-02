import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showVocabulary, setShowVocabulary] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleVocabulary = () => {
    setShowVocabulary(!showVocabulary);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain hover:text-red-600" />
          <a href="https://docs.google.com/document/d/1MUICuQdFEHN857ar5Mx31rVWhGHEgwJu-wcVmCxgrj8/edit" className="text-white text-[18px] font-bold cursor-pointer">
            Abdullah Khan | Classe de Français 2023
          </a>
        </Link>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-white`}
                onClick={() => setToggle(!toggle)}
              >
                <Link to="/">Vocabulaire</Link>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={toggleVocabulary}
          className="hidden sm:flex items-center gap-2 bg-transparent text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
        >
          Vocabulaire
        </button>
      </div>

      {showVocabulary && (
        <div className="fixed top-0 left-0 right-0 w-full h-full bg-black text-white p-8 z-50 overflow-y-scroll">
          <h2 className="text-3xl font-bold text-center">Vocabulaire</h2>

          <p className="pl-4 text-3xl font-bold underline">Article 1:</p>
          <br/>
          <ol className="list-decimal pl-4 text-xl">
            <li>Psychologie humaine: le domaine d'étude concernant le comportement et les processus mentaux des individus.</li>
            <li>Viol scopique : l'idée de violence visuelle ou le fait d'être témoin de quelque chose de violent.</li>
            <li>Exposition ponctuelle : être exposé à quelque chose de manière occasionnelle ou temporaire.</li>
            <li>Catharsis : le processus de libération émotionnelle ou psychologique par le biais de l'expression ou de l'expérience.</li>
          </ol>
          <br/>
          <br/>
        
            <p className="pl-4 text-3xl font-bold underline">Article 4:</p>
          <br/>
          <ol className="list-decimal pl-4 text-xl">
           <li>Fantasmes : idées ou scénarios imaginaires d'ordre sexuel.</li> <li>Conseils : recommandations ou suggestions pour aider à améliorer ou à explorer des activités ou des positions sexuelles.</li> <li>Rémunération équitable : compensation financière juste et équitable pour les acteurs et actrices de l'industrie pornographique.</li> <li>Hétérosexuel : une personne qui est attirée sexuellement et/ou romantiquement par des personnes du sexe opposé.</li> <li>Ruiner : causer des dommages graves ou la destruction complète de quelque chose.</li> <li>Liens intimes : relations étroites, profondes et personnelles avec les autres.</li> <li>Dégoût : un sentiment de répulsion ou de déplaisir extrême.</li> <li>Honte : un sentiment de culpabilité ou d'embarras envers soi-même.</li> <li>Culpabilité : un sentiment de responsabilité ou de remords pour un comportement perçu comme mauvais ou inapproprié.</li> <li>Stigmatisée : soumise à une stigmatisation sociale ou à des jugements négatifs.</li> <li>Dysfonctions sexuelles : des problèmes ou des difficultés dans la fonction sexuelle, tels que l'impuissance, l'éjaculation précoce ou les troubles du désir sexuel.</li> 
          </ol>
          <br/>
          <br/>

           <p className="pl-4 text-3xl font-bold underline">Article 5:</p>
          <br/>
          <ol className="list-decimal pl-4 text-xl">
            <li>Désensibilisation : réduction de la sensibilité ou de la réactivité à un stimulus spécifique.</li> <li>Stéréotypes nocifs : croyances préconçues et préjudiciables sur un groupe de personnes.</li> <li>Estime de soi : l'évaluation subjective de sa propre valeur et de son estime personnelle.</li>          
          </ol>
          <br/>
          <br/>

          <p className="pl-4 text-3xl font-bold underline">Article 6:</p>
          <br/>
          <ol className="list-decimal pl-4 text-xl">
<li>Exposition précoce : le fait d'être confronté à quelque chose, dans ce cas à la pornographie, à un âge jeune ou avant d'être prêt à y faire face.</li> <li>Banalisé : rendu courant, ordinaire ou normalisé.</li>
          </ol>
          <br/>
          <br/>

          <p className="pl-4 text-3xl font-bold underline">Article 8:</p>
          <br/>
          <ol className="list-decimal pl-4 text-xl">
<li>Attitudes malsaines : des opinions ou des croyances qui ne favorisent pas la santé mentale, physique ou émotionnelle.</li> <li>Dépeindre : représenter ou montrer quelque chose.</li> <li>Voies de récompense : les circuits neuronaux et les systèmes cérébraux qui sont impliqués dans la sensation de plaisir et de gratification.</li> <li>Malaise : un sentiment d'inconfort, de gêne ou de malaise.</li>
          </ol>
          <br/>
          <br/>
<p className="pl-10 text-xl font-bold text-center">Veuillez noter que pour les articles restants, les mots étaient soit simples, soit répétés à partir des articles ci-dessus ou auto-explicatifs / compréhensibles.</p>          <button
            onClick={toggleVocabulary}
            className="bg-transparent text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 block mx-auto mt-8"
          >
            FERMER!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
