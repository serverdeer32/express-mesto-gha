const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальная длина названия карточки - 2 символа'],
    maxlength: [30, 'Максимальная длина названия карточки - 30 символов'],
    required: [true, 'Поле «Название» должно быть заполнено'],
  },
  link: {
    type: String,
    required: [true, 'Поле «Ссылка» должно быть заполнено'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      default: [],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
