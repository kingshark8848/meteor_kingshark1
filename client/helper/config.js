/*
 Accounts.ui.config({
 requestPermissions: {},
 passwordSignupFields: 'USERNAME_AND_EMAIL',
 extraSignupFields: [{
 fieldName: 'first-name',
 fieldLabel: 'First name',
 inputType: 'text',
 visible: true,
 validate: function(value, errorFunction) {
 if (!value) {
 errorFunction("Please write your first name");
 return false;
 } else {
 return true;
 }
 }
 }, {
 fieldName: 'last-name',
 fieldLabel: 'Last name',
 inputType: 'text',
 visible: true,
 }]
 });*/
Template.registerHelper('hasPermission', function (p_type) {
    if (p_type=='admin'){
        if (Meteor.user()){
            return Meteor.user().type == 'admin';
        }
        else{
            return false;
        }
    }else{
        return false;
    }
});

Template.registerHelper('equals', function (a, b) {
    return a === b;
});