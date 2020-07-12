const itemField = document.getElementById("item-field")
const list = document.getElementById("display-list")
const addButton = document.getElementById("button-add")
const resetButton = document.getElementById("button-reset")

let itemList = new Array

addButton.addEventListener("click",addItem)
resetButton.addEventListener("click",clearList)

function storeInArray(item)
{
    itemList.push(item)
    console.log("Item pushed in array:" + item)
}

function addItem(){
    let userInput = itemField.value

    if(userInput){
        console.log("Add new item in array")
        storeInArray(userInput)
        let newListItem= document.createElement("li")
        newListItem.innerHTML = userInput
        list.appendChild(newListItem)
        itemField.value=null
    }
    else
    {
        alert("Dude you won't insert an empty entry ;-)")
    }
}

function clearList(){
    list.innerHTML = null
}
