// workers.js

this.onmessage = function (e) {
    if (e.data.sum !== undefined) {
        this.postMessage({ res: e.data.sum.num1 + e.data.sum.num2 });
    }

}