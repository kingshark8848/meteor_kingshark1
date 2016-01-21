/**
 * Created by kingshark on 15/01/16.
 */
Template.signUpForm.events({
    'submit form': function(event){
        event.preventDefault();

        var firstName = $('[name=sign-up-firstName]').val();
        var lastName = $('[name=sign-up-lastName]').val();
        var email = $('[name=sign-up-emailAddress]').val();
        var username = $('[name=sign-up-username]').val();
        var password = $('[name=sign-up-password]').val();

        Accounts.createUser({
            username: username,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName
        },function(error){
            if (error){
                //console.log(error.reason);
                Session.set('user_msg', error.reason);
            }
            else{
                $("#login-modal").modal("hide");
            }
        });

        //$("#login-modal").modal("hide");

        //Router.go('/');
    }
});
