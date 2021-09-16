import {
  React,
  Head,
  Navigation,
  Footer,
  StylesCRM,
  StylesApp,
  StylesHome,
  Styles,
} from "../Partenaires/importPartenaires.js";
import Formation_section from "../Formation/components/Formation_section_two";
import Button from "../ButtonScroll/ScrollButton";
const Audit = () => {
  return (
    <div>
      <Head>
        <title>Formation</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>
      <Button />
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>

      <div className={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          {/* <img className={StylesApp.AppImg} src={ImgApp} alt="app"></img> */}
          <div className={StylesApp.FormationImg}>
            <div className={StylesApp.circleAppContainer}>
              <h1
                className={StylesApp.TitileAppImg}
                id={StylesApp.TitileAppImg}
              >
                FORMATION
              </h1>
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 className={StylesApp.AppTitle} id={StylesCRM.TitleCRMSide}>
            Nos Formations{" "}
          </h1>
          <p className={StylesApp.descriptionApp} id={StylesCRM.descriptionCrm}>
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
            voluptua. At vero eos et.
          </p>
        </div>
      </div>

      <Formation_section />

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

export default Audit;
