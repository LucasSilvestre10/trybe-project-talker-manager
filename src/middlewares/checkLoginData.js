const checkLoginData = (request, response, next) => {
    const { email, password } = request.body;
    const MIN_LOGIN = 5;    
    if (!email) {
     return response.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!password) {
       return response.status(400).json({ message: 'O campo "password" é obrigatório' });
     }
    const validaPassword = password.length > MIN_LOGIN;
    const validateEmail = email.match(/\S+@\S+\.\S+/);
    if (!validateEmail) {
    return response.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
       }
    if (!validaPassword) {
    return response.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
        }
    next();
};

module.exports = checkLoginData;