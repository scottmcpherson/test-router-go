if (Items.find().count() < 1) {
  var items = [{ name: 'item one'}, { name: 'item two'}, { name: 'item three'}];
  _.each(items, function(i) {
    Items.insert({ name: i.name });
  })
}