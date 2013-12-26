/*jslint nomen: true */
/*globals define: true */


define([
  'jquery',
  'lib/underscore',
  'backbone',

  'text!templates/stop.html'
],

function($, _, Backbone, Router, StopsView, Template) {
  'use strict';

  return Backbone.View.extend({
    template: _.template(Template),

    el: $("#container"),

    initialize: function(options) {
      // _.bindAll(this, 'render');
      this.render();
    },

    render: function(e) {
      console.log("Rendering home");

      var context = {};
      this.$el.html(this.template(context));

      var nearbyStops = new StopsView({
        filter: 'nearby'
      });

    }
  });
});

