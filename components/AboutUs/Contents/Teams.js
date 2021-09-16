import {
  React,
  styles,
  Jeremy,
  HP,
  Kurban,
  Stephane,
  Jihad,
  Allyriane,
  Johan,
  Regis,
  Sarah,
  Hassan,
  Mohamed,
  Anne,
} from "../importAboutUs";

const Teams = () => {
  let StylesImgTeams = {
    height: 388,
    width: 335,
    borderRadius: 5,
    objectFit: "cover",
    marginRight: "29px",
    marginLeft: "29px",
  };

  let PositionCircle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const Teams = [
    {
      id: 1,
      team: (
        <div style={PositionCircle}>
          {/* <div
            // style={{ marginTop: -100, marginRight: -20 }}
            className={styles.Circles}
          ></div> */}
          <h1 style={{ marginTop: "-30px" }} className={styles.TitreImgTeam}>
            Jérémy
          </h1>
          <img
            className={styles.ImgTeams}
            style={StylesImgTeams}
            src={Jeremy}
            alt="Jeremy"
          ></img>
        </div>
      ),
    },
    {
      id: 2,
      team: (
        <div style={PositionCircle}>
          {/* <div
            // style={{ marginTop: -100, marginRight: -20 }}
            className={styles.Circles}
          ></div> */}
          <h1 style={{ marginTop: "70px" }} className={styles.TitreImgTeam}>
            Henri-pierre{" "}
          </h1>
          <img
            className={styles.ImgPositionTeams2}
            style={StylesImgTeams}
            src={HP}
            alt="HP"
          ></img>
        </div>
      ),
    },
    {
      id: 3,
      team: (
        <div style={PositionCircle}>
          {/* <div
          // style={{ marginTop: -100, marginRight: -20 }}
          className={styles.Circles}
        ></div> */}
          <h1 style={{ marginTop: "25px" }} className={styles.TitreImgTeam}>
            Kurban
          </h1>
          <img
            className={styles.ImgPositionTeams3}
            style={StylesImgTeams}
            src={Kurban}
            alt="Kurban"
          ></img>
        </div>
      ),
    },
    {
      id: 4,
      team: (
        <div style={PositionCircle}>
          {/* <div
            // style={{ marginTop: -100, marginRight: -20 }}
            className={styles.Circles}
          ></div> */}
          <h1 style={{ marginTop: "90px" }} className={styles.TitreImgTeam}>
            Stéphane
          </h1>
          <img
            className={styles.ImgPositionTeams4}
            style={StylesImgTeams}
            src={Stephane}
            alt="Stephane"
          ></img>
        </div>
      ),
    },
    {
      id: 5,
      team: (
        <div style={PositionCircle}>
          {/* <div
          // style={{ marginTop: -100, marginRight: -20 }}
          className={styles.Circles}
        ></div> */}
          <h1
            style={{ marginTop: "-120px" }}
            className={styles.TitreImgTeam}
            id={styles.Jihad}
          >
            Jihad
          </h1>
          <img
            className={styles.ImgPositionTeams5}
            style={StylesImgTeams}
            src={Jihad}
            alt="Jihad"
          ></img>
        </div>
      ),
    },
    {
      id: 6,
      team: (
        <div style={PositionCircle}>
          {/* <div
          // style={{ marginTop: -100, marginRight: -20 }}
          className={styles.Circles}
        ></div> */}
          <h1
            style={{ marginTop: "-30px" }}
            className={styles.TitreImgTeam}
            id={styles.Ally}
          >
            Allyriane
          </h1>
          <img
            className={styles.ImgPositionTeams6}
            style={StylesImgTeams}
            src={Allyriane}
            alt="Allyriane"
          ></img>
        </div>
      ),
    },
    {
      id: 7,
      team: (
        <div style={PositionCircle}>
          {/* <div
          // style={{ marginTop: -100, marginRight: -20 }}
          className={styles.Circles}
        ></div> */}
          <h1 style={{ marginTop: "-75px" }} className={styles.TitreImgTeam}>
            Johan
          </h1>
          <img
            className={styles.ImgPositionTeams7}
            style={StylesImgTeams}
            src={Johan}
            alt="Johan"
          ></img>
        </div>
      ),
    },
    {
      id: 8,
      team: (
        <div style={PositionCircle}>
          {/* <div
        // style={{ marginTop: -100, marginRight: -20 }}
        className={styles.Circles}
      ></div> */}
          <h1 style={{ marginTop: "20px" }} className={styles.TitreImgTeam}>
            Régis
          </h1>
          <img
            className={styles.ImgPositionTeams8}
            style={StylesImgTeams}
            src={Regis}
            alt="Regis"
          ></img>
        </div>
      ),
    },
    {
      id: 9,
      team: (
        <div style={PositionCircle}>
          {/* <div
        // style={{ marginTop: -100, marginRight: -20 }}
        className={styles.Circles}
      ></div> */}
          <h1 style={{ marginTop: "0px" }} className={styles.TitreImgTeam}>
            Sarah
          </h1>
          <img
            className={styles.ImgPositionTeams9}
            style={StylesImgTeams}
            src={Sarah}
            alt="Sarah"
          ></img>
        </div>
      ),
    },
    {
      id: 10,
      team: (
        <div style={PositionCircle}>
          {/* <div
        // style={{ marginTop: -100, marginRight: -20 }}
        className={styles.Circles}
      ></div> */}
          <h1 style={{ marginTop: "-50px" }} className={styles.TitreImgTeam}>
            Hassan
          </h1>
          <img
            className={styles.ImgPositionTeams10}
            style={StylesImgTeams}
            src={Hassan}
            alt="Hassan"
          ></img>
        </div>
      ),
    },
    {
      id: 11,
      team: (
        <div style={PositionCircle}>
          {/* <div
        // style={{ marginTop: -100, marginRight: -20 }}
        className={styles.Circles}
      ></div> */}
          <h1 style={{ marginTop: "20px" }} className={styles.TitreImgTeam}>
            Mohamed
          </h1>
          <img
            className={styles.ImgPositionTeams8}
            style={StylesImgTeams}
            src={Mohamed}
            alt="Mohamed"
          ></img>
        </div>
      ),
    },
    {
      id: 12,
      team: (
        <div style={PositionCircle}>
          {/* <div
        // style={{ marginTop: -100, marginRight: -20 }}
        className={styles.Circles}
      ></div> */}
          <h1 style={{ marginTop: "0px" }} className={styles.TitreImgTeam}>
            Anne
          </h1>
          <img
            className={styles.ImgPositionTeams12}
            style={StylesImgTeams}
            src={Anne}
            alt="Anne"
          ></img>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 className={styles.teams_title}>NOTRE EQUIPE</h1>

      <div className={styles.Teams}>
        {Teams.map((imgTeams) => {
          return (
            <div className={styles.JLCTeams} key={imgTeams.id}>
              {imgTeams.team}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
