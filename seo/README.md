# SEO Blueprint

Table Of Content 
* [Links](#user-content-links)
* [Paginated pages](#user-content-paginated-pages)
* [Images](#user-content-images)
* [Meta tags](#user-content-meta-tags)
  * [Required meta tags](#user-content-required-meta-tags)

## Links

Every link should have `href` attribute filled with a relative/absolute path to target page.

  **Examples**: 
  
    - Absolute: `<a href="http://yahoo.com/sports/canadian-girl-riding-big-helicopter">A canadian girl riding a big helicopter</a>`
    
    - Relative: `<a href="/helicopter/large-helicopter-crashed-in-mountains">A canadian girl riding a big helicopter</a>`
    

It’s better to include these attributes in every link:

- **title**: Most of the times it is same as the link’s anchor text

  **Example**:
  
    - `<a href=”http://somewhere.com/path-to-some-page” title=”Some interesting post title”>Some interesting post title</a>`

- **rel**: This attribute’s value varies by place. It can have multiple values; These values should be written and separated by space character.

  - **bookmark**: This value is rarely used, but it’s very helpful to tell the search engines that your link is important to you.
Use this rel value for the links in components like: Featured news/content.
  - **nofollow**: Use this rel value for any external link which is not trusted by you. It tells the search engine’s crawler not to follow/surf this link.
Supplementary note: Each page has a PA (page authority), it is measured from 0 to 100. When you link from your website to low-PA pages and low-DA websites, it causes your website to become untrusty to the search engine. By making links to these kind of websites nofollow, you avoid the risk.

    *Use this rel value for the links in components like:*
      - Ads
      - User generated content descriptions

    - **noopener**: This rel’s use-case is very similar to nofollow. Suppose that you have a link in Page A to another website which is called Page B. In Page B a script can be ran to manipulate Page A’s content. Script is something like:
window.opener.window.document.body.innerHtml = 'Some content'

    *Use this rel value for the links in components like:*
      - Ads
      - User generated content descriptions
      
      **me**: Use this rel for links to your website’s social media accounts, such as facebook, twitter, … .

## Paginated pages

If you have pages like category pages, tag pages or anything like these which a limited number of items are listed in a page and remaining items are listed in the next other pages, follow these rules:

**Examples**:
  - First page URL:
    
    `http://example.com/category/helicopter`
  
  - Second page URL:
  
    `http://example.com/category/helicopter/page/2`
    
    ...
  
  - 54th page URL:
  
    `http://example.com/category/helicopter/page/54`

    ### Rules

    First page meta tags:
    ```
    <link rel="next" href="http://www.example.com/category/helicopter/page/2">
    ```
    Second page meta tags:
    ```
    <link rel="next" href="http://www.example.com/category/helicopter/page/3">
    <link rel="prev" href="http://www.example.com/category/helicopter">
    <meta name="robots" content="noindex,follow,noodp"/>
    ```
    …
    
    54th page meta tags:
    ```
    <link rel="next" href="http://www.example.com/category/helicopter/page/55">
    <link rel="prev" href="http://www.example.com/category/helicopter/page/53">
    <meta name="robots" content="noindex,follow,noodp"/>
     ```

## Images

Every image should have an `alt` attribute filled with the title of the article or anchor text of the link. It's good to fill the `title` attribute too (just same as alt text).

**Example**:
  - `<a href="path/to/awesome-helicopter" title="An awesome helicopter">An awesome helicopter</a>`

### In case of content with keywords
If the image is a thumbnail of a content/link and the content/link has *a title* and *some keywords*, fill the `alt` attribute with the *list of comma separated keywords* and fill the `title` attribute with the title/anchor-text of the content/link.

**Examples**:
  - ```
    <a href="path/to/awesome-helicopter" title="An awesome helicopter">
        <img src="/path/to/a-helicopter.jpg" title="An awesome helicopter" alt="helicopter, awesome helicopter, new helicopter, quadcopter, army helicopter" />
    </a>```

## Meta tags

### Required meta tags

Following meta tags *should* be implemented in every page:

  - **title**:: Title of the page. This meta tag *should be unique in the entire site*. It's better to write titles up to 60 characters.
  
  - **description**: This meta tag *should be unique in the entire site*. It's a description sentence about the page/content which should be from 135 characters up to 150 characters.
  
    **Example**:
    
    ```<meta name="description" content="A heavy helicopter flying from Newyork to Southampton in England. It spreads american dream of peace in different cities of USA and England." />```
  
  ***Very important notice:*** As mentioned above, `title` and `description` meta tags are very important to search engines and they SHOULD be unique in the entire website. Increase of repeated `title` and `description` meta tag can run the website to penalty, so check the Google Webmaster Tools every 7 days and make sure that you don't have duplicate in these meta tags. 
  
  - **keywords**: List of comma separated keywords.
  
    **Example**:
        
    ```<meta name="keywords" content="helicopter, awesome helicopter, new helicopter, quadcopter, army helicopter" />```
  
  - **canonical**: Permanent and Absolute URL of the page. In some cases you may have different URLs to a single page, so you should use this meta tag to tell the search engine which one is the correct URL.
  
    **Example**:
    
    Suppose a page about red helicopters with the following valid URLs:
    
      - `http://example.com/helicopters/1580158/red-helicopters`
      - `http://example.com/helicopters/1580158`
      - `http://example.com/products?title=red-helicopters&id=1580158`
      - `http://example.com/?id=1580158`
      
    So if the MAIN URL is http://example.com/helicopters/red-helicopters, then you should set the canonical as following:
    
    ```<link rel="canonical" href="http://example.com/helicopters/1580158/red-helicopters" />```
  
### Recommended meta tags

After setting required meta tags, it's better for the website to have the following meta tags: 

#### OpenGraph
    [OpenGraph](http://ogp.me/) meta tags can vary page by page and for each content type.
    
##### General (for mostly all pages)

  ```
  <meta property="og:title" content="The Rock" />
  <meta property="og:site_name" content="Farakav" />
  <meta property="og:url" content="http://www.farakav.com" />
  <meta property="og:image" content="http://farakav.com/assets/img/logo.png" />
  <meta property="og:description" content="A heavy helicopter flying from Newyork to Southampton in England. It spreads american dream of peace in different cities of USA and England." />
  ```
  
  - Value of these meta tags should be same as their pair in the following table:
  
  OG | HTML
  |--- | --- |
  og:title | title
  og:url | canonical
  og:description | description
  
##### Video page

  ```
  <meta property="og:image" content="http://s.tamasha.com/statics/video_thumbnail/120606_2_default_1920x1080.jpg">
  <meta property="og:image:secure_url" content="http://s.tamasha.com/statics/video_thumbnail/120606_2_default_1920x1080.jpg">
  <meta property="og:image:width" content="640">
  <meta property="og:image:height" content="360">
  <meta property="og:image:type" content="image/jpg">
  <meta property="og:type" content="video">
  <meta property="og:video" content="http://tamasha.com/embed/ydgXa">
  <meta property="og:video:secure_url" content="http://tamasha.com/embed/ydgXa">
  <meta property="og:video:type" content="text/html">
  <meta property="og:video:width" content="640">
  <meta property="og:video:height" content="360">
  <meta property="og:video:duration" content="110">
  <meta property="og:video:tag" content="بادکنک">
  <meta property="og:video:tag" content="اسکیت_بورد">
  <meta property="og:video:tag" content="5001">
  <meta property="og:video:tag" content="هیجان_انگیز">
  <meta property="og:video:tag" content="ورزش">
  ```

##### Article/News page

  ```
  <meta property="og:type" content="article" />
  <meta property="og:image" content="http://static2.varzesh3.com/files/picture/thumb/00942208.jpg" />
  <meta property="og:image" content="http://static2.varzesh3.com/files/picture/00942208.jpg" />
  <meta property="og:article:published_time" content="2017-10-24T18:10:29.7770000" />
  <meta property="og:article:modified_time" content="2017-10-24T18:08:00.0000000" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:article:section" content="فوتبال" />
  <meta property="og:article:tag" content="ال کلاسیکو" />
  <meta property="og:article:tag" content="بارسلونا" />
  <meta property="og:article:tag" content="رئال مادرید" />
  ```

#### Schema meta tags

[Schema.org](http://schema.org) is a structured data on the page which helps search engines to gather better information.
    There are many type of content which should have it's specific schema. A complete list of these schemas are listed in [schema.org's documentation page](http://schema.org/docs/full.html)
    
##### General

###### Homepage

```
<script type="application/ld+json">
{ "@context" : "http://schema.org",
  "@type" : "Organization",
  "legalName" : "Farakav Art Institute",
  "url" : "http://farakav.com/",
  "contactPoint" : [{
    "@type" : "ContactPoint",
    "telephone" : "+98-21-88993311",
    "contactType" : "روابط عمومی"
  }]
  "logo" : "http://farakav.com/assets/logo/main-logo.png",
  "sameAs" : [
    "http://www.facebook.com/farakav",
    "http://www.twitter.com/farakav",
    "http://plus.google.com/+farakav",
    "https://www.youtube.com/user/farakav",
    "http://www.linkedin.com/company/farakav",
    "https://www.wikidata.org/wiki/Q20736641"
  ]
}
</script>
```

If the website has *search page*, then you can inform search engine about it and make it available to the user's browser by putting the following markup:

```
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "WebSite", 
  "name" : "Farakav Art Institute",
  "url" : "http://farakav.com/",
  "potentialAction" : {
    "@type" : "SearchAction",
    "target" : "http://farakav.com/?s={search_term}",
    "query-input" : "required name=search_term"
  }                     
}
</script>
```

Notice that the `target` under `potentialAction` is a URL to search result page. So modify it with appropriate `query-input`. 

##### Video

In a page which a single video is shown, the schema is like the following:

  **HTML**:
  ```
  <div itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
    <h2>Video: <span itemprop="name">Title</span></h2>
    <meta itemprop="duration" content="T1M33S" />
    <meta itemprop="thumbnailUrl" content="thumbnail.jpg" />
    <meta itemprop="contentURL" content="http://www.example.com/video123.flv" />
    <meta itemprop="embedURL" content="http://www.example.com/videoplayer.swf?video=123" />
    <meta itemprop="uploadDate" content="2011-07-05T08:00:00+08:00" />
    <meta itemprop="expires" content="2012-01-30T19:00:00+08:00" />
    <meta itemprop="height" content="400" />
    <meta itemprop="width" content="400" />
    <object ...>
      <param ...>
      <embed type="application/x-shockwave-flash" ...>
    </object>
    <span itemprop="description">Video description</span>
  </div>
  ```
  
  
  **JSON-LD**:
  
  ```
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "VideoObject",
    "name": "Title",
    "description": "Video description",
    "thumbnailUrl": "thumbnail.jpg",
    "uploadDate": "2015-02-05T08:00:00+08:00",
    "duration": "PT1M33S",
    "contentUrl": "http://www.example.com/video123.flv",
    "embedUrl": "http://www.example.com/videoplayer.swf?video=123",
    "interactionCount": "2347"
  }
  </script>
  ```
  
##### Article, News or blog post

Non-video objects must be based on one of the following schema.org types: [Article](http://schema.org/Article), [NewsArticle](http://schema.org/NewsArticle), [BlogPosting](http://schema.org/BlogPosting).

You can use the following *JSON-LD*:

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Article",
  "headline": "پخش قسمت جدید فیلم سینمایی فرار از زندان از شبکه سوم سیما",
  "image": "http://farakav.com/assets/uploads/img/prison-break.jpg",
"keywords": ["television","تلویزیون","شبکه سه","فرار از زندان","سریال فرار از زندان","سری جدید سریال فرار از زندان"],
  "datePublished": "2017-09-20T13:39:38Z",
  "articleSection": "entertainment",
  "creator": "حسن فتحی",
  "author": "سید محسن قائم مقامی",
  "articleBody": "مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد. مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد. مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد. مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد. مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد.مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد. مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد. مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد. مایکل اسکوفیلد زنده است . سری جدید سریال فرار از زندان پر مخاطب ترین سریال شبکه فوکس ساخته شده و قرار است بزودی آماده نمایش شود البته این یک مینی سری 9 قسمتی است که اگر مورد استقبال قرار بگیرد شاید به صورت یک سری چند فصلی ادامه بیابد.",
  "mainEntityOfPage": "True"
}
</script>
```

### Breadcrumb

If your pages have breadcrumbs, then add following *microdata* to the HTML markup of them:
 
```
<ul itemscope itemtype="http://schema.org/BreadcrumbList">
  <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem">
    <a itemprop="item" href="https://example.com/">
        <span itemprop="name">Home</span></a>
    <meta itemprop="position" content="1" />
  </li>
  ›
  <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem">
    <a itemprop="item" href="https://example.com/activewear/">
      <span itemprop="name">Activewear</span></a>
    <meta itemprop="position" content="2" />
  </li>
  ›
  <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem">
    <a itemprop="item" href="https://example.com/activewear/tops/">
      <span itemprop="name">Tops</span></a>
    <meta itemprop="position" content="3" />
  </li>
</ul>
```
