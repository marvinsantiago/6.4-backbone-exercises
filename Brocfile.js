var handlebars = require('broccoli-handlebars-precompiler');
var merge = require('broccoli-merge-trees');
var sass = require('broccoli-sass');
var concat = require('broccoli-sourcemap-concat');

var vendorJs = concat('bower_components', {
  inputFiles: [
    'jquery/dist/jquery.min.js',
    'handlebars/handlebars.runtime.min.js',
    'underscore/underscore-min.js',
    'backbone/backbone-min.js',
  ],
  outputFile: 'vendor.js',
});

var assetsWithTemplates = handlebars('assets', {
  srcDir: 'templates',
  namespace: 'AppTemplates',
});

var appJs = concat(assetsWithTemplates, {
  inputFiles: [
    'js/setup.js',
    'templates/**/*.js',
    'js/model/cms.js',
    'js/collection/cms.js',
    'js/views/sidebarview.js',
    'js/views/formview.js',
    'js/views/detailview.js',
    'js/views/editview.js',

    /* Your app files here */
    'js/router.js',
    'js/index.js',
  ],
  outputFile: 'app.js',
});

var sassDirs = [
  'assets/scss',
  'bower_components/reset-css',
  'bower_components/bourbon/app/assets/stylesheets',
  'bower_components/neat/app/assets/stylesheets',
];

var appCss = sass(sassDirs, 'app.scss', 'app.css');

module.exports = merge([appJs, vendorJs, appCss, 'public']);
