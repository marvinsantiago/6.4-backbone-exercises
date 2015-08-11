// Created collection of model Post
var Blogs = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lr.herokuapp.com/collections/ms-blogs',
});
