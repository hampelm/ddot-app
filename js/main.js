/*jslint nomen: true */
/*globals require: true */

require.config({
  paths: {
    text: 'lib/text',
    jquery: 'lib/jquery-1.7.1',
    backbone: 'lib/backbone',
    moment: 'lib/moment.min'
  },

  shim: {
    'lib/underscore': {
      exports: '_'
    },

    backbone: {
      deps: ['lib/underscore', 'jquery'],
      exports: 'Backbone'
    },

    'lib/leaflet/leaflet': {
      exports: 'L'
    }
  }

});

require(['jquery',  'app'],
        function ($, app) {
  'use strict';

  $(document).ready(function () {
    app.initialize();
  });
});
