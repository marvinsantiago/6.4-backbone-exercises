var ItemView = Backbone.View.extend({
  // tagName: 'li',
  template: AppTemplates.item,

  el: '#bookmark-list',

  initialize: function() {
    this.listenTo(this.collection, 'sync add change', this.render);
    this.render();
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  },
});

