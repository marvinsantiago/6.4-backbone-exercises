var Blogs = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lr.herokuapp.com/collections/ms-blogs',
});

var Post = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    comment: '',
    create: new Date(),
  },
});
