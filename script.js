const plusBtn = document.querySelector(".plus-sign");
const minusBtn = document.querySelector(".minus-sign");
const texts = document.querySelectorAll(".text");
const question = document.querySelector(".question");

plusBtn.forEach((plusBtn, index) => {
    plusBtn.addEventListener("click", function () {
        texts[index].style.display = "block";
        plusBtn.style.display = "none";
        minusBtn.style.display = "block";
})  
});


minusBtn.forEach((minusBtn, index) => {
    minusBtn.addEventListener("click", function () {
        texts[index].style.display = "none";
        minusBtn.style.display = "none";
        plusBtn.style.display = "block";
})  
 });
