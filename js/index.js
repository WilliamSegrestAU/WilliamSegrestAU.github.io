const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.querySelector('#menuBtn > i');
const sideBar = document.getElementById('sideBar');
const sideBarContent = document.querySelector('#sideBar > div:first-child')
const overlay = document.getElementById('overlay');
const landingFooter = document.getElementById('landingFooter');

document.addEventListener('DOMContentLoaded', function (e) {
    AOS.init({
        duration: 1200
    });

    setTimeout(() => {
        landingFooter.classList.remove('opacity-0')
    }, 2000);

    // displays double down arrow on landing page according to window offset
    window.addEventListener('scroll', () => {
            const currScroll = window.pageYOffset || document.documentElement.scrollTop;
            document.documentElement.setAttribute('data-scroll', currScroll);
    }, { passive: true });
});

// LANDING PAGE CANVAS //
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 30;

// Set canvas size and adjust particle positions
function resizeCanvas() {
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles.forEach(particle => {
        particle.x = (particle.x / oldWidth) * canvas.width;
        particle.y = (particle.y / oldHeight) * canvas.height;
    });
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Create particles for mist effect
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2
    });
}

// Add this function to draw lines between particles
function drawLines() {
    particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particle.x - particles[j].x;
            const dy = particle.y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(255, 251, 235, ${1 - distance / 100})`;
                ctx.stroke();
            }
        }
    });
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and update particles
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 251, 235, 0.5)';
        ctx.fill();

        // Move particle
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
    });

    drawLines();
    requestAnimationFrame(animate);
}

animate();