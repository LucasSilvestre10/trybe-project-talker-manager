const router = require('express').Router();

const { readBlogPostFile } = require('../utils/readAndWriteFiles');

router.get('/talker', async (_request, response) => {
const talker = await readBlogPostFile();
return response.status(200).json(talker);
});

module.exports = router;