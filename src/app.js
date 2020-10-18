const addUserButton = document.getElementById("add-user-button"),
editUserButton = document.getElementById("edit-user-button"),
closeAddFormButton = document.querySelector(".close-button-for-add-user"),
closeEditFormButton = document.querySelector(".close-button-for-edit-user"),
addUserOverride = document.querySelector(".add-user-modal"),
editUserOverride = document.querySelector(".edit-user-modal");


addUserButton.addEventListener("click", displayAddUserForm);
editUserButton.addEventListener("click", displayEditUserForm);


closeAddFormButton.addEventListener("click", closeAddUserForm);
closeEditFormButton.addEventListener("click", closeEditUserForm);


function displayAddUserForm() {
    addUserOverride.style.display = "flex";
}

function closeAddUserForm() {
    addUserOverride.style.display = "none";
}

function displayEditUserForm() {
    editUserOverride.style.display = "flex";
}

function closeEditUserForm() {
    editUserOverride.style.display = "none";
}
  