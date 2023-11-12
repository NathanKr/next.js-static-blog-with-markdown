import IPostMetadata from "@/types/i-post";
import Link from "next/link";
import React, { FC } from "react";
import PostHead from "./post-head";

interface IProps {
  post: IPostMetadata;
}

const PostCard: FC<IProps> = ({ post }) => {
  return (
    <div className="card">
      <PostHead post={post}/>
      <p>{post.frontmatter.excerpt}</p>
      <Link className="btn" href={`/posts/${post.slug}`}>
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
