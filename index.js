/**
 * @license MIT
 * @author 0@39.yt (Yurij Mikhalevich)
 * @module 'inject-context'
 */
'use strict';

define(['knockout'], function(ko) {
  return function(Model) {
    return {
      createViewModel: function(params, componentInfo) {
        var context = ko.contextFor(componentInfo.element);
        var model = new Model(params, context, componentInfo.element);
        model.domNode = componentInfo.element;
        model.context = context;
        model.$root = context.$root;
        model.$parent = context.$parent;
        model.$parents = context.$parents;
        return model;
      }
    };
  };
});

