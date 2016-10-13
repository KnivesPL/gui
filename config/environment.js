/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'zlot2016',
    environment: environment,
    rootURL: '/',
    contentSecurityPolicy: {
      'default-src': "'self' *.knives.pl *.github.io",
      'connect-src': "'self' *.knives.pl *.github.io",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net *.knives.pl cdn.jsdelivr.net",
      'font-src': "'self' fonts.gstatic.com https://fonts.googleapis.com https://maxcdn.bootstrapcdn.com",
      'connect-src': "'self'",
      'img-src': "'self' data: *.knives.pl *.github.io p.typekit.net",
      'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.gstatic.com https://maxcdn.bootstrapcdn.com fonts.googleapis.com"
    },
    locationType: 'auto',
    'pace': {

      // addon-specific options to configure theme
      // theme: 'material',
      // color: 'blue',

      // pace-specific options
      // learn more on http://github.hubspot.com/pace/#configuration
      catchupTime: 50,
      initialRate: .01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'div.pace-progress-bar',
      elements: {
        checkInterval: 100,
        selectors: ['body']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'PATCH'],
        trackWebSockets: true,
        ignoreURLs: []
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      API_NAMESPACE: 'json',
      LOG_TRANSITIONS: false,
      LOG_RESOLVER: false,
      API_HOST: ''
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.API_HOST = 'http://localhost:8888';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://zlot2016.knives.pl';
  }

  ENV.contentSecurityPolicy['default-src'] += ' ' + ENV.APP.API_HOST;
  ENV.contentSecurityPolicy['script-src'] += ' ' + ENV.APP.API_HOST;
  ENV.contentSecurityPolicy['connect-src'] += ' ' + ENV.APP.API_HOST;


  return ENV;
};
