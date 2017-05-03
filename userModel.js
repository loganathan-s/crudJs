import {BACKENDAPP_URL as CRUDAPP} from './configuration';
import Request from './externalRequests';
import {parseDate} from './utility';
import MiddleMan from './middleman';
//
// Class Which talks to backend app
//
class User{

  initialize(formElements){
  	let formData = [...formElements]; 
    formData.pop();
  	formData.pop();
    return formData.reduce((userObj, data) => (userObj[`${data.name}`] = data.value, userObj), {});
  }

  index(){
   let users = Request.get(`${CRUDAPP}/user_details`)
      .then(response => {
        response.forEach((user) => this.updateUserList(user));
     })
     .catch(err => {
       return err.message
      });

  }
  
  create(newUser){
    let user = Request.post(`${CRUDAPP}/user_details`, {user_detail: newUser});
     user.then(response => {
       this.clearUserModal();
       return this.updateUserList(response);
     })
     .catch(err => {
       return err.message
      });
  }


  update(data, id){
   let user = Request.put(`${CRUDAPP}/user_details/${id}`, {user_detail: data});
       user.then(response => {
         this.clearUserModal();
         return this.updateUserDom(response);
       })
       .catch(err => {
         return err.message
        });
    }


  delete(event){
    const userId = event.currentTarget.dataset.user;
    let user = Request.delete(`${CRUDAPP}/user_details/${userId}`);
     user.then(response => {
       return this.removeUserList(userId);
     })
     .catch(err => {
       return err.message
      });
  }

  updateUserList(user){
      let middelware = new MiddleMan()
      const newUserRow =  document.querySelector("#userList").insertRow(1);
      newUserRow.setAttribute("id", `user${user.id}`);
      const [nameCell, emailCell, messageCell, createdAtCell, editCell, deleteCell]  = [newUserRow.insertCell(0), newUserRow.insertCell(1), newUserRow.insertCell(2), newUserRow.insertCell(3), newUserRow.insertCell(4), newUserRow.insertCell(5)];
      const nameText = document.createTextNode(`${user.first_name} ${user.last_name}`);
      const emailText = document.createTextNode(user.email);
      const messageText = document.createTextNode(user.message);
      const createdAtText = document.createTextNode(parseDate(user.created_at));
      const editText = `<span id="edit" data-user=${user.id} class="icon editUser"><i class="fa fa-edit"></i></span>`;
      const deleteText = `<span id="delete" data-user=${user.id} class="icon deleteUser"><i class="fa fa-remove"></i></span>`;
      nameCell.appendChild(nameText);
      emailCell.appendChild(emailText);
      messageCell.appendChild(messageText);
      createdAtCell.appendChild(createdAtText);
      editCell.innerHTML = editText;
      deleteCell.innerHTML = deleteText;
      document.querySelector(".editUser").addEventListener("click", middelware.updateForm.bind(this));
      document.querySelector(".deleteUser").addEventListener("click", this.delete.bind(this));
  }

  updateUserDom(user){
    const userData =  document.querySelector(`#user${user.id}`).children;
    let [name, email, message] = userData
    name.textContent = `${user.first_name} ${user.last_name}`;
    email.textContent = user.email;
    message.textContent = user.message;
  }

  clearUserModal(){
      let middelware = new MiddleMan()
      return middelware.updateNewUserModal();
  }

  removeUserList(user){
    document.querySelector(`#user${user}`).remove();
  }
  
}

export default User;