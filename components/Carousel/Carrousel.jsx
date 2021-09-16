import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../public/assets/img/project-explaining-team-female-discussing-financial_dark-compressed.jpg";
import image2 from "../../public/assets/img/pole-solution-jl-consulting-laptop-open.jpg";
import image3 from "../../public/assets/img/audit-jl-consulting-reunion.jpg";
import Link from "next/dist/client/link";

export default function Carousel() {
  return (
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="4000" infinite="true">
        <div>
          <img
            src={image1}
            className="sliderimg background_img_slider_one"
            alt=""
          />
          <div className="Titre_caroussel">
            <h1>Donnez du sens à vos données</h1>
            <p
              style={{
                position: "relative",
                top: "70px",
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            ></p>
          </div>
        </div>
        <div>
          <img
            src={image3}
            className="sliderimg background_img_slider_two"
            alt=""
          />
          <div className="Titre_caroussel_two">
            <h1>Pôle consulting</h1>
            <p
              className="desciption_home"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Notre pôle consulting est à votre disposition pour vous offrir une
              visibilité sur vos processus, mais pas que…
              <Link href="/PoleConsulting">
                <button
                  className="button_carrousel"
                  type="button"
                  style={{ border: "none", width: "fit-content" }}
                >
                  En savoir plus
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <img src={image2} className="sliderimg img2" alt="" />
          <div className="Titre_caroussel_three">
            <h1 class="titles_nos_metier">Pôle solutions</h1>
            <p
              className="desciption_home"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              JL Consulting est un éditeur de logiciels et un intégrateur
              Salesforce. Nous créons nos propres solutions pour des besoins
              spécifiques (CRM, économie de la souscription,…). Découvrez nos
              solutions
              <Link href="/PoleSolution">
                <button
                  style={{ width: "fit-content" }}
                  className="button_carrousel"
                  type="button"
                >
                  En savoir plus
                </button>
              </Link>
            </p>
          </div>
        </div>
        {/* <div className="">
          <img src={image4} className="sliderimg" alt="" />
          <div className="Titre_caroussel_three">
            <h1>BLOG</h1>
            <p
              className="desciption_home"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...{" "}
              <button
                style={{
                  margin: "22px 0px 0 0",
                  padding: "10px",
                  background: "#005784",
                  color: "white",
                  borderRadius: "20px",
                  boxShadow: "none",
                  width: "fit-content",
                  cursor: "pointer",
                }}
              >
                En savoir plus
              </button>
            </p>
          </div>
        </div> */}
      </AliceCarousel>
    </div>
  );
}
