var ItemView = Backbone.View.extend({
  // tagName: 'li',
  template: AppTemplates.item,

  el: '#bookmark-list',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    var html = this.template(this.getData());
    this.$el.html(html);

    return this;
  },

  getData: function() {
    var data = {};

    if (this.model) {
      data = this.model;

      if (this.model.toJSON) {
        data = this.model.toJSON();
      }
    }

    return data;
  },
});

