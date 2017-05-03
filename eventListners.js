//
// Class to Manage all kind of events for the appication
//
import UserModel from "./userModel"
class EventListner {

	init(){
	   const adduser = document.querySelector("#addUser").addEventListener("click", this.updateNewUserModal.bind(this));
	   const closeModalButtons = document.querySelectorAll(".closeModal");
	   [...closeModalButtons].forEach((e) => e.addEventListener("click", this.updateNewUserModal.bind(this)));
	   const createUserForm = document.querySelector("#createUserForm").addEventListener("submit", this.handleForm.bind(this));
	}

	updateNewUserModal(element){
	  const modal = element.currentTarget.dataset.target;
	  document.querySelector(modal).classList.toggle('is-active');
	  document.querySelector("#createUserForm").reset();
	}

	handleForm(event){
	  event.preventDefault();
	  const userData = event.currentTarget.elements
	  const user = new UserModel();
	  const newUser = user.initialize(userData)
	  user.create(newUser)
	  console.table([]);
	}
    
}

export default EventListner;