import {
  React,
  Head,
  Link,
  BlogSectionOne,
  BlogSectionTwo,
  StylesBlog,
  Navigation,
  Footer,
  StylesHome,
} from "./Import_Blog";
import Button from "../ButtonScroll/ScrollButton";

const BlogContainer = () => {
  return (
    <>
      <Head>
        <title>Article</title>
        <link rel="icon" href="/Logo.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/metropolis-2"
          rel="stylesheet"
        />
      </Head>
      <Button />
      <div className={StylesBlog.JLC_Background}>
        <div className={StylesHome.navigation}>
          <Navigation />
        </div>
        <div className={StylesBlog.img_fond_blog}></div>
        <div className={StylesBlog.container_page_blog}>
          <BlogSectionOne />
          <BlogSectionTwo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogContainer;
