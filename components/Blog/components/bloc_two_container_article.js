import { React, StylesBlog, Duck_Duck_Go, Brave } from "../Import_Blog";

const bloc_two_container_article = () => {
  return (
    <>
      <div className={StylesBlog.flex_container_two}>
        <div className={StylesBlog.section_two_bloc_one}>
          <p className={StylesBlog.paragraphes_section_two}>
            Brave est un navigateur qui bloque les pubs et traqueurs captant vos
            données. En acceptant des pubs vous pouvez gagner des jetons pour
            acheter du contenu média payant.
          </p>
          <img
            src={Brave}
            className={StylesBlog.imgBlog}
            alt="navigateur_brave"
          ></img>
        </div>
        <div className={StylesBlog.section_two_bloc_two}>
          <p className={StylesBlog.paragraphes_section_two}>
            Duck Duck Go est un moteur de recherche qui ne stocke pas vos
            données et n’étudie pas votre historique pour vous proposer des
            résultats de recherche en conséquence. Tout le monde se voit
            proposer les mêmes résultats pour la même recherche.
          </p>
          <img src={Duck_Duck_Go} className={StylesBlog.imgBlog} alt="ee"></img>
        </div>
      </div>
    </>
  );
};

export default bloc_two_container_article;
