let player = {
    name: 'Rahul Dravid',
    sport: 'Cricket'
}

// main function
function printPlayerInfo(score) {
    console.log(this.name + " is associated with " + this.sport);
    console.log("He scores " + score + " runs in ODI Cricket");
}


// custom bind method: polyfill
Function.prototype.custombind = function (...args1) {
    let o = this;   // printPlayerInfo()
    let params = args1.slice(1);
    return function (...args2) {
        o.apply(args1[0], [...params, ...args2]);
    }
}

let printCricketerInfo = printPlayerInfo.custombind(player);    // args1

printCricketerInfo("10000");    // args2