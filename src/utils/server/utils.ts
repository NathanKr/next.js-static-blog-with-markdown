import IPost from "@/types/i-post";
import IPostMetadata from "@/types/i-post";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import dayjs from 'dayjs'

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

/**
 *
 * @param post1
 * @param post2
 * @param dateFormat e.g 'March 5, 2021'
 * @returns
 */
export const sortByDate = (
  post1: IPost,
  post2: IPost,
  dateFormat: string = "MMMM D, YYYY"
): number => {
  const date1 = dayjs(post1.frontmatter.date, { format: dateFormat });
  const date2 = dayjs(post2.frontmatter.date, { format: dateFormat });

  return date2.diff(date1);
};
