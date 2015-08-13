var TagView = Backbone.View.extend({
  template: AppTemplates.tag,

  el: '#tag',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(html);
  },
});
