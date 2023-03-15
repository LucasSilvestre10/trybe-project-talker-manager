const checkToken = (request, response, next) => {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return response.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const checkName = (request, response, next) => {
  const { name } = request.body;
  if (!name) {
    return response
      .status(400)
      .json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return response
      .status(400)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const checkAge = (request, response, next) => {
  const { age } = request.body;
  if (!age) {
    return response
      .status(400)
      .json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof age !== 'number' || age < 18 || Number.isInteger(age) === false) {
    return response
      .status(400)
      .json({
        message:
          'O campo "age" deve ser um número inteiro igual ou maior que 18',
      });
  }
  next();
};

const checkDateRate = (date, rate) => {
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/g;
    if (!dateRegex.test(date)) {
     return 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';     
    }
    if (rate <= 0 || rate > 5) {
        return 'O campo "rate" deve ser um número inteiro entre 1 e 5';
    }
    if (Number.isInteger(rate) === false) {
        return 'O campo "rate" deve ser um número inteiro entre 1 e 5';
    }
    return null;
};

const checkTalk = (request, response, next) => {
  const { talk } = request.body;
  if (!talk) {
    return response.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  if (!talk.watchedAt) {
    return response.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (talk.rate === undefined) {
    return response.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }  
  const validDateRate = checkDateRate(talk.watchedAt, talk.rate);
  if (validDateRate) { return response.status(400).json({ message: validDateRate }); }  
  next();
};

module.exports = { checkToken, checkName, checkAge, checkTalk };
