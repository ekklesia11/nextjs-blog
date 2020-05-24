import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "HappyQuokka";
export const siteTitle = "Happyquokka Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Happyquokka personal blog, mainly frontend and backend web development"
        />
        <meta
          property="og:image"
          content={`https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.headerTitle}>{name}</a>
        </Link>
        <div className={styles.menus}>
          <Link href="/">
            <a className={styles.menu}>Blog</a>
          </Link>
          <a
            className={styles.menu}
            href="https://dev.chanhyun.org/"
            target="_blank"
          >
            About
          </a>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
