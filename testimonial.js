"use strict";

const container = document.querySelector(".container");

const people = [
  {
    pic: "./images/profile/pic-1.jpg",
    name: "Arav Ahuja",
    phrase: "loved the experince",
    message:
      "Amazing experience! The tour was well-organized and the guide was very knowledgeable. Highly recommend!",
  },
  {
    pic: "./images/profile/pic-2.jpg",
    name: "Akash Kumar",
    phrase: "loved the experince",
    message:
      "Best vacation ever! Everything was taken care of, from transport to accommodation. Five stars",
  },
  {
    pic: "./images/profile/pic-3.jpg",
    name: "Ritesh Sharma",
    phrase: "loved the experince",
    message:
      "Amazing experience! The tour was well-organized and the guide was very knowledgeable. Highly recommend!",
  },
  {
    pic: "./images/profile/pic-4.jpg",
    name: "Arjun Verma",
    phrase: "loved the experince",
    message:
      "Best vacation ever! Everything was taken care of, from transport to accommodation. Five stars",
  },
  {
    pic: "./images/profile/pic-3.jpg",
    name: "Purav Jha",
    phrase: "loved the experince",
    message:
      "Memorable adventure! Well-planned tour with excellent customer service. Definitely worth it!",
  },
  {
    pic: "./images/profile/pic-1.jpg",
    name: "Jone Doe",
    phrase: "loved the experince",
    message:
      "Fantastic tour! We enjoyed every moment and the guide was superb. Highly satisfied!",
  },
  {
    pic: "./images/profile/pic-6.jpg",
    name: "Jonas Frenz",
    phrase: "loved the experince",
    message:
      "Memorable adventure! Well-planned tour with excellent customer service. Definitely worth it!",
  },
  {
    pic: "./images/profile/pic-4.jpg",
    name: "Jay Kumar",
    phrase: "loved the experince",
    message:
      "Fantastic tour! We enjoyed every moment and the guide was superb. Highly satisfied!",
  },
  {
    pic: "./images/profile/pic-2.jpg",
    name: "Sukendu Chandra",
    phrase: "loved the experince",
    message:
      "Amazing experience! The tour was well-organized and the guide was very knowledgeable. Highly recommend!",
  },
];

const cardBuilder = function () {
  people.forEach((person) => {
    const html = ` <div class="card">
            <div class="profile">
                <img src=${person.pic} alt="Profile Picture">
                <div class="info">
                    <h3>${person.name}</h3>
                    <p>${person.phrase}</p>
                </div>
            </div>
            <div class="message">
                <p>${person.message}</p>
            </div>
        </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};

cardBuilder();
