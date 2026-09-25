const express= require("express");
const router = express.Router({mergeParams:true});
const {reviewSchema,listingSchema}=require("../schema.js");
const ExpressError=require("../utils/ExpressError.js");
const wrapAsync=require("../utils/wrapasync.js");
const Listing=require("../models/listing.js")
const Review = require("../models/review.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const {createReview,destroyReview}=require("../contollers/reviews.js")






router.post("/",isLoggedIn, validateReview,wrapAsync(createReview));

// Delete review route

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(destroyReview));


module.exports=router;
