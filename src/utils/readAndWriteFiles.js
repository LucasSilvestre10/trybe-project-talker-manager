const fs = require('fs/promises');

const readTalkerFile = async () => {
  try {
    const arrayTalkers = await fs.readFile('src/talker.json', 'utf8');
    return JSON.parse(arrayTalkers);
  } catch (error) {
    const err = new Error('Error opening file');
    err.statusCode = 500;
    throw err;
  }
};

const getTalkerId = async (idTalker) => {
  const arrayTalkers = await readTalkerFile();
  
  const talker = arrayTalkers.find((t) => t.id === Number(idTalker));
  return talker;
};

const insertTalker = async (post) => {
  try {
    const arrayTalkers = await readTalkerFile();
    arrayTalkers.push(post);
    return await fs.writeFile('src/talker.json', JSON.stringify(arrayTalkers, null, 2));
  } catch (error) {
    const err = new Error('Error writing file');
    err.statusCode = 500;
    throw err;
  }
};

const deletTalker = async (id) => {
  try {
    const arrayTalkers = await readTalkerFile();
    const newArray = arrayTalkers.filter((talker) => talker.id !== Number(id));
    return await fs.writeFile('src/talker.json', JSON.stringify(newArray, null, 2));
  } catch (error) {
    const err = new Error('Error writing file');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = {
  readTalkerFile,
  insertTalker,
  getTalkerId,  
  deletTalker,
};