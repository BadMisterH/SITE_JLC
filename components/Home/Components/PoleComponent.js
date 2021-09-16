import Link from "next/link";
import Head from "next/head";
import {
  Consulting,
  Computer,
  Puzzle,
  Design,
  Bespoke,
  styles,
  React,
  Partenaire,
} from "../Import";

const PoleComponent = () => {
  return (
    <div style={{ zIndex: "1000000 !important" }}>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/white-buttell"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.sectionTwo}>
        <Link
          href="/PoleConsulting"
          style={{ cursor: "pointer", zIndex: "1000" }}
        >
          <div className={styles.section_Two_container_one}>
            <img className={styles.sectionImg} src={Consulting} alt="" />

            <div
              className={styles.section_two_bloc}
              style={{
                backgroundColor: "#41a9b5",
              }}
            >
              <div className={styles.containerPole}>
                <h1
                  style={{ color: "white" }}
                  className={styles.titre_section_two_officiel}
                >
                  Consulting
                </h1>
                <p
                  className={styles.description_section_two}
                  style={{
                    color: "white",
                    width: "28vw",
                  }}
                >
                  Notre pôle consulting est à votre disposition pour vous offrir
                  une visibilité sur vos processus, mais pas que…
                </p>{" "}
              </div>
            </div>
          </div>
        </Link>

        <Link href="/PoleSolution" style={{ cursor: "pointer" }}>
          <div className={styles.section_Two_container_two}>
            <div className={styles.section_two_bloc}>
              <div className={styles.containerPole}>
                <h1 className={styles.titre_section_two_officiel}>Solutions</h1>
                <p
                  className={styles.description_section_two}
                  style={{
                    width: "28vw",
                    color: "black",
                  }}
                >
                  JL Consulting est un éditeur de logiciels et un intégrateur
                  Salesforce. Nous créons nos propres solutions pour des besoins
                  spécifiques (CRM, économie de la souscription,…).
                </p>
              </div>

              {/* <img src={PoleSolutiion} className="sliderimg" alt="" /> */}
            </div>
            <img className={styles.sectionImg} src={Computer} alt="" />
          </div>
        </Link>

        <Link
          href="/PoleExpertise"
          style={{ cursor: "pointer", zIndex: "1000" }}
        >
          <div className={styles.section_Two_container_one}>
            <img className={styles.sectionImg} src={Puzzle} alt="" />

            <div
              className={styles.section_two_bloc}
              style={{
                backgroundColor: "#326e97",
              }}
            >
              <div className={styles.containerPole}>
                <h1
                  style={{ color: "white" }}
                  className={styles.titre_section_two_officiel}
                >
                  Expertise
                </h1>
                <p
                  className={styles.description_section_two}
                  style={{
                    width: "28vw",
                    color: "white",
                  }}
                >
                  Nous sommes dans un monde qui bouge. Alors que ce soit pour un
                  besoin ponctuel ou pour la transformation digitale de votre
                  entreprise, nos experts sont à vos cotés pour vous
                  accompagner.
                </p>{" "}
              </div>
            </div>
          </div>
        </Link>

        <Link href="/PoleStudioDesign" style={{ cursor: "pointer" }}>
          <div className={styles.section_Two_container_two}>
            <div className={styles.section_two_bloc}>
              <div className={styles.containerPole}>
                <h1
                  id={styles.StudioDesign}
                  className={styles.titre_section_two_officiel}
                >
                  Studio Design
                </h1>
                <p
                  className={styles.description_section_two}
                  style={{
                    width: "28vw",
                    color: "black",
                  }}
                >
                  Nous réalisons des applications mobiles superbes, fluide,
                  robustes, ergonomiques, originales, sexy, magnifiques, canon,
                  intuitives pour les startups, PME et grands groupes.
                </p>
              </div>

              {/* <img src={PoleSolutiion} className="sliderimg" alt="" /> */}
            </div>
            <img className={styles.sectionImg} src={Design} alt="" />
          </div>
        </Link>

        <Link href="/PoleBespoke" style={{ cursor: "pointer", zIndex: "1000" }}>
          <div className={styles.section_Two_container_one}>
            <img className={styles.sectionImg} src={Bespoke} alt="" />

            <div
              className={styles.section_two_bloc}
              style={{
                backgroundColor: "#52c3dc",
              }}
            >
              <div className={styles.containerPole}>
                <h1
                  style={{ color: "white" }}
                  className={styles.titre_section_two_officiel}
                >
                  Bespoke
                </h1>
                <p
                  className={styles.description_section_two}
                  style={{
                    width: "28vw",
                    color: "white",
                  }}
                >
                  Notre service bespoke réalise vos outils avec une
                  personnalisation extrême.<br></br> Nous répondons aux moindres
                  détails.
                </p>{" "}
              </div>
            </div>
          </div>
        </Link>
        <Link href="/PolePartenaires" style={{ cursor: "pointer" }}>
          <div className={styles.section_Two_container_two}>
            <div className={styles.section_two_bloc}>
              <div className={styles.containerPole}>
                <h1 className={styles.titre_section_two_officiel}>
                  Partenaires
                </h1>
                <p
                  className={styles.description_section_two}
                  style={{
                    width: "28vw",
                    color: "black",
                  }}
                >
                  Nous avons créé des relations fortes avec nos différents
                  partenaire afin de vous apporter notre expertise sur des
                  solutions reconnues.
                </p>
              </div>

              {/* <img src={PoleSolutiion} className="sliderimg" alt="" /> */}
            </div>
            <img className={styles.sectionImg} src={Partenaire} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PoleComponent;
