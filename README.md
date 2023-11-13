<h2>Motivation</h2>
Posts are static , so we can use local files like markdown and no need to use database and pay for it !!!

<h2>Design</h2>
<ul>
<li>next.js is used for routing and posts ssg using getStaticProps and getStaticPaths</li>
<li>the .md files under /data/posts are post files written in markdown and html format(test-nath.md)</li>
<li>The .md file hold post metadata :title, date , excerpt , cover_image and the post content</li>
<li>parsing the .md file is done using gray-matter</li>
<li>marked.parse is used to translate the md content to html and set in react via dangerouslySetInnerHTML</li>
</ul>


<h2>Points of interest</h2>
<ul>
<li>in most md file in data\posts the <a href='https://www.markdownguide.org/basic-syntax/'>markdown format</a> is used. But i am using HTML in test-nath.md and it is working VERY nicely including styling and img !!!</li> 
</ul>

<h2>Reference</h2>
video <a href='https://youtu.be/MrjeefD8sac?si=y-b_CCplDTAXYGqw'> Static Blog With Next.js and Markdown  , Traversy , June 2021</a> and matching <a href='https://github.com/bradtraversy/next-markdown-blog'>repo</a>
