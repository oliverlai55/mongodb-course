const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  content: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
});

const BlogPost = mongoose.model('blogPost', BlogPostSchema);

module.exports = BlogPost;

// the Types pass off a reference to another collection, Type of ObjectId, ref 'Comment'
// the Ref will be matched up to comment
