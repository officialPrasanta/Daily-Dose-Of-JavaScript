class myClass {
    #avg;   // private variable
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.#avg = (this.a + this.b) / 2;
    }

    getAverage() {
        return this.#avg;
    }
}

let obj = new myClass(2, 4);
let avg = obj.getAverage();
console.log(avg);   // 3

console.log(obj.#avg);
// SyntaxError