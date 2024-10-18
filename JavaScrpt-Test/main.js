// function changeTitle() {
//   const titleElement = document.getElementById("heading-h1");

//   if (titleElement.style.display === "none") {
//     titleElement.style.display = "block";
//   } else {
//     titleElement.style.display = "none";
//   }
// }

// function ChangeText() {
//   let text = document.getElementById("heading-h1");

//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }

// function changeText() {
//   const para = document.getElementsByClassName("class");

//   para.textContent = "Hi! i am a loser!";
// }

// function modifyContent() {
//   let container = document.getElementById("main");

//   let newpara = document.createElement("p");
//   newpara.textContent = "Hello World. This line is added to the modifyContent;";

//   container.appendChild(newpara);

//   container.style.color = "white";
//   container.style.backgroundColor = "gray";
// }

// function AppendP() {
//   let main = document.getElementById("main");
//   let para = document.createElement("p");

//   if (main.style.color === "black") {
//     main.style.color = "red";
//   } else {
//     main.style.color = "black";
//   }

//   para.textContent = "Hello i am sorry!";

//   main.appendChild(para);

//   main.style.color = "yellow";
// }

// // Add a new item to the list
// function addItem() {
//   const itemList = document.getElementById("itemList");
//   const newItemText = document.getElementById("newItem").value;

//   // Create a new list item element
//   const newItem = document.createElement("li");

//   // Set the text content
//   newItem.textContent = newItemText;

//   // Create a delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.className = "deleteBtn";

//   // Append the delete button to the new item
//   newItem.appendChild(deleteBtn);

//   // Append the new item to the list
//   itemList.appendChild(newItem);

//   // Clear the input field
//   document.getElementById("newItem").value = "";
// }

// // Event delegation for delete buttons
// document.getElementById("itemList").addEventListener("click", function (event) {
//   if (event.target.classList.contains("deleteBtn")) {
//     // Remove the parent list item of the delete button
//     event.target.parentElement.remove();
//   }
// });
