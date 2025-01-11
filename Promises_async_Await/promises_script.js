//promises in javascript are used to handle asynchronous operation.
//now later or never

//pending:initial state //fulfiled:complete // rejected:failed

//promise? uses a constructor called as Promise Constructor
//constructor => which does object initialisation
//promise constructor takes a function as an argument which is called as executor function.
//executor function is called with two parameters resolve and reject.
//executor function is a callback function
//resolve is a function which is used to resolve the promise.
//reject is a function which is used to reject the promise.
//resolve and reject are callback functions which are called when the promise is fulfilled or rejected.
const myPromise = new Promise ((resolve,reject)=>{
    let success = false;
    if(success){
        resolve("Promise resolved");
    }
    else{
        reject("Promise rejected");
    }
});

myPromise
   .then((message)=>{
    console.log("Success",message);
   })
   .catch((error)=>{
    console.log("Error",error);
   });