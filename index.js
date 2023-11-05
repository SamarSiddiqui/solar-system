let mainContainer = document.createElement('div')
let heading = document.createElement('h1')
let inputDiv = document.createElement('div')
let firstInput = document.getElementById('first-input')
let scndInput = document.getElementById('scnd-input')
let butTon = document.getElementById('btn')

document.body.appendChild(mainContainer)
mainContainer.style.background = 'url(galaxy.jpg)'
mainContainer.style.backgroundSize = 'cover'
mainContainer.style.backgroundPosition = 'center'
mainContainer.style.height = '100vh'
mainContainer.style.display = 'flex'
mainContainer.style.flexDirection = 'column'
mainContainer.style.justifyContent = 'space-even'
mainContainer.style.fontFamily = 'san-serif'


mainContainer.appendChild(heading)
heading.style.textAlign = 'center'
heading.style.color = 'white'
heading.style.paddingTop = '40px'
heading.style.fontWeight = 'bold'
heading.style.fontSize = '40px'
heading.textContent = 'Calculate a weight of an object on a planet'

mainContainer.appendChild(inputDiv)
inputDiv.style.height = '44px'
inputDiv.style.display = 'flex'
inputDiv.style.marginTop = '30px'
inputDiv.style.justifyContent = 'center'

inputDiv.appendChild(firstInput)
firstInput.style.width = '230px'
firstInput.style.height = '40px'
firstInput.style.marginRight = '5px'
firstInput.style.fontSize = '17px'
firstInput.style.background = 'white'
firstInput.style.paddingLeft = '7px'

inputDiv.appendChild(scndInput)
scndInput.style.width = '170px'
scndInput.style.height = '44px'
scndInput.style.paddingLeft = '5px'
scndInput.style.fontSize = '17px'
scndInput.style.color = 'grey'

inputDiv.appendChild(butTon)
butTon.style.width = '140px'
butTon.style.height = '44px'
butTon.style.marginLeft = '10px'
butTon.style.backgroundColor = 'grey'
butTon.style.color = 'white'
butTon.style.fontSize = '15px'
butTon.style.fontWeight = 'bold'
butTon.style.color = 'white'
butTon.style.outline = 'none'
butTon.style.border = 'none'
butTon.style.cursor = 'pointer'

let warninGDiv = document.createElement('div')
mainContainer.appendChild(warninGDiv)
warninGDiv.style.padding = '10px'
let h1Warning = document.createElement('div')
warninGDiv.appendChild(h1Warning)
let h2Content = document.createElement('div')
mainContainer.appendChild(h2Content)
let planetImg = document.createElement('img')
h2Content.appendChild(planetImg)

h2Content.style.padding = '100px'
h2Content.style.marginLeft = '19%'
h2Content.style.width = '50%'
h2Content.style.height = '35%'
h2Content.style.display = 'flex'
h2Content.style.justifyContent = 'space-around'
let outSide = document.createElement('div')
h2Content.appendChild(outSide)
let inSide = document.createElement('div')
outSide.appendChild(inSide)

inSide.style.display = 'flex'
inSide.style.justifyContent = 'center'
inSide.style.alignItems = 'center'

firstInput.addEventListener('input', function () {
 this.value = this.value.replace(/[^0-9]/g, '')
})

let weightCal = (g)=>{
 return firstInput.value * g
}
butTon.addEventListener('click',function(){
 
if(firstInput.value == '') {
h1Warning.textContent = 'Mass is required'
h1Warning.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
h1Warning.style.margin = '15px'
h1Warning.style.fontSize = '30px'
h1Warning.style.color = 'white'
h1Warning.style.fontWeight = 'bold'
h1Warning.style.fontFamily = 'san-serif'
h1Warning.style.marginRight = '500px'
h1Warning.style.marginLeft = '500px'
h1Warning.style.textAlign = 'center'
}else if (scndInput.value =='earth') {
h1Warning.textContent = ''
planetImg.src = 'earth-1.png'
planetImg.style.width = '400px '
planetImg.style.height = '300px'
planetImg.style.marginLeft = '50px'
h2Content.style.backgroundColor = 'rgba(255,255,255,0.1)'
let naME = scndInput.value.toUpperCase()
 
outSide.style.width = '420px'
outSide.style.height = '140px '
outSide.style.marginLeft = '25px '
outSide.style.marginTop = '70px '
outSide.style.textAlign = 'center'
outSide.style.color = 'white'
outSide.style.fontFamily = 'san-serif'
outSide.style.fontSize = '20px'
outSide.style.fontWeight = 'bold'
outSide.textContent = `The weight of the object on ${naME}`
outSide.style.backgroundColor = 'rgba(255,255,255,0.3)'
  
outSide.appendChild(inSide)
inSide.style.width = '20px'
inSide.style.height = '20px'
inSide.style.padding = '40px'
inSide.style.marginLeft = '130px'
inSide.style.marginTop = '12px'
inSide.style.backgroundColor = 'rgba(255,255,255,0.5)'
inSide.style.borderRadius = '50px'
inSide.textContent = `${weightCal(1)}`

} else if (scndInput.value == 'jupiter'){
h1Warning.textContent = ''
planetImg.src = 'j5.png'
planetImg.style.width = '400px'
planetImg.style.height = '300px'
planetImg.style.marginLeft = '50px'
h2Content.style.backgroundColor = 'rgba(255,255,255,0.1)'

outSide.style.width = '420px'
outSide.style.height = '140px '
outSide.style.marginLeft = '45px '
outSide.style.marginTop = '70px '
outSide.style.textAlign = 'center'
outSide.style.color = 'white'
outSide.style.fontFamily = 'san-serif'
outSide.style.fontSize = '20px'
outSide.style.fontWeight = 'bold'
let naME = scndInput.value.toUpperCase()
outSide.textContent = `The weight of the object on ${naME}`
outSide.style.backgroundColor = 'rgba(255,255,255,0.3)'

outSide.appendChild(inSide)
inSide.style.width = '20px'
inSide.style.height = '20px'
inSide.style.padding = '40px'
inSide.style.marginLeft = '120px'
inSide.style.marginTop = '12px'
inSide.style.backgroundColor = 'rgba(255,255,255,0.5)'
inSide.style.borderRadius = '50px'
inSide.textContent = `${weightCal(2.34)}`

} else if (scndInput.value == 'mars') {
h1Warning.textContent = ''
planetImg.src = 'm2.png'
planetImg.style.width = '400px'
planetImg.style.height = '300px'
planetImg.style.marginLeft = '50px'
h2Content.style.backgroundColor = 'rgba(255,255,255,0.1)'

outSide.style.width = '420px'
outSide.style.height = '140px '
outSide.style.marginLeft = '25px '
outSide.style.marginTop = '70px '
outSide.style.textAlign = 'center'
outSide.style.color = 'white'
outSide.style.fontFamily = 'san-serif'
outSide.style.fontSize = '20px'
outSide.style.fontWeight = 'bold'
let naME = scndInput.value.toUpperCase()
outSide.textContent = `The weight of the object on ${naME}`
outSide.style.backgroundColor = 'rgba(255,255,255,0.3)'

outSide.appendChild(inSide)
inSide.style.width = '20px'
inSide.style.height = '20px'
inSide.style.padding = '40px'
inSide.style.marginLeft = '130px'
inSide.style.marginTop = '14px'
inSide.style.backgroundColor = 'rgba(255,255,255,0.5)'
inSide.style.borderRadius = '50px'
inSide.textContent = `${weightCal(0.38)}`
  
} else if (scndInput.value == 'mercury') {
h1Warning.textContent = ''
planetImg.src = 'mercury1.png'
planetImg.style.width = '400px'
planetImg.style.height = '300px'
planetImg.style.marginLeft = '50px'
h2Content.style.backgroundColor = 'rgba(255,255,255,0.1)'

outSide.style.width = '420px'
outSide.style.height = '140px'
outSide.style.marginLeft = '25px '
outSide.style.marginTop = '70px '
outSide.style.textAlign = 'center'
outSide.style.color = 'white'
outSide.style.fontFamily = 'san-serif'
outSide.style.fontSize = '20px'
outSide.style.fontWeight = 'bold'
let naME = scndInput.value.toUpperCase()
outSide.textContent = `The weight of the object on ${naME}`
outSide.style.backgroundColor = 'rgba(255,255,255,0.3)'

outSide.appendChild(inSide)
inSide.style.width = '20px'
inSide.style.height = '20px'
inSide.style.padding = '40px'
inSide.style.marginLeft = '130px'
inSide.style.marginTop = '14px'
inSide.style.backgroundColor = 'rgba(255,255,255,0.5)'
inSide.style.borderRadius = '50px'
inSide.textContent = `${weightCal(0.38)}`

} else if (scndInput.value == 'saturn') {
h1Warning.textContent = ''
planetImg.src = 's2.png'
planetImg.style.width = '350px'
planetImg.style.height = '200px'
planetImg.style.marginLeft = '50px'
h2Content.style.backgroundColor = 'rgba(255,255,255,0.1)'

outSide.style.width = '450px'
outSide.style.height = '140px'
outSide.style.marginLeft = '25px '
outSide.style.marginTop = '40px '
outSide.style.textAlign = 'center'
outSide.style.color = 'white'
outSide.style.fontFamily = 'san-serif'
outSide.style.fontSize = '20px'
outSide.style.fontWeight = 'bold'
let naME = scndInput.value.toUpperCase()
outSide.textContent = `The weight of the object on ${naME}`
outSide.style.backgroundColor = 'rgba(255,255,255,0.3)'

outSide.appendChild(inSide)
inSide.style.width = '20px'
inSide.style.height = '20px'
inSide.style.padding = '40px'
inSide.style.marginLeft = '130px'
inSide.style.marginTop = '14px'
inSide.style.backgroundColor = 'rgba(255,255,255,0.5)'
inSide.style.borderRadius = '50px'
inSide.textContent = `${weightCal(1.06)}`

} else if (scndInput.value == 'venus') {
h1Warning.textContent = ''
planetImg.src = 'venus.png'
planetImg.style.width = '400px'
planetImg.style.height = '300px'
planetImg.style.marginLeft = '50px'
h2Content.style.backgroundColor = 'rgba(255,255,255,0.1)'

outSide.style.width = '420px'
outSide.style.height = '140px '
outSide.style.marginLeft = '25px '
outSide.style.marginTop = '70px '
outSide.style.textAlign = 'center'
outSide.style.color = 'white'
outSide.style.fontFamily = 'san-serif'
outSide.style.fontSize = '20px'
outSide.style.fontWeight = 'bold'
let naME = scndInput.value.toUpperCase()
outSide.textContent = `The weight of the object on ${naME}`
outSide.style.backgroundColor = 'rgba(255,255,255,0.3)'

outSide.appendChild(inSide)
inSide.style.width = '20px'
inSide.style.height = '20px'
inSide.style.padding = '40px'
inSide.style.marginLeft = '130px'
inSide.style.marginTop = '12px'
inSide.style.textAlign = 'center'
inSide.style.backgroundColor = 'rgba(255,255,255,0.5)'
inSide.style.borderRadius = '50px'
inSide.textContent = `${weightCal(0.91)}`
}
 
})


