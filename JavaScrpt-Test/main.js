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

// function addItem() {
//   const itemList = document.getElementById("itemList");
//   const newItem = document.getElementById("newItem").value;

//   if (newItem.trim() === "") {
//     alert("Please enter a valid number.");
//     return;
//   }

//   const newLi = document.createElement("li");

//   newLi.textContent = newItem;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "delete";
//   deleteBtn.className = "deleteBtn";

//   newLi.appendChild(deleteBtn);
//   itemList.appendChild(newLi);

//   document.getElementById("newItem").value = "";
// }

// document.getElementById("itemList").addEventListener("click", (event) => {
//   if (event.target.classList.contains("deleteBtn")) {
//     event.target.parentElement.remove();
//   }
// });

// let para1 = document.createElement("p");
// para1.innerText = "This paragraph is form JS";
// para1.id = "hi";

// document.body.appendChild(para1);

// const title = document.getElementById("id");
// console.log(title.innerHTML);

// const para = document.getElementById("para");
// para.textContent = "Hello, hi, How are you?";

// let classHi = document.getElementById("hi");
// classHi.style.color = "yellow";
// classHi.style.fontSize = "4rem";

// const h2 = document.createElement("h2");
// h2.textContent = "Hello My name is Hazrat Ali";
// h2.style.background = "gray";
// h2.style.color = "pink";

// document.body.appendChild(h2);

// for (let i = 0; i <= 10000; i++) {
//   console.log(i);
//   h2.remove();
// }

function updateTitle() {
  const title = document.getElementById("title");
  title.textContent = "DOM Mainpulation with JavaScript";
}

function addParagraph() {
  const newPara = document.createElement("p");
  newPara.textContent = "This is dynamically added paragraph.";
  document.body.appendChild(newPara);
}

// function removeParagraph() {
//   const paraToRemove = document.getElementById("remove-me");

//   if (paraToRemove) {
//     paraToRemove.remove();
//   } else {
//     alert("Paragraph already remove!");
//   }
// }

// function removeParagraph() {
//   const paraRemove = document.getElementById("remove-me");

//   if (paraRemove) {
//     paraRemove.remove();
//   } else {
//     alert("Paragraph already reomve!");
//   }
// }

// const elements = document.getElementsByClassName("myClass");

// for (let i = 0; i < elements.length; i++) {
//   elements[i].style.color = "green";
// }

// const tagName = document.getElementsByTagName("p");
// for (let i = 0; i < tagName.length; i++) {
//   tagName[i].style.backgroundColor = "pink";
// }

// const element = document.querySelectorAll(".myClass");
// element.forEach((element) => {
//   element.style.backgroundColor = "pink";
// });

// const element1 = document.querySelector(".myClass");
// element1.style.backgroundColor = "yellow";

// function removeParagraph() {
//   let parent = document.getElementById("parent");
//   let removeChaild = document.getElementById("removeP");

//   if (removeChaild) {
//     parent.removeChild(removeChaild);
//   } else {
//     alert("Child already delete.");
//   }
// }
