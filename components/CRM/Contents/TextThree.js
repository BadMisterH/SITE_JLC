import React from "react";
import StylesAnnexe from "../../../styles/Home.module.scss";

export default class TextsThree extends React.Component {
  state = {
    listes: [
      { liste: "Gestion des contacts améliorée" },
      { liste: "Collaboration entre équipes" },
      { liste: "Productivité accrue" },
      { liste: "Gestion des ventes dynamisée" },
      { liste: "5. Prévision des ventes précise" },
      { liste: "Reporting fiable" },
      { liste: "Indicateurs commerciaux optimisés" },
      { liste: "Meilleures satisfaction et fidélisation des clients" },
      { liste: "Retour sur investissement marketing plus rentable" },
      { liste: "Meilleurs produits et services" },
    ],
  };

  render() {
    const listeApuces = this.state.listes.map((avantages) => {
      return <li>{avantages.liste}</li>;
    });

    return (
      <div>
        <h1 className={StylesAnnexe.h1}>Quels sont les avantages du CRM ?</h1>

        <h2>Que fait un logiciel CRM ?</h2>

        <p>
          En recueillant et organisant les données relatives aux interactions
          clients, en les rendant accessibles à tous et en facilitant leur
          analyse, le CRM offre de nombreux avantages.
        </p>
        <ol>{listeApuces}</ol>
      </div>
    );
  }
}
