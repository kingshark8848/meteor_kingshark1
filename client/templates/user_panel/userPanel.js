/**
 * Created by kingshark on 18/01/16.
 */
Template.userPanel.events({
    'hide.bs.modal': function(event){
        //console.log($(event.target).find("form")[0]);
        $(event.target).find("form")[0].reset();
    },

    'click #link-logout': function (e) {
        e.preventDefault();

        //logout
        Meteor.logout();
    }
});