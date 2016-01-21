/**
 * Created by kingshark on 21/01/16.
 */
Template.nav_login.onCreated( function() {
    this.currentTab = new ReactiveVar( "loginForm" );
});

Template.nav_login.helpers({
    has_user_msg: function(){
        return !Session.equals("user_msg", undefined);
    },

    user_msg: function(){
        //console.log(Session.get("user_msg"));
        return Session.get("user_msg");
    },

    tab: function() {
        return Template.instance().currentTab.get();
    }
});

Template.nav_login.events({
    'hide.bs.modal': function(event,template){
        //console.log($(event.target).find("form")[0]);
        $(event.target).find("form")[0].reset(); //reset form data
        Session.set('user_msg', undefined); //reset user_msg

        //template.currentTab.set("loginForm");//reset current tab to "login"
    },


    'click .nav-pills li': function( event, template ) {
        var currentTab = $( event.target ).closest( "li" );

        currentTab.addClass( "active" );
        $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

        template.currentTab.set( currentTab.data( "template" ) );

        Session.set('user_msg', undefined); //reset user_msg
    }

});
