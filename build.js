'use strict';

// The core
const Metalsmith = require('metalsmith');

// The plugins to be applied
const writemetadata = require('metalsmith-writemetadata');
//const inplace = require('metalsmith-in-place');
const mdit = require('metalsmith-markdownit');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');
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
  generatorurl: 'https://metalsmith.io/'
};
 
// Filter for the layout engine
const year = function() {
  return (new Date()).getFullYear();
};

// Configuration of the layout engine
const layoutConfig = {
  directory: '_layouts/',
  default: 'default.njk',
  pattern: ['**/*.html', '*.html'],
  engineOptions: {
    filters: {
      year: year
    }
  }
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
  site_url: site.site_url,
  collection: 'pages'
};

// Sitemap configuration
const sitemapConfig = {
  hostname: site.site_url
};

// SASS configuration
// outputDir and file are paths relative to the source directory
// includePaths are paths relative the the project root directory
const sassConfig = {
  outputDir: './assets',
  file: './styles/main.scss',
  outputStyle: 'expanded',
  includePaths: ['./_sass', './node_modules/bootstrap/scss']
};

// writemetadata configuration
const writemetaConfig = {
  pattern: ['**/*'],
  bufferencoding: 'utf8'
};

//Server configuration
const serverConfig = {
  port: 4000,
  verbose: true,
  http_error_files: {404: "/404.html"}
}

// Start the core and chain plugins to build the website
Metalsmith(__dirname)
  .metadata(site)
  .clean(true)
  .source('./_pages')
  .destination('./_site')
  .use(mdit({html: true}))
//  .use(inplace({engine: 'nunjucks',
//            	pattern: '**/*.njk'}))
  .use(permalinks({pattern: ':title'}))
  .use(layouts(layoutConfig))
  .use(assets({dest: 'assets'}))
  .use(sass(sassConfig))
  .use(collections(collectionConfig))
  .use(rssfeed(feedConfig))
  .use(sitemap(sitemapConfig))
//  .use(writemetadata(writemetaConfig))
  .use(serve(serverConfig))
  .build(function(err, files) {  // this is the actual build step
    if (err) {throw err;}        // throwing errors is mandatory
  });

