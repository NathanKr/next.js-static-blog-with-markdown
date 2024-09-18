import IPost from "@/types/i-post";
import {
  getPostFromDataDirectory,
  getPostsFromDataDirectory,
} from "@/utils/server/utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { marked } from "marked";
import PostHead from "@/components/post-head";
import loadLanguages from "prismjs/components/index";
import "prismjs/themes/prism-tomorrow.css";
import { highlightCodeInHTMLString } from "@/utils/server/prism-utils";
import styles from "@/styles/post.module.css";

interface IProps {
  post: IPost | undefined;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as any; // -- zero based

  // Load all languages.
  loadLanguages();
  const post = await getPostFromDataDirectory(slug);

  if (post) {
    post.content = highlightCodeInHTMLString(post.content);
  }

  let props: IProps = { post };

  return {
    props, // will be passed to the page component as props
  };
};

interface IPath {
  params: { slug: string };
}

async function getParams(): Promise<IPath[]> {
  const posts = await getPostsFromDataDirectory();

  return posts.map((p) => ({ params: { slug: `${p.slug}` } }));
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getParams(),
    fallback: false,
  };
};

const Post: NextPage<IProps> = ({ post }) => {
  let elemMain = <p>{post?.slug}</p>;
  elemMain = post ? (
    <div className={styles.container}>
      <PostHead post={post} />
      <div
        className={styles.post_body}
        dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
      ></div>
    </div>
  ) : (
    <p>post does not exist</p>
  );

  return (
    <>
      <Head>
        <title>Static Markdown Post</title>
      </Head>
      <main >{elemMain}</main>
    </>
  );
};

export default Post;
