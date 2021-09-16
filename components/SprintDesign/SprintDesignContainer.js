import {
  React,
  Head,
  Navigation,
  Footer,
  StylesCRM,
  StylesApp,
  StylesHome,
  Styles,
} from "../../components/Partenaires/importPartenaires.js";
import Section_two from "../../components/SprintDesign/components/Section_sprint_design";
import Button from "../ButtonScroll/ScrollButton";
import StylesSD from "../../styles/SprintDesign.module.scss";

const SprintDesignContainer = () => {
  return (
    <div>
      <Head>
        <title>Sprint Design</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>
      <div className={StylesSD.containerConsulting}></div>
      <Button />
      <div className={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          <div className={StylesApp.CenshareImg}>
            <div className={StylesApp.circleAppContainer}>
              <h1 className={StylesApp.TitileAppImg}>
                SPRINT <br></br> DESIGN
              </h1>
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 className={StylesApp.AppTitle} id={StylesCRM.TitleCRMSide}>
            Le Sprint quoi ?{" "}
          </h1>
          <p className={StylesApp.descriptionApp} id={StylesCRM.descriptionCrm}>
            Le Sprint Design est une méthodologie d’UX design en 5 phases
            inspirée de Google Design Sprint et adaptée par One More Thing
            Studio
          </p>
        </div>
      </div>
      <Section_two />
      <div className={Styles.blocAdopt}>
        <h1 className={Styles.TitreBloc}>FAITES COMME EUX</h1>
        <div className={Styles.logos}>
          <div className={Styles.logos_clients}></div>
          <div className={Styles.logos_clients2}></div>
          <div className={Styles.logos_clients3}></div>
          <div className={Styles.logos_clients4}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SprintDesignContainer;
