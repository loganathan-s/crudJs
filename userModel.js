import {BACKENDAPP_URL} from './configuration';
//
// Class Which talks to backend app
//
class User{
  
  initialize(formElements){
  	let formData = [...formElements]; 
  	formData.pop();
  	let userObj = {}
  	formData.forEach(function(data) {
  	  userObj[data.name] = data.value;
    });
    //formData.reduce(({}, data) => userObj[data.name] = data.value);
    return userObj;
  }

  create(user){
  
  }

  show(){

  }

  update(){

  }

  delete(){

  }

}

export default User;