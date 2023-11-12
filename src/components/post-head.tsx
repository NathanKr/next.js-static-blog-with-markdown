import IPost from "@/types/i-post";
import React, { FC } from "react";

interface IProps{
    post : IPost
}

const PostHead : FC<IProps>= ({post}) => {
  return (
    <div>
      <h3>{post.frontmatter.title}</h3>
      <div className="post-date">Posted on {post.frontmatter.date}</div>
      <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
    </div>
  );
};

export default PostHead;
