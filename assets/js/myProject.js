

// var dataProject = [];

// function showModal(message) {
//   let modal = document.getElementById("myModal");
//   let modalMessage = document.getElementById("modalMessage");
//   modalMessage.innerText = message;
//   modal.style.display = "block";

//   let closeButton = document.getElementsByClassName("close")[0];
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// }

// var hiddenText = document.getElementById("hidden-item");

// function addProject(event) {
//   event.preventDefault();

//   let title = document.getElementById("projectName").value;
//   let startdate = document.getElementById("startdate").value;
//   let enddate = document.getElementById("enddate").value;
//   let content = document.getElementById("Content").value;
//   let image = document.getElementById("input-image").files[0];
//   let checkbox1 = document.getElementById("checkbox1").checked;
//   let checkbox2 = document.getElementById("checkbox2").checked;
//   let checkbox3 = document.getElementById("checkbox3").checked;
//   let checkbox4 = document.getElementById("checkbox4").checked;


//   if (title == "") {
//     showModal("Please enter your title!");
//     return;
//   } else if (startdate == "") {
//     showModal("Please enter your start date!");
//     return;
//   } else if (enddate == "") {
//     showModal("Please enter your end date!");
//     return;
//   } else if (content == "") {
//     showModal("Please enter your content!");
//     return;
//   } else if (image === "") {
//     showModal("Please select an image!");
//     return;
//   } else if (!(checkbox1 || checkbox2 || checkbox3 || checkbox4)) {
//     showModal("Please check at least one checkbox!");
//     return;
//   }


//   let imageURL = URL.createObjectURL(image);

//   let startDatePart = startdate.split("/");
//   let endDatePart = enddate.split("/");

//   let formatStartDate =
//     startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0];
//   let formatEndDate =
//     endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0];

//   let newStartDate = new Date(formatStartDate);
//   let newEndDate = new Date(formatEndDate);

//   let timeDifference = newEndDate - newStartDate;
//   let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   let differenceInMonths = Math.floor(differenceInDays / 30.44);
//   let differenceInYears = Math.floor(differenceInMonths / 12);

//   let duration;

//   if (differenceInYears > 0) {
//     duration = `${differenceInYears} years`;
//   } else if (differenceInMonths > 0) {
//     duration = `${differenceInMonths} months`;
//   } else {
//     duration = `${differenceInDays} days`;
//   }
  
//   console.log(imageURL);
//   dataProject.push({
//     title: title,
//     startdate: startdate,
//     enddate: enddate,
//     content: content,
//     image: imageURL,
//     checkbox1:checkbox1,
//     checkbox2:checkbox2,
//     checkbox3:checkbox3,
//     checkbox4:checkbox4,
//     duration: duration,
//   });
//   localStorage.setItem("data",JSON.stringify(dataProject))
//   console.log(dataProject);
//   console.log(image);
//   hiddenText.style.display = "block";
//   newData();
// }


// function newData() {

//   document.getElementById("card").innerHTML = "";
//   for (let i = 0; i < dataProject.length; i++) {
//     const project = dataProject[i];
//     document.getElementById("card").innerHTML += `
//       <div class="container">
//         <div class="card">
//           <img src="${project.image}" alt="Image">
//           <p class="title-content">${project.title}</p>
//           <p class="duration">Duration: ${project.duration}</p>
//           <p class="content-wrap">Dumbways Web Apps</p>
//           <div class="icon">
//             <img src="./assets/image/playstore.png" alt="">
//             <img src="./assets/image/android.png" alt="">
//             <img src="./assets/image/java.png" alt="">
//           </div>
//           <div class="bt-card">
//             <button class="bt-edit">Edit</button>
//             <button class="bt-delete">Delete</button>
//           </div>
//         </div>
//       </div>`;
//   }


//   const titles = document.querySelectorAll(".title-content");
//   titles.forEach((title) => {
//     title.addEventListener("click", function () {
//       const index = Array.from(titles).indexOf(title);
//       showDetail(index);
//     });
//   });
// }

// function showDetail(index) {
//   let project = dataProject[index];
//  // let detailURL = `detail.html?id=`+index
//   let detailURL = `detail.html?title=${encodeURIComponent(
//     project.title
//   )}&startdate=${encodeURIComponent(
//     project.startdate
//   )}&enddate=${encodeURIComponent(
//     project.enddate
//   )}&content=${encodeURIComponent(
//     project.content
//   )}&image=${encodeURIComponent(
//     project.image
//   )}&duration=${encodeURIComponent(
//     project.duration
//   )}`;

//   window.open(detailURL,"_blank");
// }
