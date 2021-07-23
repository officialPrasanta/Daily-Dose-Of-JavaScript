/**
(function function_name(params){
    // function body
})(params)

***/

// initialization function

function add() {
    console.log("Hello World");
}
add();


// add is defined second time
(function add() {
    console.log("Response Back...");
})();
