import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import "../../styles/StylesAnnexe.module.scss";
import Burger from "../../images/menu.svg";
import Team from "../../public/assets/img/group-diverse-people-is-using-digital-devices_53876-31168.jpg";
import Working from "../../public/assets/img/usiness-people-meeting-to-discuss-the-situation-on-the-marketing.jpg";
import twitter from "../../public/assets/img/twitter.svg";
import linkedin from "../../public/assets/img/linkedin.svg";
import Img from "../../public/logoOfficielJL/LOGOS JLC_LONG_BLEU_L - Bleu 2-15_L - Bleu 2-15.svg";
import LogoCRMSide from "../../public/assets/img/Img_CRM/LOGO_CRMSIDE.svg";
import Censhare from "../../public/assets/img/logosPartenaires/logo_partenaire_censhare_jl_consulting.svg";
import Lobster from "../../public/assets/img/logosPartenaires/logo_partenaire_lobster_jl_consulting.svg";
import Ringover from "../../public/assets/img/logosPartenaires/logo_partenaire_ringover_jl_consulting.svg";
import Salesforces from "../../public/assets/img/Salesforces/Apex_Salesforce_logo_JL_Consulting.png";

const Navbar = () => {
  const [navBar, setNavbar] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleProjet, setToggleProjet] = useState(false);
  const [useNavigation, setNavigation] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuTwo, setSubMenuTwo] = useState(false);
  // const [subMenuThree, setSubMenuThree] = useState(false);

  // const [burger, setVanishedBurger] = useState(window.innerWidth);

  const Toogle = () => {
    if (setToggleNav(!toggleNav)) {
      //si la condition es vrai alors on montre la div
    }
  };

  const ToggleProjet = () => {
    if (setToggleProjet(!toggleProjet)) {
    }
  };

  const subMen = () => {
    if (setSubMenu(!subMenu)) {
    }
  };

  const subMenTwo = () => {
    if (setSubMenuTwo(!subMenuTwo)) {
    }
  };

  const subMenThree = () => {
    if (setSubMenuThree(!subMenuThree)) {
    }
  };

  const NavTableauConsulting = [
    {
      id: 1,
      pole: (
        <Link href="/Audit">
          <li style={{ cursor: "pointer" }}>Audit</li>
        </Link>
      ),
    },
    {
      id: 2,
      pole: (
        <Link href="/Formations">
          <li style={{ cursor: "pointer" }}>Formation</li>
        </Link>
      ),
    },
    {
      id: 3,
      pole: (
        <Link href="/VisMaVie">
          <li style={{ cursor: "pointer" }}>Vis-ma-vie</li>
        </Link>
      ),
    },
  ];

  const NavTableauStudioDesing = [
    { id: 1, pole: <Link href="/UX">Apps</Link> },
    { id: 2, pole: <Link href="/Sprint_Design">Sprint Design</Link> },
  ];

  const NavPolePartenaire = [
    {
      id: 1,
      pole: (
        <Link href="Partenaire_Censhare">
          <div style={{ cursor: "pointer" }}>
            {" "}
            <img
              style={{
                width: "80px",
                position: "absolute",
                left: 270,
                marginTop: 5,
              }}
              src={Censhare}
              alt=""
            ></img>
          </div>
        </Link>
      ),
    },
    {
      id: 2,
      pole: (
        <Link href="Partenaire_Lobster">
          <div style={{ cursor: "pointer" }}>
            <img style={{ width: 80 }} src={Lobster} alt=""></img>
          </div>
        </Link>
      ),
    },
    {
      id: 2,
      pole: (
        <Link href="/Partenaire_Ringover">
          <div style={{ cursor: "pointer" }}>
            <img style={{ width: 80 }} src={Ringover} alt=""></img>
          </div>
        </Link>
      ),
    },
    {
      id: 2,
      pole: (
        <Link href="/Salesforces">
          <div style={{ cursor: "pointer" }}>
            <img style={{ width: 60 }} src={Salesforces} alt=""></img>
          </div>
        </Link>
      ),
    },
  ];

  const PoleSolution = [
    {
      id: 1,
      pole: <Link href="/Solution_CRM">CRMSide</Link>,
      description: (
        <div>
          <img src={LogoCRMSide} className="ImgCRM" alt=""></img>
          <li className="li_description">
            {" "}
            "Bénéficiez de la solution CRM qui vous accompagne du sourcing à la
            fidélisation de vos clients et allez encore plus loin.",
          </li>
        </div>
      ),
    },
    {
      id: 2,
      pole: <Link href="/SUBSIDE">SUBSide</Link>,
      description: (
        <div>
          <input
            className={styles.inputSubSIde}
            style={{
              borderRadius: "none",
              width: "22px",
              height: "22px",
              position: "absolute",
              marginLeft: "-40px",
              marginTop: "-30px",
            }}
            type="checkbox"
            id="scales"
            name="scales"
          ></input>
          <li className="li_description">
            "Notre solution dédiée à l'économie de la souscription va vous
            permettre de faciliter votre quotidien.",
          </li>
        </div>
      ),
    },
  ];

  // if (typeof window !== "undefined") {
  //   const EventColor = () => {
  //     if (window.pageYOffset > 900) {
  //       document.getElementById("navbar").classList.add("nav");
  //       console.log("eren");
  //     } else {
  //       console.log("e");
  //     }
  //   };
  //   window.addEventListener("scroll", EventColor);
  // }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const changeBackground = () => {
        if (window.scrollY >= 10) {
          setNavbar(true);
          document.querySelector(".imgLogoJL").style.filter =
            "brightness(0) invert(1)";
        } else {
          setNavbar(false);
          document.querySelector(".imgLogoJL").style.filter = "contrast(100%)";
        }
      };
      window.addEventListener("scroll", changeBackground);
    }

    if (typeof window !== "undefined") {
      const changeBackgroundNavigation = () => {
        if (window.scrollY >= 10) {
          setNavigation(true);
        } else {
          setNavigation(false);
        }
      };
      window.addEventListener("scroll", changeBackgroundNavigation);
    }
  }, []);

  return (
    <>
      {/* <div 
        onClick={Delete}
        style={{
          position: "fixed",
          height: "100vh",
          width: "90%",
          // background: "red",
          top: 0,
          zIndex: -100,
          display: "none",
        }}
      ></div> */}
      <button
        id={useNavigation ? "NavBar" : "hiddenNav"}
        className={styles.projet}
        style={{
          zIndex: "100",
          position: "fixed",
          right: 0,
          margin: "31px 50px 31px 40px",
          color: "#ffffff",
          backgroundColor: "#ffc400",
        }}
        onClick={ToggleProjet}
      >
        UN PROJET ?
      </button>
      <img
        onClick={Toogle}
        className="burger"
        src={Burger}
        style={{
          zIndex: 100,
          position: "fixed",
          height: "30px",
          width: "30px",
          right: 0,
          margin: "10px 35px 0px",
          zIndex: "100",
          cursor: "pointer",
          filter: "brightness(0) invert(1)",
          top: 0,
        }}
      />

      <div id="nav" className={toggleNav ? "bodyDark" : ""}></div>

      <nav id="nav" className={toggleNav ? "active" : ""}>
        <ul className={styles.ulMobile}>
          <Link href="/">
            <ul className={styles.li_Mobile}>
              {" "}
              Nos pôles
              <Link href="/PoleConsulting">
                <li className={styles.PoleListe}>Pôle Consulting</li>
              </Link>
              <Link href="/PoleSolution">
                <li className={styles.PoleListe}>Pôle Solution</li>
              </Link>
              <Link href="/PoleBespoke">
                <li className={styles.PoleListe}>Pôle Bespoke</li>
              </Link>
              <Link href="/PoleExpertise">
                <li className={styles.PoleListe}>Pôle Expertise</li>
              </Link>
              <Link href="/PoleStudioDesign">
                <li className={styles.PoleListe}>Pôle Studio Design</li>
              </Link>
            </ul>
          </Link>

          <div className={styles.trait}></div>
          <Link href="/SuccesStories">
            <ul className={styles.li_Mobile}>Success stories</ul>
          </Link>
          <div className={styles.trait}></div>

          <Link href="/Blog">
            <ul className={styles.li_Mobile}>
              JLC
              <Link href="/AboutUs">
                <li className={styles.PoleListe}>JL LifeStyle</li>
              </Link>
              <Link href="/RH">
                <li className={styles.PoleListe}>Nous rejoindre</li>
              </Link>
            </ul>
          </Link>
          <div className={styles.trait}></div>
          <Link href="/Blog">
            <ul className={styles.li_Mobile}>Blog</ul>
          </Link>
          <div className={styles.trait}></div>
        </ul>
        <div className={styles.btn_menu_projet_mobile}>
          <button
            id={useNavigation ? "NavBar" : "hiddenNav"}
            className={styles.projetMobile_btn}
            style={{
              zIndex: "100",
              color: "#ffffff",
              backgroundColor: "#ffc400",
              width: "60%",
            }}
            onClick={ToggleProjet}
          >
            UN PROJET ?
          </button>
        </div>
      </nav>
      <span
        className={styles.navigation}
        id={useNavigation ? "NavBar" : "hiddenNav"}
      >
        <Link href="/">
          <span style={{ cursor: "pointer", zIndex: "100" }}>
            <img className="imgLogoJL" src={Img} alt="logo" />
          </span>
        </Link>
        <ul className={styles.ul} id={navBar ? "navbarre" : "active"}>
          <div className="navbarreImg"></div>
          <div className="PositionBlocNav">
            <li
              className={styles.li}
              onClick={subMen}
              id={subMenu ? "zoomMenu" : "Dezoom"}
            >
              Nos pôles
            </li>
            <div className={subMenu ? "menuAp active" : "menuAp"}>
              <div
                className="container"
                className={subMenu ? "container activeContainer" : "container"}
              >
                <div>
                  <Link href="/PoleConsulting">
                    <h2
                      className="titrePole"
                      style={{ margin: "30px 0 20px", cursor: "pointer" }}
                    >
                      Pôle Consulting
                    </h2>
                  </Link>
                  {NavTableauConsulting.map((pole) => {
                    return (
                      <div>
                        <ul style={{ listStyleType: "none" }} key={pole.id}>
                          <li
                            key={pole.id}
                            className="Polee"
                            style={{ marginBottom: "9px" }}
                          >
                            {pole.pole}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                  <Link href="/PoleStudioDesign">
                    <h2
                      className="titrePole"
                      style={{ margin: "20px 0", cursor: "pointer" }}
                    >
                      Pôle Studio Design
                    </h2>
                  </Link>
                  {NavTableauStudioDesing.map((pole) => {
                    return (
                      <div>
                        <ul key={pole.id} style={{ listStyleType: "none" }}>
                          <li
                            key={pole.id}
                            className="Polee"
                            style={{ marginBottom: "9px" }}
                          >
                            {pole.pole}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                  <Link href="PolePartenaires">
                    <h2
                      className="titrePole"
                      style={{ margin: "20px 0", cursor: "pointer" }}
                    >
                      Pôle Partenaires
                    </h2>
                  </Link>
                  <div className="BlocPartenaires">
                    {NavPolePartenaire.map((pole) => {
                      return (
                        <div className="Partenaires">
                          <ul key={pole.id} style={{ listStyleType: "none" }}>
                            <li
                              key={pole.id}
                              className="Polee"
                              style={{ marginBottom: "9px" }}
                            >
                              {pole.pole}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="HomePoleNav">
                  {" "}
                  <Link href="/PoleSolution">
                    <h2
                      className="titrePole"
                      style={{ marginBottom: "18px", cursor: "pointer" }}
                    >
                      Pôle Solution
                    </h2>
                  </Link>
                  {PoleSolution.map((pole) => {
                    return (
                      <div>
                        <div
                          key={pole.id}
                          className="ulPoleSolution"
                          style={{ listStyleType: "none" }}
                        >
                          <div
                            key={pole.id}
                            style={{ marginTop: "18px", marginBottom: "10px" }}
                            className="sous_titre_pole"
                          >
                            {pole.pole}
                          </div>
                          <div
                            className="li_description"
                            style={{
                              position: "relative",
                              width: "203px",
                              marginTop: " 10px",
                            }}
                          >
                            {pole.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="Pole_E_B">
                  {" "}
                  <Link href="/PoleExpertise">
                    <h2
                      className="titrePole"
                      style={{ marginTop: "30px", cursor: "pointer" }}
                    >
                      Pôle Expertise
                    </h2>
                  </Link>
                  <p
                    className="li_description"
                    style={{
                      position: "relative",
                      width: "203px",
                      margin: "20px 0",
                    }}
                  >
                    {" "}
                    Nous intervenons de la conception générale jusqu'à la
                    conception technique afin de répondre à vos besoins.
                  </p>
                  <Link href="/PoleBespoke">
                    <h2
                      className="titrePole"
                      style={{ margin: "0px 0" }}
                      style={{ cursor: "pointer" }}
                    >
                      Pôle Bespoke
                    </h2>
                  </Link>
                  <p
                    className="li_description"
                    style={{
                      position: "relative",
                      width: "203px",
                      margin: "20px 0",
                    }}
                  >
                    {" "}
                    Notre service bespoke réalise vos outils avec une
                    personnalisation extrême. Nous répondons aux moindres
                    détails.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link href="/SuccessStories">
            <li
              className={styles.li}
              style={{ position: "relative", bottom: "2px" }}
            >
              <a>Success stories</a>
            </li>
          </Link>

          <div className="PositionBlocNav">
            <li
              className={styles.li}
              onClick={subMenTwo}
              style={{ position: "relative", top: "2px" }}
              id={subMenuTwo ? "zoomMenu" : "Dezoom"}
            >
              JLC
            </li>
            <div className={subMenuTwo ? "menuAp_two active " : "menuAp_two "}>
              <div
                style={{
                  margin: "54px 40px 90px",
                  display: "flex",
                }}
              >
                <Link href="AboutUs">
                  <div>
                    <img
                      src={Team}
                      className={
                        subMenuTwo ? "sliderimg2 activeImg " : "sliderimg2 "
                      }
                      alt=""
                    />
                    <p
                      className={
                        subMenuTwo
                          ? "descriptionJLC activedescriptionJLC "
                          : "descriptionJLC "
                      }
                    >
                      JL LifeStyle
                    </p>
                  </div>
                </Link>

                <Link href="/RH">
                  <div>
                    {" "}
                    <img
                      src={Working}
                      className={
                        subMenuTwo ? "sliderimg2 activeImg " : "sliderimg2 "
                      }
                      alt=""
                    />
                    <p
                      className={
                        subMenuTwo
                          ? "descriptionJLC activedescriptionJLC "
                          : "descriptionJLC "
                      }
                    >
                      Rejoins-nous
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/Blog">
            <li className={styles.li}>Blog</li>
          </Link>
        </ul>
      </span>
      <div className={toggleProjet ? "blocProjet activee" : "blocProjet"}>
        <div>
          <h1
            className="h1_projet"
            style={{
              textAlign: "center",
              color: "#0e5686",
              fontFamily: "Metropolis",
              marginTop: "30px",
              fontWeight: "900",
            }}
          >
            UN PROJET ?
          </h1>

          <div className="BlocProjetContainer">
            <div className="containerInput">
              <label>Nom</label>
              <input className="input" placeholder="Insérer votre nom"></input>
            </div>
            <div className="containerInput">
              <label>Prénom</label>
              <input
                className="input"
                placeholder="Insérer votre prénom"
              ></input>
            </div>

            <div className="containerInput">
              <label>Email</label>
              <input
                className="input"
                placeholder="exemple@entreprise.com"
              ></input>
            </div>

            <div className="containerInput">
              <label>Numéro de téléphone</label>
              <input className="input" placeholder="+33 01 23 45 67 89"></input>
            </div>
            <div className="containerInput">
              <label>Nom de l'entreprise</label>
              <input className="input" placeholder="Entreprise"></input>
            </div>
          </div>
        </div>
        <div className={styles.Bloc_two_projet_section}>
          <h3>Quels seront vos besoins ?</h3>
          <div className="gridd">
            <div className="grid_item1">
              <div style={{ width: "100%" }}>
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>CRM</label>
              </div>
              <div style={{ width: "100%" }}>
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>BSS</label>
              </div>
            </div>
            <div className="grid_item1">
              <div style={{ width: "100%" }}>
                {" "}
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>ERP</label>
              </div>
              <div style={{ width: "100%" }}>
                {" "}
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>DEVS/APPS</label>
              </div>
            </div>
            <div className="grid_item1">
              <div style={{ width: "100%" }}>
                {" "}
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>BI</label>
              </div>
              <div style={{ width: "100%" }}>
                {" "}
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>AUDIT</label>
              </div>
            </div>
            <div className="grid_item1">
              <div style={{ width: "100%" }}>
                {" "}
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>REGIE</label>
              </div>
              <div style={{ width: "100%" }}>
                {" "}
                <input type="checkbox" id="scales" name="scales"></input>
                <label style={{ marginLeft: "14px" }}>SALESFORCES</label>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ margin: "15px 0 15px" }}>Message</label>
            <input
              id="input_message"
              placeholder="Ecrivez votre message"
              className="inputProjet"
              style={{
                borderWidth: "0 0 2px",
                borderColor: "#00000042",
                paddingBottom: "15px",
              }}
            ></input>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="submit_projet"
                style={{ marginTop: "30px", color: "white" }}
              >
                Envoyer
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop: "15px",
              background: "url(/assets/img/banniereJLC.jpg)",
            }}
            className="bloc_contact"
          >
            <h1
              className="titre_contact"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              CONTACT
            </h1>

            <div style={{ display: "flex", marginTop: "27px" }}>
              <div className="bloc_contact_nav">
                <p className="sous_titre_contact">
                  <strong>JL Consulting</strong>
                </p>
                <p className="sous_titre_contact">
                  <strong> Intégrateur et Partenaire Salesforces</strong>
                </p>
                <div style={{ marginTop: "20px" }}>
                  <p
                    style={{ fontWeight: "300" }}
                    className="sous_titre_contact sous_titre_inferieur"
                  >
                    Entreprise consultant en informatique
                  </p>
                  <p
                    style={{ fontWeight: "300" }}
                    className="sous_titre_contact"
                  >
                    {" "}
                    spécialisée
                  </p>
                  <p
                    style={{ fontWeight: "300" }}
                    className="sous_titre_contact"
                  >
                    en ingénieurie logiciel
                  </p>
                </div>
              </div>
              <div className="bloc_contact_nav">
                <p
                  style={{ fontWeight: "300" }}
                  className="sous_titre_contact_2"
                >
                  12-14 Avenie Louis Armant, 95120 Ermont
                </p>

                <p
                  className="sous_titre_contact_2"
                  style={{ margin: "12px 0px 12px 0px", fontWeight: "300" }}
                >
                  contact@jlconsulting.fr
                </p>
                <p className="sous_titre_contact_2">01.41.11.66.60</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "12px",
                    fontWeight: "300",
                  }}
                >
                  <img
                    src={twitter}
                    alt="twitter"
                    style={{ marginRight: "40px" }}
                  ></img>
                  <img src={linkedin} alt="linkedin"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
