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

// const newChild = document.createElement("p");
// newChild.textContent = "This is new Child";
// newChild.style.color = "Pink";

// const parent = document.getElementById("parent");
// const oldChild = document.getElementById("child");

// parent.replaceChild(newChild, oldChild);

// const clone = original.cloneNode(true);
// document.body.appendChild(clone);
// console.log(clone);
// const value = clone.removeA("data-id");
// console.log(value);

// original.setAttribute("style", "color: red; background: pink;");

// console.log(original);

// function updateAttribute() {
//   const original = document.getElementById("id");
//   original.classList.add("highlight");
// }

// function ActiveFun() {
//   const element = document.getElementById("id");
//   element.classList.toggle("active");
//   console.log(element);
// }

// let btn = document.getElementById("btn");
// btn.addEventListener("click", (eve) => {
//   alert("Button Clicked!");
// });

// function myFun() {
//   alert("Button clicked!");
// }

// let btn = document.getElementById("btn");
// btn.addEventListener("click", myFun);
// btn.removeEventListener("click", myFun);

// console.log(btn);

// document
//   .getElementById("basicForm")
//   .addEventListener("submit", function (event) {
//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;

//     if (!username || !email) {
//       alert("Please fill out both fields.");
//       console.log(username, email);
//       event.preventDefault(username, email);
//     }
//   });

// document
//   .getElementById("intermediateForm")
//   .addEventListener("submit", function (event) {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//       alert("Please enter a valid email.");
//       console.log(email);
//       event.preventDefault();
//     } else if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//       event.preventDefault();
//       console.log(password);
//     }
//   });

// const usernameField = document.getElementById("username");
// const passwordField = document.getElementById("password");
// const usernameFeedback = document.getElementById("usernameFeedback");
// const passwordFeedback = document.getElementById("passwordFeedback");

// usernameField.addEventListener("input", function () {
//   const username = usernameField.value;

//   if (username.length < 3 || username.length > 15) {
//     usernameFeedback.textContent = "Username must be 3-15 characters long.";
//     usernameFeedback.classList.add("error");
//     usernameFeedback.classList.remove("valid");
//   } else {
//     usernameFeedback.textContent = "Valid username!";
//     usernameFeedback.classList.add("valid");
//     usernameFeedback.classList.remove("error");
//   }
// });

// passwordField.addEventListener("input", function () {
//   const password = passwordField.value;

//   if (password.length < 8) {
//     passwordFeedback.textContent =
//       "Password must be at least 8 characters long.";
//     passwordFeedback.classList.add("error");
//     passwordFeedback.classList.remove("valid");
//   } else {
//     passwordFeedback.textContent = "Valid password!";
//     passwordFeedback.classList.add("valid");
//     passwordFeedback.classList.remove("error");
//   }
// });

// document
//   .getElementById("advancedForm")
//   .addEventListener("submit", function (event) {
//     const username = usernameField.value;
//     const password = passwordField.value;

//     if (username.length < 3 || username.length > 15 || password.length < 8) {
//       alert("Please fix the errors before submitting.");
//       event.preventDefault();
//     }
//   });

// let usernameField = document.getElementById("username");
// let passwordField = document.getElementById("password");
// let usernameFeedback = document.getElementById("usernameFeedback");
// let passwordFeedback = document.getElementById("passwordFeedback");

// usernameField.addEventListener("input", () => {
//   const username = usernameField.value;

//   if (username.length < 3 || username.length > 15) {
//     usernameFeedback.textContent = "Username must be 15 character.";
//     usernameFeedback.classList.add("error");
//     usernameFeedback.classList.remove("valid");
//   } else {
//     usernameFeedback.textContent = "Valid username.";
//     usernameFeedback.classList.add("valid");
//     usernameFeedback.classList.remove("error");
//   }
// });

// passwordField.addEventListener("input", () => {
//   const password = passwordField.value;

//   if (password.length < 8) {
//     passwordFeedback.textContent = "Password must be 8 char.";
//     passwordFeedback.classList.add("error");
//     passwordFeedback.classList.remove("valid");
//   } else {
//     passwordFeedback.textContent = "Valid password.";
//     passwordFeedback.classList.add("valid");
//     passwordFeedback.classList.remove("error");
//   }
// });

// document.getElementById("advancedForm").addEventListener("submit", (event) => {
//   const username = usernameField.value;
//   const password = passwordField.value;

//   if (username.length < 3 || username.length > 15 || password < 8) {
//     alert("Please fix the error!");
//     event.preventDefault();
//   }
// });

// function updateText() {
//   let h1 = document.getElementById("heading");
//   h1.textContent = "Hello World";
//   h1.classList.toggle("highlight");
// }

// let removeClass = document.querySelectorAll(".removeBtn");

// removeClass.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const task = event.target.parentElement;
//     task.remove();
//   });
// });

// let parent = document.getElementById("taskList");

// let firstItem = parent.firstElementChild;
// console.log(firstItem.textContent);

// let lastChild = parent.lastElementChild;
// console.log(lastChild.textContent);

// let sibling = document.querySelector("#taskList li:nth-child(1)");
// let nextSibling = sibling.nextElementSibling;
// console.log(nextSibling.textContent);

// let parent = document.querySelector("#taskList-1 li:nth-child(2)");
// let nextSibling = parent.nextElementSibling;
// console.log(nextSibling.textContent);
// let prevSibling = parent.previousElementSibling;
// console.log(prevSibling.textContent);

// let container = document.getElementById("taskList");
// console.log(container.childElementCount);
// console.log(container.firstChild);
// console.log(container.lastChild);

// let parent = document.getElementById("taskList");
// let closestSection = parent.closest("div");
// console.log(closestSection.className);

// let node = document.getElementById("taskList");
// console.log(node);

// let nodeList = document.querySelectorAll(".removeBtn");
// console.log(nodeList);

// console.log(nodeList[0]);
// nodeList.forEach((node) => console.log(node.textContent));

// let textNode = document.createTextNode("Hello, this is a text node!");
// document.getElementById("taskList").appendChild(textNode);
// console.log(document.getElementById("taskList").textContent);

// let textNode = document.createTextNode("This text from text node!");
// document.getElementById("head-h2").appendChild(textNode);

// console.log(document.getElementById("head-h2").textContent);

// let fragment = document.createDocumentFragment();

// for (let i = 1; i <= 4; i++) {
//   let li = document.createElement("li");
//   li.textContent = "Item " + i;
//   fragment.appendChild(li);
// }

// document.getElementById("Li").appendChild(fragment);
// console.log(document.getElementById("Li").children.length);

// let container = document.getElementById("taskList");
// let treeWalker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT);

// let currentNode;

// while ((currentNode = treeWalker.firstChild())) {
//   console.log(currentNode.className);
// }

// let liveCollection = document.getElementsByTagName("li");
// let staticCollection = document.querySelectorAll("li");

// document.getElementById("addItem").addEventListener("click", () => {
//   let newItem = document.createElement("li");
//   newItem.textContent = "New Item";
//   document.getElementById("taskList").appendChild(newItem);

//   console.log("Live Collection Length: ", liveCollection.length);
//   console.log("Static Collection Length: ", staticCollection);
// });

// document.getElementById("createBtn").addEventListener("click", () => {
//   let newDiv = document.createElement("div");
//   newDiv.innerHTML = "This is a dynamically created div!";
//   newDiv.style.backgroundColor = "lightblue";
//   document.getElementById("container").appendChild(newDiv);
// });

// document.getElementById("itemList").addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     alert(event.target.innerText);
//   }
// });

// const target = document.getElementById("target");
// const observer = new IntersectionObserver((entries) => {
//   if (entries[0].isIntersecting) {
//     alert("Element is visible!");
//   }
// });

// observer.observe(target);

// const targetNode = document.getElementById("mutateTarget");
// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     console.log("Mutation observed: ", mutation);
//   });
// });

// observer.observe(targetNode, {
//   childList: true,
//   characterData: true,
//   subtree: true,
// });

// document.getElementById("changeBtn").addEventListener("click", () => {
//   targetNode.innerText = "I have changed!";
// });

// const menu = document.getElementById("customMenu");

// document.addEventListener("contexmenu", function (e) {
//   e.preventDefault();
//   menu.style.display = "block";
//   menu.style.top = "${e.pageY}px";
//   menu.style.left = "${e.pageX}px";
// });

// document.addEventListener("click", () => {
//   menu.style.display = "none";
// });

const dragItem = document.getElementById("dragItem");

dragItem.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text/plain", "Dragging");
});

document.addEventListener("dragover", function (e) {
  e.preventDefault();
});

document.addEventListener("drop", function (e) {
  const dragItem = document.getElementById("dragItem");
  dragItem.style.left = `${e.pageX}px`;
  dragItem.style.top = `${e.pageY}px`;
});
