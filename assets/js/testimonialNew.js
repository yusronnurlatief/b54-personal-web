const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap sekali brow!!!",
    author: "Monyet",
    rating: 2,
  },
  {
    image:
      "https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "GG Bang!!!",
    author: "Kungkung",
    rating: 4,
  },
  {
    image:
      "https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Joss",
    author: "Lemur",
    rating: 3,
  },
  {
    image:
      "https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Very Well",
    author: "Ketek",
    rating: 5,
  },
  {
    image:
      "https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Noobb",
    author: "King Kong",
    rating: 5,
  },
];
function alltestimonial() {
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

    if( filteredTestimonial.length<=0){
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
