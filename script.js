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
]
// Make sure to wrap code in functions to make sure we can confirm what is working and to prevent errors
function exampleHello(){
    console.log("hello world");
} 

function createListOfMedia(){

    let rootUlNode = document.querySelector("ul");
    let exampleNode = document.getElementsByTagName("ul");

    exampleNode

    favouriteMedia.forEach(mediaItem => {
        // Create an element but does not display it yet
        let newListItem = document.createElement("li");

        // Assign some data to the element
        newListItem.textContent = mediaItem;
        newListItem.id = mediaItem;

        // Creating a button that will remove this item later
        let removeItemButton = document.createElement("button");

        removeItemButton.onclick = (() => removeItemFromList(mediaItem));

        removeItemButton.textContent = "Remove item";

        // Add the button to the List item
        newListItem.appendChild(removeItemButton);

        // Add the element to the visible page
        rootIlNode.appendChild(newListItem);

    });
}

function removeItemFromList(targetItem){
    let targetItemNode = document.getElementById(targetItem);
    if (targetItem){
        targetItemNode.parentNode.removeChild(targetItemNode);
    }

}