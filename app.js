import MiddleMan from "./middleMan"

class crudApp {
	static start(){
	  const middleWare = new MiddleMan
	  middleWare.init();
	}
}

window.addEventListener('load', function() {
  crudApp.start();	
});
