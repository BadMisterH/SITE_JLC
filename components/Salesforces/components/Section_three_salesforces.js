import {
  React,
  Head,
  Navigation,
  Footer,
  StyleApp,
  StylesApp,
  StylesSalesforces,
  StylesSubSide,
  ImgSalesforces,
  Force,
  Objecitf,
} from "../ImportSalesforces";
const Section_three_salesforces = () => {
  return (
    <>
      <div className={StylesSalesforces.ForceObjectif_container}>
        <div className={StylesSalesforces.box_objectif}>
          <img
            src={Objecitf}
            className={StylesSalesforces.img_objectif}
            alt="Objectif"
          ></img>{" "}
          <div className={StylesSalesforces.container_text_objectif_force}>
            <h1
              className={StylesSalesforces.Title_goal}
              style={{ textAlign: "center" }}
            >
              Notre objectif
            </h1>
            <p
              style={{ textAlign: "center" }}
              className={StylesSalesforces.text_force_objectif}
            >
              Maîtriser l’ensemble des outils Salesforce à tous les niveaux.
              Enrichir notre expertise technique et fonctionnelle sur un outil
              en perpétuelle évolution.
            </p>
          </div>
        </div>
        <div className={StylesSalesforces.box_force}>
          <img
            src={Force}
            className={StylesSalesforces.img_force}
            alt="Force"
          ></img>{" "}
          <div className={StylesSalesforces.container_text_objectif_force}>
            <h1
              className={StylesSalesforces.Title_Strength}
              style={{ textAlign: "center" }}
            >
              Notre force
            </h1>
            <p
              style={{ textAlign: "center" }}
              className={StylesSalesforces.text_force_force}
            >
              Allier nos connaissances des processus commerciaux et nos
              compétences métiers pour nous permettre de répondre et d’anticiper
              nos demandes clients.
            </p>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Section_three_salesforces;
