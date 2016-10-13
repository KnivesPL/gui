/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var HtmlbarsCompiler = require('ember-cli-htmlbars');

var templateTree = new HtmlbarsCompiler('app/templates', {
  isHTMLBars: true,

  // provide the templateCompiler that is paired with your Ember version
  templateCompiler: require('./bower_components/ember/ember-template-compiler')
});


module.exports = function(defaults) {
  var isDevelopment = EmberApp.env() === 'development';
  var app = new EmberApp(defaults, {
    babel: {
      comments: false,
      // plugins: ["tailcall-optimization"]
    },
    minifyCSS: { enabled: true },
    minifyJS: { enabled: !isDevelopment },
    sourcemaps: { enabled: isDevelopment },
    storeConfigInMeta: isDevelopment,
    outputPaths: {
      app: {
        html: 'index.html',
        css: {
          'app': '/assets/dashboard/zlot.css'
        },
        js: '/assets/dashboard/zlot.js'
      },
      vendor: {
        css: '/assets/dashboard/vendor.css',
        js: '/assets/dashboard/vendor.js'
      }
    },
    'ember-power-select': {
      theme: 'material',
      color: 'blue'
    }
  });
  app.import(app.bowerDirectory + '/active-model-adapter/active-model-adapter.js');
  app.import('./vendor/mdb/css/bootstrap.min.css');
  app.import('./vendor/mdb/css/mdb.min.css');

  app.import('./vendor/mdb/js/jquery-2.2.3.min.js');
  app.import('./vendor/mdb/js/bootstrap.min.js');
  app.import('./vendor/mdb/js/tether.min.js');
  app.import('./vendor/mdb/js/mdb.min.js');

  var mdbFonts = pickFiles('./vendor/mdb/font/roboto', {
    srcDir: '/',
    files: ['**/*'],
    destDir: '/assets/font/roboto'
  });

  var vendorImages = pickFiles('./vendor/img', {
    srcDir: '/',
    files: ['**/*'],
    destDir: '/assets/img'
  });

  var extraAssets = pickFiles(app.bowerDirectory + '/bootstrap/dist/fonts', {
    srcDir: '/',
    files: ['**/*'],
    destDir: '/assets/fonts'
  });

  return mergeTrees([app.toTree(), extraAssets, mdbFonts, vendorImages]);

  return app.toTree();
};
