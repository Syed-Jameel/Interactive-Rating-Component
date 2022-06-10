var submit = document.getElementById("btn-submit");
var content1 = document.getElementById("card-content-1");
var content2 = document.getElementById("card-content-2");
var radiobuttons = document.querySelectorAll(".form__radio-input");
var msg = document.getElementById("msg");
let ratingValue = 0; //default value

submit.addEventListener("click", function(){
    content1.style.display = "none";
    content2.style.display = "block";
    msg.innerHTML = ratingValue;
});

radiobuttons.forEach(function (btn) {
    btn.addEventListener("change", function (e) {
        ratingValue = e.target.value;
    });
});
