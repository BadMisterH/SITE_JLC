import React from "react";
import StylesAnnexe from "../../../styles/Home.module.scss";

export default class TextsThree extends React.Component {
  render() {
    return (
      <div style={{ margin: 40 }}>
        <h1 style={{ textAlign: "end" }} className={StylesAnnexe.h1}>
          Pourquoi un crm est-il important
        </h1>

        <h2 style={{ textAlign: "end" }}>L'importance de la relation client</h2>

        <p style={{ textAlign: "end", marginLeft: 50, marginRight: 50 }}>
          Le CRM permet à une entreprise d'approfondir ses relations avec ses
          clients, utilisateurs de services, collègues, partenaires et
          fournisseurs. Établir de bonnes relations et effectuer un suivi des
          prospects et des clients est crucial pour acquérir et fidéliser des
          clients, deux impératifs au cœur de la fonction du CRM. Vous
          bénéficiez d'une vue globale depuis un emplacement centralisé : un
          tableau de bord simple et personnalisable, qui retrace l'historique
          des interactions clients, le statut de leurs commandes, tout problème
          de service non résolu, et bien plus encore. Gartner prévoit que d'ici
          2021, la technologie CRM sera le principal poste de dépense des
          entreprises en matière de logiciels. Si vous souhaitez pérenniser
          votre entreprise, vous devez mettre en place une stratégie pour
          l'avenir. Pour les entreprises visionnaires, le CRM est le cadre idéal
          de cette stratégie.
        </p>
      </div>
    );
  }
}
