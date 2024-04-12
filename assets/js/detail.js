window.onload = function () {
  // Ambil parameter dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const startdate = urlParams.get("startdate");
  const enddate = urlParams.get("enddate");
  const content = urlParams.get("content");
  const image = urlParams.get("image");
  const duration = urlParams.get("duration");

  console.log(image);
  

  // Tampilkan detail proyek
  const projectDetailDiv = document.getElementById("projectDetail");
  projectDetailDiv.innerHTML = `
    <div class="main-cont">
        <h1>${title}</h1>
            <div class="up-container">
                <div class="flex-cont">
                    <img class="image-content" src="${image}" alt="Project Image" />
                    <div class="info-cont">
                        <P class="title-info">Duration</P>
                        <p class="time-info">${startdate} - ${enddate}</p>
                        <p class="time-info">${duration}</p>
                        <p class="title-info">Technologies</p>
                        <div class="img-cont">
                            <p><img src="./assets/image/playstore.png" alt="">React JS</p>
                            <p><img src="./assets/image/playstore.png" alt="">Node JS</p>
                            <p><img src="./assets/image/playstore.png" alt="">Javascript</p>
                            <p><img src="./assets/image/playstore.png" alt="">Socket IO</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="content-detail">${content}</p>
    </div>
    `;
};
