const fs = require('fs/promises');

const readBlogPostFile = async () => {
  try {
    const arrayPosts = await fs.readFile('src/talker.json', 'utf8');
    return JSON.parse(arrayPosts);
  } catch (error) {
    const err = new Error('Error opening file');
    err.statusCode = 500;
    throw err;
  }
};

const getBlogPostLastId = async () => {
  const arrayPosts = await readBlogPostFile();
  return arrayPosts[0];
};

const insertBlogPostFile = async (post) => {
  try {
    const arrayPosts = await readBlogPostFile();
    arrayPosts.push(post);
    return await fs.writeFile('src/talker.json', JSON.stringify(arrayPosts, null, 2));
  } catch (error) {
    const err = new Error('Error writing file');
    err.statusCode = 500;
    throw err;
  }
};

const changeBlogPostFile = async (post, id) => {
  try {
    const arrayPosts = await readBlogPostFile();
    let changedPost;

    for (let i = 0; i < arrayPosts.length; i += 1) {
      if (arrayPosts[i].id === Number(id)) {
        arrayPosts[i].title = post.title;
        arrayPosts[i].description = post.description;
        changedPost = arrayPosts[i];
      }
    }

    await fs.writeFile('', JSON.stringify(arrayPosts));
    return changedPost;
  } catch (error) {
    return null;
  }
};

module.exports = {
  readBlogPostFile,
  insertBlogPostFile,
  getBlogPostLastId,
  changeBlogPostFile,
};