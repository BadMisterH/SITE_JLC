import React from "react";
import Link from "next/link";
import Navbar from "../HeaderFooter/Navigation";
import Head from "next/head";
import Styles from "../../styles/Poles.module.scss";
import fleche from "../../public/assets/img/up-arrow.svg";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Footer from "../HeaderFooter/Footer";
import svgConsulting from "../../public/assets/img/Poles/pole_consulting-03.svg";
import StylesHome from "../../styles/Home.module.scss";

const PoleConsultingContainer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={Styles.containerConsulting}></div>
      <Head>
        <title>Pole Consulting</title>
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
        <div className={Styles.backgroundImagePoleConsulting}>
          {" "}
          <div style={{ background: "#41A9B5" }} className={Styles.BlocTitre}>
            <img
              style={{
                filter: "brightness(0) invert(1)",
              }}
              src={svgConsulting}
            ></img>
          </div>
        </div>
      </div>
      {/* fin */}
      {/* <div className={Styles.cercleConsulting}></div> */}
      <div className={Styles.bloc_principale_consulting}>
        <div>
          <p className={Styles.text_bloc_principale_consulting}>
            Notre pôle consulting est à votre disposition pour vous offrir une
            visibilité sur vos processus, mais pas que…
          </p>
          <div className={Styles.bloc_secondaire_formation}>
            <Link href="/Formations">
              <div
                style={{ cursor: "pointer" }}
                className={Styles.ImgConsultingFormation}
              >
                <div className={Styles.box_consulting}>
                  <div className={Styles.container}>
                    {/* <div className={Styles.cercleConsultingFormation}></div> */}

                    <h1 className={Styles.titre_bloc_formation}>FORMATION</h1>

                    <p className={Styles.description_bloc}>
                      Notre service formation Salesforce et CRMSide vous permet
                      d'être à jour sur les releases des outils que vous
                      utilisez au quotidien. Ne manquez plus les améliorations
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <div className={Styles.container_box_audit}>
              <Link href="/Audit">
                <div
                  style={{ cursor: "pointer" }}
                  className={Styles.ImgConsultingAudit}
                >
                  <div className={Styles.box_audit}>
                    <div className={Styles.container}>
                      {/* <div className={Styles.cercleConsultingAudit}></div> */}

                      <h1 className={Styles.titre_bloc_formation}>AUDIT</h1>

                      <p className={Styles.description_bloc}>
                        Notre service d’audit est à vos cotés pour vous aider à
                        appréhender l’architecture de vos SI
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={Styles.container_box_vie}>
              <Link href="/VisMaVie">
                <div
                  style={{ cursor: "pointer" }}
                  className={Styles.ImgConsultingVie}
                >
                  <div className={Styles.box_Vie}>
                    <div className={Styles.container}>
                      <h1 className={Styles.titre_bloc_formation}>
                        VIS MA VIE
                      </h1>
                      <p className={Styles.description_bloc}>
                        Chez JL Consulting, nous avons créé ce produit afin de
                        répondre à une demande grandissante chez nos clients et
                        prospects.
                      </p>
                    </div>
                    {/* <div className={Styles.cercleConsultingVie}></div> */}
                  </div>
                </div>
              </Link>
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
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PoleConsultingContainer;
