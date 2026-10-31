
// IMPORTANT: Replace this with your real WhatsApp number.
// Use international format without + or spaces, e.g. 2547XXXXXXXX.
const AGENCY_WHATSAPP = "2547XXXXXXXX";

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Automatically select a service when a service card is clicked
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("service").value = link.dataset.service;
  });
});

// WhatsApp project enquiry
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  if (AGENCY_WHATSAPP === "2547XXXXXXXX") {
    alert("Please add your real WhatsApp number in script.js first.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const business = document.getElementById("business").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  const message = `
Hello ACID Website Solutions!

I would like to enquire about a website project.

Name: ${name}
Business: ${business}
Phone: ${phone}
Service needed: ${service}

Project details:
${details || "I would like to discuss my project with you."}

Please get back to me. Thank you!
  `.trim();

  const whatsappURL =
    `https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Colourful animated background particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];
let width = 0;
let height = 0;

const particleColours = [
  "rgba(200,255,0,0.65)",
  "rgba(255,69,183,0.55)",
  "rgba(146,87,255,0.55)",
  "rgba(37,201,255,0.55)"
];

function resizeCanvas() {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  createParticles();
}

function createParticles() {
  const count = Math.min(65, Math.floor(width / 18));

  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 0.45,
    speedY: (Math.random() - 0.5) * 0.45,
    colour: particleColours[
      Math.floor(Math.random() * particleColours.length)
    ]
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach(particle => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > width) {
      particle.speedX *= -1;
    }

    if (particle.y < 0 || particle.y > height) {
      particle.speedY *= -1;
    }

    ctx.beginPath();
    ctx.arc(
      particle.x,
      particle.y,
      particle.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = particle.colour;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateParticles();
