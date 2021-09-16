import React from "react";
import Link from "next/link";
import Navbar from "../HeaderFooter/Navigation";
import Head from "next/head";
import Styles from "../../styles/Poles.module.scss";
import fleche from "../../public/assets/img/up-arrow.svg";
import styles from "../../styles/Home.module.scss";
import Footer from "../HeaderFooter/Footer";
import svgStudioDesign from "../../public/assets/img/Poles/pole_sudio design-05.svg";
const PoleDesignContainer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={Styles.containerConsulting}></div>
      <Head>
        <title>Pole Studio Design</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>{" "}
      <div className={Styles.navigation}>
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
      {/* fin */}
      <div>
        <div className={Styles.backgroundImagePoleStudioDesign}>
          <div className={Styles.backgroundImagePoleStudioDesign_dark}> </div>{" "}
          <div style={{ background: "#00a8cd" }} className={Styles.BlocTitre}>
            <img
              style={{
                filter: "brightness(0) invert(1)",
              }}
              src={svgStudioDesign}
            ></img>
          </div>
        </div>
      </div>
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
            Nous réalisons des applications mobiles superbes, fluide, robustes,
            ergonomiques, originales, sexy, magnifiques, canon, intuitives pour
            les startups, PME et grands groupes.
          </p>
          <div className={Styles.bloc_secondaire_formation}>
            <Link href="/Sprint_Design">
              <div
                className={Styles.ImgSprintDesign}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={Styles.box_consulting}
                  id={Styles.PoleSprintDesign}
                >
                  <div className={Styles.container}>
                    {/* <div className={Styles.cercleConsultingFormation}></div> */}

                    <h1 className={Styles.titre_bloc_formation}>
                      SPRINT DESIGN
                    </h1>

                    <p className={Styles.description_bloc}>
                      Le Sprint Design est une méthodologie d’UX design en 5
                      phases inspirée de Google Design Sprint et adaptée par One
                      More Thing Studio
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <div className={Styles.container_box_vie} id={Styles.boxApps}>
              <Link href="UX">
                <div
                  className={Styles.ImgStudioDesign}
                  style={{ cursor: "pointer" }}
                >
                  <div className={Styles.box_Vie} id={Styles.blocApp}>
                    <div className={Styles.container}>
                      <h1 className={Styles.titre_bloc_formation}>APPS</h1>
                      <p className={Styles.description_bloc}>
                        Nous réalisons des applications mobiles superbes,
                        fluide, robustes, ergonomiques, originales, sexy,
                        magnifiques, canon, intuitives pour les startups, PME et
                        grands groupes.
                      </p>
                    </div>
                    {/* <div className={Styles.cercleConsultingVie}></div> */}
                  </div>
                </div>
              </Link>
            </div>

            <div className={Styles.one_more_thing}>
              <div className={Styles.circle_one_more}></div>
              {/* <h1>one more thing</h1> */}
              <div className={Styles.backgrounColor_one_more_thing}></div>
            </div>

            <div className={Styles.blocAdopt} style={{ marginTop: "0px" }}>
              <h1 className={Styles.TitreBloc}>FAITES COMME EUX</h1>
              <div className={Styles.logos}>
                <div className={Styles.logos_omts}></div>
                <div
                  className={Styles.logos_omts2}
                  id={Styles.logos_clients2}
                ></div>
                <div className={Styles.logos_omts3}></div>
                <div className={Styles.logos_omts4}></div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PoleDesignContainer;
