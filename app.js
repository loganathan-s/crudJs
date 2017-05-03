import EventListner from "./eventListners"

class crudApp {
	static start(){
	  const listners = new EventListner
	  listners.init();
	}
}

window.addEventListener('load', function() {
  crudApp.start();	
});
