import React, { Component } from "react";
//Components
import PoleComponent from "./Components/PoleComponent";
import ArticlesComponent from "./Components/ArticlesComponent";

import {
  styles,
  Navigation,
  Head,
  LogoSlider,
  Footer,
  fleche,
  Carrousel,
} from "../../components/Home/Import";

export default class HomeContainer extends Component {
  render() {
    let containerStyle = {
      overflowY: "none",
      scrollBehavior: "smooth",
    };

    function scrollTop() {
      window.scrollTo(0, 0);
    }

    return (
      <div className={styles.div}>
        <div className={styles.container} style={containerStyle}>
          <Head>
            <title>JLC</title>
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

          <Carrousel />

          <h1 className={styles.titreSection}>NOS PÔLES</h1>
        </div>

        <div className={styles.containerSectionTwo}>
          <PoleComponent />

          <div className={styles.sectionThree}>
            <h1 className={styles.titreSection}>ILS NOUS FONT CONFIANCE</h1>
            <LogoSlider />

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <button className={styles.button_C}>
                Curieux de notre savoir faire ?
              </button>
            </div>
          </div>
          <ArticlesComponent />

          <Footer />
        </div>
      </div>
    );
  }
}
