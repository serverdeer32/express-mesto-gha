const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальная длина имени пользователя - 2 символа'],
    maxlength: [30, 'Максимальная длина имени пользователя - 30 символов'],
    required: [true, 'Поле «Имя» должно быть заполнено'],
  },
  about: {
    type: String,
    minlength: [2, 'Минимальная длина описания пользователя - 2 символа'],
    maxlength: [30, 'Макстмальная длина описания пользователя - 30 символов'],
    required: [true, 'Поле «Описание» должно быть заполнено'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле «Аватар» должно быть заполнено'],
  },
});

module.exports = mongoose.model('user', userSchema);
