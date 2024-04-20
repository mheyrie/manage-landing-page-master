// Handles hamburger
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
})


//Handles carousel
const firstCircle = document.getElementById('carousel-btn')
const secondCircle = document.getElementById('carousel-btnn')
const threeCircle = document.getElementById('carousel-btnnn')
const fourCircle = document.getElementById('carousel-btnnnn')

const firstTes = document.getElementById('testimonal-one')
const twoTes = document.getElementById('testimonal-two')
const threeTes = document.getElementById('testimonal-three')
const fourTes = document.getElementById('testimonal-four')



const testimonal = [firstTes, twoTes, threeTes, fourTes]

firstCircle.addEventListener('click', () => {
    testimonal.forEach((testimony)=>{
        if (testimony===firstTes){
            testimony.classList.remove("hidden")
            twoTes.classList.add('hidden')
            threeTes.classList.add('hidden')
            fourTes.classList.add('hidden')
            firstCircle.classList.toggle('selected')
        }
        
    })
})
// console.log(testimonal)

secondCircle.addEventListener('click', () => {
    testimonal.forEach((testimony)=>{

        if (testimony===twoTes){
            testimony.classList.remove("hidden")
            firstTes.classList.add('hidden')
            firstCircle.classList.remove('selected')
            
            threeTes.classList.add('hidden')
            fourTes.classList.add('hidden')

            secondCircle.classList.add('selected')
            // secondCircle.style.backgroundColor = 'hsl(12 88% 59%)'
        }
       let image = document.getElementById('img1')
            image.style.marginLeft = '270px';    
    })
    
        

})

threeCircle.addEventListener('click', () => {
    testimonal.forEach((testimony)=>{
        if (testimony===threeTes){
            testimony.classList.remove("hidden")
            firstTes.classList.add('hidden')
            twoTes.classList.add('hidden')
            fourTes.classList.add('hidden')
        }
    })
})

fourCircle.addEventListener('click', () => {
    testimonal.forEach((testimony)=>{
        if (testimony===fourTes){
            testimony.classList.remove("hidden")
            firstTes.classList.add('hidden')
            twoTes.classList.add('hidden')
            threeTes.classList.add('hidden')
        }
    })
})

// if (testimony!==twoTes){
//     if (testimony.classList.includes("hidden")===false) {testimony.classList.add("hidden")}
// }
