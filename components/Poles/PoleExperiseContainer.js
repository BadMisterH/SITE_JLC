import React from "react";
import Head from "next/head";
import Styles from "../../styles/Poles.module.scss";
import Navigation from "../HeaderFooter/Navigation";
import Footer from "../HeaderFooter/Footer";
import Section_two_expetise from "./components/Section_two_expetiseBespoke";
import svgExpertise from "../../public/assets/img/Poles/pole_expertise-02.svg";
import StylesHome from "../../styles/Home.module.scss";
import StylesEB from "../../styles/poleExpertise_Bespoke.module.scss";
import Section_three_expertise from "./components/Section_three_expertise";
import Button from "../ButtonScroll/ScrollButton";

const PoleExpertiseContainer = () => {
  return (
    <div>
      <Head>
        <title>Pole Expertise</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>{" "}
      <Button />
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>
      <div className={StylesEB.bloc_img_Expertise}>
        <div className={Styles.boxPartenaire_titles}>
          <img
            style={{
              filter: "brightness(0) invert(1)",
              top: "25px",
              position: "relative",
            }}
            src={svgExpertise}
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
      <Section_three_expertise />
      <div className={Styles.blocAdopt}>
        <h1 className={Styles.TitreBloc} id={StylesEB.TitleFCE}>
          FAITES COMME EUX
        </h1>
        <div className={Styles.logos}>
          <div className={Styles.logoAxa}></div>
          <div className={Styles.logos_clients2}></div>
          <div className={Styles.logoBB}></div>
          <div className={Styles.logoLapeyre}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoleExpertiseContainer;
