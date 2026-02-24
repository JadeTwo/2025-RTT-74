// creating variables and selecting elements 
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
 
// adding a click event to the button
addTaskButton.addEventListener("click", function () {

  // storing the input value in a variable
  let taskText = taskInput.value; 
 
  // checking to see if the input was empty
  if (taskText === "") {    
    alert("Please enter a task!");
    return; // this exits the function
  }
 
  // creating a list item and giving it some text
  let listItem = document.createElement("li");
  listItem.innerText = taskText;
 
  // adding the list item to the list
  taskList.appendChild(listItem);

  taskInput.value = ""; // Clear the input field
});

// adding a click event to the list
taskList.addEventListener("click", function (event) {

  // checking to see if the clicked element is actually a list item (li)
  if (event.target.tagName === "LI") {

    // removing a list item (li) from the list (ul)
    taskList.removeChild(event.target);
  }
});


