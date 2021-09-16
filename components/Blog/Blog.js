import {
  React,
  Head,
  Link,
  StylesBlog,
  Navigation,
  Footer,
  StylesHome,
} from "./Import_Blog";

import Button from "../ButtonScroll/ScrollButton";

const Blog = () => {
  return (
    <div className={StylesBlog.JLC_Background}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>
      <Button />
      <div className={StylesHome.navigation}>
        <Navigation />
      </div>
      <h1 className={StylesBlog.TitleAllonsPlusLoin}>Allons plus loin</h1>

      <div className={StylesBlog.gridBlog}>
        <div className={StylesBlog.boxBlog}>
          <div className={StylesBlog.boxBlogContainer}>
            <div className={StylesBlog.ImgBlog_principale}></div>{" "}
            <h1 className={StylesBlog.Title_blog}>Titre article</h1>{" "}
            <p className={StylesBlog.description_blog}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>{" "}
            <Link href="/Blog_article">
              <button className={StylesBlog.btnBlog}>En savoir plus...</button>
            </Link>
          </div>
        </div>
        <div className={StylesBlog.boxBlog}>
          <div
            className={StylesBlog.boxBlogContainer}
            id={StylesBlog.blogContainer2}
          >
            <div className={StylesBlog.ImgBlog_principale2}></div>{" "}
            <h1 className={StylesBlog.Title_blog}>Titre article</h1>{" "}
            <p className={StylesBlog.description_blog}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.s
            </p>{" "}
            <Link href="/Blog_article">
              <button className={StylesBlog.btnBlog}>En savoir plus...</button>
            </Link>
          </div>
        </div>

        <div className={StylesBlog.boxBlog}>
          <div className={StylesBlog.boxBlogContainer}>
            <div className={StylesBlog.ImgBlog_principale3}></div>{" "}
            <h1 className={StylesBlog.Title_blog}>Titre article</h1>{" "}
            <p className={StylesBlog.description_blog}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>{" "}
            <Link href="/Blog_article">
              <button className={StylesBlog.btnBlog}>En savoir plus...</button>
            </Link>
          </div>
        </div>

        <div className={StylesBlog.boxBlog}>
          <div className={StylesBlog.boxBlogContainer}>
            <div className={StylesBlog.ImgBlog_principale4}></div>{" "}
            <h1 className={StylesBlog.Title_blog}>Titre article</h1>{" "}
            <p className={StylesBlog.description_blog}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>{" "}
            <Link href="/Blog_article">
              <button className={StylesBlog.btnBlog}>En savoir plus...</button>
            </Link>
          </div>
        </div>

        <div className={StylesBlog.boxBlog}>
          <div className={StylesBlog.boxBlogContainer}>
            <div className={StylesBlog.ImgBlog_principale5}></div>{" "}
            <h1 className={StylesBlog.Title_blog}>Titre article</h1>{" "}
            <p className={StylesBlog.description_blog}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>{" "}
            <Link href="/Blog_article">
              <button className={StylesBlog.btnBlog}>En savoir plus...</button>
            </Link>
          </div>
        </div>
        <div className={StylesBlog.boxBlog}>
          <div className={StylesBlog.boxBlogContainer}>
            <div className={StylesBlog.ImgBlog_principale6}></div>{" "}
            <h1 className={StylesBlog.Title_blog}>Titre article</h1>{" "}
            <p className={StylesBlog.description_blog}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>{" "}
            <Link href="/Blog_article">
              <button className={StylesBlog.btnBlog}>En savoir plus...</button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ background: "white" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
