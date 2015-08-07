// var BlogView = Backbone.View.extend({
//   tagName: 'li',
//   template: AppTemplates.blog,
// });

var AppView = Backbone.View.extend({
  template: AppTemplates.app,

  el: '#target',

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template();

    this.$el.html(html);

    console.info('render');
  },
});
