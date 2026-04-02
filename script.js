document.addEventListener("DOMContentLoaded", function () {

  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  /* NAVBAR SCROLL EFFECT */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(59, 130, 246, 0.6)";
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
      navbar.style.background = "rgba(255,255,255,0.15)";
      navbar.style.boxShadow = "none";
    }
  });

  /* TOGGLE MENU */
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  /* CLOSE MENU WHEN LINK CLICKED */
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

});


/* SIMPLE SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});


const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  status.textContent = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "❌ Failed to send. Try again.";
    }
  } catch (err) {
    status.textContent = "❌ Failed to send. Try again.";
  }
});







window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".services-header");
  const h2 = header.querySelector("h2");
  const p = header.querySelector("p");

  const titleText = "Our Services";
  const paragraphText = "Compassionate care designed for comfort, independence, and peace of mind.";

  function splitText(element, text) {
    element.innerHTML = text
      .split("")
      .map(letter => `<span>${letter}</span>`)
      .join("");
  }

  splitText(h2, titleText);
  splitText(p, paragraphText);

  function animateHeader() {
    const top = header.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;

    if (top < trigger) {
      header.classList.add("show");

      document.querySelectorAll(".services-header span").forEach((span, i) => {
        span.style.transitionDelay = `${i * 0.02}s`;
      });

      window.removeEventListener("scroll", animateHeader);
    }
  }

  window.addEventListener("scroll", animateHeader);
  animateHeader(); // 👈 IMPORTANT (runs immediately)
});











