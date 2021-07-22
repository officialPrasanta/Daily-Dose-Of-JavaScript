// create a stack using JavaScript array

class Stack {

    // private variables
    #size;
    #stack;
    #top;

    constructor(size) {
        this.#size = size;
        this.#top = -1; // when stack is empty-> initial position of top

        //create empty array
        this.#stack = new Array(this.#size);

        if (Object.seal) {
            this.#stack.fill(undefined);
        }

        Object.seal(this.#stack);   // now stack will be of fixed size
    }

    // display the stack
    getStack() {
        return this.#stack;
    }

    // pushItem()
    // popItem()

}

// create an object
let size = 5;
let stack = new Stack(size);


console.log(stack.getStack());

// [ undefined, undefined, undefined, undefined, undefined ]