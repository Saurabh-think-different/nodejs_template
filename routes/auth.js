const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('auth/index')
})

router.post('/', (req, res) => {

})

module.exports = router