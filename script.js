//your JS code here. If required.

let parent = document.getElementTagName("body");

let p1 = document.getElementById("status");
function btn() {
	let n =document.createElement("h1");
	// n.innerHTML =""
	// p1.remove();
	parent.replaceChild(n, p1);
}