## Welcome to GitHub Pages

You can use [Forestry.io](https://app.forestry.io/sites/6xc8lcwpmqe0hw/) (more user-friendly, you can find the login credentials pinned in the Slack tech chanel)

**Or**

You can use the [editor on GitHub](https://github.com/KW-M/scee-jekyll/edit/master/README.md) to maintain and preview the content for your website in Markdown files (Not recomended).

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Running Jekyll Locally
1. Make sure you have [Ruby](https://jekyllrb.com/docs/installation/)
2. Install Jekyll & bundler with `gem install jekyll bundler` then `bundle install`
3. Run `bundle exec jekyll serve` to serve the website on your local network.
3. Open the server address URL it gives you... Ta Da!

### Directory Structure

- `_config.yml` Jekyll's configuration file. You can set global variables here which can be used in html templates.
- `assets` Put static assets here like images, css, js and the like.
- `_site` This is the built site, it gets overwritten each time Jekyll runs, so just don't add or do anything to it, because it will be overwritten.

- `_includes` Contains re-usable snippets of HTML code. Can be "included" in layouts or pages with this liquid template syntax {%- include filename.html -%}

- `_layouts` (not super important, main takeaway: pages must specify a layout, but pretty much every page will use the 'page' layout) layouts are re-usable page layouts that can include: includes, liquid template syntax and contain pages.
- `_pages` Pages for the site go in this folder,
    - For a page to be recognized it must have the Front Matter with a layout, title, and permalink (see existing pages for inspiration)
    - If you'd like a page to show up in the site header, add it to the header_pages list in _config.yml

- `_sass_imports` This is a little like includes for scss styles. Any scss files put in this folder aren't compiled on their own, but can be imported into scss files like in assets/css

- `_data` can hold .json and .yml files that can be used in the liquid template language to create pages based on that data (see the about page team members section for an example).

### Front Matter and Liquid Templates

Front matter is jekyll's way of recognizing files and adding extra metadata & variables, they must go at the top of every file you want Jekyll to process.

Check out any of the pages for an example of Front-Matter.

Jekyll uses the liquid templating syntax: [Here is a great quickstart lesson on Liquid](https://shopify.github.io/liquid/basics/introduction/)

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
