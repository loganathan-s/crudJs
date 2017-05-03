class EventListner {

	static init(){
	   const adduser = document.querySelector("#addUser").addEventListener("click", this.updateNewUserModal.bind(this));
	   const closeModalButtons = document.querySelectorAll(".closeModal");
	   [...closeModalButtons].forEach((e) => e.addEventListener("click", this.updateNewUserModal.bind(this)));
	}

	static updateNewUserModal(element){
	  const modal = element.currentTarget.dataset.target;
	  document.querySelector(modal).classList.toggle('is-active');
	}

}

export default EventListner;