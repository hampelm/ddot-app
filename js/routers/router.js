/*jslint nomen: true */
/*globals define: true */

define([
  'jquery',
  'lib/underscore',
  'backbone',

  'views/index'
],

function($, _, Backbone, Router, IndexView) {
  'use strict';

  return Backbone.Router.extend({
    routes: {
      "": "home",
      "stop/:slug": "stop"
    },

    initialize: function(options) {
      this.controller = options.controller;
    },

    home: function() {
      console.log("Index");
      this.controller.goto_home();
    },

    stop: function(id) {
      this.controller.goto_stop(id);
    },

    default_route: function(actions) {
      console.log(actions);
    }
  });

});
