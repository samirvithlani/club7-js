// console.log('start');
// setTimeout(() => {
//     console.log('process in progress');

// }, 3000);
// console.log('end');

// var promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         //resolve("success")
//         //reject("failure")
//     },3000)


// })
// console.log(promise); // Promise { <pending> }
// promise.then((data) => {
//     console.log("data..",data); // success
// })
// promise.catch((error) => {
//     console.log("error..",error);
// })


const fetchData = () => {




    return new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({id:101,name:"Raj"})
        //reject("failure")
    },4000)
    })

}

// var data = fetchData()
// console.log(data); // Promise { <pending> }
// data.then((data) => {
//     console.log("data..",data); // success
// })
// data.catch((error) => {
//     console.log("error..",error);
// })


fetchData().then((data) => {
    console.log("data..",data); // success
}).catch((error) => {
    console.log("error..",error);
})