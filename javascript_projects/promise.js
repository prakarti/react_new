let p = new Promise(function(resolve,reject){
 console.log("Promise started");
 console.log("Promise is doing some important work...");
 console.log("Promise has completed, will resolve shortly");
 reject("Promise not resolved");
});
p.then(function(message){
    console.log("message"+message);  
},
function(error){
    console.log("error"+error);  
})