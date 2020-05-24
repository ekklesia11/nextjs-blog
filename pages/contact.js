import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function contact() {
  return (
    <Layout>
      <Head>
        <title>contact</title>
      </Head>
      <section>contact page</section>
    </Layout>
  );
}
