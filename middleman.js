//
// Class to Manage all kind of events for the appication
//
import UserModel from "./userModel"

class MiddleMan {

	constructor(){
	  this.user = new UserModel()
	}

	init(){
	   const adduser = document.querySelector("#addUser").addEventListener("click", this.updateNewUserModal.bind(this));
	   const closeModalButtons = document.querySelectorAll(".closeModal");
	   [...closeModalButtons].forEach((e) => e.addEventListener("click", this.updateNewUserModal.bind(this)));
	   const createUserForm = document.querySelector("#createUserForm").addEventListener("submit", this.handleForm.bind(this));
	   this.user.index();
	}

	updateNewUserModal(element = false, modal = false){
	  const userModal = (modal ? "#modal-ter" : element.currentTarget.dataset.target);
	  document.querySelector(userModal).classList.toggle('is-active');
	  document.querySelector("#createUserForm").reset();	
	}

	handleForm(event){
	  event.preventDefault();
	  const userData = event.currentTarget.elements;
	  const newUser = this.user.initialize(userData);
	  this.user.create(newUser)
	}
    
}

export default MiddleMan;