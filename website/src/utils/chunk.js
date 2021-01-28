function chunk(arr, size) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i = i + size) {
        arr2.push(arr.slice(i, i + size));
    }
    return arr2;
}

export default chunk;
