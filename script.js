let totalSliders = document.querySelectorAll('.slider_item').length
let currntSlider = 0

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSliders})`
document.querySelector('.slider_controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`

function goPrev(){
    currntSlider--

    if(currntSlider < 0){
        currntSlider = totalSliders - 1
    }

    updateMargin()
}
function goNext(){
    currntSlider++

    if(currntSlider > (totalSliders - 1)){
        currntSlider = 0
    }

    updateMargin()
}

function updateMargin(){
    let larguraSliderItem = document.querySelector('.slider_item').clientWidth
    let newMargin = (currntSlider * larguraSliderItem)
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`

}

setInterval(goNext, 4000)