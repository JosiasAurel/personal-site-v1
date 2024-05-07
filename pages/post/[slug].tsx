import matter from "gray-matter";
import CodeBlock from "../../components/CodeBlock";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/post.module.css";
import Head from "next/head";
import Header from "../../components/header";
import React from "react";
import { NextPage } from "next";

interface Props {
  content: string;
  data: any;
}

const PostTemplate: NextPage<Props> = ({ content, data }): JSX.Element => {
  let frontmatter = data;
  let shower = frontmatter.og;
  let tags = frontmatter.tags;
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="og:image" content={shower} />
        <meta name="og:title" content={frontmatter.title} />
        <meta property="og:image" content={shower} />
        <meta property="og:title" content={frontmatter.title} />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:site" content="@JosiasWing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={shower} />
      </Head>
      <div className={styles.post}>
        <div>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <p style={{ textAlign: "center" }}>{frontmatter.date}</p>
          <ul className={styles.tags}>
            {tags.map((tag) => {
              return <li>{tag}</li>;
            })}
          </ul>
        </div>

        <div>
          <ReactMarkdown
            className={styles.content}
            source={content}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Josias Aurel. Made with &#x1f497;
      </p>
    </div>
  );
};

PostTemplate.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const content = await import(`../../content/${slug}.md`);
  const data = matter(content.default);
  //console.log(data)
  return { ...data };
};

export default PostTemplate;
