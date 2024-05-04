const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { title } = require("process");

const config = require("./config/config.json");
const { Sequelize, QueryTypes, where } = require("sequelize");
const sequelize = new Sequelize(config.development);
const blogModel = require("./models").project;
const User = require("./models").user;
const bcrypt = require("bcrypt");
const session = require("express-session")
const flash = require("express-flash")

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));

//body parser
app.use(express.urlencoded({ extended: false }));


app.use(session({
  name: "mysession",
  secret : "secret",
  resave : false,
  saveUninitialized :true,
  cookie:{
    secure:false,
    maxAge:1000*60*60*24
  }
}))

app.use(flash())

//routes
app.get("/", home);
app.get("/contactForm", contact);

app.get("/myproject", blog);
app.post("/myproject", addBlog);
app.post("/edit-blog/", editBlog);
app.post("/delete-myproject/:id", deleteBlog);

app.get("/add-blog", addBlogView);
app.get("/edit-blog/:id", editBlogView);

app.get("/detail/:id", detail);
app.get("/testimonial", testimonial);

app.get("/login", loginView);
app.get("/register", registerView);

app.post("/register", register);
app.post("/login", login);
app.post("/logout",logout);

//controller
const data =[]
function loginView(req, res) {
  res.render("login");
}
function registerView(req, res) {
  res.render("register");
}
async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if(!user){
    req.flash("danger","Email/Password is Wrong!")
    return res.redirect("/login")
  }

  const isPasswordValid = await bcrypt.compare(password,user.password)
  if(!isPasswordValid){
    req.flash("danger","Email/Password is Wrong")
    return res.redirect("/login")
  }

  req.session.isLogin = true
  req.session.user = {
    name : user.name,
    email :user.email
  }
  req.flash("success","Login Success!")
  res.redirect("/")
}
async function register(req, res) {
  const { name, email, password } = req.body;
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);

  User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.redirect("/login");
}

async function logout(req,res){
  req.session.destroy(function(err){
    if(err) return console.error("Failed")

    res.redirect("/")
  })
}

function home(req, res) {
  // const query = "SELECT * FROM projects";
  // const data = await sequelize.query(query, { type: QueryTypes.SELECT });
  const isLogin = req.session.isLogin
  const user = req.session.user
  res.render("index",{isLogin,user});
}

function contact(req, res) {
  res.render("contactForm");
}

async function detail(req, res) {
  const { id } = req.params;
  console.log(id);
  const query = `SELECT * FROM projects WHERE id = ${id}`;

  const data = await sequelize.query(query, { type: QueryTypes.SELECT });

  console.log("baca data", data[0]);
  res.render("detail", { data: data[0] });
}

async function blog(req, res) {
  const query = "SELECT * FROM projects";
  const data = await sequelize.query(query, { type: QueryTypes.SELECT });

  const isLogin = req.session.isLogin
  const user = req.session.user

  res.render("myproject", { data,isLogin,user });
}

function formatDateToYYYYMMDD(dateString) {
  if (!dateString) return null;

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-CA");

  return formattedDate;
}

async function addBlog(req, res) {
  const { name, description } = req.body;

  const technologies = Array.isArray(req.body.technologies)
    ? req.body.technologies
    : [];

  const technologiesString = technologies.join(",");

  const startDateInput = req.body.start_date;
  const endDateInput = req.body.end_date;

  const start_date = formatDateToYYYYMMDD(startDateInput);
  const end_date = formatDateToYYYYMMDD(endDateInput);

  const imageUrl =
    "https://images.pexels.com/photos/18383901/pexels-photo-18383901/free-photo-of-bangunan-gedung-membangun-mendirikan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  const query = `INSERT INTO projects(name, start_date, end_date, description, technologies, image, "createdAt", "updatedAt") VALUES('${name}', '${start_date}', '${end_date}', '${description}', '${technologiesString}', '${imageUrl}', now(), now())`;

  const data = await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("/myproject");
}

async function deleteBlog(req, res) {
  const { id } = req.params;
  const query = `DELETE FROM projects WHERE id=${id}`;
  const data = await sequelize.query(query, { type: QueryTypes.DELETE });

  res.redirect("/myproject");
}

function addBlogView(req, res) {
  res.render("add-blog");
}

async function editBlogView(req, res) {
  const { id } = req.params;
  const data = await blogModel.findOne({
    where: { id },
  });
  res.render("edit-blog", { data });
}

async function editBlog(req, res) {
  const { id, name, start_date, end_date, description } = req.body;
  const technologies = Array.isArray(req.body.technologies)
    ? req.body.technologies
    : [];
  const technologiesString = technologies.join(",");

  const query = `UPDATE projects SET name = '${name}', start_date = '${start_date}', end_date = '${end_date}', description = '${description}', technologies = '${technologiesString}', image = 'https://images.pexels.com/photos/18383901/pexels-photo-18383901/free-photo-of-bangunan-gedung-membangun-mendirikan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',"createdAt" = now(), "updatedAt" = now() WHERE id = ${id}`;

  const data = await sequelize.query(query, { type: QueryTypes.UPDATE });

  res.redirect("/myproject");
}

function testimonial(req, res) {
  res.render("testimonial");
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
