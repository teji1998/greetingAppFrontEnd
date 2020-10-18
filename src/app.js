const addUserButton = document.getElementById("add-user-button");

closeAddFormButton = document.querySelector(".close-button-for-add-user");

addUserOverride = document.querySelector(".add-user-modal");

addUserButton.addEventListener("click", displayAddUserForm);

closeAddFormButton.addEventListener("click", closeAddUserForm);

function displayAddUserForm() {
    addUserOverride.style.display = "flex";
}

function closeAddUserForm() {
    addUserOverride.style.display = "none";
}
  