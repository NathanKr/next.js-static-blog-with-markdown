<h2>Motivation</h2>
Posts are static , so we can use local files like markdown and no need to use database and pay for it !!!

<h2>Design</h2>
<ul>
<li>next.js is used for routing and posts ssg using getStaticProps and getStaticPaths</li>
<li>the .md files under /data/posts are post files written in traditional markdown (e.g. django-crash-course.md) but i also use html elements (e.g. in test-nath.md) </li>
<li>The .md file hold post metadata :title, date , excerpt , cover_image and the post content</li>
<li>parsing the .md file and extracting its content and metadata  is done via the function matter from <a href='https://www.npmjs.com/package/gray-matter'>gray-matter</a></li>
<li>The function parse from <a href='https://www.npmjs.com/package/marked'>marked</a> is used to translate the .md file content to html and set in react via dangerouslySetInnerHTML</li>
<li><a href='https://www.npmjs.com/package/prismjs'>prismjs</a> is used for content code highlighting with the help of <a href='https://www.npmjs.com/package/jsdom'>jsdom</a> and style file post.module.css</li>
</ul>

<h2>Points of interest</h2>
<ul>
<li>in most md file in data\posts the <a href='https://www.markdownguide.org/basic-syntax/'>markdown format</a> is used. But i am using HTML in test-nath.md and it is working VERY nicely including styling and img !!! - this is also very convienient because you dont have to learn the markdown synatx</li> 
<li>When you create README.md in github and need code highlighted e.g. for typescript you use ```typescript before the code start and ``` when the code ends. Here prismjs require you to do it differently : before the code start

```
<pre>
<code class='language-typescript'>
```

after the code end
```
</code>
</pre>
```

check in test-nath.md
</li> 
</ul>


<h2>Blog missing features</h2>
These features are important when you have more than 5-10 posts
<ul>
<li>categories : </li>
<li>search</li>
<ul>
I have not handle it here because this repo concentrate on handling the .md files. Blog is just good use case
