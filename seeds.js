const p = new Promise(function (resolve, reject){
    // let value = 100;
    // resolve(value);
    setTimeout(function (){
        let value = 100;
        resolve(value);
    }, 2000);
});

console.log(p);
p.then(function (result){
    console.log("value is " + result);
})