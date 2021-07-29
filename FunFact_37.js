// fancy way of writing functions for string objects


// swap function
String.prototype.swap = function (pos_i, pos_j) {
    let _str = this;
    let _arr = _str.split("");  // to array: string is immutable
    let _temp = _arr[pos_i];
    _arr[pos_i] = _arr[pos_j];
    _arr[pos_j] = _temp;

    return _arr.join('');  // back to string
}


let myString = "ABC";
myString = myString.swap(0, 2);

console.log(myString);