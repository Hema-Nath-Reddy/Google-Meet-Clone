document.addEventListener("DOMContentLoaded", () => {
  const inputName = document.querySelector(".input-name");
  const username = document.getElementById("username");
  const emailInput = document.getElementById("Email");
  const intial = document.querySelector(".initial");
  const wrong = document.querySelector(".initial .top span");
  inputName.showModal();
  document.querySelector(".input-name form").addEventListener("submit", (e) => {
    e.preventDefault();
    inputName.close();
    setTimeout(() => {
      intial.style.display = "none";
    }, 7000);
    username.value =
      username.value.charAt(0).toUpperCase() +
      username.value.slice(1).toLowerCase();
    document.querySelector(".HN").innerHTML = username.value;
    document.querySelector(".email").innerHTML =
      "Joined as " + emailInput.value;
    document.querySelector(".host").innerHTML = username.value;
    document.querySelector(".presenter").innerHTML = username.value;
  });
  wrong.addEventListener("click", () => {
    intial.style.display = "none";
  });
  document.querySelector(".not-allowed-video").addEventListener("click", () => {
    document.querySelector(".video-not-allowed").showModal();
  });
  document
    .querySelector(".video-not-allowed .Icons")
    .addEventListener("click", () => {
      document.querySelector(".video-not-allowed").close();
    });
  document.querySelector(".not-allowed-audio").addEventListener("click", () => {
    document.querySelector(".audio-not-allowed").showModal();
  });
  document
    .querySelector(".audio-not-allowed .Icons")
    .addEventListener("click", () => {
      document.querySelector(".audio-not-allowed").close();
    });
});
