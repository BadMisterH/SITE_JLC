import {
  React,
  Head,
  Navigation,
  Footer,
  StylesCRM,
  StylesApp,
  StylesHome,
  Styles,
  StylesSalesforces,
  StylesPartenaires,
  ImgCenshare,
} from "./importPartenaires.js";
import Forces from "../../public/assets/img/Salesforces/partenariat_JL_Consulting.svg";
import Button from "../ButtonScroll/ScrollButton";
const Ringover = () => {
  return (
    <div>
      <Head>
        <title>Ringover</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>
      <Button />
      <div className={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          <div className={StylesApp.CenshareImg}>
            <div className={StylesApp.circleAppContainer}>
              <img
                className={StylesSalesforces.ImgSalesforces}
                src={ImgCenshare}
                alt="55"
              ></img>{" "}
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 className={StylesApp.AppTitle} id={StylesCRM.TitleCRMSide}>
            Censhare{" "}
          </h1>
          <p className={StylesApp.descriptionApp} id={StylesCRM.descriptionCrm}>
            Ce mélange d’audit, d’observation vous offrira après 1 journée
            (minimum) différents livrables qui vous permettront de faire le
            point sur vos processus métiers, sur l’adoption de votre crm,…{" "}
          </p>
        </div>
      </div>
      <div className={StylesPartenaires.Container}>
        <img src={Forces} className={StylesPartenaires.Img} alt=""></img>
        <div className={StylesPartenaires.container_description_partenariat}>
          <h1 className={StylesPartenaires.Title}>Partenariat avec JLC</h1>
          <p className={StylesPartenaires.Text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum.
          </p>
        </div>
      </div>
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

export default Ringover;
