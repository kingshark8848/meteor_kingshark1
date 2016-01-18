Accounts.onCreateUser(function(options, user) {
    user.firstName = options.firstName;
    user.lastName = options.lastName;
    user.type = "guest";

    // We still want the default hook's 'profile' behavior.
    if (options.profile)
        user.profile = options.profile;
    return user;
});