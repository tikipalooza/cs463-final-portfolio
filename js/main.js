// js/main.js
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.querySelector("#contact-form");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const projectCategories = card.dataset.category.split(" ");

      if (
        selectedFilter === "all" ||
        projectCategories.includes(selectedFilter)
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const formStatus = document.querySelector("#form-status");

    clearFormErrors();

    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name.");
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      showError(emailInput, "Please enter your email.");
      isValid = false;
    } else if (!emailInput.value.includes("@")) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      showError(messageInput, "Please enter a message.");
      isValid = false;
    }

    if (isValid) {
      formStatus.textContent = "Thanks! This demo form passed validation.";
      contactForm.reset();
    } else {
      formStatus.textContent = "";
    }
  });
}

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");
  errorMessage.textContent = message;
}

function clearFormErrors() {
  const errorMessages = document.querySelectorAll(".error-message");

  errorMessages.forEach((message) => {
    message.textContent = "";
  });
}
