---
title: 'Test nath'
date: 'March 5, 2023'
excerpt: 'Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them'
cover_image: '/images/posts/img2.jpg'
---
I am using here html tags like i do in github README.md and it is working

<h1>this is heading 1 using h1 tag</h1>

<h6>this is heading 6  using h6 tag</h6>

List using ul \ li tags

<ul>
<li>item list 1</li>
<li>item list 2</li>
</ul>


<a href='https://nathankrasney.com'>This is a link using anchor tag</a>

<p style='color:red;font-weight:bold'>bold red text using html style</p>

<p>html img element using external url</p>
<img src='https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_960_720.jpg'/>


<p>html img element using internal url</p>
<img src='/images/posts/img1.jpg'/>

<p>highlighted typescript code</p>
<pre>
<code class='language-typescript'>
  export function sample1() {
    const posts = [
      {
        name: "Why Should You Use Core Web Vitals in Your WebSite",
        category: "performance",
      },
      { name: "Object.groupBy", category: "javascript" },
      {
        name: "How to Automate Page Speed Insight Score",
        category: "performance",
      },
    ];
    /*
    --- group by category : javascript , performance
    --- groups keys are categories and value are the original object
    */
    const groups = Object.groupBy(posts, ({ category }) => category);
    console.log(groups);
    console.log(Object.keys(groups));
    console.log(Object.values(groups));
  }
</code>
</pre>