//async await
//async function is a function which returns a promise
//await keyword is used to pause the execution of the code until the promise is resolved or rejected.
async function myAsyncFunction() {
    try {
      const result = await myPromise; //dont call the promise
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  //calling the function
  myAsyncFunction();
  
  //fetch function => promise return karti hai
  //fetch function is used to make http request
  //fetch function returns a promise as response
  
  // async function fetchdata() {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/post&quot;);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // fetchdata();
  
  //same data fetching using promise
  function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/posts");//1. object format mai fetch karke data bhejega
  }
  fetchData()
    .then((response) => {
      return response.json(); //2. data jo response mai aai hai isko convert karna json mai
    })
    .then((data) => {
      console.log(data);//3. data ko console log karna
    })
    .catch((error) => {
      console.log(error);// error print kar dena
    });