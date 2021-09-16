import {
  React,
  Head,
  Navigation,
  Footer,
  StylesVMV,
  StylesApp,
  CDVMV,
  Styles,
  styles,
  fleche,
  VmVprocessus,
  Douleur,
  Former,
  Reboot,
} from "./importVMV";

const VMV = () => {
  const listeVMV = [
    {
      id: 1,
      VMV: (
        <div className={StylesVMV.blocVMV_}>
          <img src={VmVprocessus} className={StylesVMV.ImgVMV} alt=""></img>
          <p className={StylesVMV.ListeVMV}> - Revisitez vos processus</p>,
        </div>
      ),
    },
    {
      id: 2,
      VMV: (
        <div className={StylesVMV.blocVMV_}>
          <img src={Reboot} className={StylesVMV.ImgVMV} alt=""></img>

          <p className={StylesVMV.ListeVMV}>
            - Effectuer un "reboot" de vos projets
          </p>
        </div>
      ),
    },
    {
      id: 3,
      VMV: (
        <div className={StylesVMV.blocVMV_}>
          <img src={Douleur} className={StylesVMV.ImgVMV} alt=""></img>

          <p className={StylesVMV.ListeVMV}>
            - Identifier vos points de douleurs
          </p>
        </div>
      ),
    },
    {
      id: 4,
      VMV: (
        <div className={StylesVMV.blocVMV_}>
          <img src={Former} className={StylesVMV.ImgVMV} alt="Outils"></img>

          <p className={StylesVMV.ListeVMV}>
            - Former vos nouveaux collaborateurs aux évolutions de vos outils
          </p>
        </div>
      ),
    },
  ];

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Head>
        <title>VMV</title>
        <link rel="icon" href="/logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/white-buttell"
          rel="stylesheet"
        />
      </Head>
      <div className={StylesApp.header}>
        <Navigation />
      </div>
      <button
        className="btn"
        onClick={scrollTop}
        style={{
          height: "52px",
          width: "52px",
          backgroundColor: "white",
          position: "fixed",
          zIndex: 140,
          bottom: "0",
          right: "0",
          margin: "0px 23px 23px 10px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
        }}
      >
        <div
          style={{
            opacity: 1,
            height: "32px",
            width: "27px",
          }}
        >
          <img
            className={styles.rotate}
            style={{ height: "32px", width: "27px" }}
            src={fleche}
          ></img>
        </div>
      </button>
      <div className={StylesApp.fondJL}></div>
      <div className={StylesApp.section_one} id={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          {/* <img className={StylesApp.AppImg} src={ImgApp} alt="app"></img> */}
          <div className={StylesVMV.VMVImg}>
            <div className={StylesApp.circleAppContainer}>
              <h1 className={StylesVMV.TitileVMVImg} id={StylesVMV.VMV}>
                VIS MA VIE
              </h1>
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 className={StylesApp.AppTitle}>Le Vis-Ma-Vie</h1>
          <p className={StylesApp.descriptionApp} id={StylesVMV.text_VMV}>
            Ce mélange d’audit, d’observation vous offrira après 1 journée
            (minimum) différents livrables qui vous permettront de faire le
            point sur vos processus métiers, sur l’adoption de votre crm,…
          </p>

          <p className={StylesApp.descriptionApp} id={StylesVMV.text_VMV}>
            Le “vis ma vie” by JL Conuslting est le service qui vous permet de
            faire un point à un instant T et ainsi comprendre les blocages sur
            certains sujets.
          </p>
        </div>
      </div>

      <div className={StylesVMV.section_two}>
        <h1 className={StylesVMV.title_VMV_section_two}>
          Quand dois-je effectuer un vis ma vie
        </h1>
        <p className={StylesVMV.description_section_two}>
          Nous venons observer vos process dès lors ou vous souhaitez :{" "}
        </p>
        <div className={StylesVMV.Container_list_vmv}>
          {listeVMV.map((VisMaVie) => {
            return <ul key={VisMaVie.id}>{VisMaVie.VMV}</ul>;
          })}
        </div>
      </div>
      <CDVMV />

      <div className={Styles.blocAdopt}>
        <h1 className={Styles.TitreBloc}>Ils l'ont adopté</h1>
        <div className={Styles.logos} id={StylesVMV.blocAdopt}>
          <div className={StylesVMV.logo_manMachine}></div>
          <div className={StylesVMV.logo_NetSquare}></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VMV;
