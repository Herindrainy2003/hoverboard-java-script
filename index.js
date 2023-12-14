let container = document.querySelector('#container')
let words = ['A', 'B', 'C', 'D', 'E','F', 'G' ,'H', 'I', 'J', 'K']
let Colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let cadres =  300

for(let i= 0 ; cadres > i ; i++){
    let cadre = document.createElement('div')
    cadre.classList.add('square')
    container.appendChild(cadre)
    cadre.addEventListener('mouseover' ,() =>setWord(cadre))
    cadre.addEventListener('mouseout' ,()  =>removeWord(cadre))
}

function setWord(element){
    let word = getRandomWord()
    let color = getRandomColor()
    element.textContent = word
    element.style.color = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeWord(element){
    element.style.background = '#1d1d1d' 
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]
}

function getRandomColor(){
   
    return Colors[ Math.floor(Math.random()*Colors.length)]
}