class myClass {
    #avg;   // private variable
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.#avg = (this.a + this.b) / 2;
    }

    // private method
    #printStr() {
        return `avg of ${this.a} and ${this.b} is calculated!!\n`;
    }

    getAverage() {
        console.log(this.#printStr());
        return this.#avg;
    }
}

let obj = new myClass(2, 4);
let avg = obj.getAverage();
console.log(avg);   // 3

// SyntaxError
console.log(obj.#avg);

// SyntaxError
console.log(obj.#printStr());
