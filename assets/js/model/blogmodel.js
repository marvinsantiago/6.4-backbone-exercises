// Created Model

var Post = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    blog: '',
  },
});
