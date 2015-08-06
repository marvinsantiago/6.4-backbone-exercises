// Defined a model class and attached it to collection
var Person = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phoneNum: '',
  },
});

var Directory = Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lr.herokuapp.com/collections/ms-directory',
});
