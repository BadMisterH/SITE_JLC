import { React, StyleRH, Pin } from "../ImportRH";
import { useState } from "react";

const Job = () => {
  const [stateCards, setstateCards] = useState(false);

  const FunctionCard = () => {
    if (setstateCards(!stateCards)) {
    }
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const AppearDiv = () => {
  //       if (setstateCards == false) {
  //         console.log("eeeee");
  //         document
  //           .querySelector(".boxMarketing")
  //           .classList.add("boxMarketingAppear");
  //       } else {
  //         document
  //           .getElementById("boxMarketing") //tu vise pas ça
  //           .classList.add("boxMarketingAppear");
  //         console.log("eeeeedezf");
  //       }
  //     };
  //     window.addEventListener("click", AppearDiv);
  //   }
  // }, []);

  const Marketing = [
    {
      id: 1,
      marketingBox: (
        <div>
          <h1 className={StyleRH.title_box_section_one}>MARKETING</h1>{" "}
          <p className={StyleRH.description_box_section_one}>
            Commercial/ Ingénieur d'Affaires
          </p>{" "}
          <img
            style={{ height: 21, width: 14 }}
            src={Pin}
            alt="Localisation"
          ></img>{" "}
          <p className={StyleRH.Paris}>Paris/IDF Nord</p>
        </div>
      ),
    },
    {
      id: 2,
      marketingBox: (
        <div>
          <h1 className={StyleRH.title_box_section_one}>MARKETING</h1>{" "}
          <p className={StyleRH.description_box_section_one}>
            Commercial/ Ingénieur d'Affaires
          </p>{" "}
          <img
            style={{ height: 21, width: 14 }}
            src={Pin}
            alt="Localisation"
          ></img>{" "}
          <p className={StyleRH.Paris}>Paris/IDF Nord</p>
        </div>
      ),
    },
    {
      id: 3,
      marketingBox: (
        <div>
          <h1 className={StyleRH.title_box_section_one}>MARKETING</h1>{" "}
          <p className={StyleRH.description_box_section_one}>
            Commercial/ Ingénieur d'Affaires
          </p>{" "}
          <img
            style={{ height: 21, width: 14 }}
            src={Pin}
            alt="Localisation"
          ></img>
          <p className={StyleRH.Paris}>Paris/IDF Nord</p>
        </div>
      ),
    },
    {
      id: 4,
      marketingBox: (
        <div>
          <h1 className={StyleRH.title_box_section_one}>MARKETING</h1>{" "}
          <p className={StyleRH.description_box_section_one}>
            Commercial/ Ingénieur d'Affaires
          </p>{" "}
          <img
            style={{ height: 21, width: 14 }}
            src={Pin}
            alt="Localisation"
          ></img>{" "}
          <p className={StyleRH.Paris}>Paris/IDF Nord</p>
        </div>
      ),
    },
    {
      id: 5,
      marketingBox: (
        <div>
          <h1 className={StyleRH.title_box_section_one}>MARKETING</h1>{" "}
          <p className={StyleRH.description_box_section_one}>
            Commercial/ Ingénieur d'Affaires
          </p>{" "}
          <img
            style={{ height: 21, width: 14 }}
            src={Pin}
            alt="Localisation"
          ></img>{" "}
          <p className={StyleRH.Paris}>Paris/IDF Nord</p>
        </div>
      ),
    },
    {
      id: 6,
      marketingBox: (
        <div>
          <h1 className={StyleRH.title_box_section_one}>MARKETING</h1>{" "}
          <p className={StyleRH.description_box_section_one}>
            Commercial/ Ingénieur d'Affaires
          </p>{" "}
          <img
            style={{ height: 21, width: 14 }}
            src={Pin}
            alt="Localisation"
          ></img>{" "}
          <p className={StyleRH.Paris}>Paris/IDF Nord</p>
        </div>
      ),
    },
  ];

  const listeMission = [
    {
      id: 1,
      textMission: (
        <li className={StyleRH.font_list_Mission}>
          Participer à l'élaboration du plan de Communication et l'appliquer.
        </li>
      ),
    },
    {
      id: 2,
      textMission: (
        <li className={StyleRH.font_list_Mission}>
          Faire évoluer selon tes besoins les outils de suivi clients, créer
          toi-même ton expérience utilisateur, plutôt sympa, non?{" "}
        </li>
      ),
    },
    {
      id: 3,
      textMission: (
        <li className={StyleRH.font_list_Mission}>
          Gérer avec notre équipe, la base de Prospects/Clients afin d’optimiser
          le suivi commercial… nous travaillons dans le CRM, ne soyons pas les
          cordonniers les plus mal chaussés!{" "}
        </li>
      ),
    },
    {
      id: 4,
      textMission: (
        <li className={StyleRH.font_list_Mission}>
          Utiliser ta rigueur pour effectuer les suivis des opérations.{" "}
        </li>
      ),
    },
    {
      id: 5,
      textMission: (
        <li className={StyleRH.font_list_Mission}>
          Effectuer avec nos consultants les parties avant-vente, suivi de
          projet et l’ensemble de la relation client
        </li>
      ),
    },
    {
      id: 6,
      textMission: (
        <li className={StyleRH.font_list_Mission}>
          Comme tu es entreprenant(e), tu sauras sans soucis agrandir cette
          liste.
        </li>
      ),
    },
  ];

  const Profil = [
    {
      id: 1,
      ProfilText: (
        <li className={StyleRH.font_list_Mission}>
          Nous recherchons avant tout une ’tête bien faite’ et une personne
          motivée{" "}
        </li>
      ),
    },
    {
      id: 2,
      ProfilText: (
        <li className={StyleRH.font_list_Mission}>
          Aisance écrite et orale…c’est du Commerce ne l’oublions pas.{" "}
        </li>
      ),
    },
    {
      id: 3,
      ProfilText: (
        <li className={StyleRH.font_list_Mission}>
          Idéalement en Master 1 ou 2 en Commerce
        </li>
      ),
    },
    {
      id: 4,
      ProfilText: (
        <li className={StyleRH.font_list_Mission}>
          Rigoureux, curieux et impliqué, avec un attrait pour le digital
        </li>
      ),
    },
    {
      id: 5,
      ProfilText: (
        <li className={StyleRH.font_list_Mission}>
          Maîtrise des outils de bureautique (PowerPoint, Word, Excel…){" "}
        </li>
      ),
    },
    {
      id: 6,
      ProfilText: (
        <li className={StyleRH.font_list_Mission}>
          Un brin de folie n’est pas obligatoire pour travaillez avec tes futurs
          collègues…mais ça peut aider
        </li>
      ),
    },
  ];

  return (
    <div>
      <div className={StyleRH.gridMarketing}>
        {Marketing.map((box_marketing_container) => {
          return (
            <div
              className={StyleRH.boxMarketing}
              onClick={FunctionCard}
              key={box_marketing_container.id}
            >
              {box_marketing_container.marketingBox}
            </div>
          );
        })}
      </div>

      <div id={stateCards ? "boxMarketingAppear" : "boxMarketing"}>
        <div className={StyleRH.containerboxMarketing}>
          <h1 className={StyleRH.h1_CI}>Commercial / Ingénieur d'Affaire</h1>

          <h2 className={StyleRH.h2_CI}>Nous recherchons </h2>

          <p className={StyleRH.text_search}>
            Un(e) stagiaire en Commerce, sympa, entreprenant(e) et souhaitant
            participer pleinement au développement de JL consulting
          </p>

          <h2 className={StyleRH.h2_CI}>Votre Mission, si vous l'acceptez </h2>

          <div className={StyleRH.ul_container}>
            {listeMission.map((Mission) => {
              return (
                <ul className={StyleRH.ulMission} key={Mission.id}>
                  {Mission.textMission}
                </ul>
              );
            })}
          </div>

          <h2 className={StyleRH.h2_CI}>Le profil recherché </h2>

          <div className={StyleRH.ul_container}>
            {Profil.map((profil_description) => {
              return (
                <ul className={StyleRH.ulMission} key={profil_description.id}>
                  {profil_description.ProfilText}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
