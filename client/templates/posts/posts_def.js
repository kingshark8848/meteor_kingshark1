Template.postsList.helpers({
    posts: function () {
        return Posts.find();
    }
});

Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },

    canEdit: function(){
        return ownsPost(this._id)
    }

});

Template.postSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        /*    Posts.insert(post);
         post.postid=Posts.findOne(post)._id;
         Router.go('postPage', post);
         //console.log(post._id);*/


        Meteor.call('postInsert', post, function (error, result) {
            // display error message
            if (error)
                return alert(error.reason);
            Router.go('postPage', {postid: result._id});
        });
    }
});

Template.postItem.events({
    'click #post_del': function (e) {
        e.preventDefault();
        //alert(this._id);

        //check login
        //Router.go('accessDenied');
        if (!Meteor.user() && !Meteor.loggingIn()) {
            Router.go('accessDenied');
        }
        else {
            //Posts.remove({_id: this._id});
            Meteor.call('postDel', this._id)
        }
    }
});