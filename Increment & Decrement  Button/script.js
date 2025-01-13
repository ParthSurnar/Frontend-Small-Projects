const add = document.querySelector(".add"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num")

let a = 1;

add.addEventListener("click", () => {
    a++
    // a = (a < 10) ? "0" + a : a
    num.innerText = a
})

minus.addEventListener("click", () => {
//    if (a > 1) {
//     a--
//    }
a--
    num.innerText = a
})