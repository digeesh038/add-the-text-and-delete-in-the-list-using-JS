//selecting the input box
var inputbox = document.getElementById("inputbox")
//selecting the ul tag
var para= document.getElementById("para")
//creating the function to call the button
function msg()
{
    //create the li tag <li></li>
    var listitem = document.createElement("li")
    //Inserting the value in li tag and the delete button 
    listitem.innerHTML = inputbox.value + "<button onclick=\"msg1(event)\">Delete</button> "
    //append the listitem
    para.append(listitem)
}
function msg1(event)
{
    //to remove the parent element to remove the list
    event.target.parentElement.remove()
}