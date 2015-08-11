// View for each individual item
var BlogView = Backbone.View.extend({
  tagName: 'li',
  template: AppTemplates.sidebar,

  el: '#sidebar',

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    console.info('render');
    return this;
  },
});

// View for all
var AppView = Backbone.View.extend({
  template: AppTemplates.app,

  el: '#target',

  initialize: function() {
    var _this = this;
    var html = _this.template(_this.collection.first().toJSON());
    _this.$el.html(html);

    return this;
  },
});
