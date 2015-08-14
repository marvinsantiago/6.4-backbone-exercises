var ItemView = Backbone.View.extend({
  // tagName: 'li',
  template: AppTemplates.item,
  className: 'item-view',

  render: function() {
    var html = this.template(this.collection.map(function(model) {
      return model.toJSON();
    }));

    this.$el.html(html);

    return this;
  },
});

