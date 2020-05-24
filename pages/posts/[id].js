import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";

// import ReactMarkdown from "react-markdown/with-html";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// const CodeBlock = ({ language, value }) => {
//   return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
// };

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta name="og:title" content={postData.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <article className={utilStyles.article}>
        <div className={utilStyles.headingStyle}>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {/* <ReactMarkdown
          escapeHtml={false}
          source={postData.contentHtml}
          renderers={{ code: CodeBlock }}
        /> */}
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
