import React from "react";
import StylesAnnexe from "../../../styles/Home.module.scss";

export default function TextsTwo() {
  return (
    <div>
      <h1 className={StylesAnnexe.h1} style={{ textAlign: "end" }}>
        À quoi se réfère exactement le CRM ?
      </h1>

      <h2 style={{ textAlign: "end" }}>Que fait un logiciel CRM ?</h2>

      <p style={{ textAlign: "end", margin: 50 }}>
        Le CRM en tant que technologie : produit technologique, souvent basé sur
        le cloud, que les équipes utilisent pour enregistrer, suivre et analyser
        les interactions entre l'entreprise et les utilisateurs. Il est
        également appelé système ou solution CRM. Le CRM en tant que stratégie :
        philosophie d'entreprise sur la façon dont devraient être gérées les
        relations avec les clients et les clients potentiels Le CRM en tant que
        processus : système adopté par une entreprise pour développer et gérer
        ces relations. Un logiciel CRM enregistre les coordonnées des clients,
        telles que les adresses e-mail, numéros de téléphone, profils de réseaux
        sociaux, etc. Il peut également extraire automatiquement d'autres
        informations, telles que les dernières actualités sur les activités de
        l'entreprise, mais aussi stocker des données telles que les préférences
        des clients en matière de communications. Le système CRM organise ces
        informations afin de vous proposer un enregistrement exhaustif des
        individus et des entreprises et vous permettre ainsi de mieux comprendre
        vos relations au fil du temps. Le logiciel CRM améliore la gestion des
        relations clients en créant une vue à 360° des clients, en capturant
        leurs interactions avec l'entreprise et en faisant ressortir les données
        requises afin d'améliorer les conversations avec les clients.
      </p>
    </div>
  );
}
