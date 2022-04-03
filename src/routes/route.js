const express = require('express')
const router = express.Router()

const userController = require("../controller/userController")
const bookController = require('../controller/bookController')
const reviewController = require('../controller/reviewController')
const auth = require('../auth/auth')

// user api
router.post('/register',userController.createUser)
router.post('/login',userController.loginUser)

// book api
router.post('/books',auth.authentication,bookController.createBooks)
router.get('/books', auth.authentication,bookController.getBooks)
router.get('/books/:bookId',auth.authentication,bookController.getBooksWithId)
router.put('/books/:bookId',auth.authentication,auth.authorisation, bookController.updateBook)
router.delete('/books/:bookId',auth.authentication,auth.authorisation,bookController.deleteBook)
// handle the case in last three apis
// case : what happens when we dont provide bookId in params
// review api
router.post('/books/:bookId/review', reviewController.createReview)
router.put('/books/:bookId/review/:reviewId',reviewController.updateReview)
router.delete('/books/:bookId/review/:reviewId',reviewController.deleteReview)



module.exports=router