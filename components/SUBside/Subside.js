import {
  React,
  Head,
  Navigation,
  Footer,
  StylesSubSide,
  StylesApp,
  SunsideContainerOne,
  SunsideContainerTwo,
  Styles,
} from "./ImportSubside";
import Button from "../ButtonScroll/ScrollButton";
const Subside = () => {
  return (
    <div>
      <Head>
        <title>Article</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>{" "}
      <Button />
      <div className={StylesApp.header}>
        <Navigation />
      </div>
      <div className={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          <div className={StylesSubSide.SubSideImg}>
            <div className={StylesApp.circleAppContainer}>
              <h1
                id={StylesSubSide.CircleSubSide}
                className={StylesApp.TitileAppImg}
              >
                SUBSIDE
              </h1>
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 id={StylesSubSide.SubSideTitle} className={StylesApp.AppTitle}>
            SUBSIDE
          </h1>
          <div id={StylesSubSide.descriptionSUBSIDE}>
            <p className={StylesApp.descriptionApp}>
              Les défis relevés par l'économie de la souscription sont élevés.
              Il faut répondre à diverses problématiques pour répondre au besoin
              de ses clients.
            </p>

            <p className={StylesApp.descriptionApp}>
              Le cumul des outils entrainent souvent des problèmes de gestion,
              resultant à des informations éronnées. Informations commerciales
              inexactes → perte de client.
            </p>
            <p className={StylesApp.descriptionApp}>
              Sur un marché compétitif et dynamique, les exigences des clients
              se font de plus en plus forte.
            </p>
            <p className={StylesApp.descriptionApp}>
              Utiliser notre solution SUBSide c’est la garantie d’un outil qui
              vous permettra d’atteindre une efficacité opérationnelle plus
              élevée. L’automatisation complète vous aide à gérer vos activités
              de bout en bout (end-to-end)
            </p>
          </div>
        </div>
      </div>
      <SunsideContainerOne />
      <SunsideContainerTwo />
      <div className={Styles.blocAdopt} id={Styles.blocAdopt}>
        <h1 className={Styles.TitreBloc}>FAITE COMME EUX</h1>
        <div className={Styles.logos}>
          <div className={Styles.logos_clients_Subside}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subside;
