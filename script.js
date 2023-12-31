let favouriteMedia = [
	"pokemon",
	"digimon",
	"supernatural",
	"sherlock",
	"doctor who",
	"parks & recreation",
	"marvel",
	"harry potter",
	"barbie",
	"yugi-oh",
	"oppenheimer",
	"dragonball z"
];


function exampleHello(){
	console.log("hello world"); 
}

function createListOfMedia(){

	let rootUlNode = document.querySelector("ul");

	rootUlNode.innerHTML = "";


	// let exampleNode = document.getElementsByClassName("bananas")[0];
	// let exampleNode = document.getElementById("mediaList");

	favouriteMedia.forEach(mediaItem => {
		// Create an element but do not display it yet 
		let newListItem = document.createElement("li");

		// Assign some data to the element
		newListItem.textContent = mediaItem;
		newListItem.id = mediaItem;

		// Creating a button that will remove this item later
		let removeItemButton = document.createElement("button");

		removeItemButton.onclick = (() => removeItemFromList(mediaItem));

		removeItemButton.textContent = "Remove item";

		// Add the button to the list item 
		newListItem.appendChild(removeItemButton);


		// Add the element to the visible page
		rootUlNode.appendChild(newListItem);


	});
}

function removeItemFromList(targetItem){
	let targetItemNode = document.getElementById(targetItem);
	if (targetItemNode){
		//targetItemNode.parentNode.removeChild(targetItemNode);

		// Modify the array
		favouriteMedia = favouriteMedia.filter(item => item !== targetItem);
        if (!item || item == "" || item !== targetItem) {
            return true;
        } else {
            return false
        }
    });

		// Regenerate the visuals
		createListOfMedia();

	}
}


function addItemToList(event, targetId){
	event.preventDefault();
	console.log("we tried to add an item to the list!");

	let realInputField = document.getElementById("real-nameinput");
	let newItemName = realInputField.value;
    if (newItemName){
		console.log("newItemName is: " + newItemName);
		// add item to list
		favouriteMedia.push(newItemName);
	
		// generate a new list 
		createListOfMedia();
	} else {
		console.warn("Attempted to add an empty item to the list");
	}

}

// let realFormSubmitButton = document.getElementById("real-formsubmit");
// realFormSubmitButton.addEventListener("click", (event) => {addItemToList(event, "real-nameinput")});
// functionName() runs immediately, do not want!!
// realFormSubmitButton.addEventListener("click", addItemToList());


// helper text id: real-texthint 
function inputHelperOnFocus(targetId){
	let helperElement = document.getElementById(targetId);
	console.log("showing text hint now");
	helperElement.style.display = "inherit";
}

function inputHelperOnBlur(targetId){
	let helperElement = document.getElementById(targetId);
	console.log("hiding text hint now");
	helperElement.style.display = "none";
}

let realFormTextInput = document.getElementById("real-nameinput");
realFormTextInput.addEventListener("focusin", () => {inputHelperOnFocus("real-texthint")});
realFormTextInput.addEventListener("focusout", () => {inputHelperOnBlur("real-texthint")});
inputHelperOnBlur("real-texthint");


let pseudoFormTextInput = document.getElementById("pseudo-nameinput");
pseudoFormTextInput.addEventListener("focusin", () => {inputHelperOnFocus("pseudo-texthint")});
pseudoFormTextInput.addEventListener("focusout", () => {inputHelperOnBlur("pseudo-texthint")});
inputHelperOnBlur("pseudo-texthint");

psuedoFormButton = document.getElementById("pseudo-formsubmit");
pseudoFormButton.addEventListener("click", (event) => {addItemToList(event, "pseudo-nameinput")});