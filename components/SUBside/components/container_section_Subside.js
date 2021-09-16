import {
  React,
  StylesSubSide,
  Button1,
  Button2,
  Button3,
  Button4,
} from "../ImportSubside";
const container_section_two_Subside = () => {
  const listeSUBSIDE = [
    {
      id: 1,
      containerSubside: (
        <div className={StylesSubSide.container_boxx}>
          <img src={Button1} className={StylesSubSide.ImgCBPS}></img>
          <div className={StylesSubSide.contenuCBPS}>
            <h1 className={StylesSubSide.h1_CBPS} style={{ color: "#0E5686" }}>
              CRM
            </h1>
            <h2 className={StylesSubSide.h2_CBPS}>
              Le CRM permet d’informer et d’interagir avec les clients sur les
              modalités de leur abonnement.
            </h2>
            <p className={StylesSubSide.description_CBPS}>
              Il intègre la possibilité de modifier les services en ligne et de
              traiter les tickets. Il fournit un ensemble de fonctions
              permettant au personnel des ventes et du service clientèle de
              gérer efficacement toutes les étapes du cycle de vie du client :
              du contact initial et des ventes au marketing. Il contribue à
              améliorer l’expérience client en offrant un service de haute
              qualité et constant sur tous les canaux de contact, y compris le
              centre d’appel.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      containerSubside: (
        <div className={StylesSubSide.container_boxx}>
          <img src={Button2} className={StylesSubSide.ImgCBPS}></img>
          <div className={StylesSubSide.contenuCBPS}>
            <h1 className={StylesSubSide.h1_CBPS} style={{ color: "#00A8CD" }}>
              Billing
            </h1>
            <h2 className={StylesSubSide.h2_CBPS}>
              Le module Billing permet de récupérer les usages et les
              transformer en factures.
            </h2>
            <p className={StylesSubSide.description_CBPS}>
              Il établit la facturation et envoi la facture au client tout en
              s’assurant du respect des délais de paiements . De même il
              s’occupe de la gestion des règlements partiels. Il est également
              possible d’établir des facturations unifiées (plusieurs
              services/XDR sur une seule facture).
              <p
                style={{ marginTop: 30 }}
                className={StylesSubSide.description_CBPS}
              >
                Il intègre également un module de commande qui effectue la
                tarification des services en fonction de la souscription d’un
                utilisateur/client. Ce module réduit les temps de traitements
                entre la récupération des usages (XDR,CDR) et la production de
                la facture. Il facilite également la gestion de la commande
                et/ou souscription
              </p>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      containerSubside: (
        <div className={StylesSubSide.container_boxx}>
          <img src={Button3} className={StylesSubSide.ImgCBPS}></img>
          <div className={StylesSubSide.contenuCBPS}>
            <h1 className={StylesSubSide.h1_CBPS} style={{ color: "#4A80A4" }}>
              Provisionning
            </h1>
            <h2 className={StylesSubSide.h2_CBPS}>
              Le Provisionning recouvre les outils d’allocation des ressources
              (physiques/services).
            </h2>
            <p className={StylesSubSide.description_CBPS}>
              Le module donne accès au stock de produits disponibles, au parc
              des équipements (actifs/inactifs) et au suivi des livraisons.
            </p>
            <p
              style={{ marginTop: 30 }}
              className={StylesSubSide.description_CBPS}
            >
              Il donne la possibilité de souscrire, d’activer ou de désactiver
              des services, d’administrer le parc et de gérer le flux de
              livraison physique.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      containerSubside: (
        <div className={StylesSubSide.container_boxx}>
          <img
            id={StylesSubSide.Button4}
            src={Button4}
            className={StylesSubSide.ImgCBPS}
          ></img>
          <div className={StylesSubSide.contenuCBPS}>
            <h1 className={StylesSubSide.h1_CBPS} style={{ color: "#087185" }}>
              Support
            </h1>
            <h2 className={StylesSubSide.h2_CBPS}>
              Le modules SUPPORT permet la gestion des tickets
            </h2>
            <p className={StylesSubSide.description_CBPS}>
              Sur ce module il est possible de traiter les tickets sur un
              tableau de bord aéré sur lequel les nouvelles demandes, celles en
              cours de traitement ou en retard sont repérables d’un simple coup
              d’œil. Il permet de visualiser le parc, d’accéder à des ressources
              et escalader les tickets.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div class={StylesSubSide.container_section_two}>
        {listeSUBSIDE.map((contenuCBPS) => {
          return <div key={contenuCBPS.id}>{contenuCBPS.containerSubside}</div>;
        })}
      </div>
    </>
  );
};

export default container_section_two_Subside;
