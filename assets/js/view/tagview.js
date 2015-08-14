var TagView = Backbone.View.extend({
  template: AppTemplates.tag,

  el: '#tag',

  initialize: function() {
    this.listenTo(this.collection, 'sync add', this.render);
    this.render();
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  },
});
