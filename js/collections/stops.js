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

  return Backbone.Collection.extend({
    model: StopModel,

    url: settings.base + "/api/page/?format=json",

    initialize: function(options) {
      _.bindAll(this, 'parse', 'query');
    },

    search_url: function(term) {
    },

    query: function(query) {
    },

    query_near: function(location) {
    },

    parse: function(response) {
      console.log(response);
    }

  });

});
