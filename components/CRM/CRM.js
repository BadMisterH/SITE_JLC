import {
  React,
  Head,
  Navigation,
  Footer,
  StylesCRM,
  StylesApp,
  StylesHome,
  SectionCRM,
  Styles,
} from "./importCRM";
import Link from "next/link";
import Button from "../ButtonScroll/ScrollButton";

const CRM = () => {
  return (
    <div>
      <Head>
        <title>CRM</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>

      <Button />
      <div className={StylesApp.fondJL}></div>
      <div className={StylesApp.section_one}>
        <div className={StylesApp.cicrleAppBox}>
          {/* <img className={StylesApp.AppImg} src={ImgApp} alt="app"></img> */}
          <div className={StylesApp.CRMImg}>
            <div className={StylesApp.circleAppContainer}>
              <h1 className={StylesApp.TitileAppImg}>CRMSIDE</h1>
            </div>
          </div>
        </div>
        <div className={StylesApp.blocDescriptionApp}>
          <h1 className={StylesApp.AppTitle} id={StylesCRM.TitleCRMSide}>
            Pourquoi CRMSide ?
          </h1>
          <p className={StylesApp.descriptionApp} id={StylesCRM.descriptionCrm}>
            La fidélisation de vos clients est certainement l’un de vos
            objectifs majeurs dans la quête du succès. Afin de leur offrir une
            relation personnalisée, il vous faut à la fois comprendre les
            besoins et anticiper les attentes, construire un environnement
            pérenne et accompagner le développement de l’activité; ainsi la
            marche en avant ne cesse de s’accélérer.
          </p>

          <p className={StylesApp.descriptionApp} id={StylesCRM.descriptionCrm}>
            Conscients de ces enjeux stratégiques, nos consultants sont de
            véritables spécialistes de la relation client. Nous pensons qu’un
            bon consultant n’est pas lié à la technologie qu’il utilise mais
            plutôt à sa manière d’appréhender une problématique..
          </p>
        </div>
      </div>
      <SectionCRM />
      <div className={StylesCRM.BlocBackgroundCRM}>
        <div className={StylesCRM.BlocCRM}>
          <div className={StylesCRM.BlocCRM_section}>
            <Link href="/Solution_CRM">
              <div className={StylesCRM.CircleCRMSide}></div>
            </Link>
            <img className={StylesCRM.PourEnSavoirPlus}></img>
          </div>
        </div>
      </div>
      <div className={Styles.blocAdopt} style={{ marginTop: "0px" }}>
        <h1 className={Styles.TitreBloc}>FAITES COMME EUX</h1>
        <div className={Styles.logos}>
          <div className={Styles.logo_clientAtid}></div>
          <div className={Styles.logo_DomExpert}></div>
          <div className={Styles.logo_clientBordeau}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CRM;
