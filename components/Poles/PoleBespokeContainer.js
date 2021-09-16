import React from "react";
import Head from "next/head";
import Styles from "../../styles/Poles.module.scss";
import Navigation from "../HeaderFooter/Navigation";
import Footer from "../HeaderFooter/Footer";
import Section_two_expetise from "./components/Section_two_expetiseBespoke";
import svgBespoke from "../../public/assets/img/Poles/pole_bespoke-06.svg";
import StylesHome from "../../styles/Home.module.scss";
import StylesEB from "../../styles/poleExpertise_Bespoke.module.scss";

const PoleBespokeContainer = () => {
  return (
    <div>
      <Head>
        <title>Pole Bespoke</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>{" "}
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>
      <div className={StylesEB.bloc_img_Bespoke}>
        <div className={Styles.boxPartenaire_titles}>
          <img
            style={{
              filter: "brightness(0) invert(1)",
              top: "25px",
              position: "relative",
            }}
            src={svgBespoke}
            alt="Experise"
          ></img>
        </div>
      </div>{" "}
      <p className={Styles.description_partenaires} id={StylesEB.text}>
        Nos experts sont à votre disposition et interviennent de la conception
        générale jusqu'à<br></br> la conception technique afin de répondre à vos
        besoins. de vous
      </p>
      <Section_two_expetise />
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

export default PoleBespokeContainer;
