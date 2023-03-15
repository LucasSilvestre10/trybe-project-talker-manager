const router = require('express').Router();

const { readTalkerFile, 
  getTalkerId, 
  insertTalker,
  deletTalker,   
 } = require('../utils/readAndWriteFiles');
 const generateId = require('../utils/generateId');
 
const {
  checkToken,
  checkName,
  checkAge,
  checkTalk,
  
} = require('../middlewares/checkTalkerData');

router.get('/talker', async (_request, response) => {
  const talkers = await readTalkerFile();
  return response.status(200).json(talkers);
});

router.get('/talker/:id', async (request, response) => {
  const talker = await getTalkerId(request.params.id);
  if (talker) {
    return response.status(200).json(talker);
  }
  return response
    .status(404)
    .json({ message: 'Pessoa palestrante não encontrada' });
});

router.post(
  '/talker',
  checkToken,
  checkName,
  checkAge,
  checkTalk,
  async (request, response) => {
    const { name, age, talk } = request.body;

     const newTalker = {    
    name,
    age,
    id: await generateId(),
    talk,
  };
  await insertTalker(newTalker);

    return response.status(201).json(newTalker);
  },
);

router.put(
  '/talker/:id', 
  checkToken,
  checkName,
  checkAge,
  checkTalk,
  async (request, response) => {
    const { id } = request.params;
    const talker = await getTalkerId(id);
  if (!talker) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
    const { name, age, talk } = request.body;
    const putTalker = {
      id: Number(id),
      name,
      age,
      talk,
    };    
    await insertTalker(putTalker);
    return response.status(200).json(putTalker);
  },
);

router.delete('/talker/:id', checkToken, async (request, response) => {
  const { id } = request.params;
  const talker = await getTalkerId(id);
  if (!talker) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  await deletTalker(id);
  return response.status(204).json({ message: 'Pessoa deletada com Sucesso' });
});

module.exports = router;
