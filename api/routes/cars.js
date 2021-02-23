const { Router } = require('express')
const cars = require('../models/car')

const router = Router()

// Test route
router.post('/lots', async (req, res) => {
  // const body = {
  //   Auction: undefined,
  //   Mark: undefined,
  //   Model: undefined,
  //   Year: undefined,
  //   Odmeter: [0, 999911],
  //   Engine: undefined,
  //   Condition: undefined,
  // Page:undefined
  // }
  try {
    const body = req.body
    const Auction = body.Auction
    const Mark = body.Mark
    const Page = body.Page
    const Model = body.Model
    const Year = body.Year
    const Odmeter = body.Odmeter
    const Engine = body.Engine
    const Condition = body.Condition
    const data = await cars.find({ isRead: 'true', Condition: { $in: Condition }, Engine: { $in: Engine }, Auction: { $in: Auction }, Mark: { $in: Mark }, Model: { $in: Model }, Year: { $in: Year }, Odmeter: { $gt: Odmeter[0], $lt: Odmeter[1] } }).limit(10).skip(10 * Page)

    console.log(req.body)
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})
router.get('/selected/:id', async (req, res) => {
  const data = await cars.findOne({ _id: req.params.id })
  res.json(data)
})

router.get('/getData', async (req, res) => {
  const Mark = await cars.distinct('Mark')
  let CarData = []
  for (let i = 0; i < Mark.length; i++) {
    CarData.push({
      Mark: Mark[i],
      Model: await cars.find({ Mark: Mark[i] }).distinct('Model')
    })
  }
  const Model = await cars.distinct('Model')
  const Damaged = await cars.distinct('Damaged')
  const Location = await cars.distinct('Location')
  const Year = await cars.distinct('Year')
  const Engine = await cars.distinct('Engine')
  const Condition = await cars.distinct('Condition')
  res.json({
    Mark, Model, Damaged, Location, Year, Engine, CarData, Condition
  })
})

module.exports = router
