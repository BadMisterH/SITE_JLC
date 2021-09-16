import {
  StylesSS,
  Head,
  Navigation,
  Footer,
  audit_blue,
  CRM,
  VMV,
  Clarins,
  SectionEntreprise,
} from "./importSS";
import StylesHome from "../../styles/Home.module.scss";
import Button from "../ButtonScroll/ScrollButton";

const SuccessStories = () => {
  const button = [
    {
      id: 1,
      button_succes: (
        <img
          className={StylesSS.btn_responsive}
          src={audit_blue}
          alt="button"
        ></img>
      ),
    },
    {
      id: 2,
      button_succes: (
        <img className={StylesSS.btn_responsive} src={CRM} alt="button"></img>
      ),
    },
    {
      id: 3,
      button_succes: (
        <img className={StylesSS.btn_responsive} src={VMV} alt="button"></img>
      ),
    },
    // {
    //   id: 4,
    //   button_succes: (
    //     <img
    //       className={StylesSS.btn_responsive}
    //       src={audit_blue}
    //       alt="button"
    //     ></img>
    //   ),
    // },
    // {
    //   id: 5,
    //   button_succes: (
    //     <img
    //       className={StylesSS.btn_responsive}
    //       src={audit_blue}
    //       alt="button"
    //     ></img>
    //   ),
    // },
  ];

  return (
    <div style={{ backgroundColor: "#FFFBFB " }}>
      <Head>
        <title>Success Stories</title>
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
      <Button />
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>

      <div className={StylesSS.fondSS}>
        <div className={StylesSS.backgroundFondSS}> </div>

        <h1 className={StylesSS.title_SS}>SUCCESS STORIES</h1>
        <div className={StylesSS.container_btn_SS}>
          {button.map((btn) => {
            return (
              <div className={StylesSS.button_succes_stories} key={btn.id}>
                {btn.button_succes}
              </div>
            );
          })}
        </div>
      </div>
      <div className={StylesSS.Clic_button_SS}></div>

      <div className={StylesSS.Section_clarins}>
        <div className={StylesSS.BlocClarins}>
          <img
            className={StylesSS.ImgClarins}
            src={Clarins}
            alt="Clarins"
          ></img>
          <p className={StylesSS.description_clarins}>
            Atid souhaite se doter d'une solution pour optimiser et maîtriser la
            gestion opérationnelle de ses prestations, le pilotage de ses
            activités, le reporting nomade et la communication vis-à-vis de ses
            clients.
          </p>
        </div>
        <div className={StylesSS.BlocClarins}>
          <img
            className={StylesSS.ImgClarins}
            src={Clarins}
            alt="Clarins"
          ></img>
          <p className={StylesSS.description_clarins}>
            Atid souhaite se doter d'une solution pour optimiser et maîtriser la
            gestion opérationnelle de ses prestations, le pilotage de ses
            activités, le reporting nomade et la communication vis-à-vis de ses
            clients.
          </p>
        </div>
        <div className={StylesSS.BlocClarins}>
          <img
            className={StylesSS.ImgClarins}
            src={Clarins}
            alt="Clarins"
          ></img>
          <p className={StylesSS.description_clarins}>
            Atid souhaite se doter d'une solution pour optimiser et maîtriser la
            gestion opérationnelle de ses prestations, le pilotage de ses
            activités, le reporting nomade et la communication vis-à-vis de ses
            clients.
          </p>
        </div>
      </div>
      <SectionEntreprise />

      <Footer />
    </div>
  );
};

export default SuccessStories;
