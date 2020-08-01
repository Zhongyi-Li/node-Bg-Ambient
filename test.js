function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('one')
        }, 500)
    })
}
function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('two')
        }, 500)
    })
}
function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('three')
        }, 500)
    })
}
one().then(res => {
    console.log(res);
    two().then(res => {
        console.log(res);
        three().then(res => {
            console.log(res);
        })
    })
})