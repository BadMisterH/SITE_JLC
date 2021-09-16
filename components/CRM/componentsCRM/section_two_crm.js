import {
  React,
  Head,
  Navigation,
  Footer,
  StylesCRM,
  StylesApp,
  StylesHome,
  SectionCRM,
  Solution,
  Batiment,
  Finalisation,
  Alerte,
  France,
  RGPD,
  Accompagnement,
} from "../importCRM";
const section_two_crm = () => {
  const ulAvantageCRM = [
    {
      id: 1,
      contenuCRM: (
        <li className={StylesCRM.liCRM}>- Acquisition de nouveaux leads</li>
      ),
    },
    {
      id: 2,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}> - Productivité renforcée</li>
      ),
    },
    {
      id: 3,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}>
          - Amélioration de l’expérience client
        </li>
      ),
    },
    {
      id: 4,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}>- Un outil tout en un</li>
      ),
    },
    {
      id: 5,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}>
          - Fidélisation accrue de vos clients
        </li>
      ),
    },
    {
      id: 6,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}>
          {" "}
          - Marketing automation avec Linkedin
        </li>
      ),
    },
    {
      id: 7,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}>
          - Optimisation de la relation entre vos services marketing &
          commercial
        </li>
      ),
    },
    {
      id: 8,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}>- Suivi de votre activité</li>
      ),
    },
    {
      id: 9,
      contenuCRMliste: (
        <li className={StylesCRM.liCRM}>- Augmentation de votre CA</li>
      ),
    },
  ];

  const contenuCRM = [
    {
      id: 1,
      CRMbox: (
        <div
          className={StylesCRM.section_container_img_text}
          id={StylesCRM.ContainerLeft}
        >
          <img src={Batiment} className={StylesCRM.ImgCRM} alt=""></img>
          <div className={StylesCRM.section_CRMSide_description}>
            <h1 className={StylesCRM.h1CRM}>
              Mais que se cache t-il derrière ce terme ?
            </h1>
            <p
              style={{ textAlign: "end" }}
              className={StylesCRM.descriptionCRM}
            >
              Une courte définition selon Wikipédia : Le CRM (customer relation
              management) ou en français GRC (gestion de la relation client) est
              l'ensemble des outils et techniques destinés à capter, traiter,
              analyser les envies et les attentes des clients et des prospects,
              afin de les fidéliser et de les satisfaire en leur offrant ou
              proposant des services.<br></br>
              <strong className={StylesCRM.descriptionCRM_bold}>
                Ces techniques et outils vont vous permettre d’améliorer vos
                relations commerciales et développer votre business.
              </strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      CRMbox: (
        <div className={StylesCRM.section_container_img_text}>
          <img src={Alerte} className={StylesCRM.ImgCRM} alt=""></img>
          <div className={StylesCRM.section_CRMSide_description}>
            <h1 className={StylesCRM.h1CRM_right}>
              A quoi cela va me servir et pourquoi est-ce important ?
            </h1>
            <p className={StylesCRM.descriptionCRM}>
              Établir de bonnes relations et effectuer un suivi de vos prospects
              et clients est crucial. Acquérir et fidéliser vos clients sont
              deux impératifs au cœur de la fonction du CRM. Avec CRMSide vous
              bénéficiez d'une vue globale depuis un emplacement centralisé:
              <ul style={{ listStyleType: "none" }}>
                <li className={StylesCRM.liCRM}>
                  - Evitez les données en double (triple)
                </li>
                <li className={StylesCRM.liCRM}>
                  {" "}
                  - Arrétez de multiplier les fichiers personnels non mis à jour
                  et non coordonnés
                </li>
                <li className={StylesCRM.liCRM}s> - Apportez un partage de l’information en temps réel….</li>
              </ul>{" "}
              C’est pas mal, n’est-ce pas ? Alors accrochez-vous car avec
              CRMSide nous allons encore plus loin. Avec notre brique marketing,
              vous allez pouvoir trouver de nouveaux prospects grâce à notre
              base de données de plus de 20 millions de contacts. Vous pourrez
              écrire des séquences (et si vous ne savez pas, on a aussi un
              service pour vous accompagner sur ce point important).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      CRMbox: (
        <div
          className={StylesCRM.section_container_img_text}
          id={StylesCRM.ContainerLeft}
        >
          <img src={Solution} className={StylesCRM.ImgCRM}></img>
          <div className={StylesCRM.section_CRMSide_description}>
            <h1 className={StylesCRM.h1CRMSide}>Les avantages de CRMSide</h1>
            <h2 style={{ textAlign: "end" }} className={StylesCRM.h2CRMSide}>
              L'importance de la relation client
            </h2>
            {ulAvantageCRM.map((Avantages) => {
              return (
                <ul
                  className={StylesCRM.descriptionCRM}
                  key={Avantages.id}
                  style={{ listStyleType: "none", textAlign: "end" }}
                >
                  {Avantages.contenuCRMliste}
                </ul>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      id: 1,
      CRMbox: (
        <div className={StylesCRM.section_container_img_text}>
          <img src={Finalisation} className={StylesCRM.ImgCRM}></img>
          <div className={StylesCRM.section_CRMSide_description}>
            <h1 className={StylesCRM.h2WhyCRMSide}>
              Pourquoi devrais-je choisir CRMSide ?
            </h1>
            <h2 className={StylesCRM.h2CRMSide}>
              {" "}
              Les différentes fonctions de l'entreprise
            </h2>
            <p className={StylesCRM.descriptionCRM}>
              Bénéficier de modules complémentaires pour piloter votre
              entreprise avec le même outil.
            </p>
            <p className={StylesCRM.descriptionCRM}>
              Vous souhaitez conserver certaines solutions, aucune inquiétude,
              CRMSide se connectera via API si l’autre logiciel le permet.
            </p>
            <div className={StylesCRM.Img_France}>
              <div className={StylesCRM.bloc_img_text}>
                <img
                  src={France}
                  className={StylesCRM.ImgEntrepriseFunction_img}
                  alt=""
                ></img>
                <p
                  className={StylesCRM.descriptionCRM}
                  style={{ textAlign: "center" }}
                >
                  Equipe francaise
                </p>
              </div>
              <div className={StylesCRM.bloc_img_text}>
                <img
                  src={RGPD}
                  className={StylesCRM.ImgEntrepriseFunction_img}
                  alt=""
                ></img>
                <p
                  className={StylesCRM.descriptionCRM}
                  style={{ textAlign: "center" }}
                >
                  Vos données hébergées en France
                </p>
              </div>
              <div className={StylesCRM.bloc_img_text}>
                <img
                  src={Accompagnement}
                  className={StylesCRM.ImgEntrepriseFunction_img}
                  alt=""
                ></img>
                <p
                  className={StylesCRM.descriptionCRM}
                  style={{ textAlign: "center" }}
                >
                  Accompagnement “proche”
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        {contenuCRM.map((contenu_section_two_CRM) => {
          return (
            <div key={contenu_section_two_CRM.id}>
              {contenu_section_two_CRM.CRMbox}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default section_two_crm;
