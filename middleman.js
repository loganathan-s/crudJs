//
// Class to Manage all kind of events for the appication
//
import UserModel from "./userModel"

class MiddleMan {

	constructor(){
	  this.user = new UserModel()
	  this.userForm = document.querySelector("#createUserForm");
	}

	init(){
	   const adduser = document.querySelector("#addUser").addEventListener("click", this.updateNewUserModal.bind(this));
	   const closeModalButtons = document.querySelectorAll(".closeModal");
	   [...closeModalButtons].forEach((e) => e.addEventListener("click", this.updateNewUserModal.bind(this)));
	   const createUserForm = document.querySelector("#createUserForm").addEventListener("submit", this.handleForm.bind(this));
	   this.user.index();
	}

	updateNewUserModal(element = false, modal = false){
	  document.querySelector("#modal-ter").classList.toggle('is-active');
	  document.querySelector("[name=user_id]").value = false;
	  document.querySelector("[type=submit]").value = "Add User";
	  document.querySelector("#modalTitle").textContent = "New User Detail";
	  this.userForm.reset();	
	}

	updateForm(event){
      const userInstance = this;
      let middleMan = new MiddleMan();
	  const userId = event.currentTarget.dataset.user;
	  const userData = document.querySelector(`#user${userId}`).children;
      userInstance.clearUserModal();
      const [first_name, ...last_name] = userData[0].textContent.split(" ");
      const [email, message] = [userData[1].textContent, userData[2].textContent]
      document.querySelector("[type=submit]").value = "Update User";
      document.querySelector("#modalTitle").textContent = "Update User Detail";
      middleMan.userForm.querySelector("[name=first_name]").value = first_name;
	  middleMan.userForm.querySelector("[name=last_name]").value = last_name;
	  middleMan.userForm.querySelector("[name=email]").value = email;
	  middleMan.userForm.querySelector("[name=message]").value = message;
	  middleMan.userForm.querySelector("[name=user_id]").value = userId;
	}

	handleForm(event){
	  event.preventDefault();
	  const userData = event.currentTarget.elements;
	  const parsedUserData = this.user.initialize(userData);
	  const userId = this.userForm.querySelector("[name=user_id]").value;
	  console.log(userId);
	  if (!userId.includes("false")){
	  	this.user.update(parsedUserData, userId);
	  }else{
	  	this.user.create(parsedUserData);
	  }
	  
	}
    
}

export default MiddleMan;