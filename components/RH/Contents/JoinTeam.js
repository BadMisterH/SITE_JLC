import { React, Equipe, CV, Skill, StyleRH, Link } from "../ImportRH";

const JoinTeam = () => {
  return (
    <div>
      <div className={StyleRH.container_teams}>
        <div className={StyleRH.container_one_teams}>
          <h1
            className={StyleRH.title_team}
            style={{
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Venez rejoindre l'équipe
          </h1>
          <div className={StyleRH.textRH}>
            <p className={StyleRH.description_teams}>
              Créé en 2004, JL Consulting est un cabinet de conseil en Système
              d’Information (ERP, CRM, BI, Développement Web et mobile) et un
              éditeur de logiciels, fondé sur des valeurs fortes qui font notre
              différence.
            </p>
            <p className={StyleRH.description_teams}>
              Pour chaque nouveau projet, nos consultants recherchent donc
              systématiquement la solution la plus adaptée du moment plutôt que
              de rester par confort sur un outil déjà utilisé auparavant. Ceci
              garantit à nos clients d’être à la pointe de la technologie.
            </p>
            <p className={StyleRH.description_teams}>
              Rejoins-nous ! : Si l’aventure t’intéresse écris nous à
              contact@jlconsulting.fr
            </p>
            <p className={StyleRH.description_teams}>
              Merci de remplir ce questionnaire pour que l'on apprenne à te
              connaître :
            </p>
            <Link href="/https://docs.google.com/forms/d/e/1FAIpQLSdsNtoPpl770bqMeYTZO1BKOCtatpkeY3Js_3QbvEVWZwdcdA/viewform?usp=pp_url">
              <button className={StyleRH.Link}>
                <p className={StyleRH.p}>
                  Pssst !? Viens nous en dire plus sur toi !
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div className={StyleRH.container_img_teams}>
          {" "}
          <div className={StyleRH.container_img_teams}>
            <img className={StyleRH.icon_teams} src={CV} alt="CV"></img>

            <img className={StyleRH.imgTeams} src={Equipe} alt="Equipe"></img>
            <img
              className={StyleRH.icon_teams_two}
              src={Skill}
              alt="Skill"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
