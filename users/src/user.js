const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost'
  }]
});

UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});


UserSchema.pre('remove', function(next) {
  // this === joe
  const BlogPost = mongoose.model('blogPost');
  
// $in goes through all the blogposts, looks at the id, if the id is in the array
// of this.blogPosts, will remove it
  BlogPost.remove({ _id: { $in: this.blogPosts } })

  // when it is done, goes to the next middleware
    .then(() => next());
});

const User = mongoose.model('user', UserSchema);
//creates collection and follows specific schema

module.exports = User;
//Only export the User class/model
