const slides = document.querySelectorAll(".slides img")
let slideindex= 0
let interval = null


initializeSlider()
function initializeSlider(){

        if(slides.length>0){
        slides[slideindex].classList.add("displaySlide")
        interval = setInterval(nextSlide,3000)
    }
}
function showSlide(Index){

    if(Index>=slides.length){
        slideindex =0
    }
    else if (Index<0){
        slideindex = slides.length -1 
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide")
    })
    slides[slideindex].classList.add("displaySlide")
}
function prevSlide(){
    slideindex--
    showSlide(slideindex)
}
function nextSlide(){
    slideindex++
    showSlide(slideindex)
}