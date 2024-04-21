async function getTestimonialData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET",url , true);

    xhr.onload = function () {
      resolve(xhr.responseText);
    };
    xhr.onerror = function () {
      reject(new Error("Request failed"));
    };

    xhr.send();
  });
}

async function fetchData() {
  try {
    const response = await getTestimonialData("https://api.npoint.io/ea58f243f6bb575ddb7b");
    console.log(JSON.parse(response),"Done Fetching");

  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();

async function alltestimonial() {
  const testimonials =JSON.parse(await getTestimonialData("https://api.npoint.io/ea58f243f6bb575ddb7b") );
  if( !testimonials.length){
      return document.getElementById("testimonials").innerHTML=`<h1>Data Not Found</h1>`
  }
const testimonialHTML = testimonials.map((testimonial) => {
  return `
    <div class="testimonial">
    <img src="${testimonial.image}" alt="profile">
    <p class="quote">${testimonial.content}</p>
    <p class="author">-${testimonial.author}</p>
    </div>
    `;
});

document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

async function filterTestimonial(rating) {
  const testimonials = JSON.parse (await getTestimonialData("https://api.npoint.io/ea58f243f6bb575ddb7b"));
  const filteredTestimonial = testimonials.filter(testimonial=>testimonial.rating == rating)

  if( !filteredTestimonial.length){
      return document.getElementById("testimonials").innerHTML=`<h1>Data Not Found</h1>`
  }
  const testimonialHTML = filteredTestimonial.map((testimonial) => {
      return `
        <div class="testimonial">
        <img src="${testimonial.image}" alt="profile">
        <p class="quote">${testimonial.content}</p>
        <p class="author">-${testimonial.author}</p>
        </div>
        `;
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

alltestimonial();
