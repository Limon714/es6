let hello = new Promise(function (resolve, reject) {
    
    if (complete = true) {

        resolve("We meet");
        
    } else {
        reject("We don't meet");
        
    }

});

console.log(hello);