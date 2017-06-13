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
  
  - **Schema meta tags**: [Schema.org](http://schema.org) is a structured data on the page which helps search engines to gather better information.
    There are many type of content which should have it's specific schema. A complete list of these schemas are listed in [schema.org's documentation page](http://schema.org/docs/full.html)
    
#### General

##### Logo
  Put the website logo in the following HTML form:
  
  ```
  <div itemscope itemtype="http://schema.org/Organization">
    <a itemprop="url" href="http://www.mysite.com/">
      <img itemprop="logo" src="http://www.mysite.com/logo.jpg" alt="My logo"/>
    </a>
  </div>
  ```
  
##### Business contact info [Reference Document](http://schema.org/ContactPoint)
  If you have the business's address in the page, then write it in the following form:
  
  **HTML**:
  
  ```
  <div>
    <h1>Farakav Co.</h1>
    <div>No 96, West Zaratostra St., Tehran, Iran</div>
    <div>
      Tel: <span itemprop="telephone">+0098 889933221</span>
    </div>
  </div>
  ```
  
  **JSON-LD**:

  Multiple contact points:
  ```
  <script type="application/ld+json">
  {
    "@context" : "http://schema.org",
    "@type" : "Organization",
    "url" : "http://www.t-mobile.com",
    "contactPoint" : [
      { "@type" : "ContactPoint",
        "telephone" : "+1-877-746-0909",
        "contactType" : "customer service",
        "contactOption" : "TollFree",
        "areaServed" : "US"
      } , {
        "@type" : "ContactPoint",
        "telephone" : "+1-505-998-3793",
        "contactType" : "customer service"
      } , {
        "@type" : "ContactPoint",
        "telephone" : "+1-877-296-1018",
        "contactType" : "customer service",
        "contactOption" : ["HearingImpairedSupported","TollFree"] ,
        "areaServed" : "US"
      } , {
        "@type" : "ContactPoint",
        "telephone" : "+1-877-453-1304",
        "contactType" : "technical support",
        "contactOption" : "TollFree",
        "areaServed" : ["US","CA"],
        "availableLanguage" : ["English","French"]
      } , {
        "@type" : "ContactPoint",
        "telephone" : "+1-877-453-1304",
        "contactType" : "bill payment",
        "contactOption" : "TollFree",
        "areaServed" : ["US","CA"]
      } ]
  }
  </script>
  ```
  Another example of single phone number:
  
  ```
  <script type="application/ld+json">
  { "@context" : "http://schema.org",
    "@type" : "Organization",
    "url" : "http://www.your-company-site.com",
    "contactPoint" : [
      { "@type" : "ContactPoint",
        "telephone" : "+1-401-555-1212",
        "contactType" : "customer service"
      } ] }
  </script>
  ```
  
  For some other examples of contact page schema, [see the documentation page examples](http://schema.org/PostalAddress)
  
##### Social media links

  ```
  <span itemscope itemtype="http://schema.org/Organization">
    <link itemprop="url" href="http://www.mysite.com" /> 
    <a itemprop="sameAs" href="http://www.facebook.com/farakav>Facebook</a>
    <a itemprop="sameAs" href="http://www.twitter.com/farakav">Twitter</a>
    <a itemprop="sameAs" href="https://plus.google.com/+webgodo/posts">Google Plus</a>
  </span>
  ```

#### Video

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