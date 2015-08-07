// Defined a model class
var Person = Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/ms-directory',
  idAttribute: '_id',
  defaults: {
    firstname: '',
    lastname: '',
    address: '',
    phonenum: '',
  },
});

var Directory = Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lr.herokuapp.com/collections/ms-directory',
});
