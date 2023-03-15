const { readTalkerFile } = require('./readAndWriteFiles');

const generateId = async () => {
    const list = await readTalkerFile();
    const newId = list.length + 1;
    return newId;
};
module.exports = generateId;