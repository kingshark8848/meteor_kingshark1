Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    Posts.insert(post);
    post.postid=Posts.findOne(post)._id;
    Router.go('postPage', post);
    //console.log(post._id);
  }
});