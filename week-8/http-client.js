/* 
================================================================
    Title: http-client.js
    Author: Carl Logan
    Date: 9/30/2022
    Description: Make http requests using the HttpClient.
================================================================
*/

// class to handle http requests
export class HttpClient {

  // take in a url and search parameters
  async get(url, params = '') {
    url = new URL(url);
    // add the passed in object to the url search property
    url.search = new URLSearchParams(params);
    
    // with the url object built, make a request to the url and get data
    const res = await fetch(url.toString(), {
      method: "GET"
    });

    // a promise that returns the data in json format
    return res.json();
  }
}