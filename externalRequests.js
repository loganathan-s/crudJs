class ExternalRequests{
  const HEADERS = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}

  get(url){
    return fetch(url, {method: 'get', HEADERS})
    .catch(_ => {
      throw new Error("network error");
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  post(url, data){
    return fetch(url, {method: 'post', HEADERS, body: data})
    .catch(_ => {
      throw new Error("network error");
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  put(url, data){
    return fetch(url, {method: 'put', HEADERS, body: data})
    .catch(_ => {
      throw new Error("network error");
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  
  delete(){
   return fetch(url, {method: 'delete', HEADERS})
    .catch(_ => {
      throw new Error("network error");
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

}