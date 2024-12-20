// console.log("hello");

// var head = document.getElementById("head")
// var child = head.getElementsByClassName("child")
// console.log(child);

// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1] = "world");

// var head = document.getElementById("head")
// console.log(head.childNodes[1].nodeName);

// var nType = head.nodeType;
// console.log(nType);


// var head = document.getElementById("head")
// console.log(head.lastElementChild.previousSibling);

// var head = document.getElementById("textField")
// // console.log(head.attributes);
// console.log(head.hasAttribute("value"));
// console.log(head.getAttribute("type"));
// console.log(head.setAttribute("class","ali"));


var div = document.createElement("div")
var p1 = document.createElement("p")
var h1 = document.createElement("h1")
var p2 = document.createElement("p")


div.appendChild(p1)
div.appendChild(h1)
div.appendChild(p2)

var p1Text = document.createTextNode("user")
var h1Text = document.createTextNode("hello")
var p2Text = document.createTextNode("world")

p1.appendChild(p1Text)
h1.appendChild(h1Text)
p2.appendChild(p2Text)

console.log(div);





var main = document.getElementById("abc") 
main.innerHTML = "<div><p>user</p><h1>hello</h1><p>world</p></div>"
console.log(main.remove());
