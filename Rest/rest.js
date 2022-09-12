function sum(name, ...args) {
    // console.log(arguments);

    let sumi = 0;
    for (let i in args) {
        sumi+= args[i]
    }
    console.log(`hello ${name}`)
    console.log(sumi);
}

sum("Limon" , 20,30,40)
sum("AK", 30,40)