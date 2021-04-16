var nameEl = document.querySelector("#name");
var imageEl = document.querySelector("general");

var getName = function(callBack) {
    var name = prompt("enter your ass");
    callBack(name);
}

var insertName = function(name) {
    nameEl.textContent = "General" + name;
    imageEl.setAttribute=('src', "gg.jpg");
}

getName(insertName);