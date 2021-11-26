// Express
const express = require("express");
const app = express();
// Passport
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
// Cors
const cors = require("cors");
// Cookie Session
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: ["fil"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!!!");
});

