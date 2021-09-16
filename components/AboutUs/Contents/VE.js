import { React, styles, Valeurs, Engagements } from "../importAboutUs";

const VE = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#0f5584" }} className={styles.ContainerV}>
        <h1 style={{ color: "white" }} className={styles.TitleValues}>
          NOS VALEURS
        </h1>
        <div className={styles.BlocValeurs}>
          <div className={styles.ES}>
            <div>
              {" "}
              <h1 className={styles.h1}>ESPRIT D'ENTREPRISE</h1>
              <p className={styles.p}>
                L'esprit d'entreprise est une valeur qui nous anime et nous
                continuons à le développer au quotidien.
              </p>
            </div>

            <div>
              {" "}
              <h1 className={styles.h1}>SAVOIR FAIRE</h1>
              <p className={styles.p}>
                Investir et mettre à profit notre savoir-faire afin de vous
                apporter une solution personnalisée aux spécificités de votre
                métier.
              </p>
            </div>
          </div>
          <img className={styles.ImgValues} src={Valeurs} alt=""></img>
          <div className={styles.EPE}>
            <div>
              <h1 className={styles.h1}>ECOUTE</h1>
              <p className={styles.p}>
                Écouter et se rendre disponible, c'est se donner les moyens
                d'anticiper et donc d'agir plutôt que de réagir.
              </p>
            </div>
            <div>
              <h1 className={styles.h1}> PROFESSIONNEL & ETHIQUE</h1>
              <p className={styles.p}>
                Avoir un comportement et une attitude responsables dans nos
                activités tout en recherchant l'excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ContainerV}>
        <h1 className={styles.TitleValues}>NOS ENGAGEMENTS</h1>
        <div className={styles.BlocValeurs}>
          <div className={styles.ES}>
            <div>
              {" "}
              <h1
                style={{
                  color: "#3A8CAF",
                  marginBottom: 15,
                  textAlign: "end",
                }}
                className={styles.h1}
              >
                EXPERTISE
              </h1>
              <p
                className={styles.descriptionEngagements}
                style={{ textAlign: "end" }}
              >
                L'expérience de notre équipe, notre expertise et nos conseils
                vous accompagnent dans vos projets les plus complexes.
              </p>
            </div>

            <div>
              {" "}
              <h1
                style={{ color: "#5EBFBF", marginBottom: 15, textAlign: "end" }}
                className={styles.h1}
              >
                SUIVIS & DISPONIBILITÉ
              </h1>
              <p
                className={styles.descriptionEngagements}
                style={{ textAlign: "end" }}
              >
                Assurer un suivi régulier de la prestation via un encadrement de
                nos consultants et en faisant preuve d'une grande souplesse et
                de disponibilité.
              </p>
            </div>
          </div>
          <img className={styles.ImgEngagements} src={Engagements} alt=""></img>
          <div className={styles.EPE}>
            <div>
              <h1
                style={{
                  color: "#88D2E6",
                  //   marginRight: "-100px",
                  marginBottom: 15,
                }}
                className={styles.h1}
              >
                {" "}
                CRÉDIBILITÉ & ENGAGEMENT
              </h1>
              <p className={styles.descriptionEngagements}>
                La gestion d'une entreprise suppose un but et de se donner les
                moyens de les atteindre. Nous sommes totalement engagés dans
                toutes nos missions
              </p>
            </div>
            <div>
              <h1 style={{ color: "#99D4DC", marginBottom: 15 }}>
                TRANSPARENCE
              </h1>
              <p className={styles.descriptionEngagements}>
                Fournir une prestation adaptée à vos besoins et agir en toute
                transparence pour une relation de confiance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VE;
