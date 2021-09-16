import {
  React,
  StylesSS,
  CrossTalent,
  Carmignac,
  NeoPost,
  SAFRAN,
  CANAL,
  LAPEYRE,
  AccorHotels,
  Airmont,
  Guerlain,
  VadeSecure,
  cromology,
  manMachine,
  SyndicExperts,
  VilleErmont,
  ACADOMIA,
  MRCTransmark,
  BB,
  Shiva,
  Roche,
  Atid,
  NetsQuare,
  ManTrans,
  Platre,
  GrandVision,
  SONY,
  KEOLIS,
  SIEMENS,
  Sodexo,
  SocieteGenerale,
  PROCURIS,
  videlio,
  aycom,
  Total,
  LaCentrale,
  Clarins,
} from "../importSS.js";

const Logo_entreprises = () => {
  const Logo_Entreprisees = [
    {
      id: 1,
      LE: <img className={StylesSS.Logo} src={CrossTalent} alt="CT"></img>,
    },
    {
      id: 2,
      LE: <img className={StylesSS.Logo} src={Carmignac} alt="Carmignac"></img>,
    },
    {
      id: 3,
      LE: <img className={StylesSS.Logo} src={NeoPost} alt="NeoPost"></img>,
    },
    {
      id: 5,
      LE: <img className={StylesSS.Logo} src={SAFRAN} alt="SAFRAN"></img>,
    },
    {
      id: 6,
      LE: <img className={StylesSS.Logo} src={CANAL} alt="CANAL"></img>,
    },
    {
      id: 7,
      LE: <img className={StylesSS.Logo} src={LAPEYRE} alt="LAPEYRE"></img>,
    },
    {
      id: 8,
      LE: <img className={StylesSS.Logo} src={Airmont} alt="Airmont"></img>,
    },
    {
      id: 9,
      LE: <img className={StylesSS.Logo} src={Guerlain} alt="Guerlain"></img>,
    },
    {
      id: 10,
      LE: (
        <img
          className={StylesSS.Logo}
          src={AccorHotels}
          alt="AccorHotels"
        ></img>
      ),
    },
    {
      id: 11,
      LE: (
        <img className={StylesSS.Logo} src={VadeSecure} alt="VadeSecure"></img>
      ),
    },
    {
      id: 12,
      LE: <img className={StylesSS.Logo} src={cromology} alt="cromology"></img>,
    },
    {
      id: 13,
      LE: (
        <img className={StylesSS.Logo} src={manMachine} alt="manMachine"></img>
      ),
    },
    {
      id: 14,
      LE: (
        <img
          className={StylesSS.Logo}
          src={SyndicExperts}
          alt="SyndicExperts"
        ></img>
      ),
    },
    {
      id: 15,
      LE: (
        <img
          className={StylesSS.Logo}
          src={VilleErmont}
          alt="VilleErmont"
        ></img>
      ),
    },
    {
      id: 16,
      LE: <img className={StylesSS.Logo} src={ACADOMIA} alt="ACADOMIA"></img>,
    },
    {
      id: 17,
      LE: (
        <img
          className={StylesSS.Logo}
          src={MRCTransmark}
          alt="MRCTransmark"
        ></img>
      ),
    },
    {
      id: 18,
      LE: (
        <img className={StylesSS.Logo} src={BB} alt="BB" id={StylesSS.BB}></img>
      ),
    },
    {
      id: 19,
      LE: <img className={StylesSS.Logo} src={Shiva} alt="Shiva"></img>,
    },
    {
      id: 20,
      LE: <img className={StylesSS.Logo} src={Roche} alt="Roche"></img>,
    },
    { id: 21, LE: <img className={StylesSS.Logo} src={Atid} alt="Atid"></img> },
    {
      id: 22,
      LE: <img className={StylesSS.Logo} src={NetsQuare} alt="NetsQuare"></img>,
    },
    {
      id: 23,
      LE: <img className={StylesSS.Logo} src={ManTrans} alt="ManTrans"></img>,
    },
    {
      id: 24,
      LE: (
        <img
          className={StylesSS.Logo}
          src={GrandVision}
          alt="GrandVision"
        ></img>
      ),
    },
    {
      id: 25,
      LE: <img className={StylesSS.Logo} src={Platre} alt="Platre"></img>,
    },
    { id: 26, LE: <img className={StylesSS.Logo} src={SONY} alt="SONY"></img> },
    {
      id: 27,
      LE: <img className={StylesSS.Logo} src={KEOLIS} alt="KEOLIS"></img>,
    },
    {
      id: 28,
      LE: <img className={StylesSS.Logo} src={SIEMENS} alt="SIEMENS"></img>,
    },
    {
      id: 30,
      LE: <img className={StylesSS.Logo} src={Sodexo} alt="Sodexo"></img>,
    },
    {
      id: 31,
      LE: (
        <img
          className={StylesSS.Logo}
          src={SocieteGenerale}
          alt="SocieteGenerale"
        ></img>
      ),
    },
    {
      id: 32,
      LE: <img className={StylesSS.Logo} src={PROCURIS} alt="PROCURIS"></img>,
    },
    {
      id: 33,
      LE: <img className={StylesSS.Logo} src={videlio} alt="videlio"></img>,
    },
    {
      id: 34,
      LE: <img className={StylesSS.Logo} src={aycom} alt="aycom"></img>,
    },
    {
      id: 35,
      LE: <img className={StylesSS.Logo} src={Total} alt="Total"></img>,
    },
    {
      id: 36,
      LE: <img className={StylesSS.Logo} src={LaCentrale} alt="Total"></img>,
    },
    {
      id: 37,
      LE: <img className={StylesSS.Logo} src={Clarins} alt="Total"></img>,
    },
  ];
  return (
    <div>
      <div className={StylesSS.section_logos_entreprises}>
        {Logo_Entreprisees.map((Logo) => {
          return (
            <div className={StylesSS.Logo} key={Logo.id}>
              {Logo.LE}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logo_entreprises;
