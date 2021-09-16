import React from "react";
import StylesEB from "../../../styles/poleExpertise_Bespoke.module.scss";
import ADN from "../../../public/assets/img/Icone_consulting/adn_jl_consulting.svg";
import Force from "../../../public/assets/img/Icone_consulting/force_jl_consulting.svg";
import Objectif from "../../../public/assets/img/Icone_consulting/objectif_jl_consulting.svg";

const Section_three_expertise = () => {
  return (
    <div>
      <div className={StylesEB.containerSection_three}>
        <div className={StylesEB.boxContainer}>
          <img src={ADN} className={StylesEB.ImgExpertise} alt=""></img>{" "}
          <div className={StylesEB.bloc_container_descritption}>
            <h1 className={StylesEB.titleh1_bloc}>Notre Approche</h1>{" "}
            <p className={StylesEB.bloc_description}>
              L’approche humaine de JL Consulting est dans notre ADN. La
              souplesse de notre service vous offre une continuité dans vos
              projets.
            </p>
          </div>
        </div>
        <div className={StylesEB.boxContainer}>
          <img src={Objectif} className={StylesEB.ImgExpertise}></img>{" "}
          <div className={StylesEB.bloc_container_descritption}>
            <h1 className={StylesEB.titleh1_bloc}>Notre Objectif</h1>{" "}
            <p className={StylesEB.bloc_description}>
              Nous travaillons avec vous en amont pour mettre à disposition les
              experts dont vous avez besoin. Nous mettons des attaquants en
              attaque et des défenseurs en défense.
            </p>
          </div>
        </div>
        <div className={StylesEB.boxContainer}>
          <img src={Force} className={StylesEB.ImgExpertise}></img>{" "}
          <div className={StylesEB.bloc_container_descritption}>
            <h1 className={StylesEB.titleh1_bloc}>Notre Force</h1>{" "}
            <p className={StylesEB.bloc_description}>
              Que ce soit pour 3 mois ou plusieurs années, nous vous assurons la
              continuité de service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_three_expertise;
