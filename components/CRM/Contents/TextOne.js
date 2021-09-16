import react from "react";
import StylesAnnexe from "../../../styles/Home.module.scss";

export default function TextsOne() {
  return (
    <div style={{ margin: 40 }}>
      <h1 className={StylesAnnexe.h1}> Pourquoi un CRM ?</h1>

      <p>
        La fidélisation de vos clients est certainement l’un de vos objectifs
        majeurs dans la quête du succès. Afin de leur offrir une relation
        personnalisée, il vous faut à la fois comprendre les besoins et
        anticiper les attentes, construire un environnement pérenne et
        accompagner le développement de l’activité; ainsi la marche en avant ne
        cesse de s’accélérer. Conscients de ces enjeux stratégiques, nos
        consultants sont de véritables spécialistes de la relation client. Nous
        pensons qu’un bon consultant n’est pas lié à la technologie qu’il
        utilise mais plutôt à sa manière d’appréhender une problématique.{" "}
      </p>
    </div>
  );
}
