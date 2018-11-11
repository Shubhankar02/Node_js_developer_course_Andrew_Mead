// var somePromises = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Hey there!')
//         reject('Unable to fulfill promises')
//     }, 2500)
// })

// somePromises.then((message)=>{
//     console.log('Sucess', message)
// }, (errorMessage)=>{
//     console.log('Error', errorMessage)
// })


const asyncAdd = (a, b) => {
    return new Promise((resolve, reject)=>{
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a + b)
        } else {
            reject('The arguments must be number')
        }
    })
}

asyncAdd(5,7).then((result)=>{
    console.log(result)
}, (error) => {
    console.log(error)
})

