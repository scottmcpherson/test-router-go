ListController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
    return {
      items: function () {
        return Items.find();
      }
    }
  },

  action: function () {
    this.render();
  }
});