import {
  React,
  Styles,
  StylesSubSide,
  Flexibilite,
  RC,
  FV,
  SM,
  CDF,
  PW,
} from "../ImportSubside";

const container_section_two = () => {
  return (
    <>
      <div className={StylesSubSide.container_box}>
        <div className={StylesSubSide.Box} id={StylesSubSide.Flexibilite}>
          <img
            src={Flexibilite}
            className={StylesSubSide.Img_Box}
            id={StylesSubSide.Flexibilite_img}
            alt="Flexibilite"
          ></img>
          <div className={StylesSubSide.Box_text}>
            <h1 className={StylesSubSide.h1}>Flexibilité</h1>
            <p className={StylesSubSide.p}>
              Solution intégrée pour toutes les facettes d'une entreprise de
              télécommunications depuis la facturation des télécommunications
              jusqu'à la gestion de l'ensemble de l'opération
            </p>
          </div>
        </div>
        <div className={StylesSubSide.Box} id={StylesSubSide.blox_leftMesure}>
          <img
            src={SM}
            className={StylesSubSide.Img_Box}
            alt="Sur Mesure icone"
          ></img>
          <div className={StylesSubSide.Box_text}>
            <h1 className={StylesSubSide.h1}>Sur Mesure</h1>
            <p className={StylesSubSide.p}>
              Solution programmable et flexible. Provisionning intégré en temps
              réel.
            </p>
          </div>
        </div>
        <div className={StylesSubSide.Box} id={StylesSubSide.RC}>
          <img
            src={RC}
            className={StylesSubSide.Img_Box}
            id={StylesSubSide.RC_img}
            alt="Relation client icone"
          ></img>
          <div className={StylesSubSide.Box_text}>
            <h1 className={StylesSubSide.h1}>Relation Client</h1>
            <p className={StylesSubSide.p}>
              Gérez en quelques clics la relation client. Vision sur
              l'historique de tous les tickets ouverts.
            </p>
          </div>
        </div>
        <div className={StylesSubSide.Box} id={StylesSubSide.blox_left}>
          <img
            src={CDF}
            className={StylesSubSide.Img_Box}
            alt="CDF icone"
          ></img>
          <div className={StylesSubSide.Box_text}>
            <h1 className={StylesSubSide.h1}>Centralisation des Factures</h1>
            <p className={StylesSubSide.p}>
              Gerez facilement les interconnexions de bout en bout, en ayant
              accés à des informations précises sur la facturation, la
              tarification et le reporting
            </p>
          </div>
        </div>
        <div className={StylesSubSide.Box} id={StylesSubSide.FDV}>
          <img
            src={FV}
            className={StylesSubSide.Img_Box}
            alt="Force de vente icone"
          ></img>
          <div className={StylesSubSide.Box_text}>
            <h1 className={StylesSubSide.h1}>Force de Vente</h1>
            <p className={StylesSubSide.p}>
              Solution CRM intégrée qui fournit un flux à travers la saisie des
              commandes, l'approvisionnement et la facturation. Optimisez les
              coûts de développement et de lancement commercial à chaque étape
              du cycle de vie du client.
            </p>
          </div>
        </div>
        <div className={StylesSubSide.Box} id={StylesSubSide.blox_left}>
          <img
            src={PW}
            className={StylesSubSide.Img_Box}
            id={StylesSubSide.Img_Box_Support}
            alt="Portail Web icone"
          ></img>
          <div className={StylesSubSide.Box_text}>
            <h1 className={StylesSubSide.h1}>Portail Web</h1>
            <p className={StylesSubSide.p}>
              Portail web client intégré pour les factures en ligne et les
              tickets d'incident.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default container_section_two;
