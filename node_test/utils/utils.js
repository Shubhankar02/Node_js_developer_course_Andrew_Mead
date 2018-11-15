module.exports.add = (a,b)=>{
    return a + b;
};

module.exports.addAsync = (a, b, callback) => {
    setTimeout(()=>{
        callback(a + b);
    }, 1000);
};

module.exports.asyncSqr = (a, b, callback) => {
    setTimeout(()=>{
        callback(a * b);
    }, 1000);
};