import React, { Component } from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import LogoPartenaire1 from "../../public/assets/img/logosPartenaires/logo_partenaire_censhare_jl_consulting.svg";
import LogoPartenaire2 from "../../public/assets/img/logosPartenaires/logo_partenaire_lobster_jl_consulting.svg";
import LogoPartenaire3 from "../../public/assets/img/logosPartenaires/logo_partenaire_ringover_jl_consulting.svg";
import LogoPartenaire4 from "../../public/assets/img/logosPartenaires/logo_partenaire_salesforce_jl_consulting.svg";

export default class Footer extends Component {
  state = {
    listes: [
      { id: 1, liste: <p className={styles.title_footer}> JL Consulting</p> },
      { id: 2, liste: <Link href="/">Accueil </Link> },
      { id: 3, liste: <Link href="/SuccessStories">Success Stories</Link> },
      { id: 4, liste: <Link href="/RH">Rejoingnez-nous</Link> },
      { id: 5, liste: <Link href="/AboutUs">JL Lifestyle</Link> },
      { id: 6, liste: <Link href="/Blog">Blog</Link> },
    ],
  };

  state2 = {
    listes: [
      { id: 1, listee: <p className={styles.title_footer}>Nos pôles</p> },
      {
        id: 2,
        listee: <Link href="/Solution_CRM"> CRMSide</Link>,
      },
      {
        id: 3,
        listee: <Link href="/SUBSIDE">Subside</Link>,
      },
      {
        id: 4,
        listee: <Link href="/Formations">Formations</Link>,
      },
      {
        id: 5,
        listee: <Link href="/Audit">Audit</Link>,
      },
      {
        id: 6,
        listee: <Link href="/VisMaVie">Vis-Ma-vie</Link>,
      },
      {
        id: 7,
        listee: <Link href="/PoleExpertise">Expertise</Link>,
      },
      {
        id: 8,
        listee: <Link href="/PoleBespoke">Bespoke</Link>,
      },
      {
        id: 9,
        listee: <Link href="/UX">Apps</Link>,
      },
      {
        id: 10,
        listee: <Link href="/Sprint_Design">Sprint Design</Link>,
      },
    ],
  };

  stateBonus = {
    partenaires: [
      {
        id: 1,
        partenaire: <h1 className={styles.titrePartenaires}>Partenaires</h1>,
      },
      {
        id: 2,
        partenaire: (
          <Link href="/Partenaire_Censhare">
            <img
              style={{ cursor: "pointer" }}
              className={styles.logo}
              src={LogoPartenaire1}
              alt=""
            ></img>
          </Link>
        ),
      },
      {
        id: 3,
        partenaire: (
          <Link href="/Partenaire_Lobster">
            <img
              style={{ cursor: "pointer" }}
              className={styles.logo}
              src={LogoPartenaire2}
              alt=""
            ></img>
          </Link>
        ),
      },
      {
        id: 4,
        partenaire: (
          <Link href="/Partenaire_Ringover">
            <img
              style={{ cursor: "pointer" }}
              className={styles.logo}
              src={LogoPartenaire3}
              alt=""
            ></img>
          </Link>
        ),
      },
      {
        id: 5,
        partenaire: (
          <Link href="/Salesforces">
            <img
              style={{ cursor: "pointer" }}
              className={styles.logo}
              src={LogoPartenaire4}
              alt=""
            ></img>
          </Link>
        ),
      },
    ],
  };

  state3 = {
    contact: [
      {
        id: 1,
        contenu: (
          <div>
            <Image
              src="/logoOfficielJL/LOGOS JLC_NOM_BLEU_N_N - Bleu-16_N - Bleu-16.svg"
              width={200}
              height={186}
            />
          </div>
        ),
      },
      { id: 2, contenu: <p className={styles.contact}> 01.41.11.66.60 </p> },
      {
        id: 3,
        contenu: <p className={styles.address}>contact@jlconsulting.fr</p>,
      },
      {
        id: 4,
        contenu: (
          <p className={styles.location}>
            12-14 Avenue Louis Armand <p style={{ margin: 0 }}> 95120 Ermont</p>
          </p>
        ),
      },
    ],
  };

  render() {
    const JL2 = this.state.listes.map((listees) => {
      return (
        <li key={listees.id} className={styles.listeFooter}>
          {listees.liste}
        </li>
      );
    });

    const JL3 = this.state2.listes.map((listeess) => {
      return (
        <li key={listeess.id} className={styles.listeFooter}>
          {listeess.listee}
        </li>
      );
    });

    const JL = this.state3.contact.map((contactt) => {
      return (
        <li key={contactt.id} className={styles.listeFooter}>
          {contactt.contenu}
        </li>
      );
    });

    const JlBonus = this.stateBonus.partenaires.map((partenariat) => {
      return (
        <li className={styles.listeFooter} key={partenariat.id}>
          {partenariat.partenaire}
        </li>
      );
    });

    return (
      <div className={styles.footer}>
        <span className={styles.containerFooter}>
          <ul className={styles.elementsFooter}>{JL}</ul>
          <div className={styles.footerResponsive_row}>
            <ul className={styles.elementsFooter}>{JL2}</ul>
            <ul className={styles.elementsFooter}>{JL3}</ul>
          </div>

          <div
            style={{
              height: "fit-content",

              margin: "10px 60px 50px",
            }}
            className={styles.partenaires}
          >
            {" "}
            <ul className={styles.ElementsPartenaires}>{JlBonus}</ul>
          </div>

          <form
            className={styles.formFooter}
            method="post"
            style={{ display: "none" }}
          >
            <p className={styles.title_footer}>Une question ? Un projet ?</p>
            <input
              className={styles.input}
              placeholder="Email"
              style={{ margin: 10, padding: 10, backgroundColor: "#f6f6f6" }}
            ></input>
            <select
              className={styles.select}
              style={{ margin: 10, padding: 10, backgroundColor: "#f6f6f6" }}
            >
              <option>Subject</option>
            </select>
            <textarea
              className={styles.textarea}
              style={{ margin: 10, backgroundColor: "#f6f6f6" }}
              rows={7}
              cols={33}
              name="description"
              placeholder={"Write Your Message Here...\n"}
            ></textarea>
            <button
              className={styles.button}
              style={{
                margin: 16,
                padding: 10,
                borderRadius: 20,
                cursor: "pointer",
                backgroundColor: "#005784",
                color: "white",
                textTransform: "uppercase",
              }}
              type="submit"
              name="send"
            >
              send
            </button>
          </form>
        </span>

        <p
          style={{
            color: "#005784",
            textAlign: "center",
            position: "relative",
            bottom: "20px",
          }}
        >
          © 2021. All rights reserved.
        </p>
      </div>
    );
  }
}
