const express = require("express")
const Product = require("../model/Product")
const Review = require("../model/Review")
const router = express.Router()

router.get("/product/:id/addreview", async(req, res) => {
    console.log("reviews");
    const { rating, comment } = req.query
    let id = req.params.id//to get the id from the url
    let product =await Product.findById(id)//to find the product by id
    let review = new Review({ rating, comment })//to creae review
    product.reviews.push(review)//pushing the reviews in the review array

   await product.save()//to save the product
   await review.save()//to save product review

   res.redirect(`/products/${id}`)//re-directing to the product page
})

module.exports = router