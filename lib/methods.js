/**
 * Created by kingshark on 25/01/16.
 */
isLogin = function(){
    return Meteor.user()
};

// check that the userId specified owns the documents
ownsPost = function(postId) {
    var post = Posts.findOne({_id: postId});
    if (!post){
        console.log("no this post");
        return false
    }

    if (Meteor.userId()){
        return Meteor.userId() == post.userId;
    }else{
        return false
    }
};
