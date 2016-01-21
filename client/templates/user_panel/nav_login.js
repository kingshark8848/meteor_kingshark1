/**
 * Created by kingshark on 21/01/16.
 */
Template.nav_login.onCreated( function() {
    this.currentTab = new ReactiveVar( "loginForm" );
});

Template.nav_login.helpers({
    tab: function() {
        return Template.instance().currentTab.get();
    }
});

Template.nav_login.events({
    'hide.bs.modal': function(event){
        //console.log($(event.target).find("form")[0]);
        $(event.target).find("form")[0].reset(); //reset form data
        Session.set('user_msg', undefined); //reset user_msg
    },

    'click .nav-pills li': function( event, template ) {
        var currentTab = $( event.target ).closest( "li" );

        currentTab.addClass( "active" );
        $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

        template.currentTab.set( currentTab.data( "template" ) );
    }
});
