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

  var IndexView = Backbone.View.extend({
    template: _.template(Template),

    el: $("#container"),

    initialize: function(options) {
      _.bindAll(this, 'render');
      // this.render();

      this.stops = new StopCollection({
        filter: 'nearby'
      });

      this.stops.on('reset', this.render);
    },

    render: function(e) {
      console.log("Rendering home");

      var context = {
        stops: this.stops.toJSON()
      };
      this.$el.html(this.template(context));
    }
  });

  return IndexView;
});

