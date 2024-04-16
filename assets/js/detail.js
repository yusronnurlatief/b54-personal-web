const toggleCheckbox = document.getElementById('toggle-menu');
const dropdownMenu = document.querySelector('.dropdown');

toggleCheckbox.addEventListener('change', function() {

  if (toggleCheckbox.checked) {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});

window.onload = function () {
  // Ambil parameter dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const startdate = urlParams.get("startdate");
  const enddate = urlParams.get("enddate");
  const content = urlParams.get("content");
  const image = urlParams.get("image");
  const duration = urlParams.get("duration");

const startDate = new Date(startdate);
const endDate = new Date(enddate);

const daftarBulan = [
  "Jan", "Feb", "Mar", "April", "Mei", "June",
  "July", "August", "Sept", "Oct", "Nov", "Des"
];

const startTanggalFix = startDate.getDate();
const startBulanFix = daftarBulan[startDate.getMonth()];
const startTahunFix = startDate.getFullYear();

const startTanggalAkhir = startTanggalFix + ' ' + startBulanFix + ' ' + startTahunFix;

const endTanggalFix = endDate.getDate();
const endBulanFix = daftarBulan[endDate.getMonth()];
const endTahunFix = endDate.getFullYear();

const endTanggalAkhir = endTanggalFix + ' ' + endBulanFix + ' ' + endTahunFix;

  

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
                        <p class="time-info"><img class="icon-time" src="./assets/image/calendar.png" alt="">${startTanggalAkhir} - ${endTanggalAkhir}</p>
                        <p class="time-info"><img class="icon-time" src="./assets/image/clock.png" alt="">${duration}</p>
                        <p class="tech">Technologies</p>
                        <div class="img-cont">
                            <p><img src="./assets/image/atom.png" alt="">React JS</p>
                            <p><img src="./assets/image/js.jpg" alt="">Javascript</p>
                            <p><img src="./assets/image/Untitled-1.png" alt="">Node JS</p>
                            <p><img src="./assets/image/electricity.png" alt="">Socket IO</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="content-detail">${content}</p>
    </div>
    `;
};
