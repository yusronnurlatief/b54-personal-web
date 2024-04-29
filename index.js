const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { title } = require("process");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));

//body parser
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", home);
app.get("/contactForm", contact);

app.get("/myproject", addproject);
app.post("/myproject", addBlog);
app.post("/edit-blog/", editBlog);
app.delete("/myproject/:id", deleteBlog);

app.get("/add-blog", addBlogView);
app.get("/edit-blog/:id", editBlogView);

app.get("/detail/:id", detail);
app.get("/testimonial", testimonial);

const data = [];
//controller
function home(req, res) {
  res.render("index");
}
function contact(req, res) {
  res.render("contactForm");
}
function detail(req, res) {
  const { id } = req.params;
  const selectedData = data[id];
  res.render("detail", { data: selectedData });
}
function addproject(req, res) {
  res.render("myproject", { data });
}

function addBlog(req, res) {
  const { title, content, startdate, enddate } = req.body;
  data.unshift({
    title,
    content,
    startdate,
    enddate,
    image:
      "https://images.pexels.com/photos/17039413/pexels-photo-17039413/free-photo-of-vaca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  });
  console.log(data);
  res.redirect("myproject");
}

function deleteBlog(req, res) {
  const { id } = req.params;
  data.splice(id, 1);
  res.redirect("/myproject");
}

function editBlog(req, res) {
  const { title, content, id, startdate, enddate } = req.body;
  data[id] = {
    title,
    content,
    startdate,
    enddate,
  };
  res.redirect("/myproject");
}

function addBlogView(req, res) {
  res.render("add-blog");
}

function editBlogView(req, res) {
  const { id } = req.params;
  const selectedData = data[id];
  selectedData.id = id;
  res.render("edit-blog", { data: selectedData });
}

function testimonial(req, res) {
  res.render("testimonial");
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
