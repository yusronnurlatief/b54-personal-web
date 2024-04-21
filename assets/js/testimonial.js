class Testimonial {
  image = "";
  content = "";
  author = "";

  constructor(image, content, author) {
    this.image = image;
    this.content = content;
    this.author = author;
  }

  html() {
    return `
    <div class="testimonial">
    <img src="${this.image}" alt="profile">
    <p class="quote">${this.content}</p>
    <p class="author">-${this.author}</p>
    </div>
    `;
  }
}

const testimonial1 = new Testimonial(
  "https://images.pexels.com/photos/1668203/pexels-photo-1668203.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Mantap sekali brow!!!",
  "Michael"
);
const testimonial2 = new Testimonial(
  "https://images.pexels.com/photos/1416971/pexels-photo-1416971.jpeg?auto=compress&cs=tinysrgb&w=600",
  "GG Bang!!!",
  "Jason"
);
const testimonial3 = new Testimonial(
  "https://images.pexels.com/photos/3707987/pexels-photo-3707987.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Joss",
  "Mac Arthur"
);

const Testimonials = [testimonial1, testimonial2, testimonial3];

let tesimonialHTML = "";

for (let index = 0; index < Testimonials.length; index++) {
  tesimonialHTML += Testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = tesimonialHTML