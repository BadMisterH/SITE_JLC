import {
  React,
  Head,
  Navigation,
  Footer,
  StylesClient,
  Atid,
  CRM,
  Expertise,
  Audit,
  PoleStyles,
  Resultat,
  Solution,
  Problematique,
} from "./Atid_import";
import Button from "../ButtonScroll/ScrollButton";
import StylesHome from "../../styles/Home.module.scss";

const Atid_consulting = () => {
  return (
    <div>
      <Head>
        <title>Client Atid</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>{" "}
      <Button />
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>{" "}
      <div className={StylesClient.FondAtild}>
        <img className={StylesClient.AtildLogo} src={Atid} alt=""></img>
        <div className={StylesClient.FondAtild_opacity}> </div>
        <div className={StylesClient.containerLogo}>
          <img src={CRM} className={StylesClient.iconLogo}></img>
          <img src={Expertise} className={StylesClient.iconLogo}></img>
          <img src={Audit} className={StylesClient.iconLogo}></img>
        </div>
      </div>
      <div className={StylesClient.Atid}>
        <p style={{ fontWeight: "bold" }}>Qui est atid</p>
      </div>
      <div className={StylesClient.section_two}>
        <div className={StylesClient.Problematioque_box}>
          <img src={Problematique} className={StylesClient.puzzle} alt=""></img>
          <div className={StylesClient.description_puzzle}>
            <h1 style={{ color: "#398CAF" }} className={StylesClient.h1}>
              LA PROBLEMATIQUE
            </h1>
            <p className={StylesClient.sizeTxt}>
              Atid souhaite se doter d'une solution pour optimiser et maîtriser
              la gestion opérationnelle de ses prestations, le pilotage de ses
              activités, le reporting nomade et la communication vis-à-vis de
              ses clients.
            </p>
          </div>
        </div>
        <div className={StylesClient.Solution_box}>
          <img src={Solution} className={StylesClient.puzzle} alt=""></img>
          <div className={StylesClient.description_puzzle}>
            <h1 style={{ color: "#99D5DD" }} className={StylesClient.h1}>
              LA SOLUTION
            </h1>
            <p className={StylesClient.sizeTxt}>
              Une plateforme intégrée regroupant les fonctionnalités demandées
              avec un CRM, une application mobile, reporting et KPI.
            </p>
          </div>
        </div>
        <div className={StylesClient.Resultat_box}>
          <img src={Resultat} className={StylesClient.puzzle} alt=""></img>
          <div className={StylesClient.description_puzzle}>
            <h1 style={{ color: "#5DBFBF" }} className={StylesClient.h1}>
              LE RESULTAT
            </h1>
            <p className={StylesClient.sizeTxt}>
              Plus d'automatisation pour un meilleur rendement et une meilleure
              productivité. Création d'un espace personnel web et mobile intégré
              dans BackSide pour les clients Intégration de module de paiement
              en ligne.
            </p>
          </div>
        </div>
      </div>
      <div className={PoleStyles.blocAdopt} id={PoleStyles.Bloc_RD}>
        <div className={StylesClient.RD}>
          <img className={StylesClient.Img_RD} alt="Robert Dupont"></img>
          <div className={StylesClient.description_Robert_Dupont}>
            <p className={StylesClient.text_RD}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>{" "}
            <p className={StylesClient.RobertDupont}>Robert Dupont</p>
            <p className={StylesClient.RD_Metier}>Responsable chez Atid</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Atid_consulting;
