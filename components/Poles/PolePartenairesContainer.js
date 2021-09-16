import React from "react";
import Head from "next/head";
import Styles from "../../styles/Poles.module.scss";
import Navigation from "../HeaderFooter/Navigation";
import Footer from "../HeaderFooter/Footer";
import Salesforces from "../../public/assets/img//sales-force-JL-Consulting.png";
import Censhare from "../../public/assets/img/censhare-jl-consulting-partenaire.jpg";
import Lobster from "../../public/assets/img/lobster-jl-consulting-compressed.jpg";
import Ringover from "../../public/assets/img/ringover-jl-consulting-partenaire.jpg";
import svgPartenaire from "../../public/assets/img/logosPartenaires/pole_partenaires-07.svg";
import StylesHome from "../../styles/Home.module.scss";
import Link from "next/link";
import Button from "../ButtonScroll/ScrollButton";

const PoleExpertiseContainer = () => {
  return (
    <div>
      <Head>
        <title>Pole Partenaires</title>
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
      <div className={Styles.bloc_img_partenaires}>
        <div className={Styles.boxPartenaire_titles}>
          <img
            style={{
              filter: "brightness(0) invert(1)",
              top: "25px",
              position: "relative",
            }}
            src={svgPartenaire}
            alt="Partenaire"
          ></img>
        </div>
      </div>{" "}
      <p className={Styles.description_partenaires}>
        Nous avons créé des relations fortes avec nos différents partenaire afin
        de vous <br></br> apporter notre expertise sur des solutions reconnues.
      </p>
      <div className={Styles.Bloc_partenaires_container}>
        <Link href="/Partenaire_Censhare">
          <div
            className={Styles.bloc_img_partenaires_one}
            style={{ cursor: "pointer" }}
          >
            <div
              className={Styles.contenuBloc_partenaires}
              id={Styles.box_censhare}
            >
              <h1
                className={Styles.tilte_bloc_partenaire}
                style={{ textAlign: "center" }}
              >
                CENSHARE
              </h1>
              <p className={Styles.Bloc_description_partenaires}>
                Censhare est une plateforme de gestion de contenu qui centralise
                et automatise l’ensemble de vos contenus et de vos processus
                métier (PIM - DAM - CMS)
              </p>
            </div>
            <img
              className={Styles.ImgPartenaires}
              src={Censhare}
              alt="Censhare"
            ></img>
          </div>
        </Link>
        <Link href="/Partenaire_Lobster">
          <div
            className={Styles.bloc_img_partenaires_two}
            style={{ cursor: "pointer" }}
          >
            <div
              className={Styles.contenuBloc_partenaires}
              id={Styles.box_lobster}
            >
              <h1
                className={Styles.tilte_bloc_partenaire}
                style={{ textAlign: "center" }}
              >
                LOBSTER
              </h1>
              <p className={Styles.Bloc_description_partenaires}>
                Avec Lobster, nous sortons des sentiers battus grâce à des
                solutions EDI et EAI modernes. Configurer et non plus
                programmer. Simplifier et non plus compliquer les choses.
              </p>
            </div>
            <img
              className={Styles.ImgPartenaires}
              src={Lobster}
              alt="Lobster"
            ></img>
          </div>
        </Link>
        <Link href="/Partenaire_Ringover">
          <div
            className={Styles.bloc_img_partenaires_three}
            style={{ cursor: "pointer" }}
          >
            <div
              className={Styles.contenuBloc_partenaires}
              id={Styles.box_ringover}
            >
              <h1
                className={Styles.tilte_bloc_partenaire}
                style={{ textAlign: "center" }}
              >
                RINGOVER
              </h1>
              <p className={Styles.Bloc_description_partenaires}>
                Ringover intègre parfaitement téléphonie avancée,
                visioconférence et messagerie collaborative dans une application
                facile à utiliser. Concentrez-vous sur l’essentiel : votre
                business.
              </p>
            </div>
            <img
              className={Styles.ImgPartenaires}
              src={Ringover}
              alt="Ringover"
            ></img>
          </div>
        </Link>

        <Link href="/Salesforces">
          <div
            className={Styles.bloc_img_partenaires_four}
            style={{ cursor: "pointer" }}
          >
            <div
              className={Styles.contenuBloc_partenaires}
              id={Styles.box_salesforces}
            >
              <h1
                className={Styles.tilte_bloc_partenaire}
                style={{ textAlign: "center" }}
              >
                SALESFORCES
              </h1>
              <p className={Styles.Bloc_description_partenaires}>
                En tant que partenaire Salesforce depuis plus de 8 ans, JL
                Consulting intervient sur plusieurs aspects de cette solution
                CRM (implémentation, formation,…).
              </p>
            </div>
            <img
              className={Styles.ImgPartenaires}
              src={Salesforces}
              alt="Salesforces"
            ></img>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PoleExpertiseContainer;
