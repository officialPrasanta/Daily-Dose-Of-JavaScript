function a() {
    let i = 10;
    const b = function () {
        console.log(i);
    }
    i = 19;
    return b();

}

// a() is called in the stack
let c = a();

// a() is removed from the stack

// c() is a copy of b()
c();

//works fine
