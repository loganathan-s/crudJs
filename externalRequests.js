//
// This module handles all the external api requests
//
class ExternalRequests{
  
  //
  // Set Header for All the requests
  //
  static get HEADERS() {
    return  {
              "Accept":  "application/json, text/plain", 
              "Content-Type": "application/json", 
              "Access-Control-Allow-Origin": "*"
            }
    }

  //
  // GET Request
  //  
  static get(url){
    return fetch(url)
   .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
   .catch(err => {
      console.log(err);
    });
  }
  
  //
  // POST Request
  //  
  static post(url, data){
    return fetch(url, {method: 'post', mode: 'cors', headers: this.HEADERS, body: JSON.stringify(data)})
           .then(response => {
              if (!response.ok) {
                 throw new Error(response.statusText);
              }
              return response.json();
            })
           .catch((err) => {
                 console.log(err);
            });
  }

  //
  // PUT Request
  //  
  static put(url, data){
    return fetch(url, {method: 'put', headers: this.HEADERS, body: JSON.stringify(data)})
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
  

    
  }
  
  //
  // DELETE Request
  //  
  static delete(url){
   return fetch(url, {method: 'delete', headers: this.HEADERS})
   .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.ok;
    })
     .catch((err) => {
         console.log(err);
       });
  }

}

//Default Export
export default ExternalRequests;