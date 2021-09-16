import React from "react";
import Link from "next/link";
import Navbar from "../HeaderFooter/Navigation";
import Head from "next/head";
import Styles from "../../styles/Poles.module.scss";
import fleche from "../../public/assets/img/up-arrow.svg";
import styles from "../../styles/Home.module.scss";
import StylesHome from "../../styles/Home.module.scss";
// import bss from "../../public/assets/img/bssjlconsulting.png";
import Footer from "../HeaderFooter/Footer";
import logoSvgSolution from "../../public/assets/img/Poles/pole_Solutions-04.svg";

const PoleSolutionContainer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={Styles.containerConsulting}></div>
      <Head>
        <title>Pole Solutions</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>{" "}
      <div className={StylesHome.navigation}>
        <Navbar />
      </div>
      <button
        className="btn"
        onClick={scrollTop}
        style={{
          height: "52px",
          width: "52px",
          backgroundColor: "white",
          position: "fixed",
          zIndex: 140,
          bottom: "0",
          right: "0",
          margin: "0px 23px 23px 10px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
      >
        <div
          style={{
            opacity: 1,
            height: "32px",
            width: "27px",
          }}
        >
          <img
            className={styles.rotate}
            style={{ height: "32px", width: "27px" }}
            src={fleche}
          ></img>
        </div>
      </button>
      {/* image d'accueil des poles  */}
      <div>
        <div className={Styles.backgroundImagePoleSolution}>
          {" "}
          <div
            style={{ background: "#00A4CA" }}
            className={Styles.BlocTitre}
            id={Styles.BlocTitreSolution}
          >
            <img
              src={logoSvgSolution}
              alt="Pole Solution"
              style={{ filter: "brightness(0) invert(1)" }}
            ></img>
          </div>
        </div>
      </div>
      {/* fin */}
      {/* <div className={Styles.cercleConsulting}></div> */}
      <div className={Styles.bloc_principale_consulting}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className={Styles.text_bloc_principale_consulting}>
            JL Consulting est un éditeur de logiciels et un intégrateur
            Salesforce. Nous créons nos propres solutions pour des besoins
            spécifiques (CRM, économie de la souscription,…). <br></br>
            <strong>Découvrez nos solutions</strong>
          </p>
          <div className={Styles.bloc_secondaire_formation}>
            <Link href="/Solution_CRM">
              <div
                className={Styles.ImgSolutionCRMSide}
                style={{ cursor: "pointer" }}
              >
                <div className={Styles.box_consulting}>
                  <div className={Styles.container}>
                    {/* <div className={Styles.cercleConsultingFormation}></div> */}

                    <h1 className={Styles.titre_bloc_formation}>CRMSide</h1>

                    <p className={Styles.description_bloc}>
                      Bénéficiez de la solution CRM qui vous accompagne du
                      sourcing à la fidélisation de vos clients et allez encore
                      plus loin.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className={Styles.container_box_audit}>
              <Link href="/SUBSIDE">
                <div
                  className={Styles.ImgSolutionSalesforceSide}
                  style={{ cursor: "pointer" }}
                >
                  <div className={Styles.box_audit}>
                    <div className={Styles.container}>
                      {/* <div className={Styles.cercleConsultingAudit}></div> */}

                      <h1 className={Styles.titre_bloc_formation}>SUBSide</h1>

                      <p className={Styles.description_bloc}>
                        Bénéficiez de la solution CRM qui vous accompagne du
                        sourcing à la fidélisation de vos clients et allez
                        encore plus loin.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* ImgSolutionSalesforceSide */}

            <div className={Styles.blocPartenaires}>
              <h1 className={Styles.TitreBloc}>NOS PARTENAIRES</h1>
              <div className={Styles.logos}>
                <div className={Styles.logos_partenaire}></div>
                <div className={Styles.logos_partenaire2}></div>
                <div className={Styles.logos_partenaire3}></div>
                <div className={Styles.logos_partenaire4}></div>
              </div>
            </div>
            <div className={Styles.blocAdopt} id={Styles.blocAdopt}>
              <h1 className={Styles.TitreBloc}>FAITES COMME EUX </h1>
              <div className={Styles.logos}>
                <div className={Styles.logos_clients}></div>
                <div className={Styles.logos_clients2}></div>
                <div className={Styles.logos_clients3}></div>
                <div className={Styles.logos_clients4}></div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PoleSolutionContainer;
