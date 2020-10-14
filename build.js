'use strict';

// The core
const Metalsmith = require('metalsmith');

// The plugins to be applied
const writemetadata = require('metalsmith-writemetadata');
// const inplace = require('metalsmith-in-place');
const mdit = require('metalsmith-markdownit');
const layouts = require('metalsmith-layouts');
const permalinks = require('@metalsmith/permalinks');
const assets = require('metalsmith-assets-improved');
const sass = require('metalsmith-sass');
const collections = require('metalsmith-collections');
const rssfeed = require('metalsmith-feed');
const sitemap = require('metalsmith-sitemap');
const serve = require('metalsmith-serve');

// Global project variables (ala Jekyll variables in _config.yaml) accessible from each plugin
const site = {
  site_title: 'ViTables',
  site_url: 'https://vitables.org',
  site_author: 'Vicent Mas',
  site_email: 'vmas@vitables.org',
  site_generator: 'Metalsmith',
  assets_dir: '/assets',
  rss_file: '/feed.xml',
  generatorurl: 'https://metalsmith.io/'
};

// Permalinks configuration
const permalinkConfig = {
  pattern: ':title',
  slug: {
    lower: false
  }
};

// Configuration of the layout engine
const layoutConfig = {
  directory: '_layouts/',
  default: 'default.njk',
  pattern: ['**/*.html', '*.html'],
  engineOptions: {
    filters: {
      year: function () {
        return (new Date()).getFullYear();
      }
    }
  }
};

/**
 * SASS configuration
 * outputDir is relative to the destination directory (i.e. _site/). If not exists it will be created
 * file is relative to the source directory (i.e. _pages/)
 * includePaths are paths relative to the project root directory
 */
const sassConfig = {
  outputDir: site.assets_dir.substring(1),
  file: './styles/main.scss',
  outputStyle: 'expanded',
  includePaths: ['./_sass', './_sass/bootstrap']
};

// Collections configuration
const collectionConfig = {
  pages: {
    pattern: ['*.html', '**/*.html'],
    refer: false
  }
};

// RSS feed configuration
const feedConfig = {
  title: site.site_title,
  site_url: site.site_url,
  collection: 'pages',
  destination: site.rss_file.substring(1)
};

// Sitemap configuration
const sitemapConfig = {
  hostname: site.site_url
};

// writemetadata configuration
const writemetaConfig = {
  pattern: ['**/*'],
  bufferencoding: 'utf8'
};

// Server configuration
const serverConfig = {
  port: 4000,
  verbose: true,
  http_error_files: { 404: '/404.html' }
};

// Start the core and chain plugins to build the website
Metalsmith(__dirname)
  .metadata(site)
  .clean(true)
  .source('./_pages')
  .destination('./_site')
  .use(mdit({ html: true }))
  .use(permalinks(permalinkConfig))
//  .use(inplace({engine: 'nunjucks',
//                pattern: '**/*.njk'}))
  .use(layouts(layoutConfig))
  .use(sass(sassConfig))
  .use(assets({ dest: site.assets_dir.substring(1) }))
  .use(collections(collectionConfig))
  .use(rssfeed(feedConfig))
  .use(sitemap(sitemapConfig))
//  .use(serve(serverConfig))
//  .use(writemetadata(writemetaConfig))
  .build(function (err, files) { // this is the actual build step
    if (err) { throw err; } // throwing errors is mandatory
  });
