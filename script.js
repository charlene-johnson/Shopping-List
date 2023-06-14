var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li")


// Checks length of input
function inputLength() {
	return input.value.length;
}

// Checks the list's length
function listLength() {
	return list.length;
}

// Creates a new list item
function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		input.value= "";

		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete!"))
		li.appendChild(deleteButton)
		deleteButton.addEventListener("click", bye)
		ul.appendChild(li);
}

// Toggles the strike through 
function toggleDone (event) {
	if(event.target.tagName === "LI") {
		event.target.classList.toggle("done")
	}
}
ul.addEventListener("click", toggleDone)

// Adds delete button for every list item
function deleteButton () {
	var buttons = document.createElement("button");
	buttons.appendChild(document.createTextNode("Delete!"));
	list[i].appendChild(buttons)
	buttons.addEventListener("click", bye)
	
}

for (i=0; i<listLength(); i++) {
	deleteButton()
}


// Function to Delete items
function bye (event) {
	event.target.parentNode.remove()
}

// Adds list item after click
function addListAfterClick () {
	if (inputLength() > 0) {
		createListElement()
	}
}

// Adds list item after pressing enter
function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	}
}


button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)





