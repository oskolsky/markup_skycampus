App.Views.Push = Backbone.View.extend({

  render: function() {
    var html = JST['push']();
    this.$el.html(html);
    return this;
  }

});