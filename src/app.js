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

const editFirstName = document.getElementById('edit-first-name'),
  editLastName = document.getElementById('edit-last-name'),
editUserObjectId = document.getElementById('edit-id'),
editMessage = document.getElementById('edit-message'),
  editUserForm = document.querySelector('.edit-user');

editUserForm.addEventListener('submit', editInDataBase);

function editInDataBase() {
  try {
    console.log(editUserObjectId.value);
    const detail = [
      editUserObjectId,
      editFirstName,
      editLastName,
      editMessage
    ];

    const response = fetch("http://localhost:8080/greeting/edit?id="+editUserObjectId.value, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        greetingId:editUserObjectId.value,
        firstName: editFirstName.value,
        lastName: editLastName.value,
        message: editMessage.value
      }),
    });
    alert(
      `Successfully edited user!`
    );
      closeEditFormButton.click();
    listAllUsersButton.click();
  } catch (error) {
    clearEditFormFields();
    alert(error.message);
  }
}

function clearEditFormFields() {
  (editUserObjectId.value = ''),
    (editFirstName.value = ''),
    (editLastName.value = ''),
    (editMessage.value = '')
}

const deleteUserForm = document.querySelector('.delete-user'),
  deleteUserObjectId = document.getElementById('object-id');

deleteUserForm.addEventListener('submit', deleteInDataBase);

function deleteInDataBase () {
try {

  console.log(deleteUserObjectId.value);
    const response = fetch("http://localhost:8080/greeting/delete?id="+deleteUserObjectId.value, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert(`User Deleted!`);
    deleteUserObjectId.value = '';
     closeDeleteFormButton.click();
    listAllUsersButton.click();
  } catch (error) {
    deleteUserObjectId.value = '';
    alert(error.message);
  }
}