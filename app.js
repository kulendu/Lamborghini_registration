// jshint esverion : 6 
require('dotenv').config();
const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session"); //for applying sessions.
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const findOrCreate = require("mongoose-findorcreate"); 

const app = express();


app.use(express.static("resources")); //for using the resource files
app.use(bodyParser.urlencoded({extended : true}));

app.use(session({
    secret: "thisisasecret",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


// coonection with the mongodb database 
mongoose.connect("mongodb://localhost:27017/lamboDB", {useNewUrlParser: true , useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);

// Schema creation 
const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    googleId : String,
    githubId : String
});

// Plugins for database 
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


// Model creation 
const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// Serializing and Deserializing the sessions  
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});

// Google authentication 
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/about",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile); 
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// Github authentication 
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/about"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));



app.get("/" ,function(req,res){
    res.sendFile(__dirname + "/index.html");
});

/////////GOOGLE AUTH /////////
app.get("/auth/google",
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/about', 
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/about");
});
//////////////////////////////


/////////// GITHUB AUTH /////////////////
app.get('/auth/github',
  passport.authenticate('github')
);

app.get('/auth/github/about', 
  passport.authenticate('github', { failureRedirect: '/signin' }),
  function(req, res) {
    res.redirect('/about');
});
///////////////////////////////////////


app.get("/login", function(req,res){
    res.sendFile(__dirname + "/login.html");
});

app.get("/signin", function(req,res){
    res.sendFile(__dirname + "/signin.html");
});

app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});

app.get("/about", function(req,res){
    if(req.isAuthenticated()){
        res.sendFile(__dirname + "/about.html");
    }else{
        res.redirect("/login");
    }
});


// post req. for signin page redirection 
app.post("/signin", function(req,res){
    User.register({username: req.body.email}, req.body.password, function(err,user){
        if(err){
            console.log(err);
            res.redirect("/signin");
        }else{
            res.sendFile(__dirname+"/about.html");            
        }
    });
});

// post req. for login redirect 
app.post("/login", function(req,res){

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res,function(){
                res.sendFile(__dirname + "/about.html");
            });
        }
    });

});



// Server connection established 
app.listen(3000, function(){
    console.log("Server is live on port 3000");    
});