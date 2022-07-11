const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://sm.askmen.com/askmen_in/article/t/the-random/the-random-things-that-make-women-uninterested-in-an-online_mrtv.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nobis et animi tempora beatae cum corporis delectus. Deleniti vel excepturi, ullam tempora repellendus ex aliquam cum at minima nulla incidunt illum! Libero accusantium vero quidem error porro eum nemo alias! Deserunt laudantium commodi quidem cum, voluptatibus beatae? Modi, cu?",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo:
      "https://media.istockphoto.com/photos/mature-beautiful-woman-with-red-hair-picture-id1221755378?k=20&m=1221755378&s=612x612&w=0&h=rZkb0wrSR4-Qfl-MIDbD8_2L_V2KYWOf0P_EqUveAAA=",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nobis et animi tempora.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo:
      "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam nobis et animi ted, ullam tempora repellendus ex aliquam cum at minima nulla incidunt illum!",
  },
];

let index = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[index];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
}

setInterval(updateTestimonial, 10000);
// console.log(updateTestimonial);
