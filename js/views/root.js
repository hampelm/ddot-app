/*jslint nomen: true */
/*globals define: true */

define([
  'jquery',
  'lib/underscore',
  'backbone',

  'routers/router',

  'views/index'
],

function($, _, Backbone, Router, IndexView) {
  'use strict';

  return Backbone.View.extend({
    /*
     * The singleton view which manages all others. Essentially, a "controller".
     *
     * A single instance of this object exists in the global namespace as
     * "Everything".
     */

    el: $("#app"),
    views: {},
    _router: null,
    survey: null,

    initialize: function() {
      // Bind local methods
      _.bindAll(this);

      // Set up global router
      this._router = new Router({ controller: this });

      return this;
    },

    startRouting: function() {
      /*
       * Start Backbone routing. Separated from initialize() so that the
       * global controller is available for any preset routes (direct links).
       */
      Backbone.history.start();
    },

    goto_home: function() {
      this.currentContentView = new IndexView();
      this._router.navigate("");
    }

    //goto_stop: function(id) {
    //  this.currentContentView = new StopView({id: id});
    //}


  });
});
