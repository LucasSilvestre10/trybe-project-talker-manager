const router = require('express').Router();

const { readTalkerFile, getTalkerId } = require('../utils/readAndWriteFiles');

router.get('/talker', async (_request, response) => {
const talkers = await readTalkerFile();
return response.status(200).json(talkers);
});

router.get('/talker/:id', async (request, response) => {
const talker = await getTalkerId(request.params.id);
if (talker) {
    return response.status(200).json(talker);
}
return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = router;