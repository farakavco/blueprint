# SEO Blueprint

Table Of Content 
* [Links](#user-content-links)
* [Paginated pages](#user-content-paginated-pages)

## Links

It’s better to include these attributes in every link:

- **title**: Most of the times it is same as the link’s anchor text

  **Example**: <a href=”http://somewhere.com/path-to-some-page” title=”Some interesting post title”>Some interesting post title</a>

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
    
    http://example.com/category/helicopter
  
  - Second page URL:
  
    http://example.com/category/helicopter/page/2
    
    ...
    
    ...
  
  - 54th page URL:
  
    http://example.com/category/helicopter/page/54

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
