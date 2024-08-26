//document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Yavuz";

var allExamples = document.querySelectorAll(".list");
allExamples.forEach(function(element) {
    element.innerHTML = "Yavuz"
  });

document.querySelector(".btn").style.backgroundColor = "yellow";

// add or remove or toogle
document.querySelector("h1").classList.toggle("big-head");
document.querySelector("h1").textContent = "Good Bye";

document.querySelector("a").setAttribute("href", "https://www.kamplist.org");