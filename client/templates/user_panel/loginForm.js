/**
 * Created by kingshark on 15/01/16.
 */
Template.loginForm.helpers({
    has_user_msg: function(){
        return !Session.equals("user_msg", undefined);
    },

    user_msg: function(){
        console.log(Session.get("user_msg"));
        return Session.get("user_msg");
    }

});


Template.loginForm.events({
    'submit form': function(event){
        event.preventDefault();

        var username = $('[name=login-username]').val();
        var password = $('[name=login-password]').val();

        Meteor.loginWithPassword(username,password,function (error){
            if (error){
                //console.log(error.reason);
                Session.set('user_msg', error.reason);
            }
            else{
                $("#login-modal").modal("hide");
            }

        });
        //console.log(result);
    }
});
