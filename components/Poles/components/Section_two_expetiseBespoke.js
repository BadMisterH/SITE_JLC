import React from "react";
import StylesEB from "../../../styles/poleExpertise_Bespoke.module.scss";

const section_two_expetise = () => {
  return (
    <>
      <div className={StylesEB.Container_section_two}>
        <div className={StylesEB.description_expertise_container}>
          <h1 className={StylesEB.Expertise_title_section_two}>
            A quel moment dois-je faire appel à des experts ?
          </h1>
          <p className={StylesEB.ExpertiseBespoke_description_section_two}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </p>
        </div>
        <div className={StylesEB.description_container_right}>
          <h1
            className={
              StylesEB.ExpertiseBespoke_description_section_two_title_section_two_JL_Consulting
            }
          >
            Pourquoi faire appel au Pôle Expertise de JL Consulting ?{" "}
          </h1>
          <p
            className={StylesEB.ExpertiseBespoke_description_section_two}
            style={{ textAlign: "right" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </p>
        </div>
      </div>
    </>
  );
};

export default section_two_expetise;
