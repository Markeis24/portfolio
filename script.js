const particles = document.getElementById("particles")

function createParticle(){

const particle=document.createElement("div")

particle.style.position="absolute"
particle.style.width="3px"
particle.style.height="3px"
particle.style.background="#577ae4"

particle.style.left=Math.random()*window.innerWidth+"px"
particle.style.top="0"

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



function attack(){

const knight=document.querySelector(".knight")

knight.style.transform="scale(1.2) rotate(-10deg)"

setTimeout(()=>{

knight.style.transform="scale(1)"

},200)

}



function mostrarInfo(area){

const info=document.getElementById("infoMapa")

if(area==="cidade"){

info.innerText="Área dos meus projetos acadêmicos."

}

if(area==="ninho"){

info.innerText="Desafios enfrentados aprendendo programação."

}

if(area==="jardins"){

info.innerText="Crescimento na minha jornada na tecnologia."

}

}
