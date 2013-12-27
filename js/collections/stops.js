/*jslint nomen: true */
/*globals define: true */


define([
  'jquery',
  'lib/underscore',
  'backbone',

  'settings',

  'models/stop'
],

function($, _, Backbone, settings, StopModel) {
  'use strict';

  var StopCollection = Backbone.Collection.extend({
    model: StopModel,

    url: "http://ddot-beta.herokuapp.com/api/api/where/stops-for-route/DDOT_5435.json?key=BETA",

    initialize: function(options) {
      console.log(options);
      // _.bindAll(this, 'parse', 'query');
      this.fetch();
    },

    parse: function(response) {
      console.log(response);
      return response.data.references.stops;
    }

  });

  return StopCollection;

});
