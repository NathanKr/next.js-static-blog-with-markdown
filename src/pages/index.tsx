import IPost from "@/types/i-post";
import { getPostsFromPagesDirectory } from "@/utils/server/utils";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface IProps{
  posts : IPost[]
}

export const getStaticProps : GetStaticProps = async () =>{
  let props: IProps = { posts: [] };

  props.posts = await getPostsFromPagesDirectory()

  return {
    props, // will be passed to the page component as props
  };
}

const Home: NextPage<IProps> = ({ posts }) => {

  const elemPosts = posts.map((p,i) => <p key={i}>{p.slug}</p>)

  return (
    <>
      <Head>
        <title>Static Markdown Blog</title>
      </Head>
      <div className="posts">
        {elemPosts}
      </div>
    </>
  );
}

export default Home;