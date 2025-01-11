const addBtn = document.querySelector("#addBtn"); //get add button
let ul = document.querySelector("ul"); //get ul

//handle tasks,when add button clicked
addBtn.addEventListener("click", function () {
  let inputItems = document.querySelector("#itemName"); //get input field
  let li = document.createElement("li"); //create li element
  //input value chacked for empty or not
  if (inputItems.value == "") {
    alert("Please enter Task");
  } else {
    li.setAttribute("id", "items");
    li.innerHTML += `<span class="tasksDetails">${inputItems.value}</span> <button class="delBtn">Delete</button></br>`;
    ul.appendChild(li);
    inputItems.value = "";
    removeValue(li);
  }
});

//handle delete button tasks
function removeValue(li) {
  let delet = li.querySelector(".delBtn");
  delet.addEventListener("click", function () {
    if (confirm("Are you sureyou want to Delete this task")) {
      li.remove();
    }
  });
}
