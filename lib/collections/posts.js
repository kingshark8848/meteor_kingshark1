Posts = new Mongo.Collection('posts');

/*
 Posts.allow({
 insert: function(userId, doc) {
 // only allow loigin to create posts
 return !! userId;
 }
 });
 */

//method postInsert
Meteor.methods({
    postInsert: function (postAttributes) {
        if (!isLogin()) {
            return;
        }

        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    },

    postDel: function (postId) {
        check(arguments, [Match.Any]);

        if (!isLogin()) {
            console.log("not login, cannot delete post");
            return;
        }

        if (!ownsPost(postId)) {
            console.log("not post owner, cannot delete post");
            return;
        }

        Posts.remove({_id: postId})
    }
});