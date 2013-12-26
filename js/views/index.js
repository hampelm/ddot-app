/*jslint nomen: true */
/*globals define: true */


define([
  'jquery',
  'lib/underscore',
  'backbone',

  'routers/router',

  'collections/stops',
  'views/stops',

  'text!templates/index.html'
],

function($, _, Backbone, Router, StopCollection, StopsView, Template) {
  'use strict';

  return Backbone.View.extend({
    template: _.template(Template),

    el: $("#container"),

    initialize: function(options) {
      // _.bindAll(this, 'render');
      this.render();

      this.stops = new StopCollection({
        filter: 'nearby'
      });
    },

    render: function(e) {
      console.log("Rendering home");

      var context = {};
      this.$el.html(this.template(context));
    }
  });
});

