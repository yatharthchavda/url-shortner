const express = require("express")
const { connectToMongoDb } = require("./connect")
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

const {restrictToLoggedInUserOnly, checkAuth} = require("./middlewares/auth");
const Url = require("./models/url");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const PORT = 8001;

connectToMongoDb("mongodb://localhost:27017/url-shortener")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());

app.get("/test", async (req,res) => {
    const allUrls = await Url.find({});
    return res.render("home", 
        {urls: allUrls}
    );
});
app.use("/url", restrictToLoggedInUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);
app.get("/url/:shortId", urlRoute);
app.get("/analytics/:shortId", urlRoute);
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`))