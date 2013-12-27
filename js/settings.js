/*jslint nomen: true */
/*globals define: true */

define([
  'jquery',
  'lib/underscore',
  'backbone'
],

function($, _, Backbone) {
  return {
    apiURL: 'http://ddot-beta.herokuapp.com/api/api/where/',
    key: 'BETA'
  };
});
