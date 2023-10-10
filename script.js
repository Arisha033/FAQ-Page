// Select All accordian headers and contents
const accordianHeaders  = document.querySelectorAll(".accordian-header");
const accordianContents  = document.querySelectorAll(".accordian-content");


// get each accordian header
accordianHeaders.forEach((header, index) => {

    const toggleButton = header.querySelector(".accordian-toggle");    // get toggle button

    header.addEventListener("click", function(){       // add event listener to header

        accordianContents[index].classList.toggle("active");       // add class to associated header
        
        toggleButton.textContent = toggleButton.textContent === "+" ? "-" : "+";       // check for + to - conversions
        
        header.classList.toggle("active");     // add class for active header
    })
});
