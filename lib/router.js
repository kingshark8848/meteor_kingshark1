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

Router.route('/submit', {name: 'postSubmit'});

Router.route('/accessDenied', {name: 'accessDenied'});

//login check
var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'}); //dataNotFound is a special hook
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
