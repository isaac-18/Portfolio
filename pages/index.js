import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there! Welcome to my portfolio.</p>
        <p>
          It's currently a work in progress, so stay tuned and follow me along
          my web dev journey :)
        </p>
      </section>
    </Layout>
  );
}
