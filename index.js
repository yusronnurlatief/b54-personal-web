const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { title } = require("process");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));

//body parser
app.use(express.urlencoded({extended:false}))

//routes
app.get("/", home);
app.get("/contactForm", contact);
app.get("/myproject", addproject);
app.post("/myproject", addProject);
app.get("/detail/:id", detail);
app.get("/testimonial", testimonial);


const data =[]
//controller
function home(req, res) {
  res.render("index");
}
function contact(req, res) {
  res.render("contactForm");
}
function detail(req, res) {
  const {id} = req.params;
  const data ={
    id:id,
    title : "title 1",
    content : "content 1"
  }

  res.render("detail", {data:data});
}
function addproject(req, res) {
  
  res.render("myproject",{data});
}

function addProject(req,res){
  
    const {title, content, startdate, enddate} = req.body
    data.push({
        title,content, startdate, enddate
    })
    console.log(data)
    res.redirect("myproject")
}

function testimonial(req, res) {
  res.render("testimonial");
}



app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
