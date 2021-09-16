import {
  React,
  StylesVMV,
  Analyser,
  Comprendre,
  Observer,
  Restituer,
} from "../../Vis-Ma-Vie/importVMV.js";

const Audit_section_two = () => {
  const Audit_section_two = [
    {
      id: 1,
      bloc: (
        <div
          className={StylesVMV.container_icones_bloc_section_three}
          id={StylesVMV.blocAlterner}
        >
          <div className={StylesVMV.bloc} id={StylesVMV.blocAlterner}>
            <div className={StylesVMV.container_section_three_description}>
              <h1 className={StylesVMV.VisVis_ma_vie_section_three}>
                OBSERVER
              </h1>
              <li className={StylesVMV.liste_bloc_section_three}>
                Lors d'une journée ou plusieurs, nous vous suivons dans votre
                travail afin de comprendre:{" "}
              </li>
              <ul>
                <li className={StylesVMV.liste_bloc_section_three}>
                  - Votre environnement
                </li>
                <li className={StylesVMV.liste_bloc_section_three}>
                  - Votre façon de travailler et celle de vos collaborateurs
                </li>
              </ul>
              <li
                style={{ marginTop: "20px" }}
                className={StylesVMV.liste_bloc_section_three}
              >
                Mais cette immesion nous sert pour :{" "}
              </li>
              <ol>
                <li className={StylesVMV.liste_num_bloc_section_three}>
                  Apronfondir au mieux vos besoins
                </li>
                <li className={StylesVMV.liste_num_bloc_section_three}>
                  Identifier les responsabilités de chacun
                </li>
              </ol>
            </div>
          </div>

          <img
            id={StylesVMV.Position_icone_A}
            id={StylesVMV.Position_icone_A}
            className={StylesVMV.icones_section_three}
            src={Observer}
            alt="icone_observer"
          ></img>
        </div>
      ),
    },
    {
      id: 2,
      bloc: (
        <div className={StylesVMV.container_icones_bloc_section_three}>
          <div className={StylesVMV.bloc}>
            <div className={StylesVMV.container_section_three_description}>
              <h1 className={StylesVMV.VisVis_ma_vie_section_three}>
                {" "}
                COMPRENDRE
              </h1>
              <ul
                style={
                  {
                    //   border: "solid 2px",
                    // padding: "0px 50px",
                  }
                }
              >
                <li className={StylesVMV.liste_bloc_section_three}>
                  Suite à notre journée, nous organisons en interne notre
                  réunion "post-it" pour relever :
                </li>
                <li className={StylesVMV.liste_bloc_section_three}>
                  Vos pratiques sur le terrain
                </li>
                <li className={StylesVMV.liste_bloc_section_three}>
                  Vos interactions
                </li>
              </ul>
            </div>
          </div>
          <img
            id={StylesVMV.Position_icone_B}
            className={StylesVMV.icones_section_three}
            src={Comprendre}
            alt="icone_comprendre"
          ></img>
        </div>
      ),
    },
    {
      id: 3,
      bloc: (
        <div
          className={StylesVMV.container_icones_bloc_section_three}
          id={StylesVMV.blocAlterner}
        >
          <div className={StylesVMV.bloc} id={StylesVMV.blocAlterner}>
            <div className={StylesVMV.container_section_three_description}>
              <h1 className={StylesVMV.VisVis_ma_vie_section_three}>
                ANALYSER
              </h1>
              <ul>
                <li className={StylesVMV.liste_bloc_section_three}>
                  Apres ce rendez vous d'équipe, nous analysons
                </li>
                <li className={StylesVMV.liste_bloc_section_three}>
                  Les complexités de votre métier
                </li>
                <li className={StylesVMV.liste_bloc_section_three}>
                  Les relations entre vos divers services
                </li>
                <li className={StylesVMV.liste_bloc_section_three}>
                  Les points d'étonnements que nous avons constaté
                </li>
              </ul>
            </div>
          </div>
          <img
            id={StylesVMV.Position_icone_A}
            className={StylesVMV.icones_section_three}
            src={Analyser}
            alt="icone_analyser"
          ></img>
        </div>
      ),
    },
    {
      id: 4,
      bloc: (
        <div className={StylesVMV.container_icones_bloc_section_three}>
          <div className={StylesVMV.bloc}>
            <div
              className={StylesVMV.text_four}
              style={
                {
                  // border: "solid 2px",
                }
              }
            >
              <h1 className={StylesVMV.VisVis_ma_vie_section_three}>
                RESTITUER
              </h1>
              <p className={StylesVMV.paragraph_restituer}>
                Lors d’une réunion dédiée sous forme de présentation, nous vous
                restituons des livrables avec des pistes d'évolutions chiffrées.
              </p>
            </div>
          </div>
          <img
            id={StylesVMV.Position_icone_B}
            className={StylesVMV.icones_section_three}
            src={Restituer}
            alt="Restituer"
          ></img>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className={StylesVMV.Title_section_three}>
        Comment se déroule un audit ?{" "}
      </h1>
      <div className={StylesVMV.container_section_three}>
        {Audit_section_two.map((section) => {
          return <div key={section.id}>{section.bloc}</div>;
        })}
      </div>
    </div>
  );
};

export default Audit_section_two;
