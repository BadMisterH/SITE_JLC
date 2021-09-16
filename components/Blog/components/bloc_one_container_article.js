import { React, StylesBlog } from "../Import_Blog";

const bloc_one_container_article = () => {
  return (
    <>
      <div className={StylesBlog.section_one}>
        <h1 className={StylesBlog.h1}>reprenez le contrôle sur vos données</h1>

        <h2 className={StylesBlog.h2}>
          Définissez ce que vous souhaitez partager et monnayez l'exploitation
          de vos données
        </h2>

        <h3 className={StylesBlog.h3}>Anne | 27 Mars 2020</h3>

        <p className={StylesBlog.description_blog_section_one}>
          Ceux qui possède la data peuvent anticiper le futur car les décisions
          génératrices de plus de succès sont celles basées sur une étude des
          données. Il y a plus de 125 milliards d’appareils connectés à ce jour.
          Nous générons tous de la donnée pour un bon nombre de grandes
          entreprises mais nous n’en tirons aucun profit et ne contrôlons pas ce
          que l’on partage, ce que l’on met à disposition ou n’avons même pas
          conscience qu’il nous est donné le choix de vendre ou non nos ces
          dernières.
        </p>
        <p className={StylesBlog.description_blog_section_one}>
          C’est la notion de data ownership qui entre en jeu; faire le choix de
          donner ou de vendre vos données, de les modifier, de les supprimer et
          tout simplement d’en faire ce que bon nous semble.
        </p>
        <p className={StylesBlog.description_blog_section_one}>
          Voici quelques outils qui vont vous permettre de changer votre rapport
          à la collecte et à l'exploitation de vos données.
        </p>
      </div>
    </>
  );
};

export default bloc_one_container_article;
