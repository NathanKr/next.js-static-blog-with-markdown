import PostCard from "@/components/post-card";
import IPostMetadata from "@/types/i-post";
import { getPostsFromDataDirectory, sortByDate } from "@/utils/server/utils";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface IProps {
  posts: IPostMetadata[];
}

export const getStaticProps: GetStaticProps = async () => {
  let props: IProps = { posts: [] };
  const posts = await getPostsFromDataDirectory()
  props.posts = posts.sort(sortByDate);

  return {
    props, // will be passed to the page component as props
  };
};

const Home: NextPage<IProps> = ({ posts }) => {
  const elemPosts = posts.map((p, i) => <PostCard key={i} post={p} />);

  return (
    <>
      <Head>
        <title>Static Markdown Blog</title>
      </Head>
      <div className="posts">{elemPosts}</div>
    </>
  );
};

export default Home;
