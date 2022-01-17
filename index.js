const heading=document.getElementById("heading");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
btn1.addEventListener("click", function() {
    heading.style.color="red";
});
btn2.addEventListener("click", function() {
    heading.style.color="green";
});