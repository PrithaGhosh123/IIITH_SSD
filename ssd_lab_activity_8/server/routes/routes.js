const express = require('express')
const router = express.Router()
const loginTemplateCopy = require('../models/login')

router.post('/login', (request, response) =>{
    const signedup = new loginTemplateCopy({
        rollnumber:request.body.rollnumber,
        password:request.body.password,
        role:request.body.role
    })
    signedup.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router