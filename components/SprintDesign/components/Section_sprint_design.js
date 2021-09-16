import React from "react";
import StylesSD from "../../../styles/SprintDesign.module.scss";
//image

import conception from "../../../public/assets/img/Img_sprint_design/conception.svg";
import prototype from "../../../public/assets/img/Img_sprint_design/prototype.svg";
import test from "../../../public/assets/img/Img_sprint_design/test.svg";
import ui from "../../../public/assets/img/Img_sprint_design/ui design.svg";
import ux from "../../../public/assets/img/Img_sprint_design/ux design.svg";

const Section_sprint_design = () => {
  return (
    <div className={StylesSD.container}>
      <div className={StylesSD.flex_container}>
        <div className={StylesSD.container_bloc} id={StylesSD.Container_bloc}>
          <img src={conception} className={StylesSD.img}></img>
          <div className={StylesSD.container_description}>
            <h1
              className={StylesSD.h1SB}
              style={{ textAlign: "right", color: "#CFE3F9" }}
            >
              CONCEPTION
            </h1>
            <p className={StylesSD.pSB} style={{ textAlign: "right" }}>
              <strong>USER RESEARCH</strong>
              <br></br> - Interviews des utilisateurs cibles et des app
              concurrentes pour identifier les éventuels autres besoins et les
              frustrations <br></br>- Benchmark de la concurrence et des applis
              du même univers (UI et fonctionnel) <strong>STORY MAPPING</strong>{" "}
              <br></br>Sous forme d’atelier collaboratif (1/2 jour), le Story
              Mapping permet : <br></br>- de définir les objectifs en accord
              avec la Value Proposition<br></br> - de valider le périmètre du
              projetn <br></br> - d’identifier les types d’utilisateurs
              (Personas) <br></br>- de décrire le parcours utilisateur (Customer
              Journey) <br></br> <strong>USER STORIES</strong> <br></br>-
              Rédaction des User Stories dans Trello : <br></br>- Cas Nominaux{" "}
              <br></br>- Cas Non-nominaux (Edge Cases) <br></br> - Définition
              des Critères d'Acceptation <br></br> - Itérations jusqu'à
              validation du Scope détaillé)
            </p>
          </div>
        </div>
        <div className={StylesSD.container_bloc}>
          <img src={ux} className={StylesSD.img}></img>
          <div className={StylesSD.container_description}>
            <h1 style={{ color: "#DBDBDB" }} className={StylesSD.h1SB}>
              UX DESIGN
            </h1>
            <p className={StylesSD.pSB}>
              SKETCHS - Exploration de toutes les possibilités, sans contraintes
              techniques - Sketchs des parcours utilisateurs (User Flows) -
              Sketchs des écrans principaux WIREFRAMES - Création du Userflow -
              Mise au propre des Wireframes (Sketch) - Identification du AHA
              Moment - Optimisation de l'Activation et Retention - Réflexion sur
              les Animations et Transitions
            </p>
          </div>
        </div>
        <div className={StylesSD.container_bloc} id={StylesSD.row_reverse}>
          <img src={ui} className={StylesSD.img}></img>

          <div className={StylesSD.container_description}>
            <h1
              style={{ color: "#4A80A4" }}
              className={StylesSD.h1SB}
              style={{ textAlign: "right" }}
            >
              UI DESIGN
            </h1>
            <p className={StylesSD.pSB} style={{ textAlign: "right" }}>
              <strong>USER RESEARCH</strong>
              <br></br> - Interviews des utilisateurs cibles et des app
              concurrentes pour identifier les éventuels autres besoins et les
              frustrations <br></br>- Benchmark de la concurrence et des applis
              du même univers (UI et fonctionnel) <strong>STORY MAPPING</strong>{" "}
              <br></br>Sous forme d’atelier collaboratif (1/2 jour), le Story
              Mapping permet : <br></br>- de définir les objectifs en accord
              avec la Value Proposition<br></br> - de valider le périmètre du
              projetn <br></br> - d’identifier les types d’utilisateurs
              (Personas) <br></br>- de décrire le parcours utilisateur (Customer
              Journey) <br></br> <strong>USER STORIES</strong> <br></br>-
              Rédaction des User Stories dans Trello : <br></br>- Cas Nominaux{" "}
              <br></br>- Cas Non-nominaux (Edge Cases) <br></br> - Définition
              des Critères d'Acceptation <br></br> - Itérations jusqu'à
              validation du Scope détaillé)
            </p>
          </div>
        </div>
        <div className={StylesSD.container_bloc}>
          <img src={prototype} className={StylesSD.img}></img>
          <div className={StylesSD.container_description}>
            <h1 style={{ color: "#087185" }} className={StylesSD.h1SB}>
              PROTOTYPE
            </h1>
            <p className={StylesSD.pSB}>
              <h2 className={StylesSD.h2}>Prototype Animé avec Invision</h2>
              <strong>Le bon device</strong> <br></br>Visualiser le prototype
              interactif directement sur mobile, tablette ou ordinateur{" "}
              <strong>Feedback</strong> <br></br>
              Ajouter des commentaires sur le prototype <br></br>
              Recevoir des notification à chaque réponse ou mise à jour des
              maquettes
              <br></br> <strong>Versionning</strong>
              <br></br> A tout moment il est possible de consulter les versions
              précédentes
            </p>
          </div>
        </div>
        <div className={StylesSD.container_bloc} id={StylesSD.row_reverse}>
          <img src={test} className={StylesSD.img}></img>
          <div className={StylesSD.container_description}>
            <h1
              className={StylesSD.h1SB}
              style={{ textAlign: "right", color: "#00A4CA" }}
            >
              TESTS UTILISATEURS
            </h1>
            <p className={StylesSD.pSB} style={{ textAlign: "right" }}>
              - Définition des objectifs et des KPI <br></br>- Création du
              protocole de tests et rédaction des scénarios <br></br>-
              Recrutement des candidats <br></br>- Conduite des tests <br></br>-
              Compte rendu et analyse <br></br>- Mise à jour des maquettes{" "}
              <br></br>
              <br></br>
              <strong>ACCOMPLISSEMENT DES TÂCHES</strong> <br></br>Nous mesurons
              la facilité avec laquelle un utilisateur accomplit une tâche
              définie (créer un compte, rechercher un lieux, partager un
              événement...) en se prenant en compte différents facteurs : courbe
              d’apprentissage, intuitivité, efficacité, mémoire, points de
              frictions. <br></br> <br></br>
              <strong>UX DESIGN</strong>
              <br></br> À la suite des tests d'utilisabilité, nous interviewons
              l’utilisateur afin de connaître son ressentit global sur
              l’application. S’est-il senti frustré ? Son expérience était-elle
              agréable ? A-t-il des retours négatifs ou positifs sur son
              utilisation de l’app ? <br></br> <br></br>{" "}
              <strong>NAVIGATION</strong> <br></br> La navigation dans une
              application mobile est le nerf de la guerre. L’utilisateur
              arrive-t-il à s’y retrouver facilement ? Utilise-t-il le chemin
              pensé lors de la conception ? Nous lui faisons assignons des
              parcours complet afin de valider la navigation de scénarios
              prédéfinis. <br></br> <br></br>
              <strong>LISIBILITÉ</strong> <br></br> Quelques soient les
              fonctions d’une application, sa lecture doit être clair et le
              message doit être compris par l’utilisateur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_sprint_design;
