// random string generator
function randomString(len) {
    let str = "";
    let randomNo;
    for (; str.length < len; str += randomNo) {
        randomNo = Math.random();
        randomNo = randomNo.toString(36).substr(2);
    }
    return str.substr(0, len);
}

let rand_str = randomString(10);

console.log(rand_str);