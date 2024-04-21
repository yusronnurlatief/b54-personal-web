const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/1668203/pexels-photo-1668203.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap sekali brow!!!",
    author: "Michael",
    rating: 2,
  },
  {
    image:
      "https://images.pexels.com/photos/1416971/pexels-photo-1416971.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "GG Bang!!!",
    author: "Jason",
    rating: 4,
  },
  {
    image:
      "https://images.pexels.com/photos/3707987/pexels-photo-3707987.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Joss",
    author: "Mac Arthur",
    rating: 3,
  },
  {
    image:
      "https://images.pexels.com/photos/3626050/pexels-photo-3626050.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Very Well",
    author: "John",
    rating: 5,
  },
  {
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Nice Broo",
    author: "David",
    rating: 5,
  },
];
function alltestimonial() {
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

function filterTestimonial(rating) {
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
