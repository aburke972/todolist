/* VARIABLES */ 
const itemField = document.getElementById("item-field")
const list = document.getElementById("list")
const addButton = document.getElementById("button-add")
/* const displayButton = document.getElementById("button-display") */
const removeButton = document.getElementById("button-remove-item")
const resetButton = document.getElementById("button-reset")
/* TO DO: const modifiableButtonsList = [displayButton,resetButton,removeButton] */

let itemsList = new Array
let isItemsListEmpty = true


/* FUNCTIONS */

function disableButtons()
{
    /* TO DO: for(button in modifiableButtonsList) button.disabled = true */
    removeButton.classList.add("button-disabled")
    resetButton.classList.add("button-disabled")
    
}

function enableButtons()
{
    removeButton.classList.remove("button-disabled")
    resetButton.classList.remove("button-disabled")
}


function addInArray()
{
    let userInput = itemField.value
    if(userInput){
        itemsList.push(userInput)
        itemField.value=null
        enableButtons()
        displayItemsList()
    }
    else{
        alert("Dude you won't insert an empty entry ;-)")
    }
}

function displayItemsList(){
    clearList()
    for(let i = 0; i < itemsList.length;i ++){
        let newListItem = document.createElement("li")
        newListItem.innerHTML = itemsList[i]
        list.appendChild(newListItem)
    }
    enableButtons()
}

function removeItem()
{
    let item = prompt("Please provide the number of the task to be remove")
    item = item -1
    console.log(`removing item ${item} (${itemsList.length} in array)`)
    if(item > -1 && item < itemsList.length){
        itemsList.splice(item,1)
        displayItemsList()
    }
    else
        alert("Provide a valid number !")  
}

function clearList(){
    list.innerHTML = null
    disableButtons()
}   

/* TO DO : SELECTIVE DELETION
function ClearSelectedItems(){} */

/* Create listeners */
addButton.addEventListener("click",addInArray)
/* displayButton.addEventListener("click",displayItemsList) */
removeButton.addEventListener("click",removeItem)
resetButton.addEventListener("click",clearList)

/* Some buttons cannot be used at the startup of the page */
disableButtons()



