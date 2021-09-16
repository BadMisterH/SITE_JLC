import React, { Component } from "react";
import Styles from "../../styles/Home.module.scss";
import logo1 from "../../public/assets/img/logosClients/1_crosstalent.png";
import logo2 from "../../public/assets/img/logosClients/2_carmignac.png";
import logo3 from "../../public/assets/img/logosClients/3_neopost.png";
import logo4 from "../../public/assets/img/logosClients/4_safran.png";
import logo5 from "../../public/assets/img/logosClients/5_canal.png";
import logo6 from "../../public/assets/img/logosClients/6_accor.png";
import logo7 from "../../public/assets/img/logosClients/25_Keolis.png";
import logo8 from "../../public/assets/img/logosClients/8_clarins.png";
import logo9 from "../../public/assets/img/logosClients/9_guerlain.png";
import logo10 from "../../public/assets/img/logosClients/10_la-centrale-logo.png";
import logo11 from "../../public/assets/img/logosClients/11_Cromology.png";
import logo12 from "../../public/assets/img/logosClients/12_atid.png";

export default class LogoSlider extends Component {
  render() {
    return (
      <div className={Styles.sectionLogoEntreprise}>
        <div className={Styles.containerLogoEntreprise}>
          <div className={Styles.logoEntreprise}>
            <img src={logo1} alt="" className={Styles.imgSlider}></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo2} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo3} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo4} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo5} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo6} alt="" x></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo7} alt="" x></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo8} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo9} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo10} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo11} alt=""></img>
          </div>
          <div className={Styles.logoEntreprise}>
            <img className={Styles.imgSlider} src={logo12} alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}
