let spans = document.querySelectorAll("span");
let box = document.querySelector(".box");
console.log(box);



if (window.localStorage.getItem("color")) {
    box.style.backgroundColor = localStorage.getItem("color");
    document.querySelector(`[data-color="${localStorage.getItem("color")}"]`)
        .classList.add("active");
}

spans.forEach((span) => {
    span.addEventListener("click", (e) => {

        spans.forEach((span) => {
            span.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        window.localStorage.setItem("color", span.dataset.color);

        box.style.backgroundColor = localStorage.getItem("color");

    });



})