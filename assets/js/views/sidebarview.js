var SidebarView = Backbone.View.extend({
  template: AppTemplates.sidebar,
  className: 'sidebar',

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
