let container = document.querySelector('#container')
let Colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let cadres = 500
for(let i =0 ; cadres > i ; i++){
    let cadre = document.createElement('div')
    cadre.classList.add('square')
    container.appendChild(cadre)
    cadre.addEventListener('mouseover' , ()=> setColor(cadre))
    cadre.addEventListener('mouseout' ,()=>removeColor(cadre))
}

//fonction set Color pour ajouter le couleur a la cadre(div)
function setColor(element){
   let color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d' 
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
   
    return Colors[ Math.floor(Math.random()*Colors.length)]
}