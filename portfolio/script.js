Window.onload = function () {
  alert("Welcome to Farha's Personal Website!");
};

window.onload = function () {
  displayDateTime();
};

function changeAboutMeText() {
  const aboutMeTexts = ["Tech Enthusiast", "Full Stack Web Developer"];
  const typingSpeed = 100; //milliseconds per character
  const eraseSpeed = 50;
  const pauseTime = 1500;
  const aboutMeElement = document.querySelector(".about-me");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = aboutMeTexts[textIndex];
    /* Typing stage*/
    if (!isDeleting && charIndex < currentText.length) {
      aboutMeElement.textContent += currentText[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      /*Erasing*/
      aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, eraseSpeed);
    } else {
      /* Switching the deleting or Typing procees */
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % aboutMeTexts.length;
      }
      setTimeout(type, pauseTime);
    }
  }
  type();
}

//call function to add stunning modification

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentMode = body.classList.contains("dark-mode") ? "Dark" : "Light";
    darkModeToggle.querySelector("i").classList.toggle("fa-sun");
    darkModeToggle.querySelector("i").classList.toggle("fa-moon");
    darkModeToggle.querySelector("i").classList.toggle("light-mode");
  });
});
changeAboutMeText();

/* document.addEventListener("DOMContentLoaded", function () {
    const Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector(".progress-bar");
          /*
          const progressBar = progressBar.dataset.progress; 
  
          progressBar.style.setProperty("--progress", "$(progress)%");
          progressBar.classList.add("animated");
          Observer.unobserve(entry.target);
        }
      });
    });
  
    const programmingLanguages = document.querySelectorAll(
      "#programming-languages .skill"
    );
    programmingLanguages.forEach((skill) => {
      Observer.Observe(skill);
    });
  }); */
// Skill percentages
