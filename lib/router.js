Router.configure({
  loadingTemplate: 'loading',
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:postid', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params.postid); }  //
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'}); //dataNotFound is a special hook