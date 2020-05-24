import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.countPost}>
          {allPostsData.length} posts in total
        </div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description, thumbnail }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={utilStyles.listTitle}>
                  <div className={utilStyles.listLayout}>
                    {thumbnail !== "" && thumbnail ? (
                      <img
                        className={utilStyles.listImg}
                        src={thumbnail}
                        alt=""
                      />
                    ) : null}
                    <div>
                      <h3 className={utilStyles.listH3}>{title}</h3>
                      <p>{description}</p>
                      <small className={utilStyles.lightText}>
                        <span style={{ fontStyle: "italic" }}>posted on</span>{" "}
                        <Date dateString={date} />
                      </small>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
