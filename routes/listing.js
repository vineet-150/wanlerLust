const express = require("express");

const router = express.Router();

const wrapAsync = require("../utils/wrapasync.js");

const Listing = require("../models/listing.js");



const {
    isLoggedIn,
    isOwner,
    validateListing
} = require("../middleware.js");

const multer = require("multer");
const {storage}=require("../cloudConfig.js");

const upload = multer({ storage });  //ya multe ki file aab cloubinary ki storage ma uplod

const {
    index,
    renderNewForm,
    createListing,
    showListing,
    renderEditForm,
    updateListing,
    destroyListing,
    cate
} = require("../contollers/listings.js");


// Index Route + Create Route
router.route("/")
    .get(wrapAsync(index))
    .post(
        isLoggedIn,

        upload.single("listing[image]"),
        validateListing,
       createListing
    );


// New Route
router.get("/new", isLoggedIn, renderNewForm);

router.get("/category/:category",wrapAsync(cate));

// Show + Update + Delete
router.route("/:id")
    .get(wrapAsync(showListing))
    .put(
        isLoggedIn,
        isOwner,
         upload.single("listing[image]"),
        validateListing,
        wrapAsync(updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(destroyListing)
    );


// Edit Route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(renderEditForm)
);




module.exports = router;