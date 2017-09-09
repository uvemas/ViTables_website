---
layout: about
title: About
permalink: /about/
assets_dir: ../assets
---

# The website setting up process

## Jekyll requirements on Kubuntu Xenial

### Kubuntu packages

    $ sudo apt-get install ruby ruby-dev ruby-all-dev

### RubyGems

    $ gem install jekyll bundler
    $ bundler exec jekyll new vitables_site (this will create the files Gemfile and Gemfile.lock in the vitables_site folder and will run bundle install)
    $ cd vitables_site
    $ bundle add autoprefixer-rails (required by bootstrap)
    $ bundle add bootstrap --version=4.0.0.alpha6
    $ bundle add html-proofer


## Keep all source pages in the same directory

I don't want to put the directory structure of the website directly in the project folder. Instead I want all sources under a unique directory. So I create
a folder called `_pages` and add the following line to `_conf.yml`

    includes = ["_pages"]

With this configuration is mandatory to add  to every source page a `permalink` according to the folder structure, like `/index.html` or `/Docs/faq.html`.

## Use Liquid objects and tags

I've simplified the default layout (that lives in `_layouts/default.html`) by extracting the head and footer parts. These parts live now in the `_includes` folder.
The default layout includes them using `include` Liquid tags. In addition all those files use Jekyll variables via Liquid objects.

Notice that for layout files the variable tied to a page content is just `content` instead of `page.content` (see the Jekyll docs for detailed information).