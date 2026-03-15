const particles = document.getElementById("particles")

function createParticle(){

const particle = document.createElement("div")

particle.style.position="absolute"
particle.style.width="3px"
particle.style.height="3px"
particle.style.background="white"

particle.style.left=Math.random()*window.innerWidth+"px"
particle.style.top="0px"

particle.style.opacity=Math.random()

particle.style.transition="transform 6s linear"

particles.appendChild(particle)

setTimeout(()=>{

particle.style.transform="translateY(100vh)"

},10)

setTimeout(()=>{

particle.remove()

},6000)

}

setInterval(createParticle,200)



const hornet=document.getElementById("hornet")

let pos=-200

function moveHornet(){

pos+=2

hornet.style.left=pos+"px"

if(pos>window.innerWidth){

pos=-200

}

requestAnimationFrame(moveHornet)

}

moveHornet()
