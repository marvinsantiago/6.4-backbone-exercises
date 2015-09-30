var DetailView = Backbone.View.extend({
  template: AppTemplates.detail,

  intialize: function() {
    this.listenTo(this.model, 'add sync change', this.render);
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
