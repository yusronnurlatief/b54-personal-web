const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { title } = require("process");

const config = require("./config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));

//body parser
app.use(express.urlencoded({ extended: false }));

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

const data = [];
//controller

function home(req, res) {
  // const query = "SELECT * FROM projects";
  // const data = await sequelize.query(query, { type: QueryTypes.SELECT });

  res.render("index", { data });
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

  res.render("myproject", { data });
}

function formatDateToYYYYMMDD(dateString) {
  if (!dateString) return null;

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-CA");

  return formattedDate;
}

async function addBlog(req, res) {
  const { name, description, technologies } = req.body;

  const startDateInput = req.body.start_date;
  const endDateInput = req.body.end_date; 

  const start_date = formatDateToYYYYMMDD(startDateInput);
  const end_date = formatDateToYYYYMMDD(endDateInput);

  const query = `INSERT INTO projects(name,start_date,end_date,description,technologies,image,"createdAt","updatedAt") VALUES('${name}','${start_date}','${end_date}','${description}','Node JS','https://images.pexels.com/photos/18383901/pexels-photo-18383901/free-photo-of-bangunan-gedung-membangun-mendirikan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',now(),now())`;
  const data = await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("myproject");
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

function editBlogView(req, res) {
  const { id } = req.params;
 
  console.log(id)
  res.render("edit-blog",{ id: id });
}

async function editBlog(req, res) {

  const { id, name,start_date, end_date, description} = req.body;
  console.log("id ne iki",id)
  const query = `UPDATE projects SET name = '${name}', start_date = '${start_date}', end_date = '${end_date}', description = '${description}', technologies = 'Node JS', image = 'https://images.pexels.com/photos/18383901/pexels-photo-18383901/free-photo-of-bangunan-gedung-membangun-mendirikan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',"createdAt" = now(), "updatedAt" = now() WHERE id = ${id}`;
  const data = await sequelize.query(query, { type: QueryTypes.UPDATE });

  res.redirect("/myproject");
}



function testimonial(req, res) {
  res.render("testimonial");
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
