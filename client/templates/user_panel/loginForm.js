/**
 * Created by kingshark on 15/01/16.
 */
Template.loginForm.events({
    'submit form': function(event){
        event.preventDefault();

        var username = $('[name=login-username]').val();
        var password = $('[name=login-password]').val();

        Meteor.loginWithPassword(username,password,function (error){
            if (error){
                console.log(error.reason)
            }

        });
        //console.log(result);

        $("#login-modal").modal("hide");

    }
});
