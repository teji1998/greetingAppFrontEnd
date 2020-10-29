const addUserButton = document.getElementById("add-user-button"),
editUserButton = document.getElementById("edit-user-button"),
deleteUserButton = document.getElementById("delete-user-button"),
listAllUsersButton = document.getElementById("list-all-users-button"),
closeAddFormButton = document.querySelector(".close-button-for-add-user"),
closeEditFormButton = document.querySelector(".close-button-for-edit-user"),
closeDeleteFormButton = document.querySelector(".close-button-for-delete-user"),
addUserOverride = document.querySelector(".add-user-modal"),
editUserOverride = document.querySelector(".edit-user-modal"),
deleteUserOverride = document.querySelector(".delete-user-modal");
  

addUserButton.addEventListener("click", displayAddUserForm);
editUserButton.addEventListener("click", displayEditUserForm);
deleteUserButton.addEventListener("click", displayDeleteUserForm);
closeAddFormButton.addEventListener("click", closeAddUserForm);
closeEditFormButton.addEventListener("click", closeEditUserForm);
closeDeleteFormButton.addEventListener("click", closeDeleteUserForm);


function displayAddUserForm() {
    addUserOverride.style.display = "flex";
}
  
function displayEditUserForm() {
    editUserOverride.style.display = "flex";
}

function displayDeleteUserForm() {
    deleteUserOverride.style.display = "flex";
}

function closeAddUserForm() {
    addUserOverride.style.display = "none";
}
    
function closeEditUserForm() {
    editUserOverride.style.display = "none";
}  

function closeDeleteUserForm() {
    deleteUserOverride.style.display = "none";
}


listAllUsersButton.addEventListener("click", getAllUsersFromDataBase);

async function getAllUsersFromDataBase(e) {
  try {
    e.preventDefault();
    console.log("bonjour")
     const URL = "http://localhost:8080/greeting/all";

    const response = await fetch(URL, {
      method: 'GET',
      headers: {
      "Content-type": "application/json",
      }
    });

    const results = await response.json();

    let inputToHTML = ``;

    await results.forEach((data) => {
      inputToHTML += input(data);
      document.getElementById("input-from-database").innerHTML = inputToHTML;
    });
  } catch (error) {
    console.log(error.message);
  }
}

function input(data) {
  return `<div class="user-details-object">
  <p class="paragraph-user-details">
    <span id="object-id" class="user-details">Greeting id:${data.greetingId}</span>
    <span id="greeting-message" class="user-details">Message:${data.greetingMessage} </span>
  </p>
  </div>`;
}

const firstName = document.getElementById("first-name"),
  lastName = document.getElementById("last-name"),
  greetingMessage = document.getElementById("greeting"),
addUserForm = document.querySelector(".add-user");
addUserForm.addEventListener("submit", addToDataBase);

async function addToDataBase(event) {
  event.preventDefault();
  try {
    const detail = [firstName, lastName, greetingMessage];
    const greeting = createGreetingObject(detail);
    console.log(greeting);
    const response =  await fetch('http://localhost:8080/greeting/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(greeting),
    });
     alert(`Successfully added new user!`);
    clearFields();
    closeAddFormButton.click();
    listAllUsersButton.click();
  } catch (error) {
     alert(error.message);
  }
}

// Creating greetings Object
function createGreetingObject(inputArr) {
    return {
      firstName: inputArr[0].value,
      lastName: inputArr[1].value,
      greeting: inputArr[2].value,
    };
  }
  
function clearFields() {
  (firstName.value = ''), (lastName.value = ''), (greetingMessage.value = '');
}