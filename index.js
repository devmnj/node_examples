const express = require("express");
const session = require("express-session");
const flash = require("express-flash-messages");
require("dotenv").config();
var submitSitemap = require("submit-sitemap").submitSitemap;

app = express();
app.use("/assets", express.static("assets"));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.set("view engine", "ejs");
app.use(session({
  secret: 'secret',
  resave:true,
  saveUninitialized:true
}))


app.post("/", (req, res) => {
  try {
    const url = req.body.siteUrl;

    if (url) {
      submitSitemap(url, (err) => {
        if (err == undefined) {

          req.flash("notify", "Sitemap being submitted to Bing and Google");
          res.redirect("/");
          console.log("Good SM");
        } else {
           req.flash(
            "notify",
            "Wrong site map/slow connection, please double check"
          )
          res.redirect('/')
          console.log("Wrong SM");
        }
      });
    } else {
      req.flash(
        "notify",
        "Empty URI"
      )
      res.redirect('/')
      console.log("Empty URI");
    }
  } catch (error) {
    console.log("Error cached");
    req.flash("notify", "Slow connection may be !");
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT, () => {
  console.log(`listening to ${process.env.PORT}`);
});
