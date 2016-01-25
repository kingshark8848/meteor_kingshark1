/**
 * Created by kingshark on 18/01/16.
 */
Template.nav_user_panel.helpers({
    user: function(){
        return Meteor.user()
    }
})

Template.nav_user_panel.events({
    'click #link-logout': function (e) {
        e.preventDefault();

        //logout
        Meteor.logout();
        Router.go('/');
    }
});