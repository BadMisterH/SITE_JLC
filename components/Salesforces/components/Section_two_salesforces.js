import {
  React,
  Head,
  Navigation,
  Footer,
  StyleApp,
  StylesApp,
  StylesSalesforces,
  StylesSubSide,
  ImgSalesforces,
  CRMIcone,
  IconePartenariat,
  IconeSaleforces,
} from "../ImportSalesforces";

const Section_two_salesforces = () => {
  const SalesforcesSection = [
    {
      id: 1,
      ContenuSalesforces: (
        <div className={StylesSalesforces.CRM}>
          <div className={StylesSalesforces.section_flex_salesforces}>
            <h1
              style={{ textAlign: "end", color: "#CFE3F9" }}
              className={StylesSalesforces.SalesforcesTitle}
            >
              Mais qu’est-ce qu’un CRM ?
            </h1>
            <p className={StylesSalesforces.textSalesforcesCRM}>
              Selon Salesforce : Un CRM est une stratégie de gestion des
              relations et interactions d'une entreprise avec ses clients ou
              clients potentiels. Un système CRM aide les entreprises à
              interagir en permanence avec les clients, à rationaliser leurs
              processus et à améliorer leur rentabilité.
              <p style={{ margin: "15px 0px" }}>
                <strong>Le but </strong>: Améliorer les relations commerciales.
              </p>
              <p>
                Aujourd’hui Salesforce n’est plus à présenter tant il domine le
                marché du CRM.
              </p>
            </p>
          </div>{" "}
          <img
            src={CRMIcone}
            className={StylesSalesforces.icon_Salesforces}
            alt="SalesforcesIcone"
          ></img>
        </div>
      ),
    },
    {
      id: 1,
      ContenuSalesforces: (
        <div className={StylesSalesforces.JLC}>
          <div className={StylesSalesforces.section_flex_salesforces}>
            <h1
              className={StylesSalesforces.SalesforcesTitle}
              style={{ color: "#087185" }}
            >
              Partenariat avec JLC ?
            </h1>
            <p className={StylesSalesforces.textSalesforces}>
              Chez JL Consulting, nous venons du monde de la relation client et
              comprenons très bien les problématiques de nos prospects /
              clients.
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              Très tôt, nous avons décidé d'être partenaire Salesforce et
              d'implémenter ses briques (Sales cloud, Service cloud)
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              {" "}
              Avec nos consultants et chefs de projets certifiés, nous vous
              garantissons la réalisation de votre projet “sans accroc” comme
              dirait le philosophe Hannibal SMith.
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              Chez JLC, nous faisons la même chose que les autres dans le cas de
              l’installation de Salesforce mais en mieux.Vous allez dire que
              nous sommes un peu trop confiant
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              {" "}
              Mais après 17 années, nous avons rencontré beaucoup de confrères
              mais surtout sauver certains projets car les règles de base
              n’avaient pas été respectées.
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              L'étude des besoins du client et la compréhension de ceux-ci
            </p>
          </div>
          <img
            src={IconePartenariat}
            className={StylesSalesforces.icon_Salesforces}
            alt="partenariat"
          ></img>
        </div>
      ),
    },
    {
      id: 1,
      ContenuSalesforces: (
        <div className={StylesSalesforces.JLC}>
          <div className={StylesSalesforces.section_flex_salesforces_text}>
            <h1
              className={StylesSalesforces.SalesforcesTitle}
              style={{ color: "#087185" }}
            >
              Pourquoi choisir JL comme intégrateur Salesforce?
            </h1>
            <p className={StylesSalesforces.textSalesforces}>
              Nous sommes là pour de vrai.
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              Nos consultants vous accompagnent, vous écoutent, vous
              conseillent.
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              La dimension humaine est essentielle dans un projet informatique
              pour que celui-ci se déroule correctement, et c’est une de nos
              plus grande force.
            </p>
            <p className={StylesSalesforces.textSalesforces}>
              Une de nos devise est : Nous travaillons sur votre projet comme si
              c’était le nôtre
            </p>
            <ul style={{ listStyleType: "none" }}>
              <p className={StylesSalesforces.textSalesforces}>
                JL Consulting intervient dans l’implémentation de différentes
                briques Salesforce :
              </p>{" "}
              <li className={StylesSalesforces.textSalesforces_liste}>
                - Sales cloud
              </li>{" "}
              <li className={StylesSalesforces.textSalesforces_liste}>
                - Service cloud
              </li>{" "}
              <li className={StylesSalesforces.textSalesforces_liste}>
                - Pardot
              </li>{" "}
              <li className={StylesSalesforces.textSalesforces_liste}>
                {" "}
                - Marketing cloud{" "}
              </li>{" "}
              <li className={StylesSalesforces.textSalesforces_liste}>
                - Commerce cloud
              </li>
            </ul>
          </div>
          <img
            src={IconeSaleforces}
            className={StylesSalesforces.icon_Salesforces}
            alt="Salesforces"
          ></img>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={StylesSalesforces.container_section_two_salesforces}>
        {SalesforcesSection.map((container_section_saleforces) => {
          return (
            <div
              style={{ display: "flex" }}
              key={container_section_saleforces.id}
            >
              {container_section_saleforces.ContenuSalesforces}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Section_two_salesforces;
