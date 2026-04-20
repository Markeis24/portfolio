const particles = document.getElementById("particles");

function createParticle() {
    const particle = document.createElement("div");

    particle.style.position = "absolute";
    particle.style.width = "3px";
    particle.style.height = "3px";
    particle.style.background = "#577ae4";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = "0";
    particle.style.transition = "transform 6s linear";

    particles.appendChild(particle);

    setTimeout(() => {
        particle.style.transform = "translateY(100vh)";
    }, 10);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

setInterval(createParticle, 200);

function attack() {
    const knight = document.querySelector(".knight");

    knight.style.transform = "scale(1.2) rotate(-10deg)";

    setTimeout(() => {
        knight.style.transform = "scale(1)";
    }, 200);
}
