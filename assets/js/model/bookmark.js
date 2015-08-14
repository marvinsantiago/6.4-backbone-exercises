var Bookmark = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    url: '',
    title: '',
    tag: '',
  },
});
