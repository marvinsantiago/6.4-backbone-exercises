var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogList();
    this.formview = new FormView({collection: this.collection});

    $('#target').html(this.formview.render().el);

    this.collection.fetch();
  },

});
