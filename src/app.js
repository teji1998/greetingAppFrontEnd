const addUserButton = document.getElementById("add-user-button"),
editUserButton = document.getElementById("edit-user-button"),
deleteUserButton = document.getElementById("delete-user-button"),
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
  