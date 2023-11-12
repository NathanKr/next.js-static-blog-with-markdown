import IPost from "@/types/i-post";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export async function getPostsFromPagesDirectory(): Promise<IPost[]>{
  const dir = path.join(process.cwd(), "src", "pages", "posts");

  const filesName = await fs.readdir(dir);
  const posts: IPost[]= [];

  for (const fileName of filesName) {
    const fileFullPath = path.join(dir, fileName);
    const markdownWithMeta = await fs.readFile(fileFullPath, "utf-8");
    const { data } = matter(markdownWithMeta);

    const slug = fileName.replace(".md", ""); // all files are .md files
    posts.push({ slug, frontmatter: data });
  }

  return posts;
}
