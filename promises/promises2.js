let X = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        
        resolve("X is resolved")

    }, 1000);
})

let Y = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        
        resolve("Y is resolved")

    }, 500);
})
let Z = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        
        // resolve("Z is resolved")
       
       reject(new Error("Z is Rejected"))

    }, 300);
})



const prom =[X, Y, Z];

Promise.any(prom)
    .then((e) => console.log(e))
    .catch((f) => console.log(f))

