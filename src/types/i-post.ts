type PostMetadataFrontmatter = {
  //todo nath bring back
  // title: string;
  // date: string;
  // excerpt: string;
  // cover_image: string;
  [key: string]: any;
};

export default interface IPost {
  slug: string;
  // frontmatter: { [key: string]: any };
  frontmatter: PostMetadataFrontmatter;
  content : string;
}
