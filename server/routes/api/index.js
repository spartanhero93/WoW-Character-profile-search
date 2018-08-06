const express = require('express')
const router = express.Router()
const axios = require('axios')

const keys = require('../../config/keys')

router.post('/getData', async (req, res) => {
  try {
    const character = await req.body.characterName
    console.log(character)
    // res.send({ fetched: true, data: character })
    const response = await axios.get(
      `https://us.api.battle.net/wow/character/darkspear/${character}?locale=en_US&apikey=${keys.API_KEY}`
    )

    const data = await response.data

    res.send({ fetched: true, data })
  } catch (e) {
    res.send({ fetched: false, data: 'User does not exist' })
  }
})

module.exports = router
