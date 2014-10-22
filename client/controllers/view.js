ViewController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
    var that = this;
    return {
      item: function () {
        return Items.findOne({_id: that.params._id});
      }
    }
  },

  action: function () {
    this.render();
  }
});