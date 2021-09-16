import React, { Component } from "react";
import Footer from "../HeaderFooter/Footer";
import StylesAnnexe from "../../styles/Home.module.scss";
import TextsOne from "./Contents/TextOne";
import TextsTwo from "./Contents/TextTwo";
import TextsThree from "./Contents/TextThree";
import TextsFour from "./Contents/TextFour";
import TextsFive from "./Contents/TextFive";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../HeaderFooter/Navigation";

export default class CrmContainer extends Component {
  render() {
    let FondHeader = {
      backgroundColor: "#ffffff",
      height: "10vh",
      width: "100%",
      position: "fixed",
      top: 0,
      zIndex: 2,
      listStyleType: "none",
    };

    // let footer = {
    //   width : "",
    //   backgroundColor : "black",
    //   position : "absolute",
    //   padding : "0 50% 0 50%",
    // }

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

        <div style={FondHeader}>
          <Navigation />
        </div>

        <div className={StylesAnnexe.blocs}>
          <div className={StylesAnnexe.imageBackground}>
            <Image
              styles={StylesAnnexe.vanishingBackground}
              src="/direction.svg"
              height={2003.02}
              width={1090.245}
            />
          </div>

          <div className={StylesAnnexe.one}>
            <Image src="/CRM.svg" width={846} height={821} alt="img" />
          </div>

          <div className={StylesAnnexe.two}>
            <TextsOne />
          </div>
          <div className={StylesAnnexe.three}>
            <TextsTwo />
          </div>

          <div className={StylesAnnexe.four}>
            <Image src="/building.svg" width={400} height={400} alt="img" />
          </div>
          <div className={StylesAnnexe.five}>
            <Image src="/search.svg" width={400} height={400} alt="img" />
          </div>

          <div className={StylesAnnexe.six}>
            <TextsThree />
          </div>
          <div className={StylesAnnexe.seven}>
            <TextsFour />
          </div>

          <div className={StylesAnnexe.eight}>
            <Image src="/bulb.svg" width={400} height={400} alt="img" />
          </div>
          <div className={StylesAnnexe.nine}>
            <Image src="/puzzle.svg" width={400} height={400} alt="img" />
          </div>

          <div className={StylesAnnexe.ten}>
            <TextsFive />
          </div>
        </div>

        <div
          className={StylesAnnexe.eleven}
          style={{ backgroundPosition: "center" }}
        ></div>

        <Footer />
      </div>
    );
  }
}
