// View for each individual item
var BlogView = Backbone.View.extend({
  tagName: 'li',
  template: AppTemplates.sidebar,

  el: '#sidebar',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'sync add', this.render);
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);
    return this;
  },
});

// View for all
var AppView = Backbone.View.extend({
  template: AppTemplates.app,

  el: '#target',

  initialize: function() {
    this.render();

  },

  render: function() {
    var data = {};

    if (this.model && this.model.toJSON) {
      data = this.model.toJSON();
    }

    var html = this.template(data);
    this.$el.html(html);

    return this;
  },

});
