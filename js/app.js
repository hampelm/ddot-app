/*jslint nomen: true */
/*globals define: true */

define([
  'jquery',
  'lib/underscore',
  'backbone',

  // Views
  'views/root'
],

function($, _, Backbone, RootView) {
  'use strict';

  var app = {};

  app.initialize = function() {
      // Init the backbone app. Later, this should go under deviceready.

      // Start routing.
      var Everything = new RootView();
      Everything.startRouting();
  };

  return app;
});
