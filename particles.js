// https://codepen.io/indieklem/pen/mdJONg

// Get references to the canvas and its drawing context
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');


// Set canvas dimensions based on the section's size
canvas.width = canvas.parentNode.offsetWidth;
canvas.height = canvas.parentNode.offsetHeight;

// Variables to control particle properties
const numParticles = 100; // Adjust for desired particle density
const particleRadius = 3; // Adjust for particle size
const colors = ['#fff', '#ccc', '#999']; // Array of particle colors

// Function to create a particle object
function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: Math.random() * 2 - 1, // Random horizontal velocity
    dy: Math.random() * 2 - 1, // Random vertical velocity
    radius: particleRadius,
    color: colors[Math.floor(Math.random() * colors.length)], // Random color
  };
}

// Create an array of particles
const particles = [];
for (let i = 0; i < numParticles; i++) {
  particles.push(createParticle());
}

// Function to draw a single particle
function drawParticle(particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();
}

// Function to animate the particles
function animateParticles() {
  requestAnimationFrame(animateParticles); // Schedule next animation frame

  // Clear the canvas before redrawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update particle positions and draw them
  particles.forEach((particle) => {
    particle.x += particle.dx;
    particle.y += particle.dy;

    // Handle bouncing off edges
    if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
      particle.dx *= -1;
    }
    if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
      particle.dy *= -1;
    }

    drawParticle(particle);
  });
}

// Start the animation
animateParticles();
