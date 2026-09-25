const express= require("express");
const router = express.Router();
const User =require("../models/user");
const wrapasync = require("../utils/wrapasync");
const passport = require("passport");
const { isLoggedIn, saveRedirectUrl } = require("../middleware");
const {signup,renderSignupForm,renderLoginForm,login,logout}=require("../contollers/user.js");



router.route("/signup").
get(renderSignupForm).
post(wrapasync(signup));


router.route("/login").
get(renderLoginForm).
post(saveRedirectUrl, passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),login);

router.get("/logout",logout);

module.exports=router;

