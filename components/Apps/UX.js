import {
  React,
  Head,
  Navigation,
  Footer,
  Styles,
  ImgApp,
  logoAppAngular,
  logoAppPHP,
  logoAppJS,
  logoAppCSS,
  logoAppAndroid,
  logoAppApple,
  StylesApp,
  styles,
  fleche,
  one,
  two,
  three,
  four,
  five,
  six,
} from "./importUX";

const UX = () => {
  const App = [
    {
      id: 1,
      img: (
        <img className={StylesApp.logoApp} src={logoAppAngular} alt=""></img>
      ),
    },
    {
      id: 2,
      img: <img className={StylesApp.logoApp} src={logoAppPHP} alt=""></img>,
    },
    {
      id: 3,
      img: <img className={StylesApp.logoApp} src={logoAppJS} alt=""></img>,
    },
    {
      id: 4,
      img: <img className={StylesApp.logoApp} src={logoAppCSS} alt=""></img>,
    },
    {
      id: 5,
      img: (
        <img className={StylesApp.logoApp} src={logoAppAndroid} alt=""></img>
      ),
    },
    {
      id: 6,
      img: <img className={StylesApp.logoApp} src={logoAppApple} alt=""></img>,
    },
  ];

  const DI = [
    {
      id: 1,
      texts: (
        <div className={StylesApp.blocDI}>
          <p>Conseil et choix d'un outil ou d'une solution</p>
        </div>
      ),
    },
    {
      id: 2,
      texts: (
        <div className={StylesApp.blocDI}>
          <p>Développement, paramétrage et déploiement de l'application</p>
        </div>
      ),
    },
    {
      id: 3,
      texts: (
        <div className={StylesApp.blocDI}>
          <p>Expertise technico-fonctionnelle</p>
        </div>
      ),
    },
    {
      id: 4,
      texts: (
        <div className={StylesApp.blocDI}>
          <p>Expertise technico-fonctionnelle</p>
        </div>
      ),
    },
    {
      id: 5,
      texts: (
        <div className={StylesApp.blocDI}>
          <p>Expertise technico-fonctionnelle</p>
        </div>
      ),
    },
    {
      id: 6,
      texts: (
        <div className={StylesApp.blocDI}>
          <p>Expertise technico-fonctionnelle</p>
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
        <title>UX</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
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
      <div className={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          {/* <img className={StylesApp.AppImg} src={ImgApp} alt="app"></img> */}
          <div className={StylesApp.AppImg}>
            <div className={StylesApp.circleAppContainer}>
              <h1 className={StylesApp.TitileAppImg}>APPS</h1>
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 className={StylesApp.AppTitle}>Apps</h1>
          <p className={StylesApp.descriptionApp}>
            Le développement a beaucoup évolué ces dernières années. Alors que
            la création de logiciels dits « clients lourds » était la norme il y
            a peu, dorénavant les solutions web, cloud et mobile ont maintenant
            pris le dessus. C’est pourquoi nous nous investissons sans cesse
            dans les dernières technologies qui permettent à nos clients de
            rester au goût du jour.
          </p>

          <p className={StylesApp.descriptionApp}>
            Pour chaque nouveau projet, nos consultants recherchent donc
            systématiquement la solution la plus adaptée du moment plutôt que de
            rester par confort sur un outil déjà utilisé auparavant. Ceci
            garantit à nos clients d’être à la pointe de la technologie.
          </p>
        </div>
      </div>

      <h1 className={StylesApp.TitleDI}>Domaines d'intervention</h1>

      <div className={StylesApp.ContainerD_intervention}>
        <div className={StylesApp.BoxDisposition}>
          <div className={StylesApp.BoxNumber}>
            <img src={one} className={StylesApp.NumLogo}></img>
            <p className={StylesApp.descriptionNum}>
              Conseil et choix d'un outil ou d'une solution
            </p>
          </div>
        </div>

        <div className={StylesApp.BoxDispositionRight}>
          <div className={StylesApp.BoxNumber} id={StylesApp.Pair}>
            <img src={two} className={StylesApp.NumLogo}></img>
            <p className={StylesApp.descriptionNum}>
              Expertise technico-fonctionnelle
            </p>
          </div>
        </div>
        <div className={StylesApp.BoxDisposition}>
          <div className={StylesApp.BoxNumber}>
            <img src={three} className={StylesApp.NumLogo}></img>
            <p className={StylesApp.descriptionNum}>
              Réalisation des tests et de la recette
            </p>
          </div>
        </div>
        <div className={StylesApp.BoxDispositionRight}>
          <div className={StylesApp.BoxNumber} id={StylesApp.Pair}>
            <img src={four} className={StylesApp.NumLogo}></img>
            <p className={StylesApp.descriptionNum}>
              Développement, paramétrage et déploiement de l'application
            </p>
          </div>
        </div>
        <div className={StylesApp.BoxDisposition}>
          <div className={StylesApp.BoxNumber}>
            <img src={five} className={StylesApp.NumLogo}></img>
            <p className={StylesApp.descriptionNum}>
              Mise en place et pilotage du processus projet
            </p>
          </div>
        </div>
        <div className={StylesApp.BoxDispositionRight}>
          <div className={StylesApp.BoxNumber} id={StylesApp.Pair}>
            <img src={six} className={StylesApp.NumLogo}></img>
            <p className={StylesApp.descriptionNum}>
              Accompagnement du changement
            </p>
          </div>
        </div>
      </div>

      <div className={StylesApp.ApplicationLogoContainer}>
        {App.map((Application) => {
          return <div key={Application.id}>{Application.img}</div>;
        })}
      </div>

      <div className={Styles.blocAdopt}>
        <h1 className={Styles.TitreBloc}>FAITES COMMME EUX</h1>
        <div className={Styles.logos}>
          <div className={Styles.logos_clients}></div>
          <div className={Styles.logos_clients2}></div>
          <div className={Styles.logos_clients3}></div>
          <div className={Styles.logos_clients4}></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UX;
