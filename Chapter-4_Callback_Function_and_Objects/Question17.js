function getObjectKeys(obj, callback) {
    return callback(Object.keys(obj));
}
console.log(getObjectKeys({ a: 1, b: 2 }, keys => keys.join(", ")));
