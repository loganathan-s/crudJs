import EventListner from "./eventListners"

class crudApp {
	static start(){
	  EventListner.init();		
	}
}
window.addEventListener('load', function() {
  crudApp.start();	
});
