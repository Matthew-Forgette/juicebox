// REQUIRES
const express = require('express');
const tagsRouter = express.Router();

const { 
  getAllTags,
  getPostsByTagName
} = require('../db');

//----------------------------------------------------------------------
// TAGS ROUTES

tagsRouter.get('/', async (req, res) => {
  const tags = await getAllTags();
  try {
    const tags = await getAllTags();

    res.send({
      tags
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

tagsRouter.get('/:tagName/posts', async (req, res) => {
  const { tagName } = req.params;

  try {
    const allPosts = await getPostsByTagName(tagName);

    const posts = allPosts.filter(post => {
      if (post.active) {
        return true;
      }

      if (req.user && req.user.id === post.author.id) {
        return true;
      }

      return false;
    })

    res.send({ posts });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

//--------------------------------------------------------------------------
// EXPORTS

module.exports = tagsRouter;