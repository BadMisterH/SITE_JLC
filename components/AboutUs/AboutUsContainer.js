import {
  React,
  styles,
  Head,
  Navigation,
  Footer,
  VE,
  Teams,
  fleche,
} from "./importAboutUs";

const AboutUsContainer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <Head>
        <title>Apropos</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
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
      <div className={styles.BackgroundImg}>
        <div className={styles.backgroundColor_img}></div>
      </div>
      <VE />
      <Teams />
      <Footer />
    </div>
  );
};

export default AboutUsContainer;
