/*jslint nomen: true */
/*globals define: true */


define([
  'jquery',
  'lib/underscore',
  'backbone',

  'settings'
],

function($, _, Backbone, settings) {
  'use strict';

  var StopModel = Backbone.Model.extend({
    //url: settings.base + "/api/page/?format=json",

    initialize: function(options) {
      // _.bindAll(this, 'parse', 'query');
    }

  });

  return StopModel;

});
