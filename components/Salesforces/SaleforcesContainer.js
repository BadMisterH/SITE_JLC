import {
  React,
  Head,
  Navigation,
  Footer,
  StylesApp,
  Styles,
  StylesSalesforces,
  StylesSubSide,
  ImgSalesforces,
  Section_two_salesforces,
  Section_three_salesforces,
} from "./ImportSalesforces";
import Button from "../ButtonScroll/ScrollButton";

const SaleforcesContainer = () => {
  return (
    <>
      <Head>
        <title>Salesforce</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>{" "}
      <div className={StylesApp.header}>
        <Navigation />
      </div>
      <Button />
      <div className={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          {/* <img className={StylesApp.AppImg} src={ImgApp} alt="app"></img> */}
          <div className={StylesSubSide.SalesforcesImg}>
            <div className={StylesApp.circleAppContainer}>
              {/* <h1
                id={StylesSubSide.CircleSubSide}
                className={StylesApp.TitileAppImg}
              >
                Salesforces
              </h1> */}
              <img
                className={StylesSalesforces.ImgSalesforces}
                src={ImgSalesforces}
                alt="55"
              ></img>
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 id={StylesSubSide.SubSideTitle} className={StylesApp.AppTitle}>
            Salesforce
          </h1>
          <div id={StylesSubSide.descriptionSUBSIDE}>
            <p className={StylesApp.descriptionApp}>
              Au cours de nos expériences en CRM, Salesforce s’est révélé
              l’outil le plus performant tant en rapidité d’implémentation que
              dans son innovation. Salesforce est devenu notre référence.
            </p>
          </div>
        </div>
      </div>
      <Section_two_salesforces />
      <Section_three_salesforces />
      <div className={Styles.blocAdopt}>
        <h1 className={Styles.TitreBloc}>FAITES COMME EUX</h1>
        <div className={Styles.logos}>
          <div className={Styles.logos_clients}></div>
          <div className={Styles.logoKeolis}></div>
          <div className={Styles.logoAycom}></div>
          <div className={Styles.logo_manMachine}></div>
          <div className={Styles.logoBB}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaleforcesContainer;
