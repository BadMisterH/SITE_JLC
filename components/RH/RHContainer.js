import {
  Head,
  Navigation,
  Footer,
  React,
  JoinTeam,
  Jobs,
  StyleRH,
  StylesHome,
  Scroll,
} from "./ImportRH";

const RHContainer = () => {
  return (
    <div>
      <Head>
        <title>RH</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>

      <div className={StylesHome.navigation}>
        <Navigation />
      </div>
      <Scroll />

      <JoinTeam />

      <Jobs />

      <Footer />
    </div>
  );
};

export default RHContainer;
