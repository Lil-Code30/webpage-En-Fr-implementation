const translation = {
  en: {
    title: "My Portfolio",
    greeting: "Welcome to my portfolio!",
    about: "I'm a web developer passionate about creating awesome websites.",
    contact: "Contact me",
  },
  fr: {
    title: "Mon Portfolio",
    greeting: "Bienvenue sur mon portfolio !",
    about:
      "Je suis un développeur web passionné par la création de sites web géniaux.",
    contact: "Contactez-moi",
  },
};

let currentLanguage = localStorage.getItem("lang") || "en";

function updateContent(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translation[lang][key];
  });

  localStorage.setItem("lang", lang);
}

// Toggle language when the button is clicked
document.getElementById("language-toggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  updateContent(currentLanguage);

  document.getElementById("language-toggle").textContent =
    currentLanguage === "en" ? "Fr" : "En";

  console.log(currentLanguage);
});

//Initial Load
updateContent(currentLanguage);
document.getElementById("language-toggle").textContent =
  currentLanguage === "en" ? "Fr" : "En";
