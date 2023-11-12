import IPost from "@/types/i-post";
import IPostMetadata from "@/types/i-post";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export async function getPostsFromDataDirectory(): Promise<IPostMetadata[]> {
  const dir = path.join("data", "posts");

  const filesName = await fs.readdir(dir);
  const posts: IPostMetadata[] = [];

  for (const fileName of filesName) {
    const fileFullPath = path.join(dir, fileName);
    const markdownWithMeta = await fs.readFile(fileFullPath, "utf-8");
    const { data, content } = matter(markdownWithMeta);

    const slug = fileName.replace(".md", ""); // all files are .md files
    posts.push({ slug, frontmatter: data, content });
  }

  return posts;
}

export async function getPostFromDataDirectory(
  slug: string
): Promise<IPost | undefined> {
  const posts = await getPostsFromDataDirectory();

  return posts.find((p) => p.slug == slug);
}
