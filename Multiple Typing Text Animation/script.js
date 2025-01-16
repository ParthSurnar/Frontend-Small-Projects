const text = document.querySelector(".sec-text")


const textLoad = () =>{
    setTimeout(()=>{
        text.textContent = "Student"
    },0)
    setTimeout(()=>{
        text.textContent = "Programmer"
    },4000)
    setTimeout(()=>{
        text.textContent = "Tech Enthusiast"
    },8000)
}

textLoad()
setInterval(textLoad,12000)