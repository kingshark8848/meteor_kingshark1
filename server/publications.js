Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'createdAt': 1, 'things': 1}});
  } else {
    this.ready();
  }
});