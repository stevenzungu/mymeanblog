var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: Date.now,
  },
  updated: {
    type: Date,
    required: Date.now,
  },

});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
