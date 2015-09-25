var DetailView = Backbone.View.extend({
  template: AppTemplates.detail,

  intialize: function() {
    this.listenTo(this.model, 'sync change', this.render);
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  },
});
