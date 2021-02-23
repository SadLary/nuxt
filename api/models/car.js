const mongoose = require('mongoose')
const cars = new mongoose.Schema({

  Link: { type: String },
  isRead: { type: String },
  Title: { type: String },
  Vin: { type: String },
  Year: String,
  Model: String,
  Mark: String,
  LotId: String,
  SearchLink: String,
  Condition: String, // Состояние
  Damaged: String, // Повреждение
  Odmeter: Number, // Пробег
  Key: String, // Ключи
  Auction: String, // Аукцион
  Engine: String, // Движок
  Transmission: String, // Трансмиссия
  AuctionDate: String, // Дата торгов
  DocType: String, // Документы для продажи
  ERV: String, // Est. Retail Value:
  PreBid: String,
  BuyNow: String,
  Location: String,
  img: Array,
  getDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('cars', cars)
