// Select form and grid
const form = document.getElementById("testimonial-form");
const grid = document.getElementById("testimonials-grid");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const commentText = document.getElementById("comment").value;
  const authorText = document.getElementById("author").value;

  if (!commentText || !authorText) return;

  // Create new testimonial card
  const card = document.createElement("div");
  card.classList.add("testimonial-card");

  card.innerHTML = `
    <div class="testimonial-icon">
      <img src="svg/heart-thin-icon.svg" alt="">
    </div>
    <p class="testimonial-text">"${commentText}"</p>
    <h4 class="testimonial-author">– ${authorText}</h4>
  `;

  // Add staggered animation
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  grid.appendChild(card);

  // Trigger CSS animation with a tiny delay
  setTimeout(() => {
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, 50);

  // Clear form
  form.reset();
});