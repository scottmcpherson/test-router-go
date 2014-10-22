/*****************************************************************************/
/* List: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.List.events({
  'click .view-item': function (e) {
    Router.go('view', { _id: this._id });
  },
});

Template.List.helpers({
});

/*****************************************************************************/
/* List: Lifecycle Hooks */
/*****************************************************************************/
Template.List.created = function () {
};

Template.List.rendered = function () {
};

Template.List.destroyed = function () {
};