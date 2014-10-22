/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
Meteor.subscribe('items');

_.extend(App, {
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});